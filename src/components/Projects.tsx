import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useTranslation } from 'react-i18next'

const projects = [
    {
        id: 'item1',
        name: 'Todo List - Spring React - Backend',
        image: '/images/Todo-List.JPG',
        link: 'https://github.com/javi-dev-79/todo-list-spring-react-backend'
    },
    {
        id: 'item2',
        name: 'Todo List - Spring React - Frontend',
        image: '/images/Todo-List-Dark.JPG',
        link: 'https://github.com/javi-dev-79/todo-list-spring-react-frontend'
    }
]

const Projects = () => {

    const { t } = useTranslation()
    
    return (
        <div id='projects' className='max-w-[1200px] mx-auto mb-16 text-center'>
            <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                Proyectos
            </h2>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                loop={true}
                spaceBetween={50}
                slidesPerView={1}
                className='w-full md:w-[700px] h-[450px]'
            >
                {projects.map(project => (
                    <SwiperSlide key={project.id}>
                        <div className='flex flex-col items-center'>
                            <a
                                href={project.link}
                                target='_blank'
                                rel='noopener noreferrer'
                                className='w-full'
                            >
                                <img
                                    src={project.image}
                                    alt={`Imagen de ${project.name}`}
                                    className='object-contain w-full h-[350px] rounded-lg'
                                />
                            </a>
                            <h3 className='mt-4 text-xl font-semibold text-[#1CB698]'>
                                {project.name}
                            </h3>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <p className='text-sm font-bold text-center font-righteous m-4 hover:text-[#1CB698]'>
                {t('Hacer clic en la imagen para acceder al repositorio')}
            </p>
            <a
                href='https://github.com/javi-dev-79/portfolio-javi'
                target='_blank'
                rel='noopener noreferrer'
            >
                <p className='text-sm font-bold text-center font-righteous m-10 hover:text-[#1CB698]'>
                    {t('Repositorio de este proyecto')}
                </p>
            </a>
        </div>
    )
}

export default Projects
