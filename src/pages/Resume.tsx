import Certifications from '../components/Certifications'
import Education from '../components/Education'
import { useTranslation } from 'react-i18next'

const Resume = () => {
    const { t } = useTranslation()

    return (
        <div id='resume' className='max-w-[1200px] mx-auto py-10 '>
            <div>
                <h2 className='text-5xl font-bold text-center font-righteous p-16'>
                    {t('Curriculum')}
                </h2>
                <div className='md:flex'>
                    <Education />
                    <Certifications />
                </div>
            </div>
        </div>
    )
}

export default Resume
