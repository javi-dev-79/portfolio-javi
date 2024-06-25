import SkillsItem from './components/SkillsItem'

const Skills = () => {
    return (
        <div className='flex'>
            <section className='bg-[#252A2E] py-12 px-20 min-w-[1200px] mx-auto' id='skills'>
                <div>
                    <h2 className='text-4xl font-righteous text-center py-5'>
                        Skills
                    </h2>
                    <SkillsItem />
                </div>
            </section>
        </div>
    )
}

export default Skills
