"use client"

import React from 'react'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Button from '../button'

export function Section1() {
    return (
        <main className="mt-15 md:mt-18 lg:mt-10">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-16 px-6 md:px-16 py-12 md:py-20">

                {/* Left Side */}
                <div className="w-full md:w-[40%] flex flex-col justify-center pr-0 md:pr-8">

                    {/* Badge & Trusted Info */}
                    <div className="flex items-center gap-3 mb-6">
                        <span className="text-md md:text-md tracking-tight text-neutral-900 leading-[1.15] max-w-xl">
                        About Us
                    </span>
                    </div>

                    {/* Main Heading — the page's single H1 */}
                    <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold  tracking-tight text-neutral-900 leading-[1.15] max-w-xl">
                        Building software that <span className='text-blue-600 font-bold'>earns its place.</span>
                    </h1>

                    {/* Description */}
                    <p className="text-base md:text-lg text-neutral-500 leading-relaxed mt-6 max-w-lg">
                          We are a software engineering company headquartered in Raipur, Chhattisgarh, working with businesses that need technology to produce a measurable result.
                    </p>

                    {/* Action Button */}
                    <div className="mt-8">
                        <Link href='/contact'>
                    <Button >Learn More</Button>
                    </Link>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-[60%] flex justify-center relative mt-10 md:mt-0">
                   <video className='rounded-xl w-full border border-neutral-100/80 shadow-md' src="/About-section-1.mp4" loop muted autoPlay></video>
                </div>

            </div>
        </main>
    )
}