import React from 'react';
import Image from "next/image";
import { MapIcon, MapPinIcon, UserIcon, CurrencyYenIcon, FlagIcon, LanguageIcon, SunIcon, MusicalNoteIcon, LightBulbIcon, BoltIcon } from '@heroicons/react/20/solid'
export default function General(){
    return(
        <div className="relative isolate overflow-hidden px-6  sm:py-32 lg:overflow-visible lg:pt-12">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-blue-600">General Information</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hellenic Republic (Ελληνική Δημοκρατία)</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Greece is considered the cradle of the western civilization being the birthplace of democracy, Western philosophy, Western literature, historiography, political science,
                                major scientific and mathematical principles, theatre and the Olympic Games. Its economy is amongst the largest in the Balkans, where it is an important regional investor.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        width={500}
                        height={500}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/shutterstock_1890852892.png"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <MapIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Location.</strong> Southeastern Europe, situated on the southern end of the Balkan Peninsula and bordered by the Aegean Sea to the east, the Ionian Sea to the west, and the Mediterranean Sea to the south

                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <MapPinIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Capital.</strong> Athens
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <UserIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Number of inhabitants. </strong> Approximately 10.4 million people (2021 est.)
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CurrencyYenIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">GDP per Capita. </strong> $21,414 (as of 2020)

                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LanguageIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Language. </strong> Modern Greek
                  </span>
                                </li>
                            </ul>
                            <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ethnic Distribution</h4>
                            <p className="mt-8">
                                Predominantly Greek, with small populations of minority groups including Albanians, Turks, and Romani.
                            </p>
                            <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Type of Government</h4>
                            <p className="mt-6">
                                Parliamentary Republic with a President as the head of state and a Prime Minister as the head of government.
                            </p>
                            <div className="mt-8 lg:sticky">
                                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Representative Symbols</h3>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <FlagIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Flag.</strong> The flag of Greece, known as the "blue and white" (Γαλανόλευκη), features nine horizontal stripes of blue alternating with white, with a blue square bearing a white cross in the canton.
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/Flag_of_Greece.svg.png"}
                                            alt="japan flag"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SunIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Shield/Coat of Arms.</strong> The national emblem of Greece features a blue escutcheon with a white cross surrounded by two laurel branches.
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/Coat_of_arms_of_Greece_(colour).svg.png"}
                                            alt="Cherry Blossom"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LightBulbIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Acropolis.</strong> An ancient citadel located on a rocky outcrop above the city of Athens, containing the remains of several ancient buildings of great historical significance, the most famous being the Parthenon.
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/adventures-by-disney-europe-greece-hero-04-acropolis-1x1.webp"}
                                            alt="Koi Fish"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <BoltIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Mount Olympues </strong> n Greek mythology, Mount Olympus is the home of the Greek gods. It's the highest mountain in Greece.
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/shutterstock_1406557727-2.webp"}
                                            alt="Koi Fish"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <MusicalNoteIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">National Anthem</strong> The Hymn to Liberty (Greek: Ὕμνος εἰς τὴν Ἐλευθερίαν, Ýmnos is tīn Eleftherian)
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <div className="w-90 h-40 relative overflow-visible">
                                            <iframe width="560" height="315"
                                                    src="https://www.youtube.com/embed/5VkPRU6C-JQ"
                                                    title="YouTube video player"
                                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                    allowFullScreen>
                                            </iframe>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                    aria-hidden="true"
                >
                    <div
                        className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#055EB1] to-[#FFF9F9] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                        style={{
                            clipPath:
                                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                        }}
                    />
                </div>
            </div>

        </div>
    )
}