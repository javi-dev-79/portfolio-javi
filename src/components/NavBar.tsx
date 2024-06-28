import { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (
        <div className='bg-[#1e2326] text-white'>
            <header className='container mx-auto p-4 flex justify-between items-center'>
                <div className='text-3xl font-bold text-[#1CB698]'>
                    <a href='#'>Javi</a>
                </div>
                <nav
                    className={`lg:flex items-center lg:space-x-6 ${menuOpen ? 'block' : 'hidden'} lg:block`}
                >
                    <ul
                        className={`flex flex-col lg:flex-row lg:space-x-6 lg:space-y-0 space-y-4 ${menuOpen ? 'absolute right-0 mt-4 mr-4 p-4 bg-[#1e2326] rounded-lg' : ''}`}
                    >
                        <li>
                            <a
                                href='#home'
                                onClick={toggleMenu}
                                className='hover:underline'
                            >
                                INICIO
                            </a>
                        </li>
                        <li>
                            <a
                                href='#aboutme'
                                onClick={toggleMenu}
                                className='hover:underline'
                            >
                                SOBRE MI
                            </a>
                        </li>
                        <li>
                            <a
                                href='#myskills'
                                onClick={toggleMenu}
                                className='hover:underline'
                            >
                                SKILLS
                            </a>
                        </li>
                        <li>
                            <a
                                href='#resume'
                                onClick={toggleMenu}
                                className='hover:underline'
                            >
                                CURRICULUM
                            </a>
                        </li>
                    </ul>
                </nav>
                <div
                    className='lg:hidden w-8 h-7 bg-[#1CB698] rounded-lg text-center items-center'
                    onClick={toggleMenu}
                >
                    <i
                        className={`fa-solid fa-${menuOpen ? 'times' : 'bars'} text-lg`}
                    >
                        ☰
                    </i>
                </div>
            </header>
        </div>
    )
}

export default NavBar
