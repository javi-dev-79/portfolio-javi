import { FaGamepad } from 'react-icons/fa'
import { FaHeadphones } from 'react-icons/fa6'
import { FaPlane } from 'react-icons/fa'
import { FaHiking } from 'react-icons/fa'
import { FaBook } from 'react-icons/fa'
import { FaCar } from 'react-icons/fa'
import { FaCamera } from 'react-icons/fa6'

const hobbyList = [
    { text: 'JUEGOS', icon: <FaGamepad /> },
    { text: 'MUSICA', icon: <FaHeadphones /> },
    { text: 'VIAJAR', icon: <FaPlane /> },
    { text: 'DEPORTE', icon: <FaHiking /> },
    { text: 'LIBROS', icon: <FaBook /> },
    { text: 'COCHES', icon: <FaCar /> },
    { text: 'FOTOS', icon: <FaCamera /> }
]

const Hobbies = () => {
    return (
        <div className='mt-5 w-full md:w-1/2'>
            <h1 className='font-righteous text-3xl mb-10 font-bold'>
                Intereses
            </h1>
            <div className='flex flex-wrap gap-4 max-w-[500px]'>
                {hobbyList.map((hobby, index) => (
                    <div
                        className='w-24 h-24 bg-custom-dark rounded-lg flex flex-col items-center justify-center transition-all duration-1000 hover:bg-custom-green'
                        key={index}
                    >
                        <div className='text-4xl'>{hobby.icon}</div>
                        <span>{hobby.text}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hobbies
