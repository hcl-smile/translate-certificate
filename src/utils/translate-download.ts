import { axios } from '@/utils/index';
import { createReport } from 'docx-templates';

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

export const translateAndDownload = async (fields: any, template: any) => {
  if (!fields || !template) return;

  const transString = Object.keys(fields).reduce((prev, cur) => {
    const str = `${cur}=${fields[cur]}`;
    prev.push(str);

    return prev;
  }, [] as string[]);

  const res = await axios('/api/upload', {
    method: 'get',
    params: {
      text: transString.join('&'),
    },
  });

  const templateData = res.data.translated
    .split('&')
    .reduce((prev: any, cur: any) => {
      const str = cur.split('=');

      const key = str[0].trim().toLowerCase() as string;
      const value = str[1].trim() as string;

      prev[key] = value;

      return prev;
    }, {} as Record<string, any>);

  const report = await createReport({
    template,
    data: {
      ...templateData,
    },
    cmdDelimiter: ['{', '}'],
    additionalJsContext: {
      // all of these will be available to JS snippets in your template commands (see below)
      foo: 'bar',
      // qrCode: async (url) => {
      //   /* build QR and return image data */
      // },
    },
  });

  await saveDataToFile(
    report,
    'text.license',
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
