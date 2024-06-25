import AboutMe from './components/AboutMe'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Resume from './components/Resume/Resume'
import Skills from './components/Skills/Skills'


import './index.css'

function App() {
    return (
        <>
            <div className='font-work-sans text-white m-0 p-0'>
                <NavBar />
                <Header />
                <AboutMe />
                <PersonalInfo />
                <Skills />
                <Resume />
            </div>
        </>
    )
}

export default App
