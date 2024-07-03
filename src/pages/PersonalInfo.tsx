import { FaDownload } from 'react-icons/fa'
import cv from '../assets/pdf/CV-Javier.pdf'
import Hobbies from '../components/Hobbies'
import PersonalData from '../components/PersonalData'
import { useTranslation } from 'react-i18next'

const PersonalInfo = () => {
    const { t } = useTranslation()

    return (
        <div className='max-w-[1200px] mx-auto'>
            <div className='md:flex m-5'>
                <PersonalData />
                <Hobbies />
            </div>

            <div className='flex'>
                <a href={cv} download className='flex mx-auto mb-10'>
                    <button
                        type='button'
                        className='relative overflow-hidden p-2 border border-white mx-auto my-10 px-10 py-2 min-w-32 text-center group cursor-pointer'
                    >
                        <span className='z-10 relative flex items-center'>
                            {t('Descargar')} CV <FaDownload className='ml-2' />
                        </span>
                        <span className='bg-custom-green absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 z-0'></span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default PersonalInfo
