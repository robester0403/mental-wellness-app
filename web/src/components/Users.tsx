import React from "react";
import { gql, useQuery } from "@apollo/client";

// query name could be anything
const USERS_QUERY = gql`
  query USERS_QUERY {
    allUsers {
      id
      name
    }
  }
`;

interface User {
  name: string;
}

const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  console.log(data);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error?.message}</p>;

  return (
    <div>
      {data.allUsers && data.allUsers.map((user: User) => <p>{user.name}</p>)}
    </div>
  );
};

export default Users;
