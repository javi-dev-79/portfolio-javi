import { useTranslation } from 'react-i18next'

const AboutMe = () => {
    const { t } = useTranslation()

    return (
        <div id='aboutme'>
            <div className='p-5 m-10 max-w-[1200px] mx-auto'>
                <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                    {t('Sobre Mí')}
                </h2>
                <p className='leading-6 text-sm md:text-lg text-justify'>
                    <span className='font-bold text-custom-green'>
                        {t('Presentación')}
                    </span>
                    {t('Descripción')}
                </p>
            </div>
        </div>
    )
}

export default AboutMe
