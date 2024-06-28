import { useState } from 'react'

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    const items = [
        { text: 'INICIO', itemRef: '#home' },
        { text: 'SOBRE MI', itemRef: '#aboutme' },
        { text: 'SKILLS', itemRef: '#myskills' },
        { text: 'CURRICULUM', itemRef: '#resume' }
    ]

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
                        {items.map((item, index) => (
                            <div key={index}>
                                <li>
                                    <a
                                        href={item.itemRef}
                                        onClick={toggleMenu}
                                        className='hover:underline hover:text-custom-green hover:font-bold'
                                    >
                                        {item.text}
                                    </a>
                                </li>
                            </div>
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
            </header>
        </div>
    )
}

export default NavBar

