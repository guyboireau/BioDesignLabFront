import { gql } from "@/__generated__/gql";

const CATEGORIES_QUERY = gql(`
    query getCategories($first: Int, $after: String = "") {
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
                }
            }
        }
    }
`);

export default CATEGORIES_QUERY;
