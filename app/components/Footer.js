import Image from "next/image";
import Better from "./Icons/Better";

export default function Footer() {
    return (
        <footer className="py-10">
            <div className="flex justify-around">
                <div className="max-w-[27%]">
                    <Better />
                    <div className="mt-9 mb-3 text-md">
                        <p className="text-textPrimary">Better is a family of companies serving all your homeownership needs.</p>
                    </div>
                    <div className="mb-5">
                        <Image height={200} width={155} alt="" src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg" className="" />
                        <p className="mt-2">We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                    </div>
                    <div className="mb-5">
                        <Image height={200} width={155} alt="" src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg" className="" />
                        <p className="mt-2">Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                    </div>
                    <div className="mb-5">
                        <Image height={200} width={155} alt="" src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg" className="" />
                        <p className="mt-2">Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                    </div>
                    <div className="mb-5">
                        <Image height={200} width={155} alt="" src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg" className="" />
                        <p className="mt-2">Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                    </div>
                    <div className="mb-5">
                        <Image height={300} width={155} alt="" src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg" className="" />
                        <p className="mt-2">Get transparent rates when you shop for title insurance all in one convenient place.</p>
                    </div>
                </div>
                <div className="max-w-[13%]">
                    <div className="mt-16 mb-8">
                        <h1 className="font-semibold text-lg">Resources</h1>
                    </div>
                    <ul className="gap-5 flex flex-col">
                        <li>Home affordability calculator</li>
                        <li>Mortgage calculator</li>
                        <li>Free Mortrage Calculator</li>
                        <li>Mortage Calculator with taxes</li>
                        <li>Mortage calculator with PMI</li>
                        <li>Rent vs buy calculator</li>
                        <li>HELOC payment calculator</li>
                        <li>HELOC vs cash-out refinance calculator</li>
                        <li>Buy a home</li>
                        <li>Sell a home</li>
                        <li>Get home inspection</li>
                    </ul>
                </div>
                <div className="max-w-[13%]">
                    <div className="mt-16 mb-8">
                        <h1 className="font-semibold text-lg">Comapany</h1>
                    </div>
                    <ul className="gap-5 flex flex-col">
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Media</li>
                        <li>Partner With Us</li>
                        <li>Learning Center</li>
                        <li>FAQs</li>
                        <li>Investor Relations</li>
                    </ul>
                </div>
                <div className="max-w-[13%]">
                    <div className="mt-16 mb-8">
                        <h1 className="font-semibold text-lg">Contact Us</h1>
                    </div>
                    <ul className="gap-5 flex flex-col">
                        <li>hello@better.com</li>
                        <li>415-523-8837</li>
                        <li>FAQ</li>
                        <li>Glossary</li>
                        <li>Learning Center</li>
                        <li>FAQs</li>
                        <li>Investor Relations</li>
                    </ul>
                    <div className="mt-16 mb-8">
                        <h1 className="font-semibold text-lg">Legal</h1>
                    </div>
                    <ul className="gap-5 flex flex-col">
                        <li>NMLS Consumer Access</li>
                        <li>Privacy Policy</li>
                        <li>Terms of Use</li>
                        <li>Disclosures & Licensing</li>
                        <li>Affliated Buisness</li>
                        <li>Browser Disclamer</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}