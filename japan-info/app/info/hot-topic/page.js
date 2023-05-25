import React from "react";
import Image from "next/image";

export default function HotTopic() {
    return (
        <div className="relative">
            <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
                <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
                    <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
                        <Image
                            className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
                            height={1406}
                            width={2107}
                            src={'/Japan-2107x1406.jpg'}
                            alt=""
                        />
                    </div>
                </div>
                <div className="px-6 lg:contents">
                    <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
                        <p className="text-base font-semibold leading-7 text-blue-600">Hot news</p>
                        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Political Change</h1>
                        <p className="mt-6 text-xl leading-8 text-gray-700">
                            A hot topic in Greece right now is the political situation.
                        </p>
                        <div className="mt-10 max-w-xl text-base leading-7 text-gray-700 lg:max-w-none">
                            <p>
                                After a recent election, Prime Minister Kyriakos Mitsotakis
                                center-right New Democracy party dominated but failed to secure an outright majority in Parliament,
                                leading to the decision to hold another election as early as June 25th. The party won double the votes
                                of the left-wing Syriza party and nearly four times those of the third-place Socialist Pasok, but a one-off electoral law in place
                                during the election denied them a governing majority.
                            </p>
                            <p className="mt-8">
                                With 99.70% of the votes counted, New Democracy had 40.79% and 146 seats, five short of a majority,
                                winning in 58 of the country&apos;s 59 constituencies. Syriza received 20.07% of the votes and 71 seats,
                                while Pasok came in third with 11.46% of the vote. The turnout was 61%.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">International Reaction.</h2>
                            <p className="mt-6">
                                This situation has been welcomed by markets as it seems to signal the end of the political uncertainty
                                that troubled the NATO and European Union member following the 2009-18 financial crisis. The Athens stock
                                exchange general index surged more than 7% and Greek bonds rallied.
                            </p>
                            <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Conclusion.</h2>
                            <p className="mt-6">
                                Mitsotakis, 55, met with President Katerina Sakellaropoulou, who formally gave him the mandate to try to
                                form a government, but he declared there would be no point as he saw no way for the current Parliament to form a
                                government. He indicated that he would return the mandate so that new elections could be held as soon as possible.
                                Mitsotakis had long suggested that he would not seek a coalition partner, whatever the election outcome, in the
                                interest of stable governance.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}