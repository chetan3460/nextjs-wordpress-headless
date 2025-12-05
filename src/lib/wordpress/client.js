import { GraphQLClient } from 'graphql-request';

const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT || '';

export const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * Fetch data from WordPress GraphQL API
 * @param {string} query - GraphQL query string
 * @param {object} variables - Query variables
 * @returns {Promise<any>} GraphQL response data
 */
export async function fetchGraphQL(query, variables = {}) {
    try {
        const data = await graphQLClient.request(query, variables);
        return data;
    } catch (error) {
        console.error('GraphQL Error:', error);
        throw error;
    }
}

/**
 * Fetch data from WordPress REST API
 * @param {string} endpoint - REST API endpoint path
 * @returns {Promise<any>} REST API response data
 */
export async function fetchREST(endpoint) {
    const baseUrl = process.env.WORDPRESS_REST_ENDPOINT || '';
    const url = `${baseUrl}${endpoint}`;

    const response = await fetch(url, {
        next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
        throw new Error(`REST API error: ${response.statusText}`);
    }

    return response.json();
}
