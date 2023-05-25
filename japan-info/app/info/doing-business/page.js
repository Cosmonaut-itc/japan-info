import React from "react";
import Image from "next/image";
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";

const timeline = [
    {
        name: 'Information Sharing',
        description:
            'Greeks value trust in their business relations and prefer face-to-face meetings for negotiations. They appreciate a detailed presentation and discussion of business propositions.\n',
        date: 'Step 1',
        dateTime: '2021-08',
    },
    {
        name: 'Pace',
        description:
        ' Negotiations in Greece can often be slow. Patience is essential since Greeks take time to build relationships and make decisions.\n',
        date: 'Step 2',
        dateTime: '2021-12',
    },
    {
        name: 'Negotiation Strategies & Techniques',
        description:
        'Both integrative and distributive negotiation techniques are used in Greece. Greeks often start with a distributive approach, presenting an ambitious initial position, and expect some level of bargaining. However, the ultimate goal is to find a win-win outcome, hence an integrative approach is appreciated as well.\n',
        date: 'Step 3',
        dateTime: '2022-02',
    },
    {
        name: 'Decision Making',
        description:
            'Decisions are often made by the person with the most authority. It\'s important to build a strong relationship with this individual.\n',
        date: 'Step 4',
        dateTime: '2022-12',
    },
    {
        name: 'Women in Business',
        description:
            'While Greece has traditionally been a male-dominated society, the presence of women in business has been increasing. Nevertheless, businesswomen might still face more challenges than their male counterparts.\n',
        date: 'Step 5',
        dateTime: '2022-12',
    },

]

const similaritiesDiferences = [
    {
        name: 'Power Balance',
        description:
            'Both Greece and Mexico score high on Uncertainty Avoidance and Power Distance indices, meaning both societies have a high level of inequality of power and wealth within the society and both try to minimize the occurrence of uncertain and ambiguous situations.\n',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Negotiations',
        description:
            'Japanese negotiations may take longer due to the emphasis on consensus decision-making, while Mexican negotiations may be faster once a strong personal relationship is established.\n',
        icon: LockClosedIcon,
    },
    {
        name: 'Priorities',
        description:
            'Greece scores high on Masculinity, while Mexico scores high on Femininity. This means Greece tends to value success, competition, and achievement, while Mexico values quality of life, and caring for others.\n',
        icon: ArrowPathIcon,
    },
    {
        name: 'Formality',
        description:
            'Mexicans might find Greek business culture more formal.\n',
        icon: FingerPrintIcon,
    },
]

const faqs = [
    {
        question: 'Dont: ',
        answer:
        '- Avoid hard selling, pressure tactics, and rapid-fire discussions.\n'
    },
    {
        question: '',
        answer:
            ' - Do not interrupt or rush during a meeting. Greeks prefer a slower, thoughtful pace.\n'
    },
    {
        question: '',
        answer:
            ' - Do not make exaggerated claims or promises you cannot fulfill.\n'
    },
    {
        question: '',
        answer:
            '  - Avoid controversial topics such as politics and religion in your discussions.\n'
    },
    {
        question: 'Do: ',
        answer:
            '- Try to establish personal relationships.\n'
    },
    {
        question: '',
        answer:
            ' - Be patient as negotiations can take time.\n'
    },
    {
        question: '',
        answer:
            '- Prepare for a detailed discussion and presentation.\n',
    },
    {
        question: '',
        answer:
            ' - Respect hierarchy and address the person with the highest authority for decision making.\n',
    },
    // More questions...
]

export default function Business(){
    return(
        <div className="lg:pt-1 sm:py-32">
            <div className="relative isolate overflow-hidden px-6 py-6 lg:pt-12 sm:py-32 lg:overflow-visible lg:px-0">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                    <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                        <div className="lg:pr-4">
                            <div className="lg:max-w-lg">
                                <p className="text-base font-semibold leading-7 text-blue-600">Business</p>
                                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Etiquette</h1>
                                <p className="mt-6 text-xl leading-8 text-gray-700">
                                    Business etiquette is important because it creates a professional, mutually respectful atmosphere and
                                    improves communication, also, when dealing with a foreign culture, having the correct etiquette can be the
                                    difference between a successful business deal and a failure.
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
                                    Here are some tips to help you navigate the business world in Greece.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                        <strong className="font-semibold text-gray-900">Closing a Deal.</strong> Closing a deal often involves a final face-to-face meeting. Greeks appreciate a firm handshake and direct eye contact. Ensure any agreed points are clearly outlined and understood by both parties.

                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Meetings.</strong> Meetings often start with small talk.
                                            Punctuality is appreciated, but meetings may not always start on time.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Time Management and Diaries.</strong> While deadlines are respected,
                                            they may be viewed as flexible. Patience and understanding are key.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Business Cards.</strong> Business cards are usually
                                            exchanged at the beginning of a meeting.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Gifts.</strong> Gifts are not typically expected in business settings,
                                            but if given, they should not be overly expensive, to avoid the impression of bribery.
                                        </span>
                                    </li>
                                </ul>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What&apos;s next?</h2>
                                <p className="mt-6">
                                    After reading this section, you are more than well prepared to start you succesful endeavors in the business environment in Greece.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mx-auto max-w-7xl px-6 lg:px-8 lg:pt-2">
                <h2 className="text-base font-semibold leading-7 text-blue-600">Negotiatons</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Process</p>
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 overflow-hidden lg:mx-0 lg:max-w-none lg:grid-cols-4 pt-12">
                    {timeline.map((item) => (
                        <div key={item.name}>
                            <time
                                dateTime={item.dateTime}
                                className="flex items-center text-sm font-semibold leading-6 text-blue-600"
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
                    <h2 className="text-base font-semibold leading-7 text-blue-600">Similarites and Differences</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Mexico & Greece
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Remember that these are general tendencies and may not apply to every individual from these cultures. It&apos;s also important to stay updated on these topics as cultures evolve and global business practices change over time.
                    </p>
                </div>
                <div className="mx-auto mt-8 max-w-2xl sm:mt-20 lg:mt-12 lg:max-w-4xl">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 lg:text-center">Similarities</h2>
                        <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900 lg:text-center">Differences</h2>
                        {similaritiesDiferences.map((simDif) => (
                            <div key={simDif.name} className="relative pl-16">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
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
                <p className="text-base font-semibold leading-7 text-blue-600">Business</p>
                <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Searching for business in Greece?</h2>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    Here are some tips to help you close the deal.
                </p>
            </div>
            <div className="mx-auto max-w-7xl px-6 py-24 sm:pt-32 lg:px-8 lg:py-40">
                <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                    <div className="lg:col-span-5">
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Do&apos;s and Dont&apos;s</h2>
                        <p className="mt-4 text-base leading-7 text-gray-600">
                            Here is some advice of what to do and what no to do when doing business in Greece.
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