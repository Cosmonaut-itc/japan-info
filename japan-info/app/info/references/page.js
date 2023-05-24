import React from "react";
import { InboxIcon, TrashIcon, UsersIcon, LightBulbIcon } from '@heroicons/react/24/outline'

const features = [
    {
        name: '',
        description:
            'A guide to japanese business etiquette. (n.d.). Retrieved from https://www.americanexpress.com/en-us/business/trends-and-insights/articles/doing-business-in-japan-10-etiquette-rules-you-should-know/ ',
        href: 'https://www.americanexpress.com/en-us/business/trends-and-insights/articles/doing-business-in-japan-10-etiquette-rules-you-should-know/',
        icon: InboxIcon,
    },
    {
        name: '',
        description:
            'Kopp, R. (2020). Retrieved from https://japanintercultural.com/free-resources/articles/working-effectively-with-mexicans-what-japanese-companies-need-to-know/ ',
        href: 'https://japanintercultural.com/free-resources/articles/working-effectively-with-mexicans-what-japanese-companies-need-to-know/',
        icon: UsersIcon,
    },
    {
        name: '',
        description:
            '(2023). Retrieved from https://crossculture2go.com/negotiations-in-mexico/ ',
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
                        This are the websites I consulted mi information from.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                    <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                        {features.map((feature) => (
                            <div key={feature.name} className="flex flex-col">
                                <dt className="text-base font-semibold leading-7 text-gray-900">
                                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-red-600">
                                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    {feature.name}
                                </dt>
                                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                                    <p className="flex-auto">{feature.description}</p>
                                    <p className="mt-6">
                                        <a href={feature.href} className="text-sm font-semibold leading-6 text-red-600">
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