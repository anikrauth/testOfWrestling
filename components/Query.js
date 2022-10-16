import { gql } from '@apollo/client';

const NEWS_ARTICLES = gql`
  query NEWSANDRUMORS {
    posts(first: 6, where: {categoryName: "news"}) {
      nodes {
        id
        slug
        title
        categories(where: {slug: "news"}) {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            id
            sourceUrl
          }
        }
        author {
          node {
            id
            name
          }
        }
        date
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;




export {NEWS_ARTICLES};