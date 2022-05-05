import { BriefcaseIcon, ThumbUpIcon } from "@heroicons/react/outline";
import classnames from "classnames";

const timeline = [
  {
    id: 1,
    content: "Developer Analyst III",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "December 2021",
    datetime: "2021-12-15",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 1,
    content: "Developer Analyst II",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "December 2020",
    datetime: "2020-12-15",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 2,
    content: "Programmer",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "March 2020",
    datetime: "2020-03-23",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 3,
    content: "Senior Developer",
    target: "at Classcraft",
    href: "#",
    date: "August 2019",
    datetime: "2019-08-01",
    icon: ThumbUpIcon,
    iconBackground: "bg-blue-500",
  },
  {
    id: 4,
    content: "Developer",
    target: "at Classcraft",
    href: "#",
    date: "August 2016",
    datetime: "2016-08-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Developer",
    target: "at Sport Chrono",
    href: "#",
    date: "July 2013",
    datetime: "2013-07-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "IT Support",
    target: "at Informatique Orford",
    href: "#",
    date: "May 2010",
    datetime: "2010-05-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    id: 5,
    content: "Tech Reviewer",
    target: "at Neoseeker",
    href: "#",
    date: "July 2008",
    datetime: "2008-07-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
];

export function Timeline() {
  return (
    <div className="flow-root">
      <ul role="list" className="-mb-8">
        {timeline.map((event, eventIdx) => (
          <li key={event.id}>
            <div className="relative pb-8">
              {eventIdx !== timeline.length - 1 ? (
                <span
                  className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex space-x-3">
                <div>
                  <span
                    className={classnames(
                      event.iconBackground,
                      "h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white"
                    )}
                  >
                    <event.icon
                      className="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div className="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4">
                  <div>
                    <p className="font-medium text-sm text-gray-900">
                      {event.content}{" "}
                      <a
                        href={event.href}
                        className="font-normal text-gray-500"
                      >
                        {event.target}
                      </a>
                    </p>
                  </div>
                  <div className="text-right text-sm whitespace-nowrap text-gray-500">
                    <time dateTime={event.datetime}>{event.date}</time>
                  </div>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
