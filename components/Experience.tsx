import { IPost, Post } from "./Post";

const jobs: IPost[] = [
  {
    id: "focus-by-telus",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Developer Analyst III · FOCUS by TELUS",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "March 2020 - Present",
    datetime: "2020-03-23T09:00:00",
    href: "https://focusoptimization.com/",
    title:
      "Large web app with a MySQL database, Node.js backend, and a jQuery frontend. Progressively evolving to rely more and more on modern tools, including React and TypeScript.",
    body: (
      <ul className="list-inside list-disc space-y-2">
        <li>
          Replaced in-house build tools with webpack, while retaining full
          backward compatibility with existing processes.
        </li>
        <li>
          Introduced the team to React and rapidly saw significant gains in
          performance, quality and velocity compared to existing features built
          with a custom framework.
        </li>
        <li>
          Reduced build time from over 60 seconds to under four seconds, and
          added hot-reload, dramatically improving developer experience.
        </li>
        <li>
          Analyzed, debugged, and brought large performance improvement to
          existing, and largely undocumented features.
        </li>
        <li>
          Implemented features from the ground up: data modeling, prototyping,
          and coding.
        </li>
      </ul>
    ),
  },
  {
    id: "classcraft",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Senior Developer · Classcraft",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "August 2016 - March 2020",
    datetime: "2020-03-23T09:00:00",
    href: "https://www.classcraft.com/",
    title:
      "Contributed to and maintained a large Meteor application built with Node.js, React, Redux, Flow, Stylus, ElasticSearch, and MongoDB.",
    body: (
      <ul className="list-inside list-disc space-y-2">
        <li>
          Led a team of three other developers working on the core application
        </li>
        <li>Implemented Figma and Sketch designs using React and CSS</li>
        <li>Participated in validating the UX design of major features</li>
        <li>
          Triaged bugs and worked with the support team to solve customer facing
          issues
        </li>
        <li>Rebuilt authentication in a dedicated service</li>
        <li>Automated and streamlined various workflows for internal teams</li>
      </ul>
    ),
  },
  {
    id: "sport-chrono",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "Developer · Sport Chrono",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "July 2013 - June 2016",
    datetime: "2020-03-23T09:00:00",
    href: "https://sportchrono.com/",
    title:
      "Rebuilt the web app with Node.js, Angular.js, and MongoDB, maintained desktop apps built with C# .NET and SQL Server, and tinkered with RFID hardware.",
    body: (
      <ul className="list-inside list-disc space-y-2">
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
      <h2 className="sr-only">Experience</h2>
      <ul role="list" className="space-y-4">
        {jobs.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
