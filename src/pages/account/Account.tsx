import { account } from "../../appwrite/appwrite.config";
import "./account.scss";
import React, { useEffect, useState } from 'react';

export default function Account() {
  const [userData, setUserData] = useState<any>(); // Initialize state with null

  useEffect(() => {
    async function getAuthStatus() {
      try {
        const user = await account.get();
        setUserData(user);
        console.log(user);
      } catch (error) {
        console.log("No user logged in", error);
      }
    }
    getAuthStatus();
  }, []);

  if (!userData) {
    return <h1>Loading...</h1>; // Display loading message while userData is null
  }

  return (
    <div>
        <h1>User Name:- {userData.name || "No user name available"}</h1>
        <h1>Email:- {userData.email || "No user name available"}</h1>

        <h1>Resume Buyed:- </h1>
        <ul>
            {
                userData.labels.map((item) => {
                    return <li>{item}</li>
                })
            }
        </ul>
    </div> // Display user name or fallback text
  );
}
