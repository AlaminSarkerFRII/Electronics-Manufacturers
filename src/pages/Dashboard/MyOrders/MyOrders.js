import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../../Firebase.init";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    fetch(
      `https://evening-ridge-50687.herokuapp.com/order?email=${user.email}`,
      {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        toast.success("Orders Added Successfully");
      });
  }, [user]);

  return (
    <div className="w-4/5 mx-auto">
      <h2 className="text-4xl font-bold py-4 text-center">
        My Orders {orders.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th className="text-xl">Name</th>
              <th className="text-xl">Orders Name</th>
              <th className="text-xl">Price</th>
              <th className="text-xl">Action</th>
            </tr>
          </thead>
          <tbody className="shadow-4xl bg-amber-100">
            {/* <!-- row 1 --> */}
            {orders.map((order, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.order}</td>
                <td>{order.price}</td>
                <td className="mr-2">
                  {order.price && !order.paid && (
                    <Link to={`/dashboard/payment/${order._id}`}>
                      <button className="btn btn-xs btn-success mr-2">
                        pay
                      </button>
                    </Link>
                  )}
                  {order.price && order.paid && (
                    <div>
                      <p>
                        <span className="text-success">Paid</span>
                      </p>
                      <p className="text-xs text-orange-600">
                        <cite>Transaction Id:</cite>
                        <span className="text-success px-2 text-xl">
                          {order.transactionId}
                        </span>
                      </p>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
