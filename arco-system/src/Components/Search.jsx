import React, {useState, useEffect} from "react";

export default function Search(){
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    const showUsers = async () => {
        const response = await fetch('https://kueski.vercel.app/api/users')
        const data = await response.json();
        console.log(data)
    }
    showUsers();
}