import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer = () => {
    return (
        <div className='bg-[#252A2E] py-10 relative w-full'>
            <div className='flex items-center justify-center w-12 h-12 bg-[#1CB698] text-white absolute left-1/2 transform -translate-x-1/2 -top-6 rounded-full'>
                <a href='navbar'>
                    <MdKeyboardDoubleArrowUp className='text-3xl' />
                </a>
            </div>
        </div>
    );
}

export default Footer;