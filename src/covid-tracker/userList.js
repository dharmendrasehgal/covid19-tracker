import React, { useRef } from "react";
import { useFetch } from "../hooks/useFetch";

const UserList = () => {
  const isComponentMounted = useRef(true);

  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users', isComponentMounted, []);
  return (
    <div>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        data.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
      {error}
    </div>
  );
};

export default UserList;