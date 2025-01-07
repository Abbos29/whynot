import React from 'react';
import s from './MobileApp.module.scss';
import Download from '@/components/ui/Download/Download';

const MobileApp = () => {
  return (
    <>
      <div className={s.mobile_app}>
        <div className='container'>
          <div className={s.mobile_app_wrap}>
            <div className={s.mobile_app_content}>
              <h1>Скачать приложение на всех платформах</h1>
              <p>
                Эксклюзивные кроссовки для образа жизни в наличии и под заказ
              </p>
              <div className={s.mobile_app_downloads}>
                <img className={s.mobile_app_qr} src='./qr.svg' alt='' />
                <span>
                  <Download
                    image={'./app-store.svg'}
                    title={'App-store'}
                    route={'https://www.instagram.com/whynot_sneakers/'}
                  />
                  <Download
                    image={'./play-market.svg'}
                    title={'Play-market'}
                    route={'https://www.instagram.com/whynot_sneakers/'}
                  />
                </span>
              </div>
            </div>
            <div className={s.mobile_app_image}>
              <img src='./iphone12pro.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileApp;
