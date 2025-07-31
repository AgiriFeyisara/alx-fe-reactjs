import React, { useState } from "react";
import { searchGitHubUsers, fetchUserData } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasMore, setHasMore] = useState(false);

  const handleSearch = async (e, nextPage = 1, append = false) => {
    e?.preventDefault();
    setLoading(true);
    setError("");
    if (!append) setUsers([]);

    try {
      const data = await searchGitHubUsers({
        username,
        location,
        minRepos,
        page: nextPage,
      });

      setHasMore(data.total_count > nextPage * 30);

      const fullProfiles = await Promise.all(
        data.items.map((user) => fetchUserData(user.login))
      );

      setUsers((prev) => (append ? [...prev, ...fullProfiles] : fullProfiles));
      setPage(nextPage);
    } catch (err) {
      console.error(err);
      setError("Looks like we can't find the user.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow">
      <form onSubmit={(e) => handleSearch(e)} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. johndoe"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location (optional)
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. lagos"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Minimum Repositories (optional)
          </label>
          <input
            type="number"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full border px-3 py-2 rounded"
            placeholder="e.g. 10"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-center text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}

      {users.length > 0 && (
        <div className="mt-6 space-y-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-4 p-4 border rounded shadow"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">
                  {user.name || user.login}
                </h2>
                <p className="text-sm text-gray-600">
                  Location: {user.location || "N/A"}
                </p>
                <p className="text-sm text-gray-600">
                  Public Repos: {user.public_repos}
                </p>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline mt-1 inline-block"
                >
                  View GitHub Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}

      {hasMore && !loading && (
        <div className="mt-6 text-center">
          <button
            onClick={(e) => handleSearch(e, page + 1, true)}
            className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-900"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Search;
