import { Menu, Transition } from "@headlessui/react";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  ShareIcon,
  StarIcon,
  ThumbUpIcon,
} from "@heroicons/react/solid";
import classnames from "classnames";
import { Fragment, ReactNode } from "react";

export interface IPost {
  id: string;
  likes: string;
  replies: string;
  views: string;
  author: {
    name: string;
  } & (
    | {
        emoji: string;
      }
    | {
        imageUrl: string;
      }
  );
  date: string;
  datetime: string;
  href: string;
  title: string;
  body: ReactNode;
}

export function Post({ post }: { post: IPost }) {
  return (
    <li className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6">
      <article aria-labelledby={"post-title-" + post.id}>
        <div>
          <div className="flex space-x-3">
            <div className="flex-shrink-0">
              {"imageUrl" in post.author ? (
                <img
                  className="h-10 w-10 rounded-full"
                  src={post.author.imageUrl}
                  alt=""
                />
              ) : (
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-2xl">
                  {post.author.emoji}
                </span>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-medium text-gray-900">
                <a href={post.href} className="hover:underline">
                  {post.author.name}
                </a>
              </p>
              <p className="text-sm text-gray-500">
                <time dateTime={post.datetime}>{post.date}</time>
              </p>
            </div>
            <div className="flex flex-shrink-0 self-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                    <DotsVerticalIcon className="h-5 w-5" aria-hidden="true" />
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
                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <StarIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Add to favorites</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <CodeIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Embed</span>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classnames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "flex px-4 py-2 text-sm"
                            )}
                          >
                            <FlagIcon
                              className="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Report content</span>
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
            id={"post-title-" + post.id}
            className="mt-4 text-base font-medium text-gray-900"
          >
            {post.title}
          </h2>
        </div>
        <div className="mt-2 space-y-4 text-sm text-gray-700">{post.body}</div>
        <div className="mt-6 flex justify-between space-x-8">
          <div className="flex space-x-6">
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ThumbUpIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">{post.likes}</span>
                <span className="sr-only">likes</span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ChatAltIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">
                  {post.replies}
                </span>
                <span className="sr-only">replies</span>
              </button>
            </span>
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">{post.views}</span>
                <span className="sr-only">views</span>
              </button>
            </span>
          </div>
          <div className="flex text-sm">
            <span className="inline-flex items-center text-sm">
              <button
                type="button"
                className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
              >
                <ShareIcon className="h-5 w-5" aria-hidden="true" />
                <span className="font-medium text-gray-900">Share</span>
              </button>
            </span>
          </div>
        </div>
      </article>
    </li>
  );
}
