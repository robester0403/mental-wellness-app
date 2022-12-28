import React from "react";
import { gql, useQuery } from "@apollo/client";

// query name could be anything
const USERS_QUERY = gql`
  query USERS_QUERY {
    users {
      id
      name
    }
  }
`;
const Users: React.FC = () => {
  const { loading, error, data } = useQuery(USERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div></div>;
};

export default Users;
