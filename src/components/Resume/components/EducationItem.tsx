interface EducationItemProps {
    title: string
    institution: string
    period: string
    description: string
}

const EducationItem: React.FC<EducationItemProps> = ({
    title,
    institution,
    period,
    description
}) => {
    return (
        <div className=''>
            <div className='flex items-center mb-10'>
                <div className='bg-[#252A2E] border-r-2 border-[#1CB698] p-5'>
                    <h4 className='text-xl mb-2'>{title}</h4>
                    <span className='text-[#1CB698] text-xl font-bold block'>
                        {institution}
                    </span>
                    <span className='block text-[#1CB698] mb-2'>{period}</span>
                    <p className='mb-10 text-justify'>{description}</p>
                </div>
                <div className='h-0.5 bg-[#1CB698] min-w-10'>
                    <div className='h-2 w-2 rounded-full bg-[#1CB698] float-right'></div>
                </div>
            </div>
        </div>
    )
}

export default EducationItem
