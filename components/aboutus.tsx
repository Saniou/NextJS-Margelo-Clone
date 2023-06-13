import React, {useRef, useContext, useState, useCallback} from 'react'
import Member from './member';

const AboutUs: React.FC = () => {
    return (
        <section
            className='flex flex-col bg-white text-3xl py-20 md:text-4xl relative z-1000'>
            <div className='container mx-auto px-11'>
                <p
                    className='leading-tight max-w-5xl mx-auto text-2xl lg:text-2xl tracking-tight'>
                    <strong>We will help you ship better apps, faster.
                    </strong>
                    Our team of expert engineers has created the best user experiences in some of
                    the most popular apps worldwide.
                </p>
                <p className=' text-center leading-tight max-w-5xl mx-auto text-2xl lg:text-2xl tracking-tight'> 
                <strong>Our services:</strong>
                <br/>
                    - From Idea to AppStore: Full App Design and Development<br/> 
                    - Performance Optimization: Startup-time, Animation and overall smoothness optimization for existing apps <br/>
                    - Custom Module Development: Development of
                    specific UIs, animations, gestures or native modules for existing apps <br/>
                    - Consulting: One-on-one consulting with a React Native, iOS or Android expert and bug fixing.
                </p>
            </div>
            <div className='container mx-auto px-11 text-center mt-28'>
                <h2>Our Team</h2>
                <div className='mt-2'>the &ldquo;spec-ops&ldquo;</div>
                <div
                    className='mt-10 grid grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-20'>
                    <Member 
                        id='marc' 
                        name='Marc' 
                        socialId='@mrousavy' 
                        link='https://github.com'/>
                    <Member
                        id='szymon'
                        name='Szymon'
                        socialId='@szymon20000'
                        link='https://github.com'/>
                    <Member
                        id='thomas'
                        name='Thomas'
                        socialId='@thomas-coldwell'
                        link='https://github.com'/>
                    <Member
                        id='christoph'
                        name='Christoph'
                        socialId='@chrispader'
                        link='https://github.com'/>
                    <Member
                        id='hanno'
                        name='Hanno'
                        socialId='@janicduplessis'
                        link='https://github.com'/>
                    <Member 
                        id='janic' 
                        name='Janic' 
                        socialId='@perunt' 
                        link='https://github.com'/>
                    <Member
                        id='taras'
                        name='Taras'
                        socialId='@terrysahaidak'
                        link='https://github.com'/>
                    <Member
                        id='terry'
                        name='Terry'
                        socialId='@ericvicenti'
                        link='https://github.com'/>
                    <Member 
                        id='eric' 
                        name='Eric' 
                        socialId='@Eric' 
                        link='https://github.com'/>
                    <Member
                        id='viktoria'
                        name='Viktoria'
                        socialId='@Viktoria'
                        link='https://github.com'/>
                </div>
            </div>
        </section>
    );
}

export default AboutUs;