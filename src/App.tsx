import AboutMe from './components/AboutMe'
import Footer from './components/Footer'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'


import './index.css'

function App() {
    return (
        <>
            <div className='font-work-sans text-white m-0 p-0 bg-[#1e2326]'>
                <NavBar />
                <Header />
                <AboutMe />
                <PersonalInfo />
                <Skills />
                <Resume />
                <Footer />
            </div>
        </>
    )
}

export default App
