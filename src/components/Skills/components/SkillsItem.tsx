// const SkillsItem = () => {
//     const items = [
//         { text: 'Javascript', progress: '70%' },
//         { text: 'HTML & CSS', progress: '70%' },
//         { text: 'Java', progress: '75%' },
//         { text: 'Python', progress: '75%' },
//         { text: 'PHP', progress: '65%' }
//     ]

//     const items2 = [
//         { text: 'Comunicación', progress: '100%' },
//         { text: 'Trabajo en Equipo', progress: '90%' },
//         { text: 'Creatividad', progress: '80%' },
//         { text: 'Dedicación', progress: '85%' },
//         { text: 'Autoaprendizaje', progress: '95%' }
//     ]

//     return (
//         // <div className='flex text-lg font-bold p-5'>
//         //     <div className='w-1/2'>
//         //         <h1 className='text-3xl'>Technical Skills</h1>
//         //         {items.map((item, index) => (
//         //             <div key={index}>
//         //                 <span>{item.text}</span>
//         //                 <div>
//         //                     <span>{item.progress}</span>
//         //                 </div>
//         //             </div>
//         //         ))}
//         //     </div>

//         //     <div className='w-1/2'>
//         //         <h1 className='text-3xl'>Professional Skills</h1>
//         //         {items2.map((item2, index2) => (
//         //             <div key={index2}>{item2.text}</div>
//         //         ))}
//         //     </div>
//         // </div>

//         <div className='flex text-lg font-bold p-5'>
//             <div className='w-1/2'>
//                 <h1 className='text-3xl mb-5'>Technical Skills</h1>
//                 {items.map((item, index) => (
//                     <div key={index} className='mb-4'>
//                         <span className='block'>{item.text}</span>
//                         <div className='bg-gray-200 h-4 w-full rounded-md overflow-hidden mt-2'>
//                             <div
//                                 className='bg-[#1CB698] h-full text-white flex items-center justify-center'
//                                 style={{ width: item.progress }}
//                             >
//                                 <span className='text-sm'>{item.progress}</span>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className='w-1/2'>
//                 <h1 className='text-3xl mb-5'>Professional Skills</h1>
//                 {items2.map((item2, index2) => (
//                     <div key={index2} className='mb-4'>
//                         {item2.text}
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default SkillsItem



// import { useEffect } from 'react'

// const Skills = () => {
//     const items = [
//         { text: 'Javascript', progress: '70%' },
//         { text: 'HTML & CSS', progress: '70%' },
//         { text: 'Java', progress: '75%' },
//         { text: 'Python', progress: '75%' },
//         { text: 'PHP', progress: '65%' }
//     ]

//     const items2 = [
//         { text: 'Comunicación', progress: '100%' },
//         { text: 'Trabajo en Equipo', progress: '90%' },
//         { text: 'Creatividad', progress: '80%' },
//         { text: 'Dedicación', progress: '85%' },
//         { text: 'Autoaprendizaje', progress: '95%' }
//     ]

//     useEffect(() => {
//         const handleScroll = () => {
//             const skills = document.getElementById('skills')
//             if (skills) {
//                 const distancia_skills =
//                     window.innerHeight - skills.getBoundingClientRect().top
//                 if (distancia_skills >= 300) {
//                     const habilidades =
//                         document.getElementsByClassName('progreso')
//                     habilidades[0].classList.add('w-4/5') // .javascript equivalent
//                     habilidades[1].classList.add('w-3/4') // .htmlcss equivalent
//                     habilidades[2].classList.add('w-4/5') // .java equivalent
//                     habilidades[3].classList.add('w-4/5') // .python equivalent
//                     habilidades[4].classList.add('w-3/5') // .php equivalent
//                     habilidades[5].classList.add('w-5/5') // .comunicacion equivalent
//                     habilidades[6].classList.add('w-4/5') // .trabajo equivalent
//                     habilidades[7].classList.add('w-3/5') // .creatividad equivalent
//                     habilidades[8].classList.add('w-4/5') // .dedicacion equivalent
//                     habilidades[9].classList.add('w-4/5') // .autoaprendizaje equivalent
//                 }
//             }
//         }

//         window.addEventListener('scroll', handleScroll)
//         return () => {
//             window.removeEventListener('scroll', handleScroll)
//         }
//     }, [])

//     return (
//         <div className='flex'>
//             <div className='w-1/2 px-5'>
//                 <h3 className='text-2xl font-righteous mb-6'>Technical Skills</h3>
//                 <div className='skill'>
//                     {items.map((item, index2) => (
//                         <div key={index2}>
//                             <span className='font-bold block mb-3'>{item.text}</span>
//                             <div className='h-2 w-4/5 bg-[#131517] relative mb-7'>
//                                 <div className='bg-[#1CB698] absolute top-0 left-0 h-2'>
//                                     <span className='absolute h-10 w-10 bg-[#1CB698] rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>{item.progress}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Skills



import { useEffect } from 'react';

const Skills = () => {
    const items = [
        { text: 'Javascript', progress: '70%' },
        { text: 'HTML & CSS', progress: '70%' },
        { text: 'Java', progress: '75%' },
        { text: 'Python', progress: '75%' },
        { text: 'PHP', progress: '65%' }
    ];


    const calculateWidth = (progress: string) => {
        const percentage = parseInt(progress, 10);
        return `w-${percentage / 100}`;
    };
    

    useEffect(() => {
        const handleScroll = () => {
            const skills = document.getElementById('skills');
            if (skills) {
                const distancia_skills =
                    window.innerHeight - skills.getBoundingClientRect().top;
                if (distancia_skills >= 300) {
                    const habilidades = document.getElementsByClassName('progreso');
                    Array.from(habilidades).forEach((habilidad, index) => {
                        habilidad.classList.add(calculateWidth(items[index].progress));
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Llamar a handleScroll directamente en el montaje inicial para comprobar si las habilidades ya deben mostrarse
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [items]); // Escuchar cambios en 'items' para actualizar en caso de que cambien las habilidades

    return (
        <div className='flex'>
            <div id="skills" className='px-5'>
                <h3 className='text-2xl font-righteous mb-6 text-nowrap'>Technical Skills</h3>
                <div className=''>
                    {items.map((item, index) => (
                        <div key={index}>
                            <span className='font-bold block mb-5 text-nowrap'>{item.text}</span>
                            <div className='h-2 bg-[#131517] relative mb-7'>
                                <div className={`bg-[#1CB698] top-0 left-0 h-2 progreso ${calculateWidth(item.progress)}`}>
                                    <span className='absolute h-10 w-10 bg-[#1CB698] rounded-full flex items-center justify-center text-center top-[-17px] right-[-15px] text-sm'>{item.progress}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
