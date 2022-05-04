export function Projects() {
  return (
    <>
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
                Built from the ground up with React, Node.js, Redis, ZEIT Now,
                Google Cloud Datastore, Pub/Sub, Scheduler, and BigQuery.
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
                  Bought Tailwind UI on release day, with the goal of giving a a
                  fresh cost of paint to the landing page and dashboard!
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
                🌪️ Interactive map of tornados in Canada and the United States
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
                  for large datasets and stumbled upon tornados (ended up adding
                  U.S. data because they get <strong>a lot</strong> more)
                </li>
                <li className="mt-1 text-lg leading-7 text-gray-300">
                  Everything is computed client-side and has to be fast on my
                  sub-200$ moto g7 play
                </li>
                <li className="mt-1 text-lg leading-7 text-gray-300">
                  Can{" "}
                  <a
                    className="underline"
                    href="https://canados.now.sh/?c=40.713956_-96.064453&f=3_5&y=1950_2006&z=5"
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
          <div className="relative bg-gray-800 mb-8">
            <div className="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
              <div className="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
                🐒 Easily restify mongoose schemas
              </div>
              <h2 className="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
                express-restify-mongoose
              </h2>
              <p className="mt-3 text-lg leading-7 text-gray-300">
                Built in plain old JavaScript
              </p>
              <ul className="list-disc list-inside">
                <li className="mt-3 text-lg leading-7 text-gray-300">
                  Haven&apos;t had much time and resources to work on it in the
                  last few years but still a project I&apos;m proud of!
                </li>
                <li className="mt-1 text-lg leading-7 text-gray-300">
                  Contributed early in the project&apos;s life and grew it from
                  ~100 stars or so to over 500
                </li>
                <li className="mt-1 text-lg leading-7 text-gray-300">
                  Wrote and maintained the documentation website from scratch
                </li>
              </ul>
              <div className="mt-8">
                <div className="inline-flex rounded-md shadow">
                  <a
                    href="https://github.com/florianholzapfel/express-restify-mongoose"
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
    </>
  );
}
