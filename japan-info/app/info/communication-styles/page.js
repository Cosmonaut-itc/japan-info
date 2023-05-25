import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function CommunicationStyles(){
    return(
        <div className="px-6 py-32 lg:pt-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-blue-600">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Communication Styles</h1>
                <p className="mt-6 text-xl leading-8">
                    Greek communication styles differs from our culture, and it is important to know how to communicate with them if we want to make business.
                    Thery are caracterized by the following:
                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">Context.</strong> Greek communication is a mix of high-context and low-context style. They often use non-verbal communication and read between the lines,
                                characteristic of high-context cultures. However, they are also expressive and direct, typical of low-context cultures.

              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Small Talk.</strong> Greeks generally enjoy engaging in small talk before getting down to business. It&apos;s common to talk about one&apos;s health, family, and mutual acquaintances. Greeks appreciate honesty and directness, but be careful to avoid topics that could be seen as disrespectful or offensive, like comparing Greece negatively to other countries, or speaking disrespectfully about the Greek Orthodox Church or the country&apos;s history. Also, avoid hand gestures like the moutza (open palm, fingers extended) which is seen as highly offensive.

                            </span>
                        </li>
                    </ul>
                    <p className="mt-10">
                        This communication style tips should prepare you to face against greek top businesswomen and businessmen.
                    </p>
                </div>
                <figure className="mt-16">
                    <img
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                        src={'/49538474_605.jpg'}
                        alt=""
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                        Faucibus commodo massa rhoncus, volutpat.
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}