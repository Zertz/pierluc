import { IPost, Post } from "./Post";

const projects: IPost[] = [
  {
    id: "jirafe",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "🦒 Jirafe · Manage Jira Cloud issues in the comfort of Slack",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "April 2018 - May 2022",
    datetime: "2018-04-07T09:00:00",
    href: "#",
    title:
      "Built from the ground up with React, Node.js, Redis, ZEIT Now, Google Cloud Datastore, Pub/Sub, Scheduler, and BigQuery.",
    body: (
      <ul className="list-disc list-inside space-y-2">
        <li>Originally built in a week-end</li>
        <li>
          Evolved to be entirely serverless, composed of dozens of services
        </li>
        <li>Usability and performance before features</li>
        <li>
          Wrote a lot of code for Stripe billing, many packages with Lerna (and
          recently removed it all in favor of simpler alternatives)
        </li>
        <li>
          Bought Tailwind UI on release day, with the goal of giving a a fresh
          cost of paint to the landing page and dashboard!
        </li>
      </ul>
    ),
  },
  {
    id: "canados",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "🌪 Canados · Interactive map of tornados in Canada and the United States",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "March 2020 - Present",
    datetime: "2020-03-01T09:00:00",
    href: "https://canados.vercel.app/",
    title: "Built with Next.js, TypeScript, and Tailwind.",
    body: (
      <ul className="list-disc list-inside space-y-2">
        <li>Needed a side-project to feed my creativity</li>
        <li>
          Browsed{" "}
          <a className="underline" href="https://open.canada.ca/en/open-data">
            Open Data
          </a>{" "}
          for large datasets and stumbled upon tornados (ended up adding U.S.
          data because they get <strong>a lot</strong> more)
        </li>
        <li>
          Everything is computed client-side and has to be fast on my sub-200$
          moto g phone
        </li>
        <li>
          Can{" "}
          <a
            className="underline"
            href="https://canados.now.sh/?c=40.713956_-96.064453&f=3_5&y=1950_2006&z=5"
          >
            dynamically generate
          </a>{" "}
          a heatmap nearly identical to the{" "}
          <a
            className="underline"
            href="https://en.wikipedia.org/wiki/Tornado_Alley#/media/File:Tornado_Alley.svg"
          >
            Tornado Alley heatmap
          </a>{" "}
          published by FEMA
        </li>
      </ul>
    ),
  },
  {
    id: "express-restify-mongoose",
    likes: "29",
    replies: "11",
    views: "2.7k",
    author: {
      name: "🐒 express-restify-mongoose · Easily restify mongoose schemas",
      imageUrl:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    date: "April 2020 - May 2022",
    datetime: "2018-04-07T09:00:00",
    href: "https://github.com/florianholzapfel/express-restify-mongoose",
    title: "Built in plain old JavaScript.",
    body: (
      <ul className="list-disc list-inside space-y-2">
        <li>
          Haven&apos;t had much time and resources to work on it in the last few
          years but still a project I&apos;m proud of!
        </li>
        <li>
          Contributed early in the project&apos;s life and grew it from ~100
          stars or so to over 500
        </li>
        <li>Wrote and maintained the documentation website from scratch</li>
      </ul>
    ),
  },
];

export function Projects() {
  return (
    <>
      <h1 className="sr-only">Projects</h1>
      <ul role="list" className="space-y-4">
        {projects.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </>
  );
}
