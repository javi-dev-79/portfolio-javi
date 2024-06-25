import Certifications from './components/Certifications'
import Education from './components/Education'

const Resume = () => {
    return (
        <div id='resume' className='max-w-[1200px] mx-auto py-10 '>
            <div>
                <h2 className='text-5xl font-bold text-center font-righteous p-16'>
                    Curriculum
                </h2>
                <div className='flex'>
                    <Education />
                    <Certifications />
                </div>
            </div>
        </div>
    )
}

export default Resume
