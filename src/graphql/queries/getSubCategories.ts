// import { gql } from "@/__generated__";
import { DocumentNode, gql } from '@apollo/client';

const SUBCATEGORIES_QUERY: DocumentNode = gql(`
query getSubCategories($first: Int, $after: String = "") {
    categories(first: $first, after: $after, where: {parent: null}) {
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
          children {
            nodes {
              description
              name
              slug
              id
            }
          }
        }
      }
    }
  }
`);
export default SUBCATEGORIES_QUERY;
