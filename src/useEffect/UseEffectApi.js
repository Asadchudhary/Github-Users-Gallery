import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

const UseEffectApi = () => {
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const token = "ghp_IT3qCiHO3MDtL5MdwDBsB2LHqQolzw";
    try {
      setLoading(false);
      const response = await fetch("https://api.github.com/users", {
        headers: {
          Authorization: `token ${token}`,
        },
      });
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.log("My Error is :" + error);
    }
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  {
    if (loading) {
      return <Loading />;
    }
  }
  return (
    <>
      <div className="body">
        <h1 className="text-center pt-3 headingStyle">List of Github Users</h1>
        <div className="container-fluid mt-1">
          <div className="row text-center">
            {users.map((val, index) => {
              return (
                <Card key={index} img={val.avatar_url} login={val.login} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default UseEffectApi;
