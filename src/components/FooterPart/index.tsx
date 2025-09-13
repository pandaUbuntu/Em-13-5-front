import './style.css'

type FooterPartProps = {    
    title?: string,
    children?: React.ReactNode
}

const FooterPart = (props:FooterPartProps) =>{

  return (
        <div className="footer-part">
          <h4>{props.title}</h4>
          <div>
            {props.children}
          </div>
        </div>

  )
}

export default FooterPart
