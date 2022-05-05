import { Post } from "./Post";

const posts = [
  {
    id: "3",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Developer Analyst III · FOCUS by TELUS",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "March 2020 - Present",
    datetime: "2020-03-23T09:00:00",
    href: "#",
    title:
      "Primarily working on a large web app with a TypeScript backend and jQuery frontend.",
    body: (
      <ul className="list-disc space-y-2">
        <li>
          Replaced in-house client build with webpack while retaining full
          backward compatibility with existing infrastructure
        </li>
        <li>
          Introduced the team to React and immediately saw significant gains in
          both quality and speed compared to existing code based on jQuery
        </li>
        <li>
          Quickly shipped a messaging component as part of a larger project
        </li>
        <li>
          Wrapping up our first project fully built on React, with the
          front-end&apos;s first integration tests
        </li>
        <li>
          Building mock-ups for an upcoming project, and integrating Storybook
        </li>
      </ul>
    ),
  },
  {
    id: "2",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Senior Developer · Classcraft",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "August 2016 - March 2020",
    datetime: "2020-03-23T09:00:00",
    href: "#",
    title:
      "Contributed to and maintained a large Meteor application built with Node.js, React, Redux, Flow, Stylus, ElasticSearch, and MongoDB.",
    body: (
      <ul className="list-disc space-y-2">
        <li>
          Led a team of three other developers working on the core application
        </li>
        <li>Implemented Figma and Sketch designs using React and CSS</li>
        <li>Participated in validating the UX design of major features</li>
        <li>
          Triaged bugs and worked with the support team to solve customer facing
          issues
        </li>
        <li>
          Rebuilt authentication in a dedicated service and transferred
          knowledge to another team
        </li>
        <li>Automated and streamlined various workflows for internal teams</li>
      </ul>
    ),
  },
  {
    id: "1",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Developer · Sport Chrono",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    date: "July 2013 - June 2016",
    datetime: "2020-03-23T09:00:00",
    href: "#",
    title:
      "Rebuilt the web app with Node.js, Angular.js, and MongoDB, maintained desktop apps built with C# .NET and SQL Server, and tinkered with RFID hardware.",
    body: (
      <ul className="list-disc space-y-2">
        <li>
          Migrated a manual, slow and complex procedure involving Microsoft
          Access to export results to delivering them automatically, in
          real-time
        </li>
        <li>Redesigned the web app both technically and visually</li>
        <li>Wrote extensive documentation</li>
        <li>Trained a dozen folks to use the timing system</li>
      </ul>
    ),
  },
];

export function Experience() {
  return (
    <>
      <h1 className="sr-only">Experience</h1>
      <ul role="list" className="space-y-4">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
