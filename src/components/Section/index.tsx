import './style.css'

type SectionProps = {    
    title: string,
    isWrap: boolean,
    children?: React.ReactNode
}

const Section = (props:SectionProps) =>{

  return (
        <div className="section-wrapper" style={{flexWrap: props.isWrap ? 'wrap' : 'nowrap'}}>
           <h2>{props.title}</h2>
           <div className="section-container">
                {props.children}
           </div>
        </div>
  )
}

export default Section
