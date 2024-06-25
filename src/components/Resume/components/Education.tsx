import EducationItem from './EducationItem'

const Education = () => {
    const items = [
        {
            title: 'Desarrollo de Aplicaciónes Multiplataforma',
            institution: 'IES El Rincón',
            period: '2021 - 2024',
            description:
                'Durante el actual ciclo, he adquirido conocimientos en una amplia gama de lenguajes de programación, incluyendo Java, Python y JavaScript. Además, he aprendido a trabajar con SQL para el manejo de bases de datos y también he adquirido habilidades en el desarrollo web utilizando lenguajes de marcas como HTML y CSS.'
        },
        {
            title: 'Gestión de Alojamientos Turísticos',
            institution: 'CIFP San Cristóbal',
            period: '2016 - 2018',
            description:
                'Durante el transcurso de este ciclo, he afianzado conocimientos de idiomas como inglés y alemán.'
        },
        {
            title: 'Inglés B1',
            institution: 'Cambridge',
            period: '2020'
        },
        {
            title: 'Inglés B2',
            institution: 'FULPGC',
            period: '2017'
        },
        {
            title: 'Inglés B2.1',
            institution: 'EOI Arucas',
            period: '2021'
        },
        {
            title: 'Alemán B1',
            institution: 'EOI Las Palmas II',
            period: '2017'
        },
        {
            title: 'Francés A2',
            institution: 'EOI Arucas',
            period: '2017'
        }
    ]
    return (
        <div className='w-1/2'>
            <div className='col border-r-2 border-[#252A2E]'>
                <div className='relative mr-2'>
                    <h3 className='text-3xl font-righteous mb-10'>
                        Educación
                    </h3>
                    {items.map((item, index) => (
                        <div className='flex mb-10'>
                            <EducationItem
                                key={index}
                                title={item.title}
                                institution={item.institution}
                                period={item.period}
                                description={item.description || ''}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Education
