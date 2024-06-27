const PersonalData = () => {
    const items1 = [
        { text: 'Teléfono:' },
        { text: 'Email:' },
        { text: 'Dirección:' },
        { text: 'Cargo:' },
        { text: 'Empresa de prácticas FCT:' }
    ]

    const items2 = [
        { text: '618221089' },
        { text: 'jacoal79@gmail.com' },
        { text: 'Santa Teresa, 10 2ºB' },
        { text: 'Junior Software Developer' }
    ]

    return (
        <div className='mt-5 w-full md:w-1/2'>
            <h1 className='font-righteous text-3xl mb-10 font-bold'>
                Datos Personales
            </h1>
            <div className='flex'>
                <div className='md:mr-5 text-[#1CB698] font-bold'>
                    {items1.map(item1 => (
                        <h2 className='pb-2 md:pb-5' key={item1.text}>
                            {item1.text}
                        </h2>
                    ))}
                </div>
                <div>
                    {items2.map(item2 => (
                        <h2 className='pb-2 md:pb-5' key={item2.text}>
                            {item2.text}
                        </h2>
                    ))}
                    <a
                        href='https://www.linkedin.com/company/hyve-ag/'
                        className='bg-[#1CB698] font-bold rounded-md p-1'
                    >
                        Hyve - The Innovate Company
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PersonalData
