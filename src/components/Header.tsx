// import { FaLinkedinIn } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import profilePhoto from '../assets/images/campo.jpg'
// import bgImage from '../assets/images/fondo.jpg'
// import { useTranslation } from 'react-i18next'

// const rrssIcons = [
//     {
//         icon: <FaLinkedinIn />,
//         iconRef: 'https://www.linkedin.com/in/javier-cordero-alvarez-042a16182/'
//     },
//     {
//         icon: <FaGithub />,
//         iconRef: 'https://github.com/javi-dev-79/portfolio-javi'
//     }
// ]

// const bgHome = {
//     backgroundImage: `linear-gradient(to top, rgba(30, 35, 38, .8), rgba(30, 35, 38, 1)), url(${bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
// }

// const Header = () => {
//     const { t } = useTranslation()
//     return (
//         <div id='home' className='mt-20 flex justify-center' style={bgHome}>
//             <div
//                 id='yo'
//                 className='bg-custom-dark m-20 pb-10 rounded-xl mb-24 border-2 border-custom-green'
//             >
//                 <img
//                     src={profilePhoto}
//                     alt='image'
//                     className='m-10 border-8 border-custom-green block w-4/5 mx-auto rounded-full'
//                 />
//                 <h1 className='text-5xl font-bold text-center font-righteous'>
//                     JAVIER <br />
//                     CORDERO
//                 </h1>
//                 <h2 className='text-center mb-10 mt-4'>
//                     {t('Programador Junior')}
//                 </h2>

//                 <div className='flex justify-center items-center m-10 space-x-4'>
//                     {rrssIcons.map((rrssIcon, index) => (
//                         <div key={index}>
//                             <a
//                                 href={rrssIcon.iconRef}
//                                 className='no-underline border border-white rounded-full w-10 h-10 leading-10 mx-2.5 text-xl transition duration-300 hover:bg-custom-green items-center justify-center flex'
//                             >
//                                 {rrssIcon.icon}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header

// **************************************************************************+

// import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
// import { useTranslation } from 'react-i18next'
// import profilePhoto from '../assets/images/campo.jpg'
// import bgImage from '../assets/images/fondo.jpg'

// const rrssIcons = [
//     {
//         icon: <FaLinkedinIn />,
//         iconRef: 'https://www.linkedin.com/in/javier-cordero-alvarez-042a16182/'
//     },
//     {
//         icon: <FaGithub />,
//         iconRef: 'https://github.com/javi-dev-79/portfolio-javi'
//     }
// ]

// const bgHome = {
//     backgroundImage: `linear-gradient(to top, rgba(30, 35, 38, .8), rgba(30, 35, 38, 1)), url(${bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center'
// }

// const Header = () => {
//     const { t } = useTranslation()

//     return (
//         <div id='home' className='mt-20 flex justify-center' style={bgHome}>
//             <div className='bg-custom-dark m-4 md:m-44 pb-10 rounded-xl border-2 border-custom-green'>
//                 <img
//                     src={profilePhoto}
//                     alt='image'
//                     className='m-4 md:m-10 border-8 border-custom-green block w-4/5 mx-auto rounded-full'
//                 />
//                 <h1 className='text-3xl md:text-5xl font-bold text-center font-righteous'>
//                     JAVIER <br />
//                     CORDERO
//                 </h1>
//                 <h2 className='text-center mb-4 md:mb-10 mt-2'>
//                     {t('Programador Junior')}
//                 </h2>

//                 <div className='flex justify-center items-center m-4 md:m-10 space-x-4'>
//                     {rrssIcons.map((rrssIcon, index) => (
//                         <a
//                             key={index}
//                             href={rrssIcon.iconRef}
//                             className='no-underline border border-white rounded-full w-10 h-10 leading-10 text-xl transition duration-300 hover:bg-custom-green flex items-center justify-center'
//                         >
//                             {rrssIcon.icon}
//                         </a>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header

// **************************************************************************+

