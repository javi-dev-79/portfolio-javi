// import SkillsItem from './components/SkillsItem'

// const Skills = () => {
//     return (
//         <div id='myskills'>
//             <section className='bg-[#252A2E] py-12 w-full'>
//                 <div>
//                     <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
//                         Skills
//                     </h2>
//                     <SkillsItem />
//                 </div>
//             </section>
//         </div>
//     )
// }

// export default Skills



import SkillsItem from './components/SkillsItem'

const Skills = () => {
    return (
        <div id='myskills' className='px-4'>
            <section className='bg-[#252A2E] py-12 w-full'>
                <div className='max-w-[1200px] mx-auto'>
                    <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                        Skills
                    </h2>
                    <SkillsItem />
                </div>
            </section>
        </div>
    )
}

export default Skills
