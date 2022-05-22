import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/tool";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "from tools");
        setTools(data);
      });
  }, []);

  return (
    <div className="my-20 px-20">
      <h1 className="text-xl text-center">Our tools</h1>
      <h2 className="mb-10 text-4xl text-center text-red-500">
        Electrical Components Manufacturers
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {tools.map((tool) => (
          <Tool key={tool._id} tool={tool}></Tool>
        ))}
      </div>
    </div>
  );
};

export default Tools;
