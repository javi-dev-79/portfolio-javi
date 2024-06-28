import CertificationsItem from './CertificationsItem'
import items from './Constants'

const Certification = () => {
    return (
        <div className='md:w-1/2 border-l-2 border-[#252A2E] m-5'>
            <h3 className='text-3xl font-righteous mb-10 ml-10'>
                Certificaciones
            </h3>
            {items.map((item, index) => (
                <CertificationsItem
                    key={index}
                    area={item.area}
                    companies={item.companies}
                />
            ))}
        </div>
    )
}

export default Certification
