"use client"

import { useEffect, useState } from "react";
import CallButton from "./Icons/CallButon";
import Phone from "./Icons/Phone";
import Link from "next/link";

export default function Navbar({ colors }) {

    const [color, setColor] = useState(false)
    const [showPopUp, setShowPopUp] = useState(false)

    useEffect(() => {
        const changeColor = () => {
            console.log("ScrollY:", window.scrollY);
            if (window.scrollY >= 1080) {
                setColor(true);
            } else {
                setColor(false);
            }
        };

        window.addEventListener("scroll", changeColor);

        return () => window.removeEventListener("scroll", changeColor);
    }, []);

    return (
        <div className={`top-0 sticky ${color ? 'bg-white text-black' : `${colors} || text-black`} transition-colors duration-300`}>
            <nav className=" flex justify-around ">
                {/* Left Side */}
                <div>
                    <ul className="flex mt-10">
                        <Link href="/">
                            <li className={`font-bold text-2xl mb-8 ${color ? 'text-black' : 'text-white'}`}>Better</li>
                        </Link>

                        <li className={`mx-12 ${color ? 'text-black' : 'text-white'}`}>Buy</li>
                        <li className={`mx-12 ${color ? 'text-black' : 'text-white'}`}>Reliance</li>
                        <li className={`mx-12 ${color ? 'text-black' : 'text-white'}`}>HELOC</li>
                        <li className={`mx-12 ${color ? 'text-black' : 'text-white'}`}>Rates</li>
                        <li className={`mx-12 ${color ? 'text-black' : 'text-white'}`}>Better+</li>
                        <li className="mx-12">
                            <Link href="/mortgage-calculator" className={`${color ? 'text-black' : 'text-white'}`}>
                                Mortgage Calculator
                            </Link>
                        </li>
                    </ul>
                </div>
                {/* Right side */}
                <div className="flex">
                    <ul className="flex mt-10">
                        {!color && (
                            <button
                                onMouseEnter={() => setShowPopUp(true)}
                                onMouseLeave={() => setShowPopUp(false)}
                                className={`flex justify-center border w-12 h-12 items-center px-4 py-2 rounded-full  mx-8 mb-10 cursor-pointer text-black hover:bg-slate-300`}>
                                <Phone />
                            </button>
                        )}
                        {color && (
                            <button
                                onMouseEnter={() => setShowPopUp(true)}
                                onMouseLeave={() => setShowPopUp(false)}
                                className={`flex justify-center border w-12 h-12 items-center px-4 py-2 rounded-full  mx-8 mb-10 cursor-pointer`}>
                                <CallButton />
                            </button>
                        )}
                        <li className={`cursor-pointer ${color ? 'text-black' : 'text-white'}`}>Sign in</li>
                    </ul>
                </div>
            </nav >
            {/* Pop up  */}
            {showPopUp && (
                <div className="absolute w-[340px] h-[70px] bg-white text-black flex justify-center items-center shadow-lg rounded-xl right-60">
                    <div className="">
                        <a href="tel:+14155238837">Call us anytime at <span className="underline">415-523-8837</span></a>
                    </div>
                </div>
            )}
        </div>
    )
}

