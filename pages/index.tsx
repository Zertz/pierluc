import { Popover } from "@headlessui/react";
import {
  BriefcaseIcon,
  CodeIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/react/outline";
import classnames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { Experience } from "../components/Experience";
import { projects, Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { GitHubRepository } from "../types";

const userNavigation = [
  { name: "GitHub", href: "https://github.com/Zertz", icon: CodeIcon },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pierlucgendreau/",
    icon: BriefcaseIcon,
  },
];

const tabs = [
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Jobs", href: "#jobs" },
];

export type Repository = Pick<
  GitHubRepository,
  "html_url" | "stargazers_count"
>;

export default function Home({
  repositories,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  const [tab, setTab] = useTabs(
    tabs.map(({ href }) => href),
    typeof window === "undefined"
      ? undefined
      : tabs.find(({ href }) => href === window.location.hash)?.href
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const hashTab = tabs.find(
        ({ href }) => href === window.location.hash
      )?.href;

      if (hashTab === tab) {
        return;
      }

      setTab(hashTab || tabs[0].href);
    }, 125);

    return () => {
      clearInterval(interval);
    };
  }, [setTab, tab]);

  return (
    <div className="min-h-full">
      <Head>
        <title>Pier-Luc · (Java|Type)Script Developer</title>
      </Head>
      <Popover
        as="header"
        className={({ open }) =>
          classnames(
            open ? "fixed inset-x-0 top-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm sm:static sm:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-5xl py-2 px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      width={40}
                      height={40}
                      className="rounded-full"
                      src="/pierluc.jpg"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      Pier-Luc Gendreau
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      (Java|Type)Script Developer
                    </div>
                  </div>
                </div>
                <div className="hidden sm:flex">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <item.icon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 sm:hidden">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel as="nav" className="sm:hidden" aria-label="Global">
              <div className="border-t border-gray-200 p-4">
                <div className="mx-auto max-w-3xl space-y-1 px-2 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      <item.icon
                        className="mr-3 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>
      <main className="mx-auto max-w-5xl py-10 sm:px-6 lg:px-8">
        <div className="mb-4 px-4 sm:px-0">
          <nav
            className="relative z-0 flex divide-x divide-gray-200 rounded-lg shadow"
            aria-label="Tabs"
          >
            {tabs.map(({ name, href }, tabIdx) => (
              <a
                key={name}
                href={href}
                aria-current={href === tab ? "page" : undefined}
                className={classnames(
                  href === tab
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-700",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10"
                )}
                onClick={() => setTab(href)}
              >
                <span>{name}</span>
                <span
                  aria-hidden="true"
                  className={classnames(
                    href === tab ? "bg-rose-500" : "bg-transparent",
                    "absolute inset-x-0 bottom-0 h-0.5"
                  )}
                />
              </a>
            ))}
          </nav>
        </div>
        <TabPanel className="flex flex-col gap-6" hidden={tab !== "#timeline"}>
          <Timeline />
        </TabPanel>
        <TabPanel hidden={tab !== "#projects"}>
          <Projects repositories={repositories} />
        </TabPanel>
        <TabPanel hidden={tab !== "#jobs"}>
          <Experience />
        </TabPanel>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const responses = await Promise.all(
    projects
      .filter(({ repository }) => repository)
      .map(({ repository }) =>
        fetch(`https://api.github.com/repos/${repository}`, {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
          },
        })
      )
  );

  const githubRepositories = await Promise.all<GitHubRepository>(
    responses.map((response) => response.json())
  );

  const repositories: Record<string, Repository> = Object.fromEntries(
    githubRepositories.map(({ full_name, html_url, stargazers_count }) => [
      full_name,
      { html_url, stargazers_count },
    ])
  );

  return {
    props: {
      repositories,
    },
    revalidate: 60 * 15,
  };
}
