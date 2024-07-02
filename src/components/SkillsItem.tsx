const techSkills = [
    { text: 'Javascript', progress: '70', cssClass: 'javascript' },
    { text: 'HTML & CSS', progress: '70', cssClass: 'htmlcss' },
    { text: 'Java', progress: '75', cssClass: 'java' },
    { text: 'Python', progress: '75', cssClass: 'python' },
    { text: 'PHP', progress: '65', cssClass: 'php' },
    { text: 'Django', progress: '75', cssClass: 'python' }
]

const softSkills = [
    { text: 'Comunicación', progress: '100', cssClass: 'comunicacion' },
    { text: 'Trabajo en Equipo', progress: '90', cssClass: 'trabajo' },
    { text: 'Creatividad', progress: '80', cssClass: 'creatividad' },
    { text: 'Dedicación', progress: '85', cssClass: 'dedicacion' },
    { text: 'Autoaprendizaje', progress: '95', cssClass: 'autoaprendizaje' },
    { text: 'Atención al detalle', progress: '85', cssClass: 'dedicacion' }
]

const SkillsItem = () => {
    return (
        <div className='md:flex max-w-[1200px] mx-auto'>
            <div className='md:w-1/2 w-full px-4'>
                <h3 className='text-2xl font-righteous mb-6 text-center md:text-left'>
                    Technical Skills
                </h3>
                <div className=''>
                    {techSkills.map((techSkill, index) => (
                        <div key={index} className='mb-7'>
                            <span className='font-bold block mb-2'>
                                {techSkill.text}
                            </span>
                            <div className='h-2 bg-[#131517] relative'>
                                <div
                                    className={`absolute bg-custom-green top-0 left-0 h-2 ${techSkill.cssClass}`}
                                    style={{ width: `${techSkill.progress}%` }}
                                >
                                    <span className='absolute h-10 w-10 bg-custom-green rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>
                                        {techSkill.progress}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className='md:w-1/2 w-full px-4 mt-10 md:mt-0'>
                <h3 className='text-2xl font-righteous mb-6 text-center md:text-left'>
                    Professional Skills
                </h3>
                <div className=''>
                    {softSkills.map((softSkill, index2) => (
                        <div key={index2} className='mb-7'>
                            <span className='font-bold block mb-2'>
                                {softSkill.text}
                            </span>
                            <div className='h-2 bg-custom-dark relative'>
                                <div
                                    className={`absolute bg-custom-green top-0 left-0 h-2 ${softSkill.cssClass}`}
                                    style={{ width: `${softSkill.progress}%` }}
                                >
                                    <span className='absolute h-10 w-10 bg-custom-green rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>
                                        {softSkill.progress}%
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

export default SkillsItem
