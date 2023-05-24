import React from "react";
import Image from "next/image";
import {ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon, ServerIcon} from "@heroicons/react/20/solid";

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
        name: 'Personal Relationships',
        description:
            'Both cultures place a high value on personal relationships in business.\n',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Negotiations',
        description:
            'Japanese negotiations may take longer due to the emphasis on consensus decision-making, while Mexican negotiations may be faster once a strong personal relationship is established.\n',
        icon: LockClosedIcon,
    },
    {
        name: 'Indirect Communication',
        description:
            'Both prefer indirect communication and avoid saying "no" directly.\n',
        icon: ArrowPathIcon,
    },
    {
        name: 'Business Culture',
        description:
            'Japanese business culture is typically more formal and protocol-oriented than Mexican business culture.\n',
        icon: FingerPrintIcon,
    },
    {
        name: 'Hierarchy',
        description:
            'Both cultures are hierarchical and respect authority.',
        icon: FingerPrintIcon,
    },
    {
        name: 'Appearance',
        description:
            'The concept of "saving face" is more prominent in Japanese culture than in Mexican culture.\n',
        icon: FingerPrintIcon,
    },

]

const faqs = [
    {
        question: 'Dont: ',
        answer:
            '- Gift Exchange, What You Do not Know Can Hurt You. Doing business in Japan requires you to learn a few rules about gift-giving. A business gift exchange is an important tradition in Japanese business etiquette, especially at the first meeting. What can go wrong when giving a small gift? Many things, it seems: Flowers such as lilies, lotus blossoms and camellias are used for funeral services and should, therefore, be avoided.',
    },
    {
        question: '',
        answer:
            '-Don’t outwardly express negative (angry, frustrated, etc.) emotions.\n' +
            'Japanese consider open expression of emotions, especially negative ones, to be immature and\n' +
            'indicative of lack of self-control. Even if you are upset, it’s best to put on your best poker face and speak calmly.',
    },
    {
        question: '',
        answer:
            '- Don’t refer to a Japanese person by first name unless instructed to do so.\n' +
            'Use last name + ‘san’ (but never use ‘san’ for yourself!)\n' +
            'Use of Japanese first names is typically only for very familiar relations. Last name +’ san’ demonstrates respect\n'
    },
    {
        question: '',
        answer:
            '- Don’t decline an invitation to socialize.\n' +
            'Socializing after working hours is a critical part of relationship building in Japan and often where a lot of\n' +
            'bridges are built. If interested in furthering business relations, accept any such invitation whenever possible.'
    },
    {
        question: '',
        answer:
            '- Don’t pour your own drink.\n' +
            'It is customary in Japan for people to pour drinks for other people, usually with more junior people\n' +
            'serving more senior people. It’s important to pay attention and fill someone’s glass before it gets empty.'
    },
    {
        question: '',
        answer:
            '- Don’t engage in direct confrontation or aggressive tactics.\n' +
            'Japanese place great value on harmonious and non-confrontational behavior and\n' +
            'communication. A softer and more diplomatic approach is almost always best with the Japanese.'
    },
    {
        question: '',
        answer:
            '- Don’t pass food with chopsticks or stick chopsticks in your rice.\n' +
            'These are both actions reserved for Buddhist ceremonies associated with death.'
    },
    {
        question: '',
        answer:
            'Don’t self-aggrandize; modesty is a virtue.\n' +
            'Modesty is a virtue in Japan, even to the point of self-deprecation. ‘Tooting\n' +
            'one’s own horn’ is frowned upon, as is praising one’s own colleagues, family, etc'
    },
    {
        question: 'Do: ',
        answer:
            '- Express gratitude and apologize (when sincere) frequently.\n' +
            'Thank you’s and apologies go a long way in Japan. Think of an apology as saying you feel sorry about a\n' +
            'circumstance or inconvenience, not that you are necessarily responsible for it. Apologies trump excuses.\n'
    },
    {
        question: '',
        answer:
            '- Try to do or say something Japanese; the effort goes a long way.\n' +
            'It doesn’t matter if you get it exactly right or become fluent, but make an effort to learn a few cultural norms and\n' +
            'a handful of words in Japanese. The effort will win you huge points and go a long way in relationship-building.\n'
    },
    {
        question: '',
        answer:
            '- Summarize key points in writing and use visual supplements.\n' +
            'Generally speaking, because of the way they learn English, Japanese tend to have a stronger command\n' +
            'of written English than spoken. Whenever possible, put key points in writing and use visual supplements.\n' +
            '- Be well-groomed and on the formal, conservative side with appearance.\n' +
            'With some exceptions, professional appearance in Japan tends to be conservative/ formal. Dark and\n' +
            'solid-colored suits, minimal accessories, clean shoes, a nice bag, and well-groomed hair are recommended.\n',
    },
    {
        question: '',
        answer:
            '- Be well-groomed and on the formal, conservative side with appearance.\n' +
            'With some exceptions, professional appearance in Japan tends to be conservative/ formal. Dark and\n' +
            'solid-colored suits, minimal accessories, clean shoes, a nice bag, and well-groomed hair are recommended.\n',
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
                                <p className="text-base font-semibold leading-7 text-red-600">Business</p>
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
                                    Here are some tips to help you navigate the business world in Japan.
                                </p>
                                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                                    <li className="flex gap-x-3">
                                        <CloudArrowUpIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Punctuality.</strong> The stereotype is true.  Events and meetings in Japan sometimes really do begin at 3 minutes past the hour.
                                            Being on time is essentially a given.
                                            This deep cultural point is reinforced by the predictability and reliability of arguably the world’s most advanced public transport infrastructure.

                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <LockClosedIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Business Cards.</strong> The exchange of business cards (meishi) is an essential part of initial meetings in Japan and follows a strict protocol. It allows the Japanese to quickly determine their counterpart’s all-important position, title and rank. While still standing, you should politely hand a business card over with two hands, and receive one in return. A slight bow as a form of respect when exchanging is usually performed.
                  </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                    <strong className="font-semibold text-gray-900">Bowing and handshakes.</strong> Bowing is an important part of everyday life in Japan,
                                            including in the business context. Japanese bow to those senior to them both as a greeting and a show of respect.
                                            The junior person initiates the bow, bending from the waist to an angle of between 30 and 45 degrees from vertical.
                                            Men keep their arms by their sides and women may cross their hands or fingers at thigh height.
                                            A less accentuated bow, usually about 15 degrees, is returned as acknowledgment from the more senior person.
                                            It is considered bad manners and aggressive to hold eye contact with someone when you are bowing to them; this is usually done by competitors in martial arts before they fight.
                                            Greet the highest-status individual first, followed by the oldest when meeting a group of Japanese.
                                            For Australian business people, extending a simple handshake when greeting and taking leave is fine; just don’t shake hands and bow at the same time. Choose one and stick with it.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Building Relationships.</strong> Japan is a more relationship-oriented culture than Australia, particularly when it comes to doing business. Japanese want to know and trust someone before they do business with them. Relationships are developed through informal social gatherings and generally involve a considerable amount of eating and drinking.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                             <strong className="font-semibold text-gray-900">Silence is Golden.</strong> In a business setting, silence is valued over an overabundance of talking. Silence speaks loudly about wisdom and emotional self-control. This may run counter to a Western approach, where being more outgoing can facilitate communication. Japanese business culture is characterized by a more introverted, formal approach, especially at the beginning of a business relationship. This approach is likely to be better received when doing business in Japan. To respect Japanese business etiquette, resist the urge to fill the silence with more talk about an issue your Japanese counterpart would rather avoid at the moment.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Age Equals Seniority.</strong> Notwithstanding the many changes in modern Japan, age is revered and can be synonymous with rank in a business setting.
                                            In line with Japanese business culture, older executives are treated with more marked deference than the younger ones in the group.
                                            Be sure to greet the most senior person before you greet others. Likewise, offer your business card to the senior person first.
                                            These subtle aspects of Japanese business etiquette are sure to be noticed and appreciated.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Hard Sell Doesn&apos;t Sell.</strong> When doing business in Japan,
                                            it&apos;s important to remember that a hard-sell approach will not succeed.
                                            Check any aggressive-leaning tactics at the door. Instead, adopt a gentle, persuasive tone that showcases the virtues of what you are proposing.
                                            Find points of agreement and build on those. Once you&apos;ve made your case, don&apos;t drive too hard on decisions and deadlines.
                                            Understand that the Japanese decision-making style relies on consensus. Trying to speed up the process may come across as disrespectful.
                                            Japanese business etiquette mandates patience and the view that time and careful consideration help build trust and cement relationships.
                                        </span>
                                    </li>
                                    <li className="flex gap-x-3">
                                        <ServerIcon className="mt-1 h-5 w-5 flex-none text-red-600" aria-hidden="true" />
                                        <span>
                                            <strong className="font-semibold text-gray-900">Group Solidarity Is Paramount</strong> It&apos;s widely known that Japan is a
                                            group-oriented culture—group solidarity can often be valued over individualism. As the famous Japanese saying goes,
                                            &quot;A single arrow is easily broken, but not ten in a bundle.&quot; This cultural mindset impacts certain behaviors,
                                            such as how praise is received. While Western cultures may value individual contributions and strongly believe in recognition and individual praise,
                                            the opposite can be true in Japanese business practices.
                                        </span>
                                    </li>
                                </ul>
                                <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">What&apos;s next?</h2>
                                <p className="mt-6">
                                    After reading this section, you are more than well prepared to start you succesful endeavors in the business environment in Japan.
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
                        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Do&apos;s and Dont&apos;s</h2>
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