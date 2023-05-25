import React from 'react';
import Image from "next/image";
import { MapIcon, MapPinIcon, UserIcon, CurrencyYenIcon, FlagIcon, LanguageIcon, SunIcon, MusicalNoteIcon, LightBulbIcon } from '@heroicons/react/20/solid'
export default function General(){
    return(
        <div className="relative isolate overflow-hidden px-6  sm:py-32 lg:overflow-visible lg:pt-12">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="lg:max-w-lg">
                            <p className="text-base font-semibold leading-7 text-red-600">General Information</p>
                            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Japan</h1>
                            <p className="mt-6 text-xl leading-8 text-gray-700">
                                Japan is one of the biggest economy of the 21st century. It is a country with a rich culture and history that dates all the
                                way back to the 10th century. It is also one of the most technologically advanced countries in the world. Focused on production
                                and development, it is a democratic success in the Asian continent.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                    <Image
                        width={500}
                        height={500}
                        className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                        src="/pexels-satoshi-hirayama-1325837.jpg"
                        alt=""
                    />
                </div>
                <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                    <div className="lg:pr-4">
                        <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                            <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                <li className="flex gap-x-3">
                                    <MapIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Location.</strong> Eastern Asia, island chain between
                                        the North Pacific Ocean and the Sea of Japan, east of the Korean Peninsula
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <MapPinIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Capital.</strong> Tokyo
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <UserIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Number of inhabitants. </strong> 123,719,238 (2023 est.), most of the population
                                        resides on the coastal areas, with one third living in Kanto Plain (Tokyo)
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <CurrencyYenIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">GDP per Capita. </strong> $40,800 (2021 est.) note: data are in 2017 dollars
                  </span>
                                </li>
                                <li className="flex gap-x-3">
                                    <LanguageIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                    <span>
                    <strong className="font-semibold text-gray-900">Language. </strong> Japanese
                  </span>
                                </li>
                            </ul>
                            <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Ethnic Distribution</h4>
                            <p className="mt-8">
                                Japanese 97.9%, Chinese 0.6%, Korean 0.4%, other 1.1% (includes Vietnamese, Filipino, and Brazilian) (2017 est.)
                            </p>
                            <h4 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Type of Government</h4>
                            <p className="mt-6">
                                Japan is a parliamentary constitutional monarchy, the emperor is the head of state and the prime minister is the head of government.
                                The emperor is a ceremonial figurehead who performs ceremonial duties, but his power is limited. The prime minister is the head of the
                                government.
                            </p>
                            <div className="mt-8 lg:sticky">
                                <h3 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Representative Symbols</h3>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <FlagIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Flag.</strong> White with a large red disk (representing the sun without rays) in the center
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/japan-flag-vector-file-89261619 (1).jpg"}
                                            alt="japan flag"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <SunIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Flower.</strong> Cherry blossom
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/pexels-brett-sayles-992734.jpg"}
                                            alt="Cherry Blossom"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LightBulbIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Fish.</strong> Koi
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/Koi.jpg"}
                                            alt="Koi Fish"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <MusicalNoteIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Imperial Seal. </strong> Chrysanthemum Flower Seal
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <Image
                                            height={500}
                                            width={500}
                                            src={"/1920px-Imperial_Seal_of_Japan.svg.png"}
                                            alt="Koi Fish"
                                            className={"w-50 h-25"}
                                        />
                                    </li>
                                    <li className="flex gap-x-3">
                                        <MusicalNoteIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">National Anthem</strong> Kimi Ga Yo 君が代
                                      </span>
                                    </li>
                                    <li className="flex gap-x-3 ">
                                        <div className="w-90 h-40 relative overflow-visible">
                                            <iframe
                                                    src="https://www.youtube.com/embed/mlESQKFUNfw"
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