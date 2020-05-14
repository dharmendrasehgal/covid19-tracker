import React, { useState, useEffect, useRef } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const isComponentMounted = useRef(true);

  useEffect(() => {
    if (isComponentMounted.current) {
      setLoading(true);
      (async () => {
        try {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          ).then(res => res.clone().json());
          console.log(response);
          setUsers(response);
        } catch (err) {
          throw new Error(err);
        } finally {
          setLoading(false);
        }
      })();
    }
    return () => {
      isComponentMounted.current = false;
    };
  }, []);
  return (
    <div>
      {loading ? (
        <div>Loading data...</div>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;