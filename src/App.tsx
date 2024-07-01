import AboutMe from './pages/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PersonalInfo from './pages/PersonalInfo'
import Resume from './pages/Resume'
import Skills from './pages/Skills'

import './index.css'

function App() {
    return (
        <div className='font-work-sans text-white m-0 p-0 bg-custom-dark'>
            <NavBar />
            <Header />
            <AboutMe />
            <PersonalInfo />
            <Skills />
            <Resume />
            <Footer />
        </div>
    )
}

export default App
