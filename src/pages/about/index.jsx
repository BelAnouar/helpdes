import AirlineStopsIcon from '@mui/icons-material/AirlineStops';

const About = () => {


    return (
        <>
            <section className="relative py-12 lg:py-20 bg-gradient-to-b from-[#062634] to-[#06384d] via-white to-[#151a28]">
                <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row gap-10 lg:gap-12">
                    <div className="relative flex flex-col items-center text-center lg:text-left lg:py-7 xl:py-8 lg:items-start lg:max-w-none max-w-3xl mx-auto lg:mx-0 lg:flex-1 lg:w-1/2">
                        <h1 className="text-3xl leading-tight sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900">
                            Enhance Your Customer Support Experience with <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#062634] from-20% via-[#4b96f2] via-30% to-[#06384d]">Our Help Desk Solutions</span>.
                        </h1>
                        <p className="mt-8 text-gray-700">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores repellat perspiciatis aspernatur quis voluptatum porro incidunt, libero sequi quos eos velit
                        </p>
                        <div className="mt-10 w-full flex max-w-md mx-auto lg:mx-0">
                            <div className="flex sm:flex-row flex-col gap-5 w-full">
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 bg-gradient-to-r from-[#062634] to-[#06384d] hover:bg-gradient-to-r from-[#172554] to-[#06384d] border-transparent hover:border-[#172554]">
                        <span className="hidden sm:flex relative z-[5]">
                            Get Access
                        </span>
                                </button>
                                <button className="flex text-white justify-center items-center w-max min-w-max sm:w-max px-6 h-12 rounded-full outline-none relative overflow-hidden border duration-300 ease-linear after:absolute after:inset-x-0 after:aspect-square after:scale-0 after:opacity-70 after:origin-center after:duration-300 after:ease-linear after:rounded-full after:top-0 after:left-0 bg-gradient-to-r from-[#062634] to-[#06384d] hover:bg-gradient-to-r from-[#172554] to-[#06384d] border-transparent hover:border-[#172554]">
                        <span className="hidden sm:flex relative z-[5]">
                            Choose Options
                        </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-1 lg:w-1/2 lg:h-auto relative lg:max-w-none lg:mx-0 mx-auto max-w-3xl">
                        <img src="https://agencex-astro.vercel.app/images/image1.webp" alt="Hero image" width="2350" height="2359" className="lg:absolute lg:w-full lg:h-full rounded-3xl object-cover lg:max-h-none max-h-96"/>
                    </div>
                </div>
            </section>
            <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
                <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                    <div>
                        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
                            Featured
                        </p>
                    </div>
                    <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
                <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                    <defs>
                        <pattern
                            id="ea469ae8-e6ec-4aca-8875-fc402da4d16e"
                            x="0"
                            y="0"
                            width=".135"
                            height=".30"
                        >
                            <circle cx="1" cy="1" r=".7" />
                        </pattern>
                    </defs>
                    <rect
                        fill="url(#ea469ae8-e6ec-4aca-8875-fc402da4d16e)"
                        width="52"
                        height="24"
                    />
                </svg>
                <span className="relative">Latest Articles</span>
            </span>{' '}
                        on Helpdesk Blog
                    </h2>
                    <p className="text-base text-gray-700 md:text-lg">
                        Explore our latest articles covering various topics to assist you in navigating through common helpdesk challenges.
                    </p>
                </div>
                <div className="grid gap-8 row-gap-10 lg:grid-cols-2">

                    <div className="max-w-sm sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                           < AirlineStopsIcon fontSize={'large'}/>
                        </div>

                        <h6 className="mb-3 text-xl font-bold leading-5">10 Tips for Efficient Helpdesk Management</h6>

                        <p className="mb-3 text-sm text-gray-900">
                            Learn how to streamline your helpdesk operations and improve customer satisfaction with these practical tips.
                        </p>

                        <a
                            href="/blog/efficient-helpdesk-management"
                            aria-label="Read more about 10 Tips for Efficient Helpdesk Management"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>
    <div className="max-w-sm sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                           < AirlineStopsIcon fontSize={'large'}/>
                        </div>

                        <h6 className="mb-3 text-xl font-bold leading-5">10 Tips for Efficient Helpdesk Management</h6>

                        <p className="mb-3 text-sm text-gray-900">
                            Learn how to streamline your helpdesk operations and improve customer satisfaction with these practical tips.
                        </p>

                        <a
                            href="/blog/efficient-helpdesk-management"
                            aria-label="Read more about 10 Tips for Efficient Helpdesk Management"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>
    <div className="max-w-sm sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                           < AirlineStopsIcon fontSize={'large'}/>
                        </div>

                        <h6 className="mb-3 text-xl font-bold leading-5">10 Tips for Efficient Helpdesk Management</h6>

                        <p className="mb-3 text-sm text-gray-900">
                            Learn how to streamline your helpdesk operations and improve customer satisfaction with these practical tips.
                        </p>

                        <a
                            href="/blog/efficient-helpdesk-management"
                            aria-label="Read more about 10 Tips for Efficient Helpdesk Management"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>
    <div className="max-w-sm sm:mx-auto sm:text-center">
                        <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:mx-auto sm:w-24 sm:h-24">

                           < AirlineStopsIcon fontSize={'large'}/>
                        </div>

                        <h6 className="mb-3 text-xl font-bold leading-5">10 Tips for Efficient Helpdesk Management</h6>

                        <p className="mb-3 text-sm text-gray-900">
                            Learn how to streamline your helpdesk operations and improve customer satisfaction with these practical tips.
                        </p>

                        <a
                            href="/blog/efficient-helpdesk-management"
                            aria-label="Read more about 10 Tips for Efficient Helpdesk Management"
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Read more
                        </a>
                    </div>

                </div>
            </div>

            <div className="mx-auto mt-6 max-w-7xl  xl:container m-auto px-6 md:px-12">
                <div
                    className="relative isolate overflow-hidden bg-[#062534] px-6 py-12 shadow-2xl rounded-2xl sm:rounded-3xl sm:px-24 xl:py-16">
                    <svg  viewBox="0 0 369.66666666666663 104.09869897883911"
                          className="looka-1j8o68f w-40 mx-auto">
                        <defs id="SvgjsDefs1684 "></defs>
                        <g id="SvgjsG1685" featurekey="hmhgWD-0"
                           transform="matrix(1.487503886948252,0,0,1.487503886948252,-4.835320358302862,14.476559645079067)"
                           fill="#00adb5"><title xmlns="http://www.w3.org/2000/svg">Call center</title>
                            <path xmlns="http://www.w3.org/2000/svg"
                                  d="M42,49l-12.6-6.84-.42.16-.22.1a8.65,8.65,0,0,0-3.2,2.77,29.11,29.11,0,0,1-8-9.28L17.1,35c-.14-.28-.29-.57-.42-.87a29.08,29.08,0,0,1-2.77-11.59A8.66,8.66,0,0,0,18,21.62a1.32,1.32,0,0,0,.2-.12l.4-.25L20.49,7.1l-.33-.35A9.66,9.66,0,0,0,18.1,5.07a9,9,0,0,0-8.75-.42A8.84,8.84,0,0,0,5,9.68l0,.1-.11.33c0,.14-.07.26-.09.34A40,40,0,0,0,7.69,39.79a40.12,40.12,0,0,0,22,19.7c.52.19,1,.37,1.54.52l.11,0a9.24,9.24,0,0,0,2.09.24,8.62,8.62,0,0,0,3.93-.94,8.93,8.93,0,0,0,4.84-7.43,9.41,9.41,0,0,0-.14-2.49ZM18.38,7.79,16.73,20a6.73,6.73,0,0,1-1.7.48l2-13.69A7.27,7.27,0,0,1,18.38,7.79ZM36.46,57.56a6.75,6.75,0,0,1-4.6.56c-.5-.16-1-.33-1.48-.51A38.15,38.15,0,0,1,9.47,38.89,38.06,38.06,0,0,1,6.7,11l.07-.24c0-.11.06-.22.13-.42a6.77,6.77,0,0,1,6.41-4.59A7,7,0,0,1,15.18,6L13,20.49l-1.1-.15v1.13a30.86,30.86,0,0,0,3,13.52c.15.31.3.63.46.94s.32.62.49.91a31.38,31.38,0,0,0,9.44,10.58l.93.65.53-1a.05.05,0,0,0,0,0L39.56,54.3A6.77,6.77,0,0,1,36.46,57.56Zm3.75-5.79c0,.19-.05.37-.08.55L27.94,45.41a6.32,6.32,0,0,1,1.35-1.06l10.88,5.91A8.45,8.45,0,0,1,40.21,51.77Z"></path>
                            <polygon xmlns="http://www.w3.org/2000/svg"
                                     points="39.86 21.23 41.23 21.23 41.23 29.22 39.86 29.22 39.86 32.24 45.58 32.24 45.58 29.22 44.21 29.22 44.21 21.23 45.58 21.23 45.58 18.2 39.86 18.2 39.86 21.23"></polygon>
                            <path xmlns="http://www.w3.org/2000/svg"
                                  d="M42.72,16.4a2.11,2.11,0,1,0-2.12-2.11A2.1,2.1,0,0,0,42.72,16.4Z"></path>
                            <path xmlns="http://www.w3.org/2000/svg"
                                  d="M42.63,6.43A16.25,16.25,0,0,0,28.18,30.09l-3.09,7.57,10.84-.2a16,16,0,0,0,6.7,1.44,16.24,16.24,0,1,0,0-32.47Zm0,30.47a14,14,0,0,1-6.06-1.35l-.22-.1-8.26.16L30.39,30l-.23-.42A14.24,14.24,0,1,1,42.63,36.9Z"></path>
                        </g>
                        <g id="SvgjsG1686" featurekey="1RRcwp-0"
                           transform="matrix(3.1116298268682296,0,0,3.1116298268682296,101.07078949250429,12.574874750026783)"
                           fill="#595959">
                            <path
                                d="M6.62 20.12 c-0.46 0 -0.94 -0.06 -1.44 -0.16 c-1.48 -0.3 -2.92 -1.02 -4.18 -2.12 l-0.38 -0.34 l1.76 -2 l0.38 0.34 c0.92 0.8 1.94 1.34 2.94 1.54 l0.02 0 c0.3 0.06 0.6 0.1 0.9 0.1 c0.5 0 0.96 -0.1 1.34 -0.28 c0.48 -0.2 1.04 -0.64 1.04 -1.46 c0 -0.44 -0.22 -0.78 -0.68 -1.06 c-0.56 -0.34 -1.32 -0.52 -1.86 -0.62 c-0.24 -0.04 -2.28 -0.46 -3.22 -0.98 c-0.62 -0.38 -1.1 -0.86 -1.44 -1.42 c-0.34 -0.58 -0.5 -1.22 -0.5 -1.92 c0 -0.76 0.24 -1.52 0.7 -2.22 c0.44 -0.58 1.04 -1.06 1.76 -1.4 s1.52 -0.52 2.38 -0.52 c0.34 0 0.7 0.04 1.06 0.08 c1.32 0.24 2.62 0.84 3.76 1.8 l0.38 0.32 l-1.7 2.06 l-0.38 -0.32 c-1.3 -1.06 -2.42 -1.3 -3.14 -1.3 c-0.46 0 -0.88 0.1 -1.24 0.26 c-0.56 0.26 -0.92 0.74 -0.92 1.22 c0 0.44 0.16 0.72 0.54 0.98 s0.96 0.46 1.88 0.66 c0.12 0.02 0.28 0.06 0.44 0.1 c0.84 0.16 1.96 0.4 2.74 0.86 c0.68 0.36 1.2 0.86 1.56 1.44 s0.54 1.26 0.54 1.98 c0 0.9 -0.24 1.7 -0.72 2.38 c-0.42 0.58 -1.04 1.08 -1.86 1.48 c-0.7 0.36 -1.48 0.52 -2.46 0.52 z M17.98 20.22 c-1.16 0 -2.24 -0.42 -3.02 -1.2 c-0.82 -0.78 -1.26 -1.84 -1.26 -2.98 l0 -5.2 l2.52 0 l0 5.2 c0 0.94 0.78 1.7 1.76 1.7 s1.78 -0.76 1.78 -1.7 l0 -5.2 l2.52 0 l0 5.2 c0 1.12 -0.46 2.18 -1.28 2.98 c-0.8 0.78 -1.86 1.2 -3.02 1.2 z M29.26 10.66 c1.26 0 2.46 0.48 3.38 1.38 c0.9 0.92 1.4 2.12 1.4 3.38 s-0.5 2.46 -1.4 3.38 c-0.9 0.9 -2.1 1.38 -3.38 1.38 c-0.84 0 -1.6 -0.3 -2.26 -0.9 l-0.1 -0.08 l0 6.12 l-2.42 0 l0 -14.48 l2.42 0 l0 0.72 l0.1 -0.1 c0.72 -0.7 1.54 -0.8 2.26 -0.8 z M29.26 17.84 c1.28 0 2.36 -1.12 2.36 -2.42 c0 -1.32 -1.08 -2.42 -2.36 -2.42 s-2.36 1.1 -2.36 2.42 c0 1.3 1.08 2.42 2.36 2.42 z M40.42 10.66 c1.26 0 2.46 0.48 3.38 1.38 c0.9 0.92 1.4 2.12 1.4 3.38 s-0.5 2.46 -1.4 3.38 c-0.9 0.9 -2.1 1.38 -3.38 1.38 c-0.84 0 -1.6 -0.3 -2.26 -0.9 l-0.1 -0.08 l0 6.12 l-2.42 0 l0 -14.48 l2.42 0 l0 0.72 l0.1 -0.1 c0.72 -0.7 1.54 -0.8 2.26 -0.8 z M40.42 17.84 c1.28 0 2.36 -1.12 2.36 -2.42 c0 -1.32 -1.08 -2.42 -2.36 -2.42 s-2.36 1.1 -2.36 2.42 c0 1.3 1.08 2.42 2.36 2.42 z M51.26 20.22 c-1.24 0 -2.46 -0.5 -3.4 -1.4 c-0.9 -0.94 -1.4 -2.16 -1.4 -3.4 c0 -1.26 0.5 -2.48 1.4 -3.4 c0.92 -0.88 2.12 -1.38 3.4 -1.38 c1.32 0 2.52 0.5 3.38 1.38 c0.92 0.92 1.42 2.12 1.42 3.4 s-0.5 2.48 -1.42 3.4 c-0.9 0.9 -2.1 1.4 -3.38 1.4 z M51.26 12.92 c-1.34 0 -2.44 1.12 -2.44 2.5 s1.1 2.5 2.44 2.5 c1.36 0 2.46 -1.12 2.46 -2.5 s-1.1 -2.5 -2.46 -2.5 z M60.4 20 l-2.52 0 l0 -9.16 l2.52 0 l0 0.74 c0.72 -0.72 1.8 -0.96 2.52 -0.96 l0.6 0 l-0.6 2.5 l-0.38 0 c-1.18 0 -2.14 0.92 -2.14 2.02 l0 4.86 z M71.58 20 l-2.4 0 c-0.88 0 -1.7 -0.34 -2.3 -0.94 c-0.62 -0.62 -0.94 -1.42 -0.94 -2.3 l0 -3.8 l-1.28 0 l0 -2.06 l1.28 0 l0 -3.6 l2.38 0 l0 3.6 l2.66 0 l0 2.06 l-2.66 0 l0 3.76 c0 0.5 0.44 0.96 0.88 0.96 l1.74 0 z M86.32 20.02 l-3.26 0 l-3.7 -5.18 l-3.72 5.18 l-3.26 0 l5.34 -7.46 l-4.86 -6.78 l3.28 0 l3.22 4.48 l3.22 -4.48 l3.26 0 l-4.86 6.78 z"></path>
                        </g>
                    </svg>
                    <h2 className="mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white py-5 sm:text-4xl">Ready to build better conversations?
                    </h2>

                    <p className="mx-auto my-6 max-w-xl text-center text-lg leading-8 text-gray-300">
                        Keep pace with SecureCloud
                        advancements! Join our mailing list for selective, noteworthy updates.
                    </p>

                    <form className="mx-auto mt-10 flex max-w-md gap-x-4">

                        <label htmlFor="email-address" className="sr-only">Email address</label>

                        <button type="submit"
                                className="flex-none mx-auto rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                            Get access free

                        </button>
                    </form>



                </div>
            </div>
        </>
    );
}


export default About;
