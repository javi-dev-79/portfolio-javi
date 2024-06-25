import '../../../index.css'

const Skills = () => {
    const items = [
        { text: 'Javascript', progress: '70', cssClass: 'javascript' },
        { text: 'HTML & CSS', progress: '70', cssClass: 'htmlcss' },
        { text: 'Java', progress: '75', cssClass: 'java' },
        { text: 'Python', progress: '75', cssClass: 'python' },
        { text: 'PHP', progress: '65', cssClass: 'php' }
    ]

    const items2 = [
        { text: 'Comunicación', progress: '100', cssClass: 'comunicacion' },
        { text: 'Trabajo en Equipo', progress: '90', cssClass: 'trabajo' },
        { text: 'Creatividad', progress: '80', cssClass: 'creatividad' },
        { text: 'Dedicación', progress: '85', cssClass: 'dedicacion' },
        { text: 'Autoaprendizaje', progress: '95', cssClass: 'autoaprendizaje' }
    ]

    return (
        <div className='flex max-w-[1200px] mx-auto'>
            <div className='w-1/2 max-w-md mx-auto'>
                <h3 className='text-2xl font-righteous mb-6'>
                    Technical Skills
                </h3>
                <div className=''>
                    {items.map((item, index) => (
                        <div key={index}>
                            <span className='font-bold block mb-5 text-nowrap'>
                                {item.text}
                            </span>
                            <div className='h-2 bg-[#131517] relative mb-7'>
                                <div
                                    className={
                                        `absolute bg-[#1CB698] top-0 left-0 h-2 ${item.cssClass}`
                                    }
                                >
                                    <span className='absolute h-10 w-10 bg-[#1CB698] rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>
                                        {item.progress}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='w-1/2 max-w-md mx-auto'>
                <h3 className='text-2xl font-righteous mb-6'>
                    Professional Skills
                </h3>
                <div className=''>
                    {items2.map((item2, index2) => (
                        <div key={index2}>
                            <span className='font-bold block mb-5 text-nowrap'>
                                {item2.text}
                            </span>
                            <div className='h-2 bg-[#131517] relative mb-7'>
                                <div
                                    className={
                                        `absolute bg-[#1CB698] top-0 left-0 h-2 ${item2.cssClass}`
                                    }
                                >
                                    <span className='absolute h-10 w-10 bg-[#1CB698] rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>
                                        {item2.progress}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills
