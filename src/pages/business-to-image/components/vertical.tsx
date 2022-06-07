import React, { useEffect } from 'react';
// @ts-ignore
import QRCode from 'qrcode.react';
// @ts-ignore
import bgUrl from '@/assets/vertical.jpeg';
import { Seal } from '@/pages/business-to-image/components/seal';
import { CompanyInfoProps, download } from '@/pages/business-to-image';

export const Vertical: React.FC<{ info: CompanyInfoProps }> = ({ info }) => {
  useEffect(() => {
    download('1', info);
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
    <>
      <div id={'node1'}>
        <div
          style={{
            position: 'relative',
            width: 908,
            height: 1280,
            fontSize: 17,
            background: `url(${bgUrl})`,
          }}
        >
          <div style={{ paddingTop: 488, paddingLeft: 511, opacity: 0.8 }}>
            {CreditCode}
          </div>
          <div
            style={{
              paddingTop: 34,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {Name}
          </div>
          <div
            style={{
              paddingTop: 7,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {EconKind}
          </div>
          <div
            style={{
              width: 790,
              paddingTop: 4,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {Address}
          </div>
          <div
            style={{
              paddingTop: 29,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {OperName}
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {RegistCapi}
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {StartDate?.split('-')[0]}年{StartDate?.split('-')[1]}月
            {StartDate?.split('-')[2]}日
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {`${TermStart?.split('-')[0]}年${TermStart?.split('-')[1]}月${
              TermStart?.split('-')[2]
            }日`}{' '}
            至{' '}
            {TermEnd
              ? `${TermEnd?.split('-')[0]}年${TermEnd?.split('-')[1]}月${
                  TermEnd?.split('-')[2]
                }日`
              : '无营业期限限制'}
          </div>
          <div
            style={{
              width: 790,
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {Scope}
          </div>
          <div
            style={{
              position: 'absolute',
              right: 190,
              bottom: 165,
              width: 150,
              height: 150,
              border: '3px solid #732b2a',
              color: '#732b2a',
              borderRadius: '100%',
            }}
          >
            <Seal texts={BelongOrg?.split('') || []} />
          </div>
          <div
            style={{
              position: 'absolute',
              right: 180,
              bottom: 143,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            {CheckDate?.split('-')[0]}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {CheckDate?.split('-')[1]}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {CheckDate?.split('-')[2]}
          </div>
          <QRCode
            style={{ position: 'absolute', left: 115, bottom: 215 }}
            bgColor={'transparent'}
            value={`http://www.gsxt.gov.cn/index.html?uniscid=${CreditCode}`}
          />
        </div>
      </div>
    </>
  );
};
