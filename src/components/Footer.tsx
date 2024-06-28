// import { MdKeyboardDoubleArrowUp } from 'react-icons/md'

// const Footer = () => {
//     return (
//         <div className='bg-[#252A2E] py-10 relative w-full'>
//             <div className='flex items-center justify-center w-12 h-12 bg-[#1CB698] text-white absolute left-1/2 transform -translate-x-1/2 -top-6 rounded-full'>
//                 <a
//                     onClick={event => {
//                         document.body.scrollTop = 0
//                         document.documentElement.scrollTop = 0
//                         event.preventDefault()
//                     }}
//                 >
//                     <MdKeyboardDoubleArrowUp className='text-3xl' />
//                 </a>
//             </div>
//         </div>
//     )
// }

// export default Footer


import { MdKeyboardDoubleArrowUp } from 'react-icons/md';

const Footer = () => {
    // const scrollToTop = () => {
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'auto', // Esto hará que el desplazamiento sea suave
    //     });
    // };

    const scrollToTop = () => {
        const scrollStep = -window.scrollY / (500 / 15); // 500 ms de duración
        const scrollInterval = setInterval(() => {
            if (window.scrollY !== 0) {
                window.scrollBy(0, scrollStep);
            } else {
                clearInterval(scrollInterval);
            }
        }, 15);
    };
    

    return (
        <div className='bg-[#252A2E] py-10 relative w-full'>
            <div
                className='flex items-center justify-center w-12 h-12 bg-[#1CB698] text-white absolute left-1/2 transform -translate-x-1/2 -top-6 rounded-full cursor-pointer'
                onClick={scrollToTop}
            >
                <MdKeyboardDoubleArrowUp className='text-3xl' />
            </div>
        </div>
    );
};

export default Footer;
