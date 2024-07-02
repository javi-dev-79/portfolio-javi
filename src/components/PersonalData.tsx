import { useTranslation } from 'react-i18next'

const infoFields = [
    { text: 'Teléfono' },
    { text: 'Email' },
    { text: 'Dirección' },
    { text: 'Cargo' },
    { text: 'Empresa de prácticas FCT' }
]

const contactDetails = [
    { text: '618221089' },
    { text: 'jacoal79@gmail.com' },
    { text: 'Santa Teresa, 10 2ºB' },
    { text: 'Junior Software Developer' }
]

const PersonalData = () => {
    const { t } = useTranslation()

    return (
        <div className='mt-5 w-full md:w-1/2'>
            <h1 className='font-righteous text-3xl mb-10 font-bold'>
                {t('Datos Personales')}
            </h1>
            <div className='flex'>
                <div className='md:mr-5 text-custom-green font-bold'>
                    {infoFields.map((infoField, index) => (
                        <h2 className='pb-2 md:pb-5' key={index}>
                            {t(infoField.text)}:
                        </h2>
                    ))}
                </div>
                <div>
                    {contactDetails.map((contactDetail, index) => (
                        <h2 className='pb-2 md:pb-5' key={index}>
                            {contactDetail.text}
                        </h2>
                    ))}
                    <a
                        href='https://www.linkedin.com/company/hyve-ag/'
                        className='bg-custom-green font-bold rounded-md p-1'
                    >
                        Hyve - The Innovate Company
                    </a>
                </div>
            </div>
        </div>
    )
}

export default PersonalData
