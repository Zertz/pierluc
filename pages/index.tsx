import { Menu, Popover, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";
import classnames from "classnames";
import Head from "next/head";
import Image from "next/image";
import { Fragment, useEffect } from "react";
import { TabPanel, useTabs } from "react-headless-tabs";
import { Experience } from "../components/Experience";
import { projects, Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { GitHubRepository } from "../types";

const user = {
  name: "Pier-Luc Gendreau",
  email: "pierluc@pierluc.io",
  imageUrl: "/pierluc.jpg",
};

const userNavigation = [
  { name: "GitHub", href: "https://github.com/Zertz" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/pierlucgendreau/" },
];

const tabs = [
  { name: "Timeline", href: "#timeline" },
  { name: "Projects", href: "#projects" },
  { name: "Jobs", href: "#jobs" },
];

type Props = Awaited<ReturnType<typeof getStaticProps>>["props"];

export type Repository = Pick<
  GitHubRepository,
  "html_url" | "stargazers_count"
>;

export default function Home({ repositories }: Props) {
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
      {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
      <Popover
        as="header"
        className={({ open }) =>
          classnames(
            open ? "fixed inset-0 z-40 overflow-y-auto" : "",
            "bg-white shadow-sm lg:static lg:overflow-y-visible"
          )
        }
      >
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="relative flex justify-between lg:gap-8 xl:grid xl:grid-cols-12">
                <div className="flex md:absolute md:inset-y-0 md:left-0 lg:static xl:col-span-2">
                  <div className="flex flex-shrink-0 items-center">
                    <a href="#">
                      <img
                        className="block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark.svg?color=rose&shade=500"
                        alt="Workflow"
                      />
                    </a>
                  </div>
                </div>
                <div className="min-w-0 flex-1 md:px-8 lg:px-0 xl:col-span-6">
                  <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                    <div className="w-full">
                      <label htmlFor="search" className="sr-only">
                        Search
                      </label>
                      <div className="relative">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                          <SearchIcon
                            className="h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                        </div>
                        <input
                          id="search"
                          name="search"
                          className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:border-rose-500 focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-rose-500 sm:text-sm"
                          placeholder="Search"
                          type="search"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center md:absolute md:inset-y-0 md:right-0 lg:hidden">
                  {/* Mobile menu button */}
                  <Popover.Button className="-mx-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500">
                    <span className="sr-only">Open menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Popover.Button>
                </div>
                <div className="hidden lg:flex lg:items-center lg:justify-end xl:col-span-4">
                  <a
                    href="#"
                    className="text-sm font-medium text-gray-900 hover:underline"
                  >
                    Go Premium
                  </a>
                  <a
                    href="#"
                    className="ml-5 flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </a>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-5 flex-shrink-0">
                    <div>
                      <Menu.Button className="flex rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2">
                        <span className="sr-only">Open user menu</span>
                        <Image
                          alt=""
                          className="rounded-full"
                          src={user.imageUrl}
                          width={32}
                          height={32}
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classnames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>

                  <a
                    href="#"
                    className="ml-6 inline-flex items-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    New Post
                  </a>
                </div>
              </div>
            </div>

            <Popover.Panel as="nav" className="lg:hidden" aria-label="Global">
              <div className="border-t border-gray-200 pt-4">
                <div className="mx-auto flex max-w-3xl items-center px-4 sm:px-6">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium text-gray-800">
                      {user.name}
                    </div>
                    <div className="text-sm font-medium text-gray-500">
                      {user.email}
                    </div>
                  </div>
                  <button
                    type="button"
                    className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mx-auto mt-3 max-w-3xl space-y-1 px-2 sm:px-4">
                  {userNavigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="mx-auto mt-6 max-w-3xl px-4 sm:px-6">
                <a
                  href="#"
                  className="flex w-full items-center justify-center rounded-md border border-transparent bg-rose-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-rose-700"
                >
                  New Post
                </a>

                <div className="mt-6 flex justify-center">
                  <a
                    href="#"
                    className="text-base font-medium text-gray-900 hover:underline"
                  >
                    Go Premium
                  </a>
                </div>
              </div>
            </Popover.Panel>
          </>
        )}
      </Popover>

      <div className="py-10">
        <div className="mx-auto max-w-5xl sm:px-6 lg:grid lg:grid-cols-12 lg:gap-8 lg:px-8">
          <main className="lg:col-span-12">
            <div className="mb-4 px-4 sm:px-0">
              <div>
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
            </div>
            <TabPanel
              className="flex flex-col gap-6"
              hidden={tab !== "#timeline"}
            >
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
      </div>
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
    revalidate: 60 * 5,
  };
}
