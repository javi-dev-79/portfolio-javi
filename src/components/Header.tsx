import { FaLinkedinIn } from 'react-icons/fa'

const Header = () => {
    return (
        <div className='bg-[url(./assets/images/fondo.jpg)] inicio flex justify-center'>
            <div className='bg-[#1e2326] m-32 rounded-xl'>
                <img
                    src='/src/assets/images/campo.jpg'
                    alt='image'
                    className='m-10 border-8 border-[#1CB698] block w-4/5 mx-auto rounded-full'
                />
                <h1 className='text-5xl font-bold text-center font-righteous'>
                    JAVIER <br />
                    CORDERO
                </h1>
                <h2 className='text-center'>
                    Programador Junior
                </h2>
                <div className='flex justify-center items-center m-10'>
                    <a
                        href='https://www.linkedin.com/in/javier-cordero-alvarez-042a16182/'
                        className='no-underline border border-white rounded-full w-10 h-10  leading-10 mx-2.5 text-xl transition duration-300 hover:bg-[#1CB698] items-center justify-center flex'
                    >
                        <FaLinkedinIn />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Header
