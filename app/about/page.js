import Image from "next/image";
import PauseButton from "../components/Icons/PauseButton";
import SoftBank from "../components/Icons/SoftBank";
import Ally from "../components/Icons/Ally";
import Citi from "../components/Icons/Citi";
import Bank from "../components/Icons/Bank";
import Goldman from "../components/Icons/Goldman.";
import Kpcb from "../components/Icons/Kpcb";
import AmerExp from "../components/Icons/AmerExp";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
        <Navbar colors="bg-container"/>
            <div className="bg-accentBorderInverseSecondary min-h-[940px]">
                <section className="py-36">
                    <div className="flex justify-center flex-col ">
                        <h1 className="font-bold text-xl text-center text-textHighlight">
                            Our mission
                        </h1>
                        <h2 className="font-bold text-textPrimary text-4xl mt-8 text-center">
                            We’re making homeownership simpler, faster — <br /> and most importantly, more accessible for all <br /> Americans.
                        </h2>
                    </div>
                </section>

                <section className="flex justify-evenly">
                    {/* Left Side  */}
                    <div className="flex flex-col max-w-[550px]">
                        <h2 className="text-3xl font-semibold mb-5">The status quo is broken</h2>
                        <p className="text-textSecondary">The traditional processes around homeownership are opaque and stressful. Fees aren’t transparent and some are simply outrageous in size. Traditional mortgage lending is rife with unnecessary fees and slow, painful processes. It’s a system set up to benefit insiders — not you. Better.com CEO, Vishal Garg, set out to change that.</p>
                        <button className="bg-green-600 mt-6 py-4 px-4 w-[35%] rounded-xl text-white font-semibold">Read Vishal Story</button>
                    </div>
                    {/* Right Side  */}
                    <div className="flex relative items-center justify-center">
                        <button className="relative">
                            <Image alt="" height={750} width={500} src="https://media.better.com/video/vishal-mission.jpg" />
                        </button>
                        <PauseButton className="absolute inset-0 m-auto" />
                    </div>
                </section>

            </div>

            <section className="bg-backgroundInverseSecondary px-20 py-20">
                <div className="m-auto max-w-screen-lg">
                    <h2 className="font-bold text-3xl  text-white">How we’re changing things
                    </h2><p className="font-normal text-left text-white text-base mt-8">
                        Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
                    </p>
                    <p className="font-normal leading-body m-0 p-0 text-left text-white text-base mt-4">
                        That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
                    </p>
                </div>
            </section>


            <section className="px-20 py-28">
                <h2 className="font-bold text-textPrimary w-auto text-3xl text-center">
                    Backed by
                </h2>
                <div className="flex justify-around mt-20">
                    <a href="https://group.softbank/en/philosophy" target="_blank">
                        <SoftBank />
                    </a>
                    <a href="https://www.ally.com/" target="_blank">
                        <Ally />
                    </a>
                    <a href="https://www.citi.com/" target="_blank">
                        <Citi />
                    </a>
                    <a href="https://bank.pingan.com/english/index.shtml" target="_blank">
                        <Bank />
                    </a>
                    <a href="https://www.goldmansachs.com/" target="_blank">
                        <Goldman />
                    </a>
                    <a href="https://www.kleinerperkins.com/" target="_blank">
                        <Kpcb />
                    </a>
                    <a href="https://www.americanexpress.com/en-in/?comm_track_id=r_e2ed8b3a-4e13-447f-9cac-cfd9a4c47d42_2_x" target="_blank">
                        <AmerExp />
                    </a>
                </div>
            </section>

            <section>
                <div className="text-3xl text-center mb-20">
                    <p className="font-semibold">Company Timeline</p>
                </div>
                <div className="relative m-auto max-w-[300px] rounded-lg">
                    <div className="relative flex flex-col items-center rounded-lg">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2014
                            </h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base py-10 px-6 -ml-base -translate-x-1/2">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.
                            </p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2015</h3>
                        </div>
                        <div className="rounded-sm py-6 px-10 relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2016</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base py-10 px-10 -ml-base -translate-x-1/2">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary py-4 px-6 text-base">Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2017</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg px-10 py-6  ml-8 translate-x-1/2 lg:ml-3xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better expands into the real estate market with Better Real Estate.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2018</h3>
                        </div>
                        <div className="rounded-sm relative w-full px-6 py-6 bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage partners with Ally Bank to build Ally powered by Better.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2019</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base px-6 py-6 ml-8 translate-x-1/2 lg:ml-3xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg text-white">2021</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl px-6 py-6 -ml-base -translate-x-1/2 lg:-ml-2xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better acquires Trussle — The UK’s most innovative online mortgage broker.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2022</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary px-6 py-6 p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                Better Mortgage becomes the first fintech to fund $100B home loans entirely online.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">2023</h3>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg  px-6 py-6 -ml-base -translate-x-1/2 lg:-ml-2xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to
                                <a href="/with/one-day-mortgage-terms/">full mortgage Commitment Letter within 24 hours
                                </a>vs. typical industry process of 30+ days.
                            </p>
                        </div>
                        <div className="rounded-sm px-6 py-6 relative w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl"><p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches the fully digital 3-day HELOC².
                        </p>
                        </div>
                        <div className="rounded-sm relative w-full bg-accentSecondary my-lg p-base lg:p-xl -ml-base -translate-x-1/2 lg:-ml-2xl"><p className="font-normal px-6 py-6 leading-body m-0 p-0 text-left text-textSecondary text-base">Better Mortgage launches One Day Verified Approval Letter.</p>
                        </div>
                    </div>
                    <div className="relative flex flex-col items-center">
                        <div className="inline-block rounded-full bg-backgroundInverseSecondary px-8 py-2">
                            <h3 className="font-bold leading-heading m-0 p-0 tracking-normal w-auto text-lg md:text-xl text-white">Today</h3>
                        </div>
                        <div className="rounded-sm relative px-6 py-6 w-full bg-accentSecondary my-lg p-base lg:p-xl ml-8 translate-x-1/2 lg:ml-3xl">
                            <p className="font-normal leading-body m-0 p-0 text-left text-textSecondary text-base">
                                You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.
                                <a className="rounded-sm text-base text-center font-bold  outline-none   text-interactiveForegroundPrimary bg-interactivePrimary hover:bg-accentPrimary p-2 h-2xl items-center justify-center mt-4 flex w-fit" href="/start">
                                    Get started
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <hr className="border-strokeBorder py-5 mt-20"/>
        </>
    )
}