import { useState, useEffect } from 'react';

const NavBar = () => {
    const [menuVisible, setMenuVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1200);

    const items = [
        {
            text: 'Javi',
            href: '#navbar',
            textProperties: 'mr-auto text-4xl font-bold text-[#1CB698] font-righteous'
        },
        { text: 'INICIO', href: '#home' },
        { text: 'SOBRE MI', href: '#aboutme' },
        { text: 'SKILLS', href: '#myskills' },
        { text: 'CURRICULUM', href: '#resume' },
        { text: 'PROYECTOS', href: '#projects' },
    ];

    const mostrarOcultarMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const seleccionar = () => {
        setMenuVisible(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1200);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <nav id='navbar' className='fixed top-0 w-full bg-[#1e2326] shadow-md z-10'>
            <div className='max-w-[1200px] mx-auto flex items-center justify-between p-5 nav-responsive'>
                <a href='#navbar' className='mr-auto text-4xl font-bold text-[#1CB698] font-righteous'>
                    Javi
                </a>
                {isMobile ? (
                    <button onClick={mostrarOcultarMenu} className='menu-toggle text-2xl w-8 h-8 bg-[#1CB698] rounded-md'>
                        ☰ {/* Icono de hamburguesa */}
                    </button>
                ) : (
                    <ul className='flex gap-6 font-semibold'>
                        {items.slice(1).map((item, index) => (
                            <li key={index} className='text-base text-white hover:text-[#1CB698]'>
                                <a href={item.href}>{item.text}</a>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
            {isMobile && menuVisible && (
                <ul className='flex flex-col gap-6 p-5 shadow-md float-end'>
                    {items.slice(1).map((item, index) => (
                        <li key={index} onClick={seleccionar} className='text-base text-white hover:text-[#1CB698]'>
                            <a href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default NavBar;
