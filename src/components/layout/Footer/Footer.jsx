import React from 'react';
import s from './Footer.module.scss';
import Logo from '@/components/ui/Logo/Logo';
import Download from '@/components/ui/Download/Download';
import Link from 'next/link';

const Footer = () => {
  return (
    <>
      <footer className={s.footer}>
        <div className={s.footer_wrap}>
          <div className='container'>
            <div className={s.footer_title}>
              <Logo />
              <div className={s.footer_brands}>
                <p>JORDAN</p>
                <p>balenciaga</p>
                <p>Adidas</p>
                <p>puma</p>
                <p>nike</p>
                <p>Off-white</p>
                <p>Vans</p>
                <p>gucci</p>
                <p>Versace</p>
                <p>reebok</p>
                <p>all brands</p>
              </div>
            </div>
            <div className={s.footer_arrow}></div>
            <div className={s.footer_body}>
              <div className={s.footer_download}>
                <img className={s.footer_qr} src='./qr.svg' alt='' />
                <span>
                  <h2>Скачайте приложение</h2>
                  <div className={s.f_utils}>
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
                  </div>
                </span>
              </div>
              <div className={s.footer_socials}>
                <h4>Следите в соц. сетях:</h4>
                <div className={s.footer_icons}>
                  <Link href={'/'}>
                    <svg
                      width='8'
                      height='16'
                      viewBox='0 0 8 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.56067 0.669772L5.67916 0.666748C3.56535 0.666748 2.19931 2.07067 2.19931 4.2436V5.89277H0.307537C0.144066 5.89277 0.0116882 6.02552 0.0116882 6.18928V8.57873C0.0116882 8.74249 0.144217 8.87509 0.307537 8.87509H2.19931V14.9045C2.19931 15.0682 2.33169 15.2008 2.49516 15.2008H4.96339C5.12686 15.2008 5.25923 15.0681 5.25923 14.9045V8.87509H7.47116C7.63463 8.87509 7.76701 8.74249 7.76701 8.57873L7.76791 6.18928C7.76791 6.11065 7.73667 6.03535 7.68127 5.97971C7.62587 5.92407 7.5504 5.89277 7.47191 5.89277H5.25923V4.49475C5.25923 3.8228 5.41908 3.48169 6.29289 3.48169L7.56037 3.48124C7.72369 3.48124 7.85606 3.34848 7.85606 3.18488V0.966129C7.85606 0.802679 7.72384 0.670075 7.56067 0.669772Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Link href={'/'}>
                    <svg
                      width='18'
                      height='12'
                      viewBox='0 0 18 12'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M17.55 1.82143C17.325 1.07143 16.7625 0.535714 15.975 0.321429C14.625 1.91586e-07 8.88749 0 8.88749 0C8.88749 0 3.26251 1.91586e-07 1.80001 0.321429C1.01251 0.535714 0.449997 1.07143 0.224997 1.82143C-3.43658e-06 3.21429 0 6 0 6C0 6 3.41982e-06 8.78571 0.337503 10.1786C0.562503 10.9286 1.125 11.4643 1.9125 11.6786C3.2625 12 9 12 9 12C9 12 14.625 12 16.0875 11.6786C16.875 11.4643 17.4375 10.9286 17.6625 10.1786C18 8.78571 18 6 18 6C18 6 18 3.21429 17.55 1.82143ZM7.19999 8.57143V3.42857L11.925 6L7.19999 8.57143Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Link href={'/'}>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M5 0H11C13.761 0 16 2.239 16 5V11C16 13.761 13.761 16 11 16H5C2.239 16 0 13.761 0 11V5C0 2.239 2.239 0 5 0ZM11 14.5C12.93 14.5 14.5 12.93 14.5 11V5C14.5 3.07 12.93 1.5 11 1.5H5C3.07 1.5 1.5 3.07 1.5 5V11C1.5 12.93 3.07 14.5 5 14.5H11ZM4 8C4 5.791 5.791 4 8 4C10.209 4 12 5.791 12 8C12 10.209 10.209 12 8 12C5.791 12 4 10.209 4 8ZM5.5 8C5.5 9.378 6.622 10.5 8 10.5C9.378 10.5 10.5 9.378 10.5 8C10.5 6.621 9.378 5.5 8 5.5C6.622 5.5 5.5 6.621 5.5 8ZM12.3333 4.66663C12.8856 4.66663 13.3333 4.21892 13.3333 3.66663C13.3333 3.11435 12.8856 2.66663 12.3333 2.66663C11.781 2.66663 11.3333 3.11435 11.3333 3.66663C11.3333 4.21892 11.781 4.66663 12.3333 4.66663Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                  <Link href={'/'}>
                    <svg
                      width='16'
                      height='14'
                      viewBox='0 0 16 14'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M7.80168 8.34075C6.97113 9.14041 7.04792 10.492 7.9637 11.1924L10.6217 13.2254C11.7087 14.0568 13.2915 13.4875 13.5998 12.1542L15.9281 2.08563C16.0993 1.34542 15.3683 0.717822 14.6625 0.999062L1.38473 6.29007C0.570401 6.61457 0.602677 7.77814 1.43374 8.057L3.83184 8.86168C4.11064 8.95523 4.41714 8.91312 4.66038 8.74783L13.9001 2.46918L7.80168 8.34075Z'
                        fill='white'
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={s.footer_end_wrap}>
            <div className='container'>
              <div className={s.footer_end}>
                <p>© 2023 “WHY NOT Sneakers Store”. Все права защищены. </p>
                <span>
                  Developed by: <Link href={'/'}>WHY NOT - DEVELOPERS</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
