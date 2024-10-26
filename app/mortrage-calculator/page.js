"use client"

import Image from "next/image";
import { useEffect, useState } from "react";
import MortgageTable from "../components/MortrageTable";
import Navbar from "../components/Navbar";

export default function MortrageCalculator() {

    const [homePrice, setHomePrice] = useState(300000); // Example default
    const [downPayment, setDownPayment] = useState(60000); // Example default
    const [interestRate, setInterestRate] = useState(6.5); // Annual interest rate
    const [loanTerm, setLoanTerm] = useState(30); // Loan term in years
    const [monthlyPayment, setMonthlyPayment] = useState(0);
    const [downPaymentPercentage, setDownPaymentPercentage] = useState(20)
    const [zipCode, setZipCode] = useState(10091);

    useEffect(() => {
        setDownPayment((homePrice * downPaymentPercentage) / 100);
    }, [homePrice, downPaymentPercentage]);

    useEffect(() => {
        const loanAmount = homePrice - downPayment;

        if (loanAmount > 0) { // Only calculate if loanAmount is positive
            const monthlyInterestRate = interestRate / 100 / 12;
            const numberOfPayments = loanTerm * 12;

            const payment = loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments) /
                (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

            setMonthlyPayment(payment.toFixed(2));
        } else {
            setMonthlyPayment(0); // Set to 0 if no loan is required
        }
    }, [homePrice, downPayment, interestRate, loanTerm]);


    return (
        <>
        <Navbar colors="bg-container"/>
            <section className="bg-successBackground min-h-[410px]">
                <div className="flex-1 mt-20 ml-20">
                    <h1 className="text-3xl font-semibold">Mortrage calculator</h1>
                    <p className="w-[50%]">Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.</p>
                </div>
                <div className="flex justify-around mt-7 ml-20 mx-auto">
                    <div className="flex flex-col">
                        <label className="mb-1 text-textPrimary font-semibold">Home Price</label>
                        <input type="number" value={homePrice} onChange={(e) => setHomePrice(Number(e.target.value))} className="w-[300px] h-14 border border-b-2 border-green-700 rounded-sm" />
                    </div>

                    <div>
                        <h1 className="text-textPrimary mb-1 font-semibold text-xl">Monthly Payment</h1>
                        <h1 className="text-4xl font-bold">${monthlyPayment}/mo</h1>
                    </div>

                    <div className="mt-5">
                        <button className="p-4 bg-interactivePrimary hover:bg-accentPrimary font-semibold rounded-lg w-[200px] text-white ">Get approved</button>
                    </div>
                </div>
                <div className="mt-16 flex justify-around">
                    <div className="flex gap-16 mt-1">
                        <div className="">
                            <div className="w-[270px] h-14 border border-b-2 bg-backgroundTertiary border-green-700 rounded-lg" >
                                <div className="text-interactiveForegroundMuted text-xs ml-3 mt-1">Zip Code</div>
                                <input
                                    type="text"
                                    value={zipCode}
                                    onChange={(e) => setZipCode(e.target.value)}
                                    className="font-semibold text-lg ml-3 mb-1 bg-transparent border-none"
                                />
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[270px] h-14 border border-b-2 bg-backgroundTertiary border-green-700 rounded-lg ">
                                <div className="text-interactiveForegroundMuted text-xs ml-3 mt-1">Down Payment</div>
                                <div className="flex items-center">
                                    <div className="font-bold text-xl ml-2">$</div>
                                    <input
                                        type="number"
                                        value={downPayment.toFixed(2)}
                                        onChange={(e) => setDownPayment(Number(e.target.value))}
                                        className="font-semibold text-lg ml-3 w-[195px] bg-transparent"
                                    />
                                    <input
                                        value={downPaymentPercentage}
                                        onChange={(e) => setDownPaymentPercentage(Number(e.target.value))}
                                        className="font-semibold text-lg h-[20px] ml-3 w-[20px] bg-transparent border-none"
                                    />
                                    <span><strong>%</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-16 mb-10">
                        <div className="text-interactiveForegroundMuted text-xs ml-3 mt-1">
                            <div className="w-[270px] h-14 border border-b-2 bg-backgroundTertiary border-green-700 rounded-lg flex flex-col items-start" >
                                <div className="text-interactiveForegroundMuted text-xs ml-3 mt-1">Interest Rate</div>
                                <div className="flex">
                                    <input
                                        type="number"
                                        value={interestRate || 0}
                                        onChange={(e) => setInterestRate(Number(e.target.value))}
                                        className="font-semibold text-lg ml-3 text-black bg-transparent"
                                        placeholder="Interest Rate (%)"
                                    />
                                    <span className="font-bold text-xl mb-2 mr-5 text-black">%</span>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <div className="w-[270px] h-14 border border-b-2 bg-backgroundTertiary border-green-700 rounded-lg flex flex-col items-start" >
                                <div className="text-interactiveForegroundMuted text-xs ml-3 mt-1">Length of Loan</div>
                                <select
                                    value={loanTerm}
                                    onChange={(e) => setLoanTerm(Number(e.target.value))}
                                    className="font-semibold text-lg ml-3 w-full h-full bg-transparent"
                                >
                                    <option value={15}>15 years</option>
                                    <option value={20}>20 years</option>
                                    <option value={30}>30 years</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-[1250px] ml-24">
                <div className="mt-20 mb-14">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">How does a mortgage calculator help me?</h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.</p>
                </div>
                <hr className="border-strokeDivider border" />
                <div className="mt-20 mb-14">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">How much monthly mortgage payment can I afford?</h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Lenders determine how much you can afford on a monthly housing payment by calculating your debt-to-income ratio (DTI). The maximum DTI you can have in order to qualify for most mortgage loans is often between 45-50%, with your anticipated housing costs included.
                        <br /><br />
                        Your DTI is the balance between your income and your debt. It helps lenders understand how safe or risky it is for them to approve your loan. A DTI ratio represents how much of your gross monthly income is spoken for by creditors, and how much of it is left over to you as disposable income. It’s most commonly written as a percentage. For example, if you pay half your monthly income in debt payments, you would have a DTI of 50%.</p>
                </div>
                <div className="ml-60">
                    <p className=" text-textPrimary mb-4">Formula for calculating your debt-to-income (DTI) ratio:</p>
                    <Image alt="Mortgage calculator | Debt to income ratio (DTI) formula" width="780" height="153" src="https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg" />
                </div>
                <div className="ml-60 mt-3 mb-20">
                    <p className="text-textPrimary mb-4">Here’s an example of what calculating your DTI might look like:</p>
                    <Image alt="Mortgage calculator | Debt to income ratio (DTI) formula example" loading="lazy" width="780" height="525" decoding="async" data-nimg="1" style="color:transparent" src="https://media.better.com/better-com/mortgage-calculator/dti-example.jpg" />
                </div>
                <hr className="border-strokeDivider border" />
                <div className="mt-20 mb-12">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">How to calculate monthly mortgage payments?</h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable. While not typically included in your mortgage payment, homeowners also pay monthly utilities and sometimes pay homeowners association (HOA) fees, so it’s a good idea to factor these into your monthly budget. This mortgage calculator factors in all these typical monthly costs so you can really crunch the numbers.</p>
                </div>
                <div className="mt-20 mb-12">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">Formula for calculating monthly mortgage payments</h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula for calculating principal and interest yourself:</p>
                </div>
                <div className="flex flex-col ml-64">
                    <Image alt="Mortgage calculator | Monthly mortgage payment formula" loading="lazy" width="780" height="126" decoding="async" data-nimg="1" style="color:transparent" src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg" />
                    <div>Where:</div>
                    <ul className="text-textPrimary list-disc pl-5 mb-3">
                        <li className="mb-2"><strong>M</strong> is monthly mortgage payments</li>
                        <li className="mb-2"><strong>P</strong> is the principal loan amount (the amount you borrow)</li>
                        <li className="mb-2"><strong>r</strong> r is the monthly interest rate <br /> (annual interest rate divided by 12 and expressed as a decimal)
                            <br />
                            <span className="text-xs mb-1">For Example:</span>
                            <div className="text-xs mb-1">if the annual interest rate is <b>5%</b></div>
                            <div className="text-xs">the monthly rate would be <b>0.05/12</b> = <b>.00417</b>, or <b>.417%</b></div>
                        </li>
                        <li><b>n</b> is the total number of payments in months
                            <br />
                            <span className="text-xs mb-1">For Example:</span>
                            <div className="text-xs">for a 30-year loan, n = 30×12 = <b>360</b> months</div>
                        </li>
                    </ul>
                    <div>
                        <div className="mb-3 text-textPrimary">Here’s a simple example:</div>
                        <Image alt="Mortgage calculator | Monthly mortgage payment formula example" width="780" height="221" src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg" />
                    </div>
                </div>
                <div className="mt-3">This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</div>

                <div className="mt-20 mb-12">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">How to use this mortgage calculator?</h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">Play around with different home prices, locations, <a className="font-normal underline text-interactivePrimary" href="/faq/loan-process/down-payment-definition/">down payments</a>, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.
                        <br /><br />
                        Increasing your down payments and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, <a className="font-normal underline text-interactivePrimary" href="/content/what-is-pmi-or-private-mortgage-insurance/">private mortgage insurance (PMI)</a> costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.
                        <br /><br />
                        The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the <a className="font-normal underline focus:outline-interactivePrimary text-interactivePrimary" href="/how-much-house-can-I-afford/">Better home affordability calculator</a>.
                        <br /><br />
                        Fun fact: <a className="font-normal underline text-interactivePrimary" href="/content/how-to-calculate-property-tax-on-a-house/">Property tax rates</a> are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.</p>
                </div>
                <div className="mt-20 mb-12">
                    <h2 className="font-bold text-textPrimary leading-heading w-auto text-2xl mb-5">
                        Do you know your property tax rate?
                    </h2>
                    <p className="font-normal leading-body m-0 p-0 text-left text-textPrimary text-base">While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from <a className="font-normal underline text-interactivePrimary" href="https://www.forbes.com/sites/andrewdepietro/2023/09/01/property-taxes-by-state-a-breakdown-of-the-highest-and-lowest-property-taxes-by-state">Forbes</a> breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate:</p>
                </div>
                <MortgageTable/>
            </section>
            <hr className="py-5 border-strokeBorder mt-24"/>
        </>
    )
}