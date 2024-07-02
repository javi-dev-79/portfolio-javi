import CertificationsItem from './CertificationsItem'
import learningPaths from './Constants'

const Certification = () => {
    return (
        <div className='md:w-1/2 border-l-2 border-custom-grey m-5'>
            <h3 className='text-3xl font-righteous mb-10 ml-10'>
                Certificaciones
            </h3>
            {learningPaths.map((learningPath, index) => (
                <CertificationsItem
                    key={index}
                    area={learningPath.area}
                    companies={learningPath.companies}
                />
            ))}
        </div>
    )
}

export default Certification
