import './App.css'
import TwoSideCard from './components/TwoSideCard'
import WeatherCard from './components/WeatherCard'
import dayInfo from './fixtures/weather.json'

function App() {

  return (
    <>
      <div className="two-side-wrapper">
        <TwoSideCard />
      </div>
      <div className='flex-conteiner'>
        {
          dayInfo.map(day => <WeatherCard {...day}/>)
        }
      </div>
    </>
  )
}

export default App
