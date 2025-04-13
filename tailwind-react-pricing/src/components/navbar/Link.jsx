import React from "react";

const Link = ({ route }) => {
  return (
    <div>
      <li className="hover:bg-white hover:text-black">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;
