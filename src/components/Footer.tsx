import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer = () => {
    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15); // 500 ms duration
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };
    

    return (
        <div className='bg-custom-grey py-10 relative w-full'>
            <div
                className='flex items-center justify-center w-12 h-12 bg-custom-green text-white absolute left-1/2 transform -translate-x-1/2 -top-6 rounded-full cursor-pointer'
                onClick={scrollToTop}
            >
                <MdKeyboardDoubleArrowUp className='text-3xl' />
            </div>
        </div>
    );
};

export default Footer;
