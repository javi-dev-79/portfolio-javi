const Projects = () => {
    return (
        <div className='max-w-[1200px] mx-auto mb-16 text-center'>
            <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                Proyectos
            </h2>
            <div className='carousel w-full'>
                <div id='item1' className='carousel-item w-full'>
                    <a
                        href='https://github.com/javi-dev-79/portfolio-javi'
                        className='w-full'
                    >
                        <img
                            src='https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg'
                            className='w-full'
                        />
                    </a>
                </div>
                <div id='item2' className='carousel-item w-full'>
                    <a
                        href='https://github.com/javi-dev-79/portfolio-javi'
                        className='w-full'
                    >
                        <img
                            src='https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg'
                            className='w-full'
                        />
                    </a>
                </div>
                <div id='item3' className='carousel-item w-full'>
                    <a
                        href='https://github.com/javi-dev-79/portfolio-javi'
                        className='w-full'
                    >
                        <img
                            src='https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg'
                            className='w-full'
                        />
                    </a>
                </div>
            </div>
            <div className='flex w-full justify-center gap-2 py-2'>
                <a href='#item1' className='btn btn-xs hover:bg-[#1CB698]'>
                    Proyecto 1
                </a>
                <a href='#item2' className='btn btn-xs hover:bg-[#1CB698]'>
                    Proyecto 2
                </a>
                <a href='#item3' className='btn btn-xs hover:bg-[#1CB698]'>
                    Proyecto 3
                </a>
            </div>

            <a href='https://github.com/javi-dev-79/portfolio-javi'>
                <p className='text-sm font-bold text-center font-righteous p-5 m-10 hover:text-[#1CB698]'>
                    Repositorio de este proyecto
                </p>
            </a>
        </div>
    )
}

export default Projects
