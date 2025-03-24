import { motion } from 'framer-motion'

const projects = [
    {
      id: 'item1',
      name: 'Todo List - Spring React - Backend',
      image: '/src/assets/images/Todo-List.JPG',
      link: 'https://github.com/javi-dev-79/todo-list-spring-react-backend',
    },
    {
      id: 'item2',
      name: 'Todo List - Spring React - Frontend',
      image: '/src/assets/images/Todo-List-Dark.JPG',
      link: 'https://github.com/javi-dev-79/todo-list-spring-react-frontend',
    },
  ]
  

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1200px] mx-auto mb-16 text-center'>
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className='text-5xl font-bold text-center font-righteous p-5 m-10'
      >
        Proyectos
      </motion.h2>

      <div className='carousel w-80 h-80 md:w-[700px] md:h-[400px] items-center'>
        {projects.map((project) => (
          <div key={project.id} id={project.id} className='carousel-item w-full overflow-hidden'>
            <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              className='w-full'
            >
            <img
              src={project.image}
              alt={`Imagen de ${project.name}`}
              className='w-full h-full object-contain overflow-hidden'
            />
            </a>
          </div>
        ))}
      </div>

      <div className='flex w-full justify-center gap-2 py-2'>
        {projects.map((project) => (
          <a
            key={project.id}
            href={`#${project.id}`}
            className='btn btn-xs hover:bg-[#1CB698]'
          >
            {project.name}
          </a>
        ))}
      </div>

      <a
        href='https://github.com/javi-dev-79/portfolio-javi'
        target='_blank'
        rel='noopener noreferrer'
      >
        <p className='text-sm font-bold text-center font-righteous p-5 m-10 hover:text-[#1CB698]'>
          Repositorio de este proyecto
        </p>
      </a>
    </div>
  )
}

export default Projects