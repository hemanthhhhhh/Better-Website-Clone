import Image from "next/image";
import Arrow from "../Icons/Arrow";

export default function Box1() {
    return (
        <a className="flex w-full max-w-[450px] cursor-pointer flex-col gap-8 rounded-base bg-successBackground px-6 py-10 rounded-lg" href="/content/buying-your-first-home-with-better-mortgage/">
            <div className="flex flex-col gap-6">
                <h4 className="font-bold leading-heading m-0 p-0 w-auto md:text-2xl text-xl md:tracking-normal tracking-normal text-backgroundInversePrimary lg:text-xl">
                    Buying your first home with Better
                </h4>
                <Arrow/>

            </div>
            <Image alt="First Home" width="200" height="200" className="w-full rounded-lg object-cover h-[160px]" src="https://media.better.com/better-com/homepage/learning-center/first-home.webp" />
        </a>
    )
}