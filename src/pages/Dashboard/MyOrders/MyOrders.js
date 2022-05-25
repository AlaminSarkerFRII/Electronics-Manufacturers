import React, { useEffect, useState } from "react";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <h2>My Orders </h2>
    </div>
  );
};

export default MyOrders;
