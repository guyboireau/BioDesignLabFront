"use client";

import TAGS_QUERY from "@/graphql/queries/getTags";
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import React from "react";

// IT IS ONLY FOR DEMO PURPOSES: modify this component to fit the project needs

const TagList = () => {
  const { loading, error, data, fetchMore } = useQuery(TAGS_QUERY, {
    variables: { first: 2 },
  });

  return (
    <div>
      <h2>Tags</h2>
      {data && data.tags && (
        <ul>
          {data.tags.edges.map(({ node: tag }) => (
            <li key={tag.id}>
              {tag.name}: {tag.description}
            </li>
          ))}
        </ul>
      )}
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      {data && data.tags && data.tags.pageInfo.hasNextPage && (
        <button
          type="button"
          disabled={loading}
          className="button border-2 border-black px-8 py-2 hover:bg-black hover:text-white"
          onClick={() =>
            fetchMore({
              variables: {
                after: data.tags!.pageInfo.endCursor,
              },
              updateQuery: (prev, { fetchMoreResult }) => {
                if (!fetchMoreResult || !prev.tags || !fetchMoreResult.tags) {
                  return prev;
                }
                return {
                  ...fetchMoreResult,
                  tags: {
                    ...fetchMoreResult.tags,
                    edges: [...prev.tags.edges, ...fetchMoreResult.tags.edges],
                  },
                };
              },
            })
          }
        >
          Fetch more
        </button>
      )}
    </div>
  );
};

export default TagList;
