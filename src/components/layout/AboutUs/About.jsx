import React from 'react';
import s from './About.module.scss';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <div className={s.about_us}>
        <div className='container'>
          <div className={s.about_wrap}>
            <div className={s.about_title}>
              <p>About WHY NOT</p>
              <h2>A History of Culture and Community</h2>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div id='about_us' className={s.about_whynot}>
          <h1>ABOUT US</h1>
          <p>
            <b>WHY NOT</b> был открыт как магазин кроссовок в Ташкенте в
            <b> 2022</b> году.
            <b> WHY NOT</b>, целью которого является внести свой вклад в
            развитие этой культуры, охватывая уличную культуру и сопутствующие
            ей субкультуры со дня ее первого открытия, верит в рост путем
            установления искренней и прочной связи со своей аудиторией, которая
            является частью этой культуры. Оригинальные коллекции, состоящие из
            известных брендов и выдающихся дизайнеров в области кроссовок и
            уличной одежды, составляют основной портфель продукции
            <b> WHY NOT</b>.
          </p>
          <p>
            Компания <b>WHY NOT</b> предоставляет услуги через свой
            интернет-магазин <Link href={'/'}>whynot.uz</Link>.
            <b> WHY NOT</b>, который затронул кроссовочную и уличную
            культуру с разных точек зрения на различных мероприятиях, встречах и
            редакционных статьях, входит в число ведущих розничных магазинов
            кроссовок в Европе.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
