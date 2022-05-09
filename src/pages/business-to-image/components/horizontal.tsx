// @ts-ignore
import bgUrl from '@/assets/horizontal1.jpeg';
// @ts-ignore
import QRCode from 'qrcode.react';
import { Seal } from '@/pages/business-to-image/components/seal';

const checkArrs = ['漳', '州', '市', '公', '安', '局', '办', '事', '处'];

export const Horizontal = () => {
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
          91610133MA6UT2LK6C
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 452, opacity: 0.8 }}
        >
          北京美乐美客家有限公司
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 499, opacity: 0.8 }}
        >
          有限责任公司
        </div>
        <div
          style={{ position: 'absolute', left: 290, top: 546, opacity: 0.8 }}
        >
          黄某某
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
          零售家具、木制品零售家具、木制品零售家具、木制品零售家具、木制品零售家具、木制品零售家具、木制品零售家具、木制品零售家具、木制品
        </div>

        <div
          style={{ position: 'absolute', left: 865, top: 452, opacity: 0.8 }}
        >
          300万人民币
        </div>
        <div
          style={{ position: 'absolute', left: 865, top: 499, opacity: 0.8 }}
        >
          2013年06月21日
        </div>
        <div
          style={{ position: 'absolute', left: 865, top: 546, opacity: 0.8 }}
        >
          2013年06月21日 至 2022年06月20日
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
          北京市通州区专厂南里47号楼9层901
        </div>

        <div
          style={{
            position: 'absolute',
            right: 193,
            bottom: 145,
            opacity: 0.8,
          }}
        >
          2020&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;12
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
          <Seal texts={checkArrs} />
        </div>

        <QRCode
          style={{ position: 'absolute', right: 270, top: 315 }}
          size={90}
          bgColor={'transparent'}
          value={'https://www.jianshu.com/u/992656e8a8a6'}
        />
      </div>
    </div>
  );
};
