import Hobbies from './components/Hobbies'
import PersonalData from './components/PersonalData'
import { FaDownload } from 'react-icons/fa'

const PersonalInfo = () => {
    return (
        <div>
            <div className='flex m-5'>
                <PersonalData />
                <Hobbies />
            </div>

            <div className='flex'>
                <a href='assets/pdf/CV-Javier.pdf' download className='flex mx-auto mb-10'>
                    <button
                        type='button'
                        className='inset-0 p-2 flex border border-white mx-auto my-10 px-10 py-2 min-w-32 text-center relative overflow-hidden hover:text-white transition-colors duration-1000 group cursor-pointer'
                    >
                        Descargar CV <FaDownload className='ml-2' />
                        <span className='bg-[#1CB698] absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 z-[-1]'></span>
                    </button>
                </a>
            </div>
        </div>
    )
}

export default PersonalInfo
