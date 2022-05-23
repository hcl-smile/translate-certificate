import React from 'react';
import { Horizontal } from '@/pages/business-to-image/components/horizontal';
import { Vertical } from '@/pages/business-to-image/components/vertical';
import { CompanyInfoProps } from '@/pages/business-to-image';

const dateline = new Date('2019-03-01');

export const Template: React.FC<{
  info: CompanyInfoProps;
}> = ({ info }) => {
  const currentTime = new Date(info?.StartDate as string);

  return (
    <>
      {currentTime >= dateline && <Horizontal info={info} />}
      {currentTime < dateline && <Vertical info={info} />}
    </>
  );
};
