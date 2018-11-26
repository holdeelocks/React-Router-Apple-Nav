import React from "react";
import { NavLink } from "react-router-dom";
import { data } from "../data";

const SubNav = props => {
  const name = data.find(item => `${item.name}` === props.match.params.name);
  console.log(name);
  return (
    <nav className="sub-nav">
      {name.children.map(item => (
        <NavLink to={`/${name.name}/${item.name}`} key={item.name}>
          <div className="img-container">
            <img src={item.img} alt={item.name} />
          </div>
          <p>{item.name}</p>
        </NavLink>
      ))}
    </nav>
  );
};

export default SubNav;