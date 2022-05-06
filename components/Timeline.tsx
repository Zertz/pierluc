import {
  BriefcaseIcon,
  ChatIcon,
  CodeIcon,
  LightBulbIcon,
  ThumbUpIcon,
} from "@heroicons/react/outline";
import classnames from "classnames";

const timeline = [
  {
    content: "Developer Analyst III",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "December 2021",
    datetime: "2021-12-15",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Created",
    target: "@tempocal/react",
    href: "#",
    date: "November 2021",
    datetime: "2021-11-25",
    icon: CodeIcon,
    iconBackground: "bg-pink-500",
  },
  {
    content: "Created",
    target: "Spruce, a MongoDB GUI for macOS",
    href: "#",
    date: "February 2021",
    datetime: "2021-02-21",
    icon: CodeIcon,
    iconBackground: "bg-pink-500",
  },
  {
    content: "Developer Analyst II",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "December 2020",
    datetime: "2020-12-15",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Created",
    target: "react-headless-tabs",
    href: "#",
    date: "September 2020",
    datetime: "2020-09-10",
    icon: CodeIcon,
    iconBackground: "bg-pink-500",
  },
  {
    content: "Programmer",
    target: "at FOCUS by TELUS",
    href: "#",
    date: "March 2020",
    datetime: "2020-03-23",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Attended",
    target: "Node+JS Interactive · Montreal",
    href: "#",
    date: "December 2019",
    datetime: "2019-12-10",
    icon: LightBulbIcon,
    iconBackground: "bg-purple-500",
  },
  {
    content: "Senior Developer",
    target: "at Classcraft",
    href: "#",
    date: "August 2019",
    datetime: "2019-08-01",
    icon: ThumbUpIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Presented a talk",
    target: "on real-time apps with MongoDB Change Streams",
    href: "#",
    date: "May 2018",
    datetime: "2018-05-16",
    icon: ChatIcon,
    iconBackground: "bg-blue-500",
  },
  {
    content: "Created",
    target: "Jirafe, a Slack bot for Jira",
    href: "#",
    date: "April 2018",
    datetime: "2018-04-07",
    icon: CodeIcon,
    iconBackground: "bg-pink-500",
  },
  {
    content: "Presented a talk",
    target: "on GraphQL",
    href: "#",
    date: "March 2018",
    datetime: "2018-03-21",
    icon: ChatIcon,
    iconBackground: "bg-blue-500",
  },
  {
    content: "Presented a talk",
    target: "on async JavaScript",
    href: "#",
    date: "February 2018",
    datetime: "2018-02-21",
    icon: ChatIcon,
    iconBackground: "bg-blue-500",
  },
  {
    content: "Attended",
    target: "Node.js Interactive · Vancouver",
    href: "#",
    date: "October 2017",
    datetime: "2017-10-04",
    icon: LightBulbIcon,
    iconBackground: "bg-purple-500",
  },
  {
    content: "Developer",
    target: "at Classcraft",
    href: "#",
    date: "August 2016",
    datetime: "2016-08-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "Attended",
    target: "Node.js Interactive · Portland",
    href: "#",
    date: "December 2015",
    datetime: "2015-12-08",
    icon: LightBulbIcon,
    iconBackground: "bg-purple-500",
  },
  {
    content: "Contributor",
    target: "for express-restify-mongoose",
    href: "#",
    date: "August 2015",
    datetime: "2015-08-17",
    icon: CodeIcon,
    iconBackground: "bg-pink-500",
  },
  {
    content: "Developer",
    target: "at Sport Chrono",
    href: "#",
    date: "July 2013",
    datetime: "2013-07-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
    content: "IT Support",
    target: "at Informatique Orford",
    href: "#",
    date: "May 2010",
    datetime: "2010-05-01",
    icon: BriefcaseIcon,
    iconBackground: "bg-green-500",
  },
  {
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
    <section
      aria-labelledby="timeline-heading"
      className="bg-white p-6 rounded-lg shadow"
    >
      <h2 id="timeline-heading" className="text-base font-medium text-gray-900">
        Timeline
      </h2>
      <div className="mt-6 flow-root">
        <ul role="list" className="-mb-8">
          {timeline.map((event, eventIdx) => (
            <li key={`${event.content} ${event.target}`}>
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
    </section>
  );
}
