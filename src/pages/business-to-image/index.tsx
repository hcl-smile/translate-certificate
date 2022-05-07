import { useEffect, useState } from 'react';
// @ts-ignore
import domToImage from 'dom-to-image';
// @ts-ignore
import QRCode from 'qrcode.react';
// @ts-ignore
import bgUrl from '@/assets/vertical.jpeg';
import './index.less';

const download = async () => {
  const a = document.createElement('a');
  const url = await domToImage.toJpeg(document.getElementById('node'), {
    width: 908,
    height: 1280,
  });
  const download = Math.random().toString(36).slice(-6);

  a.href = url;
  a.download = download;
  a.target = '_blank';

  a.click();
};

const checkArrs = ['漳', '州', '市', '公', '安', '局', '办', '事', '处'];

export default () => {
  return (
    <>
      {/*<a href='' target={'_blank'} download={''}></a>*/}
      <div onClick={() => download()}>下载模板</div>
      <div id={'node'}>
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
            91610133MA6UT2LK6C
          </div>
          <div
            style={{
              paddingTop: 34,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            上海云砺信息科技有限公司
          </div>
          <div
            style={{
              paddingTop: 7,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            有限责任公司
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
            福建省泉州市惠安县张坂镇玉前村山前112号
          </div>
          <div
            style={{
              paddingTop: 29,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            洪某某
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            1000万人民币
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            2015年12月12日
          </div>
          <div
            style={{
              paddingTop: 5,
              paddingLeft: 300,
              fontSize: 20,
              opacity: 0.8,
            }}
          >
            2015年12月12日&nbsp;&nbsp;至&nbsp;&nbsp;无固定日期
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
            市场营销
          </div>
          <div
            style={{
              position: 'absolute',
              right: 190,
              bottom: 165,
              width: 120,
              height: 120,
              border: '3px solid #732b2a',
              color: '#732b2a',
              borderRadius: '100%',
            }}
          >
            <div
              id="star-five"
              style={{
                position: 'absolute',
                top: -76,
                left: -42,
                transform: `rotate(-${
                  (checkArrs.length * 30) / 2
                }deg) scale(0.2)`,
              }}
            ></div>

            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '100%',
                transformOrigin: 'center',
                transform: `rotate(-${(checkArrs.length * 30) / 2}deg)`,
              }}
            >
              {checkArrs.map((ret, index) => (
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: 0,
                    height: '100%',
                    width: 20,
                    marginLeft: -10,
                    transformOrigin: 'center',
                    transform: `rotate(${index * 30}deg)`,
                  }}
                >
                  {ret}
                </div>
              ))}
            </div>
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
            2021&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;28
          </div>
          <QRCode
            style={{ position: 'absolute', left: 115, bottom: 215 }}
            bgColor={'transparent'}
            value={'https://www.jianshu.com/u/992656e8a8a6'}
          />
        </div>
      </div>
      {/*<div id={'node'}>*/}
      {/*  <div>名&nbsp;&nbsp;&nbsp;&nbsp;称：上海云砺信息科技有限公司</div>*/}
      {/*  <div>类&nbsp;&nbsp;&nbsp;&nbsp;型：有限责任公司</div>*/}
      {/*  <div>住&nbsp;&nbsp;&nbsp;&nbsp;所：福建省泉州市惠安县</div>*/}
      {/*</div>*/}
      {/*<div style={{ padding: 10, backgroundColor: '#f00' }}>*/}
      {/*  <img src={imageUrl} alt="" />*/}
      {/*</div>*/}
    </>
  );
};
