import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import { getUsers } from "../service/api.service";

const User = () => {
  // fetch users from server users
  // display users on table.
  // IIFE
  const history = useHistory();

  const [counter, setCounter] = useState(0);
  const { loading, error, users, refetchCounter, setRefetchCounter } =
    useUsers();

  // no dependency => each render
  // [] => on mount
  // [refetchCounter] => on mount and on refetchCounter change.

  const renderContent = () => {
    if (loading) {
      return <div>Loading.......</div>;
    }

    if (error) {
      return <div className="error">{error}</div>;
    }

    return <UserTable users={users} />;
  };

  const back = () => {
    // history.goBack();
    history.push("/");
  };

  return (
    <div>
      <button onClick={back}>Back</button>
      <button onClick={() => setCounter(counter + 1)}>counter {counter}</button>
      <button onClick={() => setRefetchCounter(refetchCounter + 1)}>
        Refetch User {refetchCounter}
      </button>
      {renderContent()}
    </div>
  );
};

export default User;

interface IUser {
  id: number;
  name: string;
  email: string;
  role: string;
}

interface IUserTableProps {
  users: IUser[];
}

const UserTable = (props: IUserTableProps) => {
  const { users } = props;

  return (
    <div className="table-wrapper">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// advance
// custom hook
// function
const useUsers = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [refetchCounter, setRefetchCounter] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      const { error, data } = await getUsers();
      setLoading(false);

      if (error) {
        return setError(error);
      }

      return setUsers(data);
    };

    fetchUsers();
  }, [refetchCounter]);

  return { loading, users, error, refetchCounter, setRefetchCounter };
};
