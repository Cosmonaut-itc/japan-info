import React from 'react';
import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'

export default function CommunicationStyles(){
    return(
        <div className="px-6 py-32 lg:pt-12 lg:px-8">
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <p className="text-base font-semibold leading-7 text-red-600">Introducing</p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Communication Styles</h1>
                <p className="mt-6 text-xl leading-8">
                    Japanese communication styles differ a lot from our culture, and it is important to know how to communicate with them.
                    Thery are caracterized by the following:
                </p>
                <div className="mt-10 max-w-2xl">
                    <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">High Context.</strong> Japan is a high-context culture,
                                which means that much of the communication is understood through context, non-verbal cues, and reading between the lines,
                                rather than explicit verbal information.
              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Indirectness.</strong> The Japanese tend to communicate indirectly in order to maintain harmony and avoid conflict. They often avoid saying &quot;no&quot; directly and prefer to convey refusal or disagreement in a more subtle way. This can sometimes lead to misunderstandings with people from more direct communication cultures.

                              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                <strong className="font-semibold text-gray-900">Politeness and Formality.</strong> Japanese language has various levels of politeness and formality, and the appropriate level to use can depend on factors such as the relationship between the speakers, the social status of the people involved, and the situation. The use of respectful forms and honorifics is an important part of Japanese communication.

              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Harmony (wa).</strong> Maintaining harmony within a group is a key value in Japanese society, and this impacts communication styles as well. Direct confrontation is typically avoided, and individuals often prioritize group consensus over personal opinion.

                              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Non Verbal Communication.</strong> Non-verbal cues play a significant role in Japanese communication. This includes bowing (which has different degrees depending on the situation), facial expressions, silence, and even the avoidance of eye contact in some situations to show respect.

                              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Ambiguity (Aimai).</strong> Ambiguity is often valued in Japanese communication, as it allows for flexibility and avoids direct confrontation. The Japanese language has various expressions and phrases that are intentionally vague, allowing the speaker to convey a message without stating it directly.
                              </span>
                        </li>
                        <li className="flex gap-x-3">
                            <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                            <span>
                                <strong className="font-semibold text-gray-900">Listening.</strong> In Japanese communication, active listening is very important. Sometimes, what is not said can be as important as what is said. Silence is valued and it is not uncommon for there to be pauses in conversation.
                              </span>
                        </li>
                    </ul>
                    <p className="mt-10">
                        Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
                        sed turpis id. Id dolor praesent donec est. Odio penatibus risus viverra tellus varius sit neque erat velit.
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