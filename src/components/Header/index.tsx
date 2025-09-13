import './style.css'


const Header = () =>{

  return (
        <div className='header-wrapper'>
            <div className='header-container'>
                <nav>
                    <ul>
                        <li><a href="/">Головна</a></li>
                        <li><a href="/about">Про нас</a></li>
                        <li><a href="/contact">Наші програми</a></li>
                        <li><a href="/blog">Блог</a></li>
                    </ul>
                </nav>
                <div>
                    <p className='phone'>+38 (067) 123-45-67</p>
                </div>
                <div>
                    <button className='checkout'>Зробити замовлення</button>
                </div>
            </div>
        </div>
  )
}


export default Header
