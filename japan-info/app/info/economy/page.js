import React from 'react';
import Image from "next/image";
import {
    GlobeAsiaAustraliaIcon,
    GlobeAmericasIcon,
    BanknotesIcon,
    CloudArrowUpIcon, LockClosedIcon, ServerIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Main Exports.',
        description: 'Refined petroleum, packaged medicaments, aluminum plating, fresh fish, and fruit (particularly oranges, olives, and apricots)\n',
        icon: GlobeAsiaAustraliaIcon,
    },
    {
        name: 'Main Imports.',
        description: 'Crude petroleum, packaged medicaments, cars, refined petroleum, and computers\n',
        icon: GlobeAmericasIcon,
    },
    {
        name: 'Import Partners.',
        description: 'China 24%, United States 10%, Australia 7%, South Korea 4%, Taiwan 4% (2021)',
        icon: BanknotesIcon,
    },
    {
        name: 'Export Partners.',
        description: 'China 21%, United States 18%, South Korea 7%, Taiwan 7%, Thailand 4% (2021)',
        icon: BanknotesIcon,
    },
]

const economicSectorFeatures = [
    {
        name: 'Technology.',
        description:
            'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Industry.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: LockClosedIcon,
    },
    {
        name: 'Agriculture.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.',
        icon: ServerIcon,
    },
]

const stats = [
    { id: 1, name: 'GDP (2021 est.)', value: '314.427 billion' },
    { id: 2, name: 'Inflation (2020 est.)', value: '-2%' },
    { id: 3, name: 'Unemployment (2020 est.)', value: '16.3%' },
    { id: 4, name: 'Imports (2021 est.)', value: '103.532 billion ' },
    { id: 5, name: 'Exports (2021 est.)', value: '87.521 billion' },
    { id: 6, name: 'euros (EUR) per US dollar (2021 est.)', value: '0.845' },
]



export default function Economia(){
    return(
        <div className="py-24 lg:pt-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Japanese</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Economy</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        It&apos;s the fourth largest economies in the world, with a trade oriented an diversified industrial base.
                    </p>
                </div>
            </div>
            <div className="relative overflow-hidden pt-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <Image
                        src={"/14japan-economy-1-videoSixteenByNine3000.jpg"}
                        alt="App screenshot"
                        className="mb-[-8%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                        width={2432}
                        height={1500}
                    />
                    <div className="relative" aria-hidden="true">
                        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
                    </div>
                </div>
            </div>
            <div className="py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                        {stats.map((stat) => (
                            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                                <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="mx-auto lg:mt-3 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
                <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                    {features.map((feature) => (
                        <div key={feature.name} className="relative pl-9">
                            <dt className="inline font-semibold text-gray-900">
                                <feature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                                {feature.name}
                            </dt>{' '}
                            <dd className="inline">{feature.description}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            <div className="mx-auto max-w-7xl pt-24 px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:ml-auto lg:pl-4 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-red-600">Production</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Economic Sectors</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque,
                                iste dolor cupiditate blanditiis ratione.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                {economicSectorFeatures.map((ecoFeature) => (
                                    <div key={ecoFeature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <ecoFeature.icon className="absolute left-1 top-1 h-5 w-5 text-red-600" aria-hidden="true" />
                                            {ecoFeature.name}
                                        </dt>{' '}
                                        <dd className="inline">{ecoFeature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                    <div className="flex items-start justify-end lg:order-first">
                        <Image
                            src={"/japan-top-tech-company-1.jpg"}
                            alt="Product screenshot"
                            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            width={2432}
                            height={1442}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}