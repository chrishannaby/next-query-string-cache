import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [query, setQuery] = useState("?limit=2&tags=technology&page=2");
  const [quotes, setQuotes] = useState();

  async function handleSubmit(e) {
    e.preventDefault();
    const encodedQuery = btoa(query);
    const response = await fetch(
      `https://builder-api-cache.netlify.app/.netlify/builders/quote-api/${encodedQuery}`
    );
    const data = await response.json();
    setQuotes(data);
  }

  return (
    <main className="py-12 px-6 container mx-auto prose">
      <Head>
        <title>Next.js + Netlify</title>
      </Head>
      <h1>Netlify Query Param Caching Workaround</h1>
      <p>
        The form below fetches a quote from a quote API using a Netlify
        on-demand builder that caches the response from the API. Since the API
        uses query params which are not currently cachable by the Netlify CDN we
        are encoding the query params we pass to the builder using base64 and
        then decoding them in the builder function to pass on to the API. A full
        list of query params supported by the API can be found{" "}
        <a href="https://github.com/lukePeavey/quotable#list-quotes">here</a>.
      </p>

      <hr />
      <form onSubmit={handleSubmit}>
        <label
          htmlFor="query"
          className="block text-sm font-medium text-gray-700"
        >
          Query string
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="?limit=2&tags=technology"
          />
        </div>

        <input
          type="submit"
          className="mt-6 cursor-pointer inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          value="Fetch Quotes"
        />
      </form>
      <hr />
      {quotes && (
        <>
          <p>Fetched {quotes.count} quotes</p>
          {quotes.results.map((quote) => {
            return <blockquote key={quote._id}>{quote.content}</blockquote>;
          })}
        </>
      )}
    </main>
  );
}
