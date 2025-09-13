import './style.css'

type BannerProps = {    
    title: string,
}

const Banner = (props:BannerProps) =>{

  return (
        <div className="banner">
            <div>
                <img src="https://foodhacker.com.ua/wp-content/uploads/2022/02/291x254xlogo.png.pagespeed.ic.DNKXTJpT_i.png" alt="logo" />
            </div>
          <h1>{props.title}</h1>
        </div>

  )
}

export default Banner
