import githubApi from "./api";

/**
 * Fetch GitHub user data by username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<Object>} - The user's profile data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await githubApi.get(`/users/${username}`);
    return response.data;
  } catch (error) {
    throw error; // Let the component (e.g., Search.jsx) handle the error
  }
};
