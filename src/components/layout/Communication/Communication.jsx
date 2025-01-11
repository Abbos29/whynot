import React from 'react'
import s from './Communication.module.scss'

const Communication = () => {
  return (
    <>
      <section>
        <div className="container">
          <div id='communication' className={s.communication_wrap}>
            <h2>Communication</h2>
            <p>WHY NOT - Support</p>
            <div className={s.communication_contents}>
              <div className={s.communication_content}>
                <span>
                  <a href={'mailto:info@whynot.com.tr'}>info@whynot.com.tr</a>
                  <b>Наш контактный номер:</b>
                  <a href={'tel:+998997044944'}>+998997044944</a>
                </span>
                <span>
                  <b>Рабочее время:</b>
                  <h6>10:00-22:00</h6>
                </span>
                <span> <b>Наш адрес:</b>
                  <h6>Проспект Амира Темура 45.</h6></span>
              </div>
              <iframe
                className={s.location}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.29932969236!2d69.2809089!3d41.324104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b3662e71493%3A0xdd2fca233d939fbd!2z0L_RgNC-0YHQv9C10LrRgiDQkNC80LjRgNCwINCi0LXQvNGD0YDQsCA0NSwg0KLQsNGI0LrQtdC90YIsIFRhc2hrZW50!5e0!3m2!1sru!2s!4v1736603158082!5m2!1sru!2s"
                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Communication