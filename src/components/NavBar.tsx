import React, { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { De, Es, Fr, Gb } from 'react-flags-select'
import { GrLanguage } from 'react-icons/gr'

interface NavLink {
    text: string
    itemRef: string
}

interface Country {
    name: string
    flag: JSX.Element
}

const navLinks: NavLink[] = [
    { text: 'INICIO', itemRef: '#home' },
    { text: 'SOBRE MI', itemRef: '#aboutme' },
    { text: 'SKILLS', itemRef: '#myskills' },
    { text: 'CURRICULUM', itemRef: '#resume' },
    { text: 'PROYECTOS', itemRef: '#projects' }
]

const countries: Country[] = [
    { name: 'es', flag: <Es /> },
    { name: 'en', flag: <Gb /> },
    { name: 'fr', flag: <Fr /> },
    { name: 'de', flag: <De /> }
]

const NavBar: React.FC = () => {
    const { t, i18n } = useTranslation()
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const [languageMenuOpen, setLanguageMenuOpen] = useState<boolean>(false)

    const languageMenuRef = useRef<HTMLDivElement>(null)
    const menuRef = useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        const handleClickOutside = () => {
            setMenuOpen(false)
            setLanguageMenuOpen(false)
        }

        const handleDocumentClick = (event: MouseEvent) => {
            const navbar = document.getElementById('navbar')

            if (
                !event.target ||
                !(event.target instanceof Element) ||
                event.target.closest('#navbar') !== navbar
            ) {
                handleClickOutside()
            }
        }

        document.addEventListener('mousedown', handleDocumentClick)

        return () => {
            document.removeEventListener('mousedown', handleDocumentClick)
        }
    }, [])

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
        setLanguageMenuOpen(false)
    }

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen)
        setMenuOpen(false)
    }

    const changeLanguage = (lng: string) => {
        console.log('Cambiando a idioma:', lng)
        i18n.changeLanguage(lng)
        setLanguageMenuOpen(false)
    }

    const handleNavLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
        itemRef: string
    ) => {
        event.preventDefault()
        const targetSection = document.querySelector(itemRef)
        if (targetSection instanceof HTMLElement) {
            targetSection.scrollIntoView({ behavior: 'smooth' })
        }
        setMenuOpen(false)
        setLanguageMenuOpen(false)
    }

    return (
        <div id='navbar' className='bg-custom-dark text-white'>
            <header className='fixed top-0 w-full bg-custom-dark text-white z-50'>
                <div className='container mx-auto p-4 flex justify-between items-center'>
                    <div className='flex items-center'>
                        <div className='text-3xl font-bold text-custom-green mr-5'>
                            <a href='#'>Javi</a>
                        </div>
                        <div className='relative ml-4 lg:ml-0 top-0.5'>
                            <button
                                className='text-white'
                                onClick={toggleLanguageMenu}
                            >
                                <GrLanguage className='text-custom-green text-xl hover:text-2xl' />
                            </button>
                            {languageMenuOpen && (
                                <div
                                    ref={languageMenuRef}
                                    className='absolute right-0 mt-2 w-18 bg-custom-dark rounded-lg shadow-lg z-50 language-menu'
                                >
                                    {countries.map((country, index) => (
                                        <div
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
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                    <nav
                        ref={menuRef}
                        className={`lg:flex items-center lg:space-x-6 ${
                            menuOpen ? 'block' : 'hidden'
                        } main-menu`}
                    >
                        <ul
                            className={`flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-4 ${
                                menuOpen
                                    ? 'absolute right-0 mt-4 mr-4 p-4 bg-custom-dark rounded-lg z-50'
                                    : ''
                            }`}
                        >
                            {navLinks.map((navLink, index) => (
                                <li key={index}>
                                    <a
                                        href={navLink.itemRef}
                                        onClick={event =>
                                            handleNavLinkClick(
                                                event,
                                                navLink.itemRef
                                            )
                                        }
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
                            className={`fa-solid fa-${menuOpen ? 'times' : 'bars'} text-lg cursor-pointer`}
                        >
                            ☰
                        </i>
                    </div>
                </div>
            </header>
            <div className='pt-16'>
                {/* Adjust the padding top to match the height of your NavBar */}
                {/* Main page content */}
            </div>
        </div>
    )
}

export default NavBar
