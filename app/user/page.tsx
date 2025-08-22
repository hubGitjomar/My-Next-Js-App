import TimeDate from "../components/TimeDate";
import users from "../../public/users.json";

interface Username {
  id: number;
  username: string;
  address: {
    city: string;
  };
}

const Users = async () => {
  const username: Username[] = users;

  return (
    <>
      <h1 className="font-bold text-center text-5xl ">Usernames</h1>
      <TimeDate />
      <table className="border-4 mt-8 w-full mb-8">
        <thead>
          <tr className="bg-black-100">
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Username</th>
            <th className="py-2 px-4 border-b">Address</th>
            <th className="py-2 px-4 border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {username.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="py-2 px-4 border-b bg-blue-600">{user.id}</td>
              <td className="py-2 px-4 border-b">{user.username}</td>
              <td className="py-2 px-4 border-b bg-blue-600">
                {user.address.city}
              </td>
              <td className="gap-6 flex justify-center items-center py-2 px-4 border-b">
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">
                  Info
                </button>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300">
                  Update
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Users;
