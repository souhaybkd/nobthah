import React, { useEffect } from 'react'
import { account } from '../../appwrite/appwrite.config';
import { useNavigate } from 'react-router-dom';

export default function Navigate() {
const navigate = useNavigate()
    useEffect(() => {
      async function getAuthStatus() {
        try {
          const user = await account.get();
          handleLastLabelClick(user.labels);

        //   handleLastLabelClick
        } catch (error) {
          console.log("No user logged in", error);
          // Redirect to login page if user is not authenticated
          navigate("/login");
        }
      }
      getAuthStatus();

    }, []);
  
    const handleLastLabelClick = (labels) => {
      const lastLabel = labels[labels.length - 1];
      if (lastLabel) {
        console.log(lastLabel)
        navigate("dashboard/create-resume-from-scratch/resume/" + lastLabel)
      } else {
        navigate("/")
      }
    };

    
  return (
    <div>Navigate</div>
  )
}
