import './style.css'

type LinkCardProps = {    
    img: string,
    title: string,
    link: string
}

const LinkCard = (props:LinkCardProps) =>{

  return (
        <div className='link-card'>
          <a href={props.link} target="_blank" rel="noreferrer">
            <img src={props.img} alt={props.title} />   
            <h3>{props.title}</h3>
          </a>
        </div>
  )
}

export default LinkCard
