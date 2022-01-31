import Head from "next/head";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <Head>
        <title>Next.js + Netlify</title>
      </Head>
      <p>
        <a
          className="underline"
          href="https://github.com/lukePeavey/quotable#list-quotes"
        >
          Full list of options here
        </a>
      </p>
    </main>
  );
}
