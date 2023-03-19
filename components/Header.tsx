import { Popover } from "@headlessui/react";
import {
  Bars3Icon,
  BriefcaseIcon,
  CodeBracketIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classnames from "classnames";
import Image from "next/image";

const userNavigation = [
  {
    name: "GitHub",
    href: "https://github.com/Zertz",
    icon: CodeBracketIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/pierlucgendreau/",
    icon: BriefcaseIcon,
  },
];

export function Header() {
  return (
    <Popover
      as="header"
      className={({ open }) =>
        classnames(
          open ? "fixed inset-x-0 top-0 z-40 overflow-y-auto" : "",
          "bg-white shadow-sm dark:bg-slate-800 sm:static sm:overflow-y-visible"
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
                  <div className="text-base font-medium text-gray-800 dark:text-slate-200">
                    Pier-Luc Gendreau
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-slate-400">
                    (Java|Type)Script Developer
                  </div>
                </div>
              </div>
              <div className="hidden sm:flex">
                {userNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-300"
                  >
                    <item.icon
                      className="mr-3 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
              <Popover.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500 dark:hover:bg-slate-700 sm:hidden">
                <span className="sr-only">Open menu</span>
                {open ? (
                  <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
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
                    className="flex items-center rounded-md py-2 px-3 text-base font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-700 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-600 dark:hover:text-slate-300"
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
  );
}
