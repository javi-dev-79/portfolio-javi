const NavBar = () => {
    const items = [
        {
            text: 'Javi',
            href: '#navbar',
            textProperties:
                'mr-auto text-4xl font-bold text-[#1CB698] font-righteous'
        },
        { text: 'INICIO', href: '#home' },
        { text: 'SOBRE MI', href: '#aboutme' },
        { text: 'SKILLS', href: '#skills' },
        { text: 'CURRICULUM', href: '#curriculum' }
    ]

    return (
        <nav id='navbar'>
            <ul className='flex gap-6 m-5 font-semibold'>
                {items.map((item, index) => (
                    <li key={index} className={item.textProperties}>
                        <a href={item.href}>{item.text}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default NavBar
