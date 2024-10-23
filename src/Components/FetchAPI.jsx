import { useState } from "react";

const FetchAPI = () => {
  const apiURL = "https://jsonplaceholder.typicode.com/users";

  const [users, setUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(0);

  const fetchData = async (url) => {
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data);

    setUsers(data);
    return;
  };

  const sortUsers = () => {
    if (sortOrder === 0 || sortOrder === 2) {
      const sortedArr = [...users].sort(
        (a, b) => a.name.length - b.name.length
      );
      setUsers(sortedArr);
      setSortOrder(1);
    } else if (sortOrder == 1) {
      const sortedArr = [...users].sort(
        (a, b) => b.name.length - a.name.length
      );
      setUsers(sortedArr);
      setSortOrder(2);
    }
  };

  return (
    <div>
      <h1>Users List</h1>
      <div>
        <button onClick={() => fetchData(apiURL)}>Get users</button>
        <button onClick={sortUsers}>Sort List</button>
      </div>

      <div>
        {users ? (
          <ul>
            {users.map((user) => {
              return <li key={user.id}>{user.name}</li>;
            })}
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default FetchAPI;
