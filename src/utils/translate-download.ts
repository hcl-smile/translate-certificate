import { axios } from '@/utils/index';
import { createReport } from 'docx-templates';
// @ts-ignore
import QRCode from 'qrcode';

const saveDataToFile = async (data: any, fileName: string, mimeType: any) => {
  const blob = new Blob([data], { type: mimeType });
  const url = window.URL.createObjectURL(blob);

  await downloadURL(url, fileName);

  setTimeout(() => {
    window.URL.revokeObjectURL(url);
  }, 1000);
};

const downloadURL = async (data: any, fileName: string) => {
  const a = document.createElement('a');
  a.href = data;
  a.download = fileName;
  document.body.append(a);
  a.style.display = 'none';
  a.click();
  a.remove();
};

export const translateAndDownload = async (
  fields: any,
  template: any,
  title: string,
) => {
  if (!fields || !template) return;

  const res = await axios('/api/upload', {
    method: 'post',
    data: {
      fields: {
        ...fields,
        qrcodeUrl: undefined,
      },
    },
  });

  const report = await createReport({
    template,
    data: {
      ...res?.data,
      qrcodeUrl: fields.qrcodeUrl,
    },
    cmdDelimiter: ['{', '}'],
    additionalJsContext: {
      qrcode: async (url: string) => {
        const dataUrl = await QRCode.toDataURL(url);
        const data = dataUrl.slice('data:image/gif;base64,'.length);
        return { width: 2, height: 2, data, extension: '.gif' };
      },
    },
  });

  await saveDataToFile(
    report,
    `${title}.docx`,
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  );
};

export const readFile = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => {
      resolve(reader.result);
    };
    reader.readAsArrayBuffer(file);
  });
};
