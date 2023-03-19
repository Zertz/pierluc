import classnames from "classnames";
import Head from "next/head";
import { useEffect } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { Experience } from "../components/Experience";
import { Header } from "../components/Header";
import { Projects, projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { GitHubRepository } from "../types";

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
      <Header />
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
                    ? "text-gray-800 dark:text-slate-200"
                    : "text-gray-500 hover:text-gray-700 dark:text-slate-400 dark:hover:text-slate-300",
                  tabIdx === 0 ? "rounded-l-lg" : "",
                  tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                  "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-center text-sm font-medium hover:bg-gray-50 focus:z-10 dark:bg-slate-800 dark:hover:bg-slate-600"
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
        <TabPanel hidden={tab !== "#blog"}>Blog</TabPanel>
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
