import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import Image from "next/image";

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
                                 <strong className="font-semibold text-gray-900">Context.</strong> Greek communication is a mix of high-context and
                                low-context style. They often use non-verbal communication and read between the lines,
                                characteristic of high-context cultures. However, they are also expressive and direct,
                                typical of low-context cultures.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Small Talk.</strong> Greeks generally enjoy engaging in small talk before getting down to business. It&apos;s common to talk about one&apos;s health, family, and mutual acquaintances. Greeks appreciate honesty and directness, but be careful to avoid topics that could be seen as disrespectful or offensive, like comparing Greece negatively to other countries, or speaking disrespectfully about the Greek Orthodox Church or the country&apos;s history. Also, avoid hand gestures like the moutza (open palm, fingers extended) which is seen as highly offensive.

                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                 <strong className="font-semibold text-gray-900">Direct Communication.</strong> Greeks are often very direct in their communication.
                                They usually say what they mean and express their opinions openly, even when those opinions might be
                                critical or negative. This directness can sometimes be seen as confrontational or blunt by people from
                                cultures that favor more indirect communication.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                 <strong className="font-semibold text-gray-900">Expressive.</strong> Greeks are typically expressive communicators.
                                They may use their hands or bodies to emphasize points, and their tone of voice can be passionate and animated.
                                Expressing emotion is not seen as unprofessional or inappropriate in Greek culture.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                 <strong className="font-semibold text-gray-900">Personal.</strong> Communication in Greece often involves a degree of personal connection.
                                Greeks may ask about family or personal life as a way of building rapport and trust.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                 <strong className="font-semibold text-gray-900">Contextual.</strong> Despite their directness,
                                Greeks also value context and may use metaphors, allegories, or stories to convey complex ideas or to
                                make a point more compelling.
                            </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                            <span>
                                 <strong className="font-semibold text-gray-900">Debate and Discussion.</strong> Greeks often enjoy debate
                                and spirited discussion, which is seen as a sign of engagement and interest in the topic at hand. This can be a
                                part of business negotiations as well as casual conversations.
                            </span>
                        </li>
                    </ul>
                    <p className="mt-10">
                        This communication style tips should prepare you to face against greek top businesswomen and businessmen.
                    </p>
                </div>
                <figure className="mt-16">
                    <Image
                        height={3456}
                        width={5184}
                        className="aspect-video rounded-xl bg-gray-50 object-cover"
                        src={'/pexels-jeff-stapleton-5792807.jpg'}
                        alt=""
                    />
                    <figcaption className="mt-4 flex gap-x-2 text-sm leading-6 text-gray-500">
                        <InformationCircleIcon className="mt-0.5 h-5 w-5 flex-none text-gray-300" aria-hidden="true" />
                        Greece Market
                    </figcaption>
                </figure>
            </div>
        </div>
    )
}