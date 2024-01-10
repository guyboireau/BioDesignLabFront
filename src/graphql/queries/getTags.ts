import { gql } from "@/__generated__/gql";

const TAGS_QUERY = gql(`
  query getTags($first: Int, $after: String) {
    tags(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          name
          slug
          description
        }
      }
    }
  }
`);

export default TAGS_QUERY;
