import React from "react";
import { useParams } from "react-router-dom";

const ManageOrder = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>ManageOrder {id}</h2>
    </div>
  );
};

export default ManageOrder;
