import AboutMe from './components/AboutMe'
import Header from './components/Header'
import NavBar from './components/NavBar'
import PersonalInfo from './components/PersonalInfo/PersonalInfo'
import Skills from './components/Skills/Skills'


import './index.css'

function App() {
    return (
        <>
            <div className='font-work-sans text-white m-0 p-0 max-w-[1200px] mx-auto'>
                <NavBar />
                <Header />
                <AboutMe />
                <PersonalInfo />
                <Skills />
            </div>
        </>
    )
}

export default App
