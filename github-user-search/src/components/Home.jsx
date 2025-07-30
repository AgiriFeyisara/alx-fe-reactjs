import React, { useEffect, useState } from "react";
import githubApi from "../services/api";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    githubApi
      .get("/users/your-username")
      .then((res) => setUser(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>GitHub Profile</h1>
      {user ? <pre>{JSON.stringify(user, null, 2)}</pre> : <p>Loading...</p>}
    </div>
  );
};

export default Home;
