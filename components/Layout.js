export const Layout = function () {
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 bg-gray-800">
          <div className="h-0 flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center flex-shrink-0 px-4">
              <img
                className="h-8 w-auto mr-2 rounded-full"
                src="/pierluc.jpg"
                alt="Pier-Luc Gendreau · Full-Stack Developer"
              />
              <p className="text-sm leading-5 font-medium text-white">
                Pier-Luc Gendreau
              </p>
            </div>
            <nav className="mt-5 flex-1 px-2 bg-gray-800">
              <a
                href="#about-me"
                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-300 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h3a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h3a1 1 0 001-1V10M9 21h6"
                  />
                </svg>
                About me
              </a>
              <a
                href="#technical-skills"
                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                Technical skills
              </a>
              <a
                href="#projects"
                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
                  />
                </svg>
                Projects
              </a>
              <a
                href="#experience"
                className="mt-1 group flex items-center px-2 py-2 text-sm leading-5 font-medium text-gray-300 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700 transition ease-in-out duration-150"
              >
                <svg
                  className="mr-3 h-6 w-6 text-gray-400 group-hover:text-gray-300 group-focus:text-gray-300 transition ease-in-out duration-150"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Experience
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <main
          className="flex-1 relative z-0 overflow-y-auto pt-2 pb-6 focus:outline-none md:py-6"
          tabIndex="0"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="about-me" className="text-2xl font-semibold text-gray-900">
              About me
            </h1>
          </div>
          <div className="max-w-7xl mx-auto mb-8 px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <section className="bg-white overflow-hidden">
                <div className="relative max-w-screen-xl mx-auto pt-20 pb-12 px-4 sm:px-6 lg:px-8 lg:py-20">
                  <svg
                    className="absolute top-full left-0 transform translate-x-80 -translate-y-24 lg:hidden"
                    width="784"
                    height="404"
                    fill="none"
                    viewBox="0 0 784 404"
                  >
                    <defs>
                      <pattern
                        id="e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                    <rect
                      width="784"
                      height="404"
                      fill="url(#e56e3f81-d9c1-4b83-a3ba-0d0ac8c32f32)"
                    />
                  </svg>

                  <svg
                    className="hidden lg:block absolute right-full top-1/2 transform translate-x-1/2 -translate-y-1/2"
                    width="404"
                    height="784"
                    fill="none"
                    viewBox="0 0 404 784"
                  >
                    <defs>
                      <pattern
                        id="56409614-3d62-4985-9a10-7ca758a8f4f0"
                        x="0"
                        y="0"
                        width="20"
                        height="20"
                        patternUnits="userSpaceOnUse"
                      >
                        <rect
                          x="0"
                          y="0"
                          width="4"
                          height="4"
                          className="text-gray-200"
                          fill="currentColor"
                        />
                      </pattern>
                    </defs>
                  </svg>

                  <div className="relative lg:flex lg:items-center">
                    <div className="hidden lg:block lg:flex-shrink-0">
                      <img
                        className="h-64 w-64 rounded-full xl:h-80 xl:w-80"
                        src="/pierluc.jpg"
                        alt=""
                      />
                    </div>

                    <div className="relative lg:ml-10">
                      <svg
                        className="absolute top-0 left-0 transform -translate-x-8 -translate-y-24 h-36 w-36 text-indigo-200 opacity-50"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 144 144"
                      >
                        <path
                          strokeWidth="2"
                          d="M41.485 15C17.753 31.753 1 59.208 1 89.455c0 24.664 14.891 39.09 32.109 39.09 16.287 0 28.386-13.03 28.386-28.387 0-15.356-10.703-26.524-24.663-26.524-2.792 0-6.515.465-7.446.93 2.327-15.821 17.218-34.435 32.11-43.742L41.485 15zm80.04 0c-23.268 16.753-40.02 44.208-40.02 74.455 0 24.664 14.891 39.09 32.109 39.09 15.822 0 28.386-13.03 28.386-28.387 0-15.356-11.168-26.524-25.129-26.524-2.792 0-6.049.465-6.98.93 2.327-15.821 16.753-34.435 31.644-43.742L121.525 15z"
                        />
                      </svg>
                      <blockquote>
                        <div className="text-2xl leading-9 font-medium text-gray-900">
                          <p>
                            6+ years experienced, detail-oriented, self-taught
                            full stack JavaScript developer with a keen eye for
                            UX design and a knack for flame graphs. Presented
                            talks on async Javascript, GraphQL, and serverless
                            architecture at a local meetup. Attended Node+JS
                            Interactive in 2015, 2017, and 2019.
                          </p>
                        </div>
                        <footer className="mt-8">
                          <div className="flex">
                            <div className="flex-shrink-0 lg:hidden">
                              <img
                                className="h-12 w-12 rounded-full"
                                src="/pierluc.jpg"
                                alt=""
                              />
                            </div>
                            <div className="ml-4 lg:ml-0">
                              <div className="text-base leading-6 font-medium text-gray-900">
                                Pier-Luc Gendreau
                              </div>
                              <div className="text-base leading-6 font-medium text-indigo-600">
                                Full-Stack Developer
                              </div>
                            </div>
                          </div>
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              id="technical-skills"
              className="text-2xl font-semibold text-gray-900"
            >
              Technical skills
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <ul className="list-disc list-inside mb-8">
                <li className="mt-1 text-lg leading-7 text-gray-700">
                  Node.js is my bread and butter, from building apps, to
                  webpack, and stopping by Lerna
                </li>
                <li className="mt-3 text-lg leading-7 text-gray-700">
                  Highly proficient with React, using plain JavaScript,
                  TypeScript, or Flow
                </li>
                <li className="mt-3 text-lg leading-7 text-gray-700">
                  Well versed in CSS, dabbled with CSS-in-JS using Emotion, with
                  a preference for CSS Modules
                </li>
                <li className="mt-3 text-lg leading-7 text-gray-700">
                  Tinkered with Symfony 2 in a somewhat distant past
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 id="projects" className="text-2xl font-semibold text-gray-900">
              Projects
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="relative bg-gray-800 mb-8">
                <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
                    🦒 Manage Jira Cloud issues in the comfort of Slack
                  </div>
                  <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                    Jirafe
                  </h2>
                  <p className="mt-3 text-lg leading-7 text-gray-300">
                    Built from the ground up with React, Node.js, Redis, ZEIT
                    Now, Google Cloud Datastore, Pub/Sub, Scheduler, and
                    BigQuery.
                  </p>
                  <ul className="list-disc list-inside">
                    <li className="mt-3 text-lg leading-7 text-gray-300">
                      Originally built in a week-end
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Evolved to be entirely serverless, composed of dozens of
                      services
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Usability and performance before features
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Wrote a lot of code for Stripe billing, many packages with
                      Lerna (and recently removed it all in favor of simpler
                      alternatives)
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Bought Tailwind UI on release day, with the goal of giving
                      a a fresh cost of paint to the landing page and dashboard!
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="https://www.jirafe.io/"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        Check it out
                        <svg
                          className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative bg-gray-800 mb-8">
                <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
                  <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
                    🌪️ Interactive map of tornados in Canada and the United
                    States
                  </div>
                  <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                    Canados
                  </h2>
                  <p className="mt-3 text-lg leading-7 text-gray-300">
                    Built with Next.js, TypeScript, and Tailwind.
                  </p>
                  <ul className="list-disc list-inside">
                    <li className="mt-3 text-lg leading-7 text-gray-300">
                      Needed a side-project to feed my creativity
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Browsed{" "}
                      <a
                        className="underline"
                        href="https://open.canada.ca/en/open-data"
                      >
                        Open Data
                      </a>{" "}
                      for large datasets and stumbled upon tornados (ended up
                      adding U.S. data because they get <strong>a lot</strong>{" "}
                      more)
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Everything is computed client-side and has to be fast on
                      my sub-200$ moto g7 play
                    </li>
                    <li className="mt-1 text-lg leading-7 text-gray-300">
                      Can{" "}
                      <a
                        className="underline"
                        href="https://canados.now.sh/?c=40.713956_-96.064453&f=3_5&z=5"
                      >
                        dynamically generate
                      </a>{" "}
                      a heatmap nearly identical to the{" "}
                      <a
                        className="underline"
                        href="https://en.wikipedia.org/wiki/Tornado_Alley#/media/File:Tornado_Alley.svg"
                      >
                        Tornado Alley heatmap
                      </a>{" "}
                      published by FEMA
                    </li>
                  </ul>
                  <div className="mt-8">
                    <div className="inline-flex rounded-md shadow">
                      <a
                        href="https://canados.now.sh/"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out"
                      >
                        Check it out
                        <svg
                          className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1
              id="experience"
              className="text-2xl font-semibold text-gray-900"
            >
              Experience
            </h1>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className="py-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    FOCUS Smart Fleet and Fuel Optimization
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    TypeScript
                  </p>
                </div>
                <div>
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Title
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        Programmer
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        When
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        March 2020 - Present
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Responsibilities
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc list-inside">
                          <li>
                            Replaced in-house client build with webpack while
                            retaining full backward compatibility with existing
                            infrastructure
                          </li>
                          <li>
                            Introduced the team to React and immediately saw
                            significant gains in both quality and speed compared
                            to existing code based on jQuery
                          </li>
                          <li>
                            Quickly shipped a messaging component as part of a
                            larger project
                          </li>
                          <li>
                            Wrapping up our first project fully built on React,
                            with the front-end's first integration tests
                          </li>
                          <li>
                            Building mock-ups for an upcoming project, and
                            integrating Storybook
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Classcraft
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    Contributed to and maintained a large Meteor application
                    built with Node.js, React, Redux, Flow, Stylus,
                    ElasticSearch, and MongoDB
                  </p>
                </div>
                <div>
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Title
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        Senior Developer
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        When
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        August 2016 - March 2020
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Responsibilities
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc list-inside">
                          <li>
                            Led a team of three other developers working on the
                            core application
                          </li>
                          <li>
                            Implemented Figma and Sketch designs using React and
                            CSS
                          </li>
                          <li>
                            Participated in validating the UX design of major
                            features
                          </li>
                          <li>
                            Triaged bugs and worked with the support team to
                            solve customer facing issues
                          </li>
                          <li>
                            Rebuilt authentication in a dedicated service and
                            transferred knowledge to another team
                          </li>
                          <li>
                            Automated and streamlined various workflows for
                            internal teams
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
                <div className="px-4 py-5 border-b border-gray-200 sm:px-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    Sport Chrono
                  </h3>
                  <p className="mt-1 text-sm leading-5 text-gray-500">
                    Rebuilt the web app with Node.js, Angular.js, and MongoDB,
                    maintained desktop apps built with C# .NET and SQL Server,
                    and tinkered with RFID hardware
                  </p>
                </div>
                <div>
                  <dl>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Title
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        Developer
                      </dd>
                    </div>
                    <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        When
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        July 2013 - June 2016
                      </dd>
                    </div>
                    <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                      <dt className="text-sm leading-5 font-medium text-gray-500">
                        Responsibilities
                      </dt>
                      <dd className="mt-1 text-sm leading-5 text-gray-900 sm:mt-0 sm:col-span-2">
                        <ul className="list-disc list-inside">
                          <li>
                            Migrated a manual, slow and complex procedure
                            involving Microsoft Access to export results to
                            delivering them automatically, in real-time
                          </li>
                          <li>
                            Redesigned the web app both technically and visually
                          </li>
                          <li>Wrote extensive documentation</li>
                          <li>
                            Trained a dozen folks to use the timing system
                          </li>
                        </ul>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
