import './style.css'

type SimpleCardProps = {    
    img: string
    title: string,
    desc: string
}

const SimpleCard = (props:SimpleCardProps) =>{

  return (
        <div className='simple-card'>
            <img src={props.img} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </div>
  )
}

export default SimpleCard
