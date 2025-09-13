import PageLayout from '../pageLayout'
import WeatherCard from '../../components/WeatherCard'
import dayInfo from '../../fixtures/weather.json'

const ContactPage = () =>{

  return (
        <PageLayout title="Contact">
            <div className='flex-conteiner'>
            {
                dayInfo.map(day => <WeatherCard {...day}/>)
            }
            </div>
        </PageLayout>
  )
}


export default ContactPage
