import EducationItem from './EducationItem'

const formations = [
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

const Education = () => {
    return (
        <div className='md:w-1/2 border-r-2 border-custom-grey m-5'>
            <h3 className='text-3xl font-righteous mb-10'>Educación</h3>
            {formations.map((formation, index) => (
                <EducationItem
                    key={index}
                    title={formation.title}
                    institution={formation.institution}
                    period={formation.period}
                    description={formation.description || ''}
                />
            ))}
        </div>
    )
}

export default Education
