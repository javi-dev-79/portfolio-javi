interface CarouselItemProps {
    imageUrl: string
}

export default function CarouselItem({ imageUrl }: CarouselItemProps) {
    return (
        <div className='carousel carousel-vertical rounded-box h-96 w-96'>
            <div className='carousel-item h-full'>
                <img src={imageUrl} />
            </div>
        </div>
    )
}
