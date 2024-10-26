import Image from "next/image";
import BetterMortage from "../components/Icons/BetterMortage";
import CallButton from "../components/Icons/CallButon";
import HomeIcon from "../components/Icons/HomeIcon";
import Mortage from "../components/Icons/MortageIcon";
import Cash from "../components/Icons/Cash";
import AboutCircle from "../components/Icons/aboutCircle";
import Dollar from "../components/Icons/Dollar";
import CellPhone from "../components/Icons/CellPhone";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Start() {
    return (
        <>
            <header className="top-0 sticky">
                <nav className="flex justify-around mt-10 ">
                    {/* Left Side  */}
                    <div className="mr-auto">
                        <div className="ml-40">
                            <BetterMortage />
                        </div>
                    </div>
                    {/* Right Side  */}
                    <div className="ml-auto">
                        <div className="mr-40">
                            <button className="">
                                <div className="flex mx-auto gap-4 justify-between items-center">
                                    <div className="rounded-full bg-green-200 p-2">
                                        <CallButton className="" />
                                    </div>
                                    <h5 className="css-1tb76b9">Need help? Call (415) 523 8837</h5>
                                </div>
                            </button>
                        </div>
                    </div>
                </nav>
                <div className="line">
                </div>
                <div className="image-lady mx-auto -mt-6">
                    <Image data-size="medium" src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" alt="Spokesperson" className="image rounded-full" width={48} height={48} />
                </div>
            </header>

            <section>
                <div className="text-center mt-10">
                    <h1 className="text-5xl font-semibold">Hi, I am Bestie <br /> What can I help you with?</h1>
                </div>

                <div className="flex justify-center mt-10">
                    <button className="css-3js0wx gap-5">
                        <div className="css-1etrdwv">
                            <HomeIcon />
                        </div>
                        <span className="css-8y1shf text-left">Buying a home</span>
                    </button>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="css-3js0wx gap-5">
                        <div className="css-1etrdwv">
                            <Mortage />
                        </div>
                        <span className="css-8y1shf text-left">Refinance my mortage</span>
                    </button>
                </div>
                <div className="flex justify-center mt-5">
                    <button className="css-3js0wx gap-5">
                        <div className="css-1etrdwv">
                            <Cash />
                        </div>
                        <span className="css-8y1shf text-left">Get cash from my home</span>
                    </button>
                </div>
            </section>

            <div className="flex mx-auto pt-24 justify-center gap-5">
                <div className="text-center">
                    <div className="text-3xl mb-3 font-semibold">$100B</div>
                    <div className="cust400">home loans funded entirely online</div>
                </div>
                <div className="text-center">
                    <div className="text-3xl mb-3 font-semibold">$400K</div>
                    <div className="cust400">Customers who chose a Better Mortgage</div>
                </div>
            </div>

            <div className="py-32 w-[700px] mx-auto">
                <div className="aboutBox">
                    <p className="">After a few questions, you ll unlock:</p>

                    <div className="flex flex-col gap-2 mt-2">
                        <div className="flex gap-3 justify-center  mt-5">
                            <AboutCircle />
                            <p className="">Custom mortgage rates</p>
                        </div>
                        <div className="flex gap-3 justify-center  mt-5">
                            <Dollar />
                            <p className="">Exclusive offers</p>
                        </div>
                        <div className="flex gap-3 justify-center mt-5">
                            <CellPhone />
                            <p className="">A personalized dashboard</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}