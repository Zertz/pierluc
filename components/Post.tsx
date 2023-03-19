import { Menu, Transition } from "@headlessui/react";
import {
  BriefcaseIcon,
  EllipsisVerticalIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import classnames from "classnames";
import Image from "next/image";
import { Fragment, ReactNode } from "react";

export interface IPost {
  id: string;
  author: {
    name: string;
    imageUrl: string;
  };
  date: string;
  datetime: string;
  linkedin: string;
  website: string;
  title: string;
  body: ReactNode;
}

export function Post({ post }: { post: IPost }) {
  return (
    <li className="bg-white px-4 py-6 shadow dark:bg-slate-800 sm:rounded-lg sm:p-6">
      <article aria-labelledby={`post-title-${post.id}`}>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              <Image
                width={40}
                height={40}
                className="rounded-full"
                src={post.author.imageUrl}
                alt=""
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-800 dark:text-slate-200">
                {post.author.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-slate-400">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
            </div>
            <div className="flex flex-shrink-0 self-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <EllipsisVerticalIcon
                      className="h-5 w-5"
                      aria-hidden="true"
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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-slate-800">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={post.linkedin}
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-slate-200"
                                : "text-gray-700 dark:text-slate-300",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <BriefcaseIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>LinkedIn</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={post.website}
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-800 dark:bg-slate-700 dark:text-slate-200"
                                : "text-gray-700 dark:text-slate-300",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <GlobeAltIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Website</span>
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          </div>
          <h2
            id={`post-title-${post.id}`}
            className="mt-4 text-base font-medium text-gray-800 dark:text-slate-200"
          >
            {post.title}
          </h2>
        </div>
        <div className="mt-2 space-y-4 text-sm text-gray-700 dark:text-slate-300">
          {post.body}
        </div>
      </article>
    </li>
  );
}
