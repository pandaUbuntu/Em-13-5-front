import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import './style.css'

type PageLayoutProps = {
    title: string
    children: React.ReactNode;
}

const PageLayout = (props:PageLayoutProps) =>{

  return (
        <div className='page-wrapper'>
            <Header />
            <Banner title="Розумна їжа для розумних людей" />
            <div className='content-wrapper'>
                {props.children}    
            </div>
            <Footer />
        </div>
  )
}


export default PageLayout
