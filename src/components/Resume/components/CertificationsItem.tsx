interface CertificationItemProps {
    area: string
    companies: {
        name: string
        periods: {
            year: string
            courses: string[]
        }[]
    }[]
}

export default function CCertificationItem({
    area,
    companies
}: CertificationItemProps) {
    return (
        <div className='flex items-center mb-10'>
            <div className='relative flex-shrink-0 h-0.5 bg-[#1CB698] w-10'>
                <div className='absolute left-0 bottom-[-5px] h-2.5 w-2.5 rounded-full bg-[#1CB698]'></div>
            </div>
            <div className='bg-[#252A2E] border-l-2 border-[#1CB698] p-5 w-full'>
                <h4 className='text-xl mb-4 font-bold'>{area}</h4>
                {companies.map((company, index) => (
                    <div key={index}>
                        <h5 className='text-lg text-[#1CB698] font-bold'>
                            {company.name}
                        </h5>
                        {company.periods.map((period, index2) => (
                            <div key={index2}>
                                <span className='block text-[#1CB698] mb-2'>
                                    {period.year}
                                </span>
                                {period.courses.map((course, index3) => (
                                    <p key={index3} className='mb-1 text-sm'>
                                        {course}
                                    </p>
                                ))}
                                <p className='mb-4'></p>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </div>
    )
}
