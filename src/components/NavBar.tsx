import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { De, Es, Fr, Gb } from 'react-flags-select'
import { GrLanguage } from 'react-icons/gr'

const navLinks = [
    { text: 'INICIO', itemRef: '#home' },
    { text: 'SOBRE MI', itemRef: '#aboutme' },
    { text: 'SKILLS', itemRef: '#myskills' },
    { text: 'CURRICULUM', itemRef: '#resume' }
]

const countries = [
    { name: 'es', flag: <Es /> },
    { name: 'en', flag: <Gb /> },
    { name: 'fr', flag: <Fr /> },
    { name: 'de', flag: <De /> }
]

const NavBar = () => {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        setIsOpen(false) // Make sure the language menu is closed when opening the main menu
    }

    const changeLanguage = (lng: string) => {
        console.log('Cambiando a idioma:', lng)
        i18n.changeLanguage(lng)
        setMenuOpen(false) // Close the main menu after changing the language
        setIsOpen(false) // Close the language menu after changing the language
    }

    return (
        <div className='bg-custom-dark text-white'>
            <header className='container mx-auto p-4 flex justify-between items-center'>
                <div className='text-3xl font-bold text-custom-green'>
                    <a href='#'>Javi</a>
                </div>
                <nav
                    className={`lg:flex items-center lg:space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <ul
                        className={`flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-4 ${menuOpen ? 'absolute right-0 mt-4 mr-4 p-4 bg-custom-dark rounded-lg' : ''}`}
                    >
                        {navLinks.map((navLink, index) => (
                            <li key={index}>
                                <a
                                    href={navLink.itemRef}
                                    onClick={toggleMenu}
                                    className='hover:underline hover:text-custom-green hover:font-bold'
                                >
                                    {t(navLink.text)}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div
                    className='lg:hidden w-8 h-7 bg-custom-green rounded-lg text-center items-center'
                    onClick={toggleMenu}
                >
                    <i
                        className={`fa-solid fa-${menuOpen ? 'times' : 'bars'} text-lg`}
                    >
                        ☰
                    </i>
                </div>

                <div className='relative'>
                    <button
                        className='text-white'
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <GrLanguage className='text-custom-green text-xl hover:text-2xl' />
                    </button>
                    {isOpen && (
                        <ul className='absolute right-0 mt-2 w-18 bg-custom-dark rounded-lg shadow-lg z-10'>
                            {countries.map((country, index) => (
                                <li
                                    key={index}
                                    className='py-2 px-4 hover:bg-custom-green cursor-pointer'
                                >
                                    <button
                                        onClick={() =>
                                            changeLanguage(country.name)
                                        }
                                        className='flex items-center space-x-2 text-white'
                                    >
                                        {country.flag}
                                        <span>{country.name}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </header>
        </div>
    )
}

export default NavBar
