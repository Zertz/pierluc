import { BookOpenIcon, CodeIcon } from "@heroicons/react/solid";

interface IProject {
  id: string;
  title: string;
  stars: number;
  emoji: string;
  date: string;
  code?: string;
  website: string;
}

const projects: IProject[] = [
  {
    id: "Tempocal",
    title:
      "Highly flexible building blocks to craft calendars with Temporal API",
    stars: 29,
    emoji: "📅",
    date: "November 2021 - Present",
    code: "https://github.com/Zertz/tempocal",
    website: "https://tempocal.pierluc.io/",
  },
  {
    id: "Spruce",
    title: "",
    stars: 29,
    emoji: "🌲",
    date: "February 2021 - Present",
    website: "https://spruce.pierluc.io/",
  },
  {
    id: "react-headless-tabs",
    title:
      "Headless and highly flexible tab-like primitives built with react hooks",
    stars: 29,
    emoji: "🧩",
    date: "September 2020 - Present",
    code: "https://github.com/Zertz/react-headless-tabs",
    website: "https://react-headless-tabs.pierluc.io/",
  },
  {
    id: "Jirafe",
    title: "Manage Jira Cloud issues in the comfort of Slack",
    stars: 29,
    emoji: "🦒",
    date: "April 2018 - May 2022",
    website: "https://jirafe-zertz.vercel.app/",
  },
  {
    id: "Canados",
    title: "Interactive map of tornados in Canada and the United States",
    stars: 29,
    emoji: "🌪",
    date: "March 2020 - Present",
    code: "https://github.com/Zertz/canados",
    website: "https://canados.vercel.app/",
  },
  {
    id: "express-restify-mongoose",
    title: "Easily restify mongoose schemas",
    stars: 29,
    emoji: "🐒",
    date: "August 2015 - June 2018",
    code: "https://github.com/florianholzapfel/express-restify-mongoose",
    website: "https://florianholzapfel.github.io/express-restify-mongoose/",
  },
];

export function Projects() {
  return (
    <>
      <h2 className="sr-only">Open source</h2>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
          >
            <div className="flex flex-1 flex-col p-8">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 text-2xl">
                {project.emoji}
              </span>
              <h3 className="mt-6 text-sm font-medium text-gray-900">
                {project.id}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-sm text-gray-500">{project.title}</dd>
                <dt className="sr-only">Role</dt>
                <dd className="mt-3">
                  <span className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                    {project.stars}
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                {project.code && (
                  <div className="flex w-0 flex-1">
                    <a
                      href={project.code}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                    >
                      <CodeIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-3">GitHub</span>
                    </a>
                  </div>
                )}
                <div className="-ml-px flex w-0 flex-1">
                  <a
                    href={project.website}
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <BookOpenIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Website</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
