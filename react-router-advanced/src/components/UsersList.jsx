import { Link } from "react-router-dom";

const users = ["alice", "bob", "charlie"];

const UsersList = () => (
  <ul>
    {users.map((user) => (
      <li key={user}>
        <Link to={`/users/${user}`}>{user}'s Profile</Link>
      </li>
    ))}
  </ul>
);
export default UsersList;
