import Head from "next/head";

export default function Home() {
  return (
    <main className="py-12 px-6 container mx-auto prose">
      <Head>
        <title>Next.js + Netlify</title>
      </Head>
      <p>
        <a href="https://github.com/lukePeavey/quotable#list-quotes">
          Full list of options here
        </a>
      </p>
    </main>
  );
}
