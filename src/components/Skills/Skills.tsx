import SkillsItem from './components/SkillsItem'

const Skills = () => {
    //Funcion que aplica las animaciones de las habilidades
    function efectoHabilidades() {
        var skills = document.getElementById('skills')!
        var distancia_skills =
            window.innerHeight - skills.getBoundingClientRect().top
        if (distancia_skills >= 300) {
            let habilidades = document.getElementsByClassName('progreso')
            habilidades[0].classList.add('javascript')
            habilidades[1].classList.add('htmlcss')
            habilidades[2].classList.add('java')
            habilidades[3].classList.add('python')
            habilidades[4].classList.add('php')
        }
    }

    //detecto el scrolling para aplicar la animacion de la barra de habilidades
    window.onscroll = function () {
        efectoHabilidades()
    }

    return (
        <div className='flex'>
            <section className='bg-[#252A2E] py-12 px-20' id='skills'>
                <div className='max-w-[1100px] mx-auto'>
                    <h2 className='text-4xl font-righteous text-center py-5'>
                        Skills
                    </h2>
                    <SkillsItem />
                </div>
            </section>
        </div>
    )
}

export default Skills
