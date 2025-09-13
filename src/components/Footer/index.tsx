import FooterPart from '../FooterPart'
import './style.css'


const Footer = () =>{

  return (
        <div className='footer-wrapper'>
            
            <div className='footer-container'>
              <FooterPart title="Корисні рекомендації від дієтолога">  
                <form>
                  <input type="email" placeholder='Введіть ваш email' />
                  <button type='submit'>Надіслати</button>  
                </form>  
                <a href='/privacy'>Політика конфіденційності</a>
              </FooterPart>
              <FooterPart title="Контакти">
                <p>м. Черкаси, вул. Гоголя 224,<br />Будівля “Райффайзен банк Аваль” Офісний центр,<br /> 4-й поверх</p>
                <p>ПН – ПТ: 10:00 – 18:00</p>
              </FooterPart>
              <FooterPart title="Написати нам">
                <a href='www.facebook.com'>Facebook</a>
                <br />
                <a href='www.instagram.com'>Instagram</a>
              </FooterPart>
            </div>
        </div>
  )
}


export default Footer
