import axios from "axios";

const headers = {
  Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // can remove this line if not using a token
};

/**
 * Fetch full GitHub user profile by username.
 * @param {string} username - GitHub username to fetch.
 * @returns {Promise<Object>} - User's profile data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching user data:", error.message);
    throw error;
  }
};

/**
 * Search GitHub users with advanced filters.
 * @param {Object} filters - Search filters: username, location, minRepos, page.
 * @returns {Promise<Object>} - GitHub search results.
 */
export const searchGitHubUsers = async ({
  username,
  location,
  minRepos,
  page = 1,
}) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos}`;

    const formattedQuery = query.trim().replace(/\s+/g, "+");

    const response = await axios.get(
      `https://api.github.com/search/users?q=${formattedQuery}&page=${page}`,
      {
        headers,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error searching users:", error.message);
    throw error;
  }
};
