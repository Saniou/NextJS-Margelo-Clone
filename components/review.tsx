import React from 'react'

interface Props {
    by: string;
    children: React.ReactNode;
}

const Review: React.FC<Props> = ({children, by}) => {
    return (
        <div className='flex flex-col justify-center text-center px-5 md: mx-10 lg:px-20 leading-10' >
            <div className='text-xl md:text-2xl leading-10 lg:leading-[3rem] tracking-tight'>
                &ldquo; {children} &ldquo;
            </div>
            <div className='mt-6'>&mdash; {by}</div>
        </div> 
    );
}
 
export default Review;