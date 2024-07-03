import SkillsItem from '../components/SkillsItem'
import { useTranslation } from 'react-i18next'

const Skills = () => {
    const { t } = useTranslation()

    return (
        <div id='myskills' className='px-4'>
            <section className='bg-custom-dark py-12 w-full'>
                <div className='max-w-[1200px] mx-auto'>
                    <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                        {t('Habilidades')}
                    </h2>
                    <SkillsItem />
                </div>
            </section>
        </div>
    )
}

export default Skills
