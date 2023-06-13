import React from 'react'
import Image from "next/image";
import SliderContainer from './slider'
import SliderItem from './slider'

const ClientLogos: React.FC = () => {
    return (
        <>
        <SliderContainer className='mt-5 inline-block' contentWidth={1290} initialOffSetX={0}>
            <div className='flex'>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (1).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (2).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (3).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (4).webp' className='ml-2' width={100} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (5).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (6).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (7).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (8).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (21).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (10).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            </div>
        </SliderContainer>
        <SliderContainer className='mt-5' contentWidth={1290} initialOffSetX={1}>
            <div className='flex'>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (11).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (12).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (13).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (14).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (15).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150} size=''>
            <Image src='/assets/carousel/image (11).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (2).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (1).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (19).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            <SliderItem width={150}>
            <Image src='/assets/carousel/image (20).webp' className='ml-2' width={150} height={50} alt='ds'/>
            </SliderItem>
            </div>
        </SliderContainer>
        </>
    )
}

export default ClientLogos