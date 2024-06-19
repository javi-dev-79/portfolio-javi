const NavBar = () => {
    const items = [
        {
            text: 'Javi',
            href: '#',
            textProperties:
                'mr-auto text-4xl font-bold text-[#1CB698] font-righteous'
        },
        { text: 'INICIO', href: '#' },
        { text: 'SOBRE MI', href: '#' },
        { text: 'SKILLS', href: '#' },
        { text: 'CURRICULUM', href: '#' }
    ]

    return (
        <nav>
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
