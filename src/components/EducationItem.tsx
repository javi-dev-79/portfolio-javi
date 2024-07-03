import { useTranslation } from 'react-i18next'

interface EducationItemProps {
    title: string
    institution: string
    period: string
    description: string
}

export default function EducationItem({
    title,
    institution,
    period,
    description
}: EducationItemProps) {
    const { t } = useTranslation()

    return (
        <div className='flex items-center mb-10'>
            <div className='bg-custom-grey border-r-2 border-custom-green p-5 w-full'>
                <h4 className='text-xl mb-2 font-bold'>{t(title)}</h4>
                <span className='text-custom-green text-xl font-bold block'>
                    {institution}
                </span>
                <span className='block text-custom-green mb-2'>{period}</span>
                <p className='mb-10 text-justify'>{t(description)}</p>
            </div>
            <div className='h-0.5 bg-custom-green min-w-10'>
                <div className='relative h-2.5 w-2.5 rounded-full bg-custom-green float-right bottom-1'></div>
            </div>
        </div>
    )
}
