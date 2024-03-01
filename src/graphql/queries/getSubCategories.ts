import { gql } from "@/__generated__";

const SUBCATEGORIES_QUERY = gql(`
    query getSubCategories($first: Int, $after: String = "") {
        category.subcategories(first: $first, after: $after, where: {parent: null}) {
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

export default SUBCATEGORIES_QUERY;
