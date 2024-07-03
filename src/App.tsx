import './index.css'
import { I18nextProvider } from 'react-i18next'
import i18n from 'i18next'
import './i18n/i18n'
import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PersonalInfo from './pages/PersonalInfo'
import Resume from './pages/Resume'
import Skills from './pages/Skills'

function App() {
    return (
        <I18nextProvider i18n={i18n}>
            <div className='font-work-sans text-white m-0 p-0 bg-custom-dark'>
                <NavBar />
                <Header />
                <AboutMe />
                <PersonalInfo />
                <Skills />
                <Resume />
                <Footer />
            </div>
        </I18nextProvider>
    )
}

export default App
