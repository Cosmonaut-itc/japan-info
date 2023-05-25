import React from "react";
import { InboxIcon, TrashIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '',
        description:
            'Nikolaou, I. (2015, May). Negotiating the Greek way. College of Europe. https://www.coleurope.eu/training-projects/newsletter/archive/2015-issue-3/negotiating-greek-way',
        href: 'https://www.coleurope.eu/training-projects/newsletter/archive/2015-issue-3/negotiating-greek-way',
        icon: InboxIcon,
    },
    {
        name: '',
        description:
            'Schroll-Machl, S. (n.d.). Doing Business with Greece. Leadership Crossroads. Retrieved May 24, 2023, from http://www.leadershipcrossroads.com/mat/cou/Greece.pdf',
        href: 'http://www.leadershipcrossroads.com/mat/cou/Greece.pdf',
        icon: UsersIcon,
    },
    {
        name: '',
        description:
            'CIA (2023). Greece. Retrieved from https://www.cia.gov/the-world-factbook/countries/greece/#economy  ',
        href: 'https://crossculture2go.com/negotiations-in-mexico/',
        icon: LightBulbIcon,
    },
]

export default function References() {
    return (
        <div className="py-24 lg:pt-12 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        References
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        This are the websites I consulted my information from.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600 overflow-auto">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-blue-600">
                                            Learn more <span aria-hidden="true">→</span>
                                        </a>
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    )
}