// import { FaLinkedinIn } from 'react-icons/fa'
// import { FaGithub } from 'react-icons/fa'
// import profilePhoto from '../assets/images/campo.jpg'
// import bgImage from '../assets/images/fondo.jpg'
// import { useTranslation } from 'react-i18next'

// const rrssIcons = [
//     {
//         icon: <FaLinkedinIn />,
//         iconRef: 'https://www.linkedin.com/in/javier-cordero-alvarez-042a16182/'
//     },
//     {
//         icon: <FaGithub />,
//         iconRef: 'https://github.com/javi-dev-79/portfolio-javi'
//     }
// ]

// const bgHome = {
//     backgroundImage: `linear-gradient(to top, rgba(30, 35, 38, .8), rgba(30, 35, 38, 1)), url(${bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     minHeight: '100vh', // Asegurar que el contenedor ocupe como mínimo el alto de la pantalla
//     display: 'flex',
//     justifyContent: 'center', // Centrar horizontalmente
//     alignItems: 'center' // Centrar verticalmente
// }

// const Header = () => {
//     const { t } = useTranslation()
//     return (
//         <div id='home' style={bgHome}>
//             <div
//                 id='yo'
//                 className='bg-custom-dark m-20 pb-10 rounded-xl mb-24 border-2 border-custom-green'
//             >
//                 <img
//                     src={profilePhoto}
//                     alt='image'
//                     className='m-10 border-8 border-custom-green block w-4/5 mx-auto rounded-full'
//                 />
//                 <h1 className='text-5xl font-bold text-center font-righteous'>
//                     JAVIER <br />
//                     CORDERO
//                 </h1>
//                 <h2 className='text-center mb-10 mt-4'>
//                     {t('Programador Junior')}
//                 </h2>

//                 <div className='flex justify-center items-center m-10 space-x-4'>
//                     {rrssIcons.map((rrssIcon, index) => (
//                         <div key={index}>
//                             <a
//                                 href={rrssIcon.iconRef}
//                                 className='no-underline border border-white rounded-full w-10 h-10 leading-10 mx-2.5 text-xl transition duration-300 hover:bg-custom-green items-center justify-center flex'
//                             >
//                                 {rrssIcon.icon}
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default Header

// **************************************************************************************************

import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import profilePhoto from '../assets/images/campo.jpg'
import bgImage from '../assets/images/fondo.jpg'
import { useTranslation } from 'react-i18next'

const rrssIcons = [
    {
        icon: <FaLinkedinIn />,
        iconRef: 'https://www.linkedin.com/in/javier-cordero-alvarez-042a16182/'
    },
    {
        icon: <FaGithub />,
        iconRef: 'https://github.com/javi-dev-79/portfolio-javi'
    }
]

const Header = () => {
    const { t } = useTranslation()
    return (
        <div
            id='home'
            className='min-h-screen flex justify-center items-center bg-cover bg-center'
            style={{
                backgroundImage: `linear-gradient(to top, rgba(30, 35, 38, .8), rgba(30, 35, 38, 1)), url(${bgImage})`
            }}
        >
            <div className='bg-custom-grey bg-opacity-90 m-10 pb-10 rounded-xl mb-24 border-2 border-custom-green'>
                <img
                    src={profilePhoto}
                    alt='image'
                    className='m-10 border-8 border-custom-green block w-4/5 mx-auto rounded-full'
                />
                <h1 className='text-5xl font-bold text-center font-righteous text-white'>
                    JAVIER <br />
                    CORDERO
                </h1>
                <h2 className='text-center mb-10 mt-4 text-white'>
                    {t('Programador Junior')}
                </h2>

                <div className='flex justify-center items-center m-10 space-x-4'>
                    {rrssIcons.map((rrssIcon, index) => (
                        <div key={index}>
                            <a
                                href={rrssIcon.iconRef}
                                className='no-underline border border-white rounded-full w-10 h-10 leading-10 mx-2.5 text-xl transition duration-300 hover:bg-custom-green text-white flex items-center justify-center'
                            >
                                {rrssIcon.icon}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
