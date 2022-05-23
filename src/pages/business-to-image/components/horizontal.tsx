import React, { useEffect } from 'react';
// @ts-ignore
import bgUrl from '@/assets/horizontal1.jpeg';
// @ts-ignore
import QRCode from 'qrcode.react';
import { Seal } from '@/pages/business-to-image/components/seal';
import { CompanyInfoProps } from '@/pages/business-to-image';
import { download } from '@/pages/business-to-image';

export const Horizontal: React.FC<{ info: CompanyInfoProps }> = ({ info }) => {
  useEffect(() => {
    download('2', info);
  }, [info]);

  const {
    Name,
    CreditCode,
    EconKind,
    OperName,
    Scope,
    RegistCapi,
    StartDate,
    TermStart,
    TermEnd,
    Address,
    BelongOrg,
    CheckDate,
    WebSiteUrl,
  } = info;

  return (
    <div id={'node2'}>
      <div
        style={{
          position: 'relative',
          width: 1334,
          height: 1001,
          fontSize: 17,
          background: `url(${bgUrl})`,
          backgroundSize: 'contain',
        }}
      >
        <div style={{ paddingTop: 335, paddingLeft: 165, opacity: 0.8 }}>
          {CreditCode}
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 452, opacity: 0.8 }}
        >
          {Name}
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 499, opacity: 0.8 }}
        >
          {EconKind}
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 546, opacity: 0.8 }}
        >
          {OperName}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 290,
            top: 590,
            width: 400,
            opacity: 0.8,
          }}
        >
          {Scope}
        </div>

        <div
          style={{ position: 'absolute', left: 865, top: 452, opacity: 0.8 }}
        >
          {RegistCapi}
        </div>
        <div
          style={{ position: 'absolute', left: 865, top: 499, opacity: 0.8 }}
        >
          {StartDate?.split('-')[0]}年{StartDate?.split('-')[1]}月
          {StartDate?.split('-')[2]}日
        </div>
        <div
          style={{ position: 'absolute', left: 865, top: 546, opacity: 0.8 }}
        >
          {`${TermStart?.split('-')[0]}年${TermStart?.split('-')[1]}月${
            TermStart?.split('-')[2]
          }日`}{' '}
          至{' '}
          {`${TermEnd?.split('-')[0]}年${TermEnd?.split('-')[1]}月${
            TermEnd?.split('-')[2]
          }日`}
        </div>
        <div
          style={{
            position: 'absolute',
            left: 865,
            top: 590,
            width: 300,
            opacity: 0.8,
          }}
        >
          {Address}
        </div>

        <div
          style={{
            position: 'absolute',
            right: 193,
            bottom: 145,
            opacity: 0.8,
          }}
        >
          {CheckDate?.split('-')[0]}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {CheckDate?.split('-')[1]}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          {CheckDate?.split('-')[2]}
        </div>

        <div
          style={{
            position: 'absolute',
            right: 190,
            bottom: 150,
            width: 130,
            height: 130,
            border: '3px solid #732b2a',
            color: '#732b2a',
            borderRadius: '100%',
          }}
        >
          <Seal texts={BelongOrg?.split('') || []} />
        </div>

        <QRCode
          style={{ position: 'absolute', right: 270, top: 315 }}
          size={90}
          bgColor={'transparent'}
          value={`http://www.gsxt.gov.cn/index.html?uniscid=${CreditCode}`}
        />
      </div>
    </div>
  );
};
