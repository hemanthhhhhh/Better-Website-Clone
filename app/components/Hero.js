"use client"
import Image from "next/image"
import { useState } from "react"
import Box1 from "./Boxes/Box1";
import Box2 from "./Boxes/Box2";
import Box3 from "./Boxes/Box3";
import Box4 from "./Boxes/Box4";
import Star from "./Icons/Star";
import DropRate from "./Icons/DropRate";
import Hand from "./Icons/Hand";
import Link from "next/link";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Hero() {
    const [selectImage, setSelectImage] = useState('Arian');

    const handleButtonClick = (imageName) => {
        setSelectImage(imageName)
    }

    return (
        <>
            <section className="bg-container hero-section">
                <div className="flex items-center justify-center gap-3 top-[25px] mx-auto">
                   <DropRate/>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textInverseSecondary text-3xl">Rate drop alert</p>
                </div>
                <h1 className="font-bold leading-heading m-0 p-0 w-auto tracking-tight z-1  leading-tight text-center text-textInverseSecondary top-32 pt-12 text-[110px]">
                    The rate drop you’ve <br /> been waiting for
                </h1>

                <div className="flex flex-col items-center justify-center">
                    <div className="w-80 md:w-auto">
                        <div className="flex justify-between items-center gap-4">
                            <div className="flex flex-col">
                                <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold leading-normal disabled:pointer-events-none disabled:opacity-50 transition-all ease-in-out duration-200 bg-graphTertiary text-interactiveForegroundInversePrimary hover:bg-accentPrimary hover:text-interactiveForegroundPrimary h-16 px-12 py-5 mt-lg " href="/start">
                                    Start my approval
                                </Link>
                                <div className="flex mt-2">
                                    <span className=" ml-8 text-textInverseSecondary">3 min</span>
                                    <span className="text-textInverseSecondary">&nbsp;| No credit impact</span>
                                </div>
                            </div>
                            <div className="mt-3 flex items-center justify-center gap-1 text-sm text-accentSecondary">
                                <Hand/>
                            </div>
                            <div className="mt-5 ">
                                <Image alt="Better Mortgage" rel="preload" fetchPriority="high" width="510" height="790" decoding="async" data-nimg="1" src="https://media.better.com/better-com/homepage/rate-drop-notify.webp" />
                            </div>
                            <div className="rounded-base absolute bottom-8 bg-backgroundInversePrimary px-3 py-2.5 md:relative md:bg-transparent md:mt-lg">
                                <div className="flex items-center gap-2">
                                    <Star/>
                                </div>
                                <div className="mt-1 text-xs text-interactiveSecondary">4.6 Stars | 3177 Google reviews</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="flex justify-around">
                {/* Left Side  */}
                <div className="flex flex-col-reverse gap-lg pl-44 mt-44">
                    <div className="flex gap-4 mt-4">

                        <button onClick={() => handleButtonClick('Arian')} className="rounded-full text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary  text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4">Arian</button>

                        <button onClick={() => handleButtonClick('Amanda')} className="rounded-full text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4">Amanda</button>

                        <button onClick={() => handleButtonClick('Paul')} className="rounded-full text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary  text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4" href="/about">Paul</button>

                    </div>
                    <div className=" rounded-lg overflow-hidden">

                        {selectImage === 'Arian' && (
                            <Image alt="Arian-tab" width="341" height="606" src="https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp" className="rounded-lg" />
                        )}
                        {selectImage === 'Amanda' && (
                            <Image alt="Amanda-tab" rel="preconnect" width="341" height="606" src="https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp" />
                        )}
                        {selectImage === 'Paul' && (
                            <Image alt="Paul-tab" width="341" height="606" src="https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp" />
                        )}
                    </div>
                </div>
                {/* Right Side  */}
                <div className="flex flex-col justify-center">
                    <h2 className="font-bold text-textPrimary custom-line mb-lg text-3xl lg:text-[88px]">
                        Find out why <br /> we’re better.
                    </h2>
                    <Link className="flex justify-center rounded-full mt-6 font-bold cursor-pointer  transition-all ease-in-out duration-200 bg-accentPrimary text-interactiveForegroundPrimary  h-16 px-12 py-5 mb-sm w-[45%] hover:bg-backgroundInverseSecondary" href="/about">
                        See all our stories
                    </Link>
                    <div className="mt-2 ml-2">
                        <span>TrustPilot</span>
                        <span className="">&nbsp; Excellent </span>
                        <span><strong>4.4</strong> out of 5</span>
                    </div>
                </div>
                <div>
                </div>
            </section>

            <section className="mt-48 min-h-[1000px]">
                <div className="flex justify-around">
                    {/* Left Side  */}
                    <h2 className="text-5xl font-semibold text-textPrimary">
                        Got Questions? <br /> We have got answers
                    </h2>
                    {/* Right Side  */}
                    <div className="mt-12">
                        <button className=" rounded-full mr-5 text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary  text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4" href="/about">Our products</button>
                        <button className="  rounded-full mr-5 text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary  text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4" href="/about">Calculators</button>
                        <button className="rounded-full  text-base font-bold transition-all ease-in-out duration-200 border h-12 px-6 py-3 border-accentBorderSecondary  text-interactivePrimary hover:text-interactivePrimary hover:border-accentBorderSecondary hover:border-4" href="/about">Guides & FAQs</button>
                    </div>
                </div>
                <div className="mt-16 ml-16">
                    <div className="flex">
                        <Box1/>
                        <Box2/>
                    </div>
                    <div className="flex">
                       <Box3/>
                       <Box4/>
                    </div>
                </div>
            </section>
            <hr className="border-strokeBorder"/>
        </>
    )
}