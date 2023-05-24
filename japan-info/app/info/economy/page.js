import React from 'react';
import Image from "next/image";
import {
    ArrowPathIcon,
    GlobeAsiaAustraliaIcon,
    GlobeAmericasIcon,
    BanknotesIcon,
    CloudArrowUpIcon, LockClosedIcon, ServerIcon,
    FingerPrintIcon, CheckCircleIcon, InformationCircleIcon,
} from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Main Exports.',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit aute id magna.',
        icon: GlobeAsiaAustraliaIcon,
    },
    {
        name: 'Main Imports.',
        description: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.',
        icon: GlobeAmericasIcon,
    },
    {
        name: 'Economic Sectors.',
        description: 'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.',
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
    { id: 1, name: 'Unemployment', value: '44 million' },
    { id: 2, name: 'Inflation', value: '$119 trillion' },
    { id: 3, name: 'GDP', value: '46,000' },
]

const timeline = [
    {
        name: 'Part 1',
        description:
            'Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.',
        date: 'Aug 2021',
        dateTime: '2021-08',
    },
    {
        name: 'Part 2',
        description:
            'Provident quia ut esse. Vero vel eos repudiandae aspernatur. Cumque minima impedit sapiente a architecto nihil.',
        date: 'Dec 2021',
        dateTime: '2021-12',
    },
    {
        name: 'Part 3',
        description:
            'Sunt perspiciatis incidunt. Non necessitatibus aliquid. Consequatur ut officiis earum eum quia facilis. Hic deleniti dolorem quia et.',
        date: 'Feb 2022',
        dateTime: '2022-02',
    },
    {
        name: 'Part 4',
        description:
            'Ut ipsa sint distinctio quod itaque nam qui. Possimus aut unde id architecto voluptatem hic aut pariatur velit.',
        date: 'Dec 2022',
        dateTime: '2022-12',
    },

]

const similaritiesDiferences = [
    {
        name: 'Similarity 1',
        description:
            'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Difference 1',
        description:
            'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
        icon: LockClosedIcon,
    },
    {
        name: 'Similarity 2',
        description:
            'Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Difference 2',
        description:
            'Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.',
        icon: FingerPrintIcon,
    },
]

const faqs = [
    {
        question: 'How do you make holy water?',
        answer:
            'You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.',
    },
    // More questions...
]

export default function Economia(){
    return(
        <div className="py-24 lg:pt-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Japanese</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Economy</p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        It's the fourth largest economy in the world, with a trade oriented an diversified industrial base.
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
            <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-red-600">Business</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Etiquette</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                    eget aliquam. Quisque id at vitae feugiat egestas.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                        <Image
                            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                            src={"/japanese-biz-header.jpg"}
                            height={505}
                            width={1013}
                            alt=""
                        />
                    </div>
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                                <p>
                                    Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet
                                    vitae sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque
                                    erat velit. Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris
                                    semper sed amet vitae sed turpis id.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Greetings.</strong> Lorem ipsum, dolor sit amet
                    consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                    blanditiis ratione.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Outfit.</strong> Anim aute id magna aliqua
                    ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Procedures.</strong> Ac tincidunt sapien
                    vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.
                  </span>
                                    </li>
                                </ul>
                                <p className="mt-8">
                                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie auctor
                                    fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices hac
                                    adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                                </p>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What's next?</h2>
                                <p className="mt-6">
                                    Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam consequat in. Convallis arcu ipsum urna nibh.
                                    Pharetra, euismod vitae interdum mauris enim, consequat vulputate nibh. Maecenas pellentesque id sed
                                    tellus mauris, ultrices mauris. Tincidunt enim cursus ridiculus mi. Pellentesque nam sed nullam sed diam
                                    turpis ipsum eu a sed convallis diam.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-base font-semibold leading-7 text-red-600">Negotiatons</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Process</p>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 pt-12">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time
                                dateTime={item.dateTime}
                                className="flex items-center text-sm font-semibold leading-6 text-red-600"
                            >
                                <svg viewBox="0 0 4 4" className="mr-4 h-1 w-1 flex-none" aria-hidden="true">
                                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                                </svg>
                                {item.date}
                                <div
                                    className="absolute -ml-2 h-px w-screen -translate-x-full bg-gray-900/10 sm:-ml-4 lg:static lg:-mr-6 lg:ml-8 lg:w-auto lg:flex-auto lg:translate-x-0"
                                    aria-hidden="true"
                                />
                            </time>
                            <p className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{item.name}</p>
                            <p className="mt-1 text-base leading-7 text-gray-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-20">
                <div className="mx-auto max-w-2xl lg:text-center">
                    <h2 className="text-base font-semibold leading-7 text-red-600">Similarites and Differences</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Mexico & Japan
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                        pulvinar et feugiat blandit at. In mi viverra elit nunc.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 lg:text-center">Similarities</h2>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 lg:text-center">Differences</h2>
                        {similaritiesDiferences.map((simDif) => (
                            <div key={simDif.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <simDif.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {simDif.name}
                                </dt>
                                <dd className="mt-2 text-base leading-7 text-gray-600">{simDif.description}</dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
            <div className="mx-auto max-w-2xl text-center lg:pt-24">
                <p className="text-base font-semibold leading-7 text-red-600">Business</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Searching for business in Japan?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Here are some tips to help you close the deal.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Do's and Dont's</h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                           Here is some advice of what to do and what no to do when doing business in Japan.
                        </p>
                    </div>
                    <div className="mt-10 lg:col-span-7 lg:mt-0">
                        <dl className="space-y-10">
                            {faqs.map((faq) => (
                                <div key={faq.question}>
                                    <dt className="text-base font-semibold leading-7 text-gray-900">{faq.question}</dt>
                                    <dd className="mt-2 text-base leading-7 text-gray-600">{faq.answer}</dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}