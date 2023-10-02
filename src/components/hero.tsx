import { Button } from 'flowbite-react'
import React from 'react'

const HeroComponent = () => {
    return (
        <div className='overflow-hidden'>
            <section className="bg-blue-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')]">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative flex flex-col items-center justify-center">
                    <h1 className="z-10 mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">All Anime at one place.</h1>
                    <p className="z-10 mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">Here at AnimeX we focus on Anime of all genre be it Action, Adventure, sci-fi etc.</p>
                    <Button className='z-10' size={'xl'}
                        gradientDuoTone="purpleToBlue"
                        outline>
                        <p>
                            Let's get started.
                        </p>
                    </Button>
                <div className="bg-gradient-to-r from-blue-800 to-transparent w-full h-full absolute top-0 left-0 z-0"></div>
                </div>
            </section>
        </div>
    )
}

export default HeroComponent
