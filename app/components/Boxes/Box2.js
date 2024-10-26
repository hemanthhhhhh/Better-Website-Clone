import Image from "next/image";
import Arrow from "../Icons/Arrow";

export default function Box2() {
    return (
        <a className="flex ml-8 w-full cursor-pointer flex-col mr-5 gap-8 rounded-lg bg-successBackground px-6 py-5" href="/b/one-day-mortgage/">
            <div className="flex justify-around">

                <div className="max-w-[500px]">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold leading-heading m-0 p-0 w-auto text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                            One Day Mortgage
                            <sup>1</sup>
                        </h4>
                        <p className="flex-1 text-sm text-backgroundInversePrimary">
                            Kick your home loan into hyperdrive. Going from locked rate to Commitment Letter takes weeks for traditional lenders. We do it in a single day. Traditional lenders deliver a Commitment Letter in a few weeks.
                            <sup>1</sup>
                        </p>
                        <div className="flex items-end justify-between">
                            <div className="group">
                                <Arrow/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Image alt="One day mortgage" width="200" height="200" className="w-full rounded-base object-cover h-[320px]" src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp" />
                </div>
            </div>
        </a>
    )
}