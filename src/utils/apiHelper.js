import { API, graphqlOperation } from "aws-amplify";

export async function fetchGraphQL(query, variables = {}) {
  try {
    const response = await API.graphql(graphqlOperation(query, variables));

    if (!response || !response.data) {
      throw new Error("Invalid API response.");
    }

    return response.data;
  } catch (error) {
    console.error("GraphQL API error:", error.message);
    throw error;
  }
}
