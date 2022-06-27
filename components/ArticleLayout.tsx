import { ClipboardCopyIcon } from "@heroicons/react/outline";
import { MDXProvider } from "@mdx-js/react";
import { Header } from "./Header";

const components = {
  pre({ children }) {
    return (
      <pre className="relative">
        <ClipboardCopyIcon className="absolute top-3 right-2 h-5 w-5" />
        {children}
      </pre>
    );
  },
};

export function ArticleLayout({ meta, ...props }: { meta: unknown }) {
  return (
    <MDXProvider components={components}>
      <Header />
      <main className="mx-auto max-w-5xl py-10 sm:px-6 lg:px-8">
        <article
          {...props}
          className="prose max-w-none bg-white px-4 py-6 text-lg text-gray-800 shadow dark:prose-invert dark:bg-slate-800 dark:text-slate-200 sm:rounded-lg sm:p-6"
        />
      </main>
    </MDXProvider>
  );
}
