import {
  BookOpenIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { Repository } from "../pages";

interface IProject {
  id: string;
  title: string;
  emoji: string;
  labels: string[];
  repository?: string;
  documentation?: string;
  website?: string;
}

export const projects: IProject[] = [
  {
    id: "Tempocal",
    title:
      "Infinitely flexible building blocks to craft calendars with the bleeding edge Temporal API",
    emoji: "📅",
    labels: ["TypeScript", "React", "Hooks"],
    repository: "Zertz/tempocal",
    documentation: "https://tempocal.pierluc.io/",
  },
  {
    id: "Spruce for MongoDB",
    title: "",
    emoji: "🌲",
    labels: ["TypeScript", "Electron", "React"],
    website: "https://spruce.pierluc.io/",
  },
  {
    id: "react-headless-tabs",
    title:
      "Headless and highly flexible tab-like primitives built with react hooks",
    emoji: "🧩",
    labels: ["TypeScript", "React", "Hooks"],
    repository: "Zertz/react-headless-tabs",
    documentation: "https://react-headless-tabs.pierluc.io/",
  },
  {
    id: "Jirafe",
    title: "Manage Jira Cloud issues in the comfort of Slack",
    emoji: "🦒",
    labels: ["TypeScript", "Next.js"],
    website: "https://jirafe-zertz.vercel.app/",
  },
  {
    id: "Canados",
    title: "Interactive heatmap of tornados in Canada and the United States",
    emoji: "🌪",
    labels: ["TypeScript", "Next.js"],
    repository: "Zertz/canados",
    website: "https://canados.vercel.app/",
  },
  {
    id: "express-restify-mongoose",
    title: "Automatically generate queryable REST APIs from mongoose schemas",
    emoji: "🐒",
    labels: ["JavaScript", "Express", "MongoDB"],
    repository: "florianholzapfel/express-restify-mongoose",
    documentation:
      "https://florianholzapfel.github.io/express-restify-mongoose/",
  },
];

export function Projects({
  repositories,
}: {
  repositories: Record<string, Repository>;
}) {
  return (
    <>
      <h2 className="sr-only">Open source</h2>
      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <li
            key={project.id}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow dark:bg-slate-800"
          >
            <div className="flex flex-1 flex-col p-8">
              <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gray-200 text-2xl">
                {project.emoji}
              </span>
              <h3 className="mt-6 text-sm font-medium text-gray-800 dark:text-slate-200">
                {project.id}
              </h3>
              <dl className="mt-1 flex flex-grow flex-col justify-between">
                <dt className="sr-only">Name</dt>
                <dd className="text-sm text-gray-500 dark:text-slate-400">
                  {project.title}
                </dd>
                <dt className="sr-only">Labels</dt>
                <dd className="mt-3 flex flex-wrap justify-center gap-2">
                  {project.labels.map((label) => (
                    <span
                      key={label}
                      className="rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800"
                    >
                      {label}
                    </span>
                  ))}
                </dd>
              </dl>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                {repositories[project.repository] && (
                  <div className="flex w-0 flex-1">
                    <a
                      href={repositories[project.repository].html_url}
                      className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-slate-300"
                    >
                      <CodeBracketIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">GitHub</span>
                      {repositories[project.repository].stargazers_count >=
                        10 && (
                        <>
                          <StarIcon
                            className="ml-2 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          <span className="ml-2">
                            {repositories[project.repository].stargazers_count}
                          </span>
                        </>
                      )}
                    </a>
                  </div>
                )}
                {project.documentation && (
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={project.documentation}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500 dark:text-slate-300 dark:hover:text-slate-400"
                    >
                      <BookOpenIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Documentation</span>
                    </a>
                  </div>
                )}
                {project.website && (
                  <div className="-ml-px flex w-0 flex-1">
                    <a
                      href={project.website}
                      className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium  text-gray-700 hover:text-gray-500 dark:text-slate-300 dark:hover:text-slate-400"
                    >
                      <GlobeAltIcon
                        className="h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2">Website</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
