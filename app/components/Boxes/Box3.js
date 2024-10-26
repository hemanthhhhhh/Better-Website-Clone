import Image from "next/image";
import Arrow from "../Icons/Arrow";

export default function Box3() {
    return (
        <a className="flex max-w-[1050px] mr-5 mt-5 cursor-pointer flex-col gap-8 rounded-lg bg-successBackground px-6 py-5" href="/b/one-day-mortgage/">
            <div className="flex justify-around">
                <div className="mr-5">
                    <Image alt="One day mortgage" width="200" height="200" className="w-full rounded-lg object-cover h-[320px]" src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp" />
                </div>

                <div className="max-w-[500px]">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold leading-heading m-0 p-0 w-auto text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                            Better HELOC
                            <sup>1</sup>
                        </h4>
                        <p className="flex-1 text-sm text-backgroundInversePrimary">Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup>. Access up to 90% of your home equity as cash in as little as 7 days.<sup>3</sup></p>
                        <div className="flex items-end justify-between">
                            <div className="group">
                                <Arrow/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </a>
    )
}