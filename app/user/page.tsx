import React from "react";

interface Username {
  id: number;
  username: string;
  address: {
    street: string;
  };
}

const Users = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users", {
    cache: "no-store",
  });
  const username: Username[] = await response.json();

  return (
    <>
      <h1 className="font-bold text-center text-5xl">Usernames</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>
        {username.map((usernames) => (
          <li className="my-7 font-bold" key={usernames.id}>
            {usernames.id}: {usernames.username}
          </li>
        ))}
      </ul>
    </>
  );
};

export default Users;
