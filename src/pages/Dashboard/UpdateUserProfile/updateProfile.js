import React from "react";
import { useParams } from "react-router-dom";

const MyProfile = () => {

  
  const {id} = useParams()


  return (
    <div>
      <h2>My Profile {id} </h2>
    </div>
  );
};

export default MyProfile;
