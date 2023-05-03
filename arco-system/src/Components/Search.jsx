import React, { useState, useEffect } from "react";

export default function Search() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "https://kueski.vercel.app/api/users";

  useEffect(() => {
    fetch(URL, {mode: 'no-cors'})
      .then((res) => res.json())
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
      <h1>{users[0]}</h1>
    </>
  );
}
