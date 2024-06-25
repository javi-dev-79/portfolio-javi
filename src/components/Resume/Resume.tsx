import Certifications from './components/Certifications'
import Education from './components/Education'

const Resume = () => {
    return (
        <div id='resume'>
            <section className='py-10 max-w-[1200px] mx-auto'>
                <div>
                    <h2 className='text-5xl font-bold text-center font-righteous p-5 m-10'>
                        Curriculum
                    </h2>
                    <Education />
                    <Certifications />
                </div>
            </section>
        </div>
    )
}

export default Resume
