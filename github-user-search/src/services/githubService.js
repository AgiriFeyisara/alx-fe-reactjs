// src/services/githubService.js
import axios from "axios";

/**
 * Fetch GitHub user data by username.
 * @param {string} username - GitHub username to search for.
 * @returns {Promise<Object>} - The user's profile data.
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `token ${import.meta.env.VITE_APP_GITHUB_API_KEY}`, // optional if using a token
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
