import React from "react";
import { NavLink } from "react-router-dom";

export interface LinkProp {
  id: string;
  name: string;
}

export const ListLinkProp: LinkProp[] = [
  { id: "catalog", name: "Каталог животных" },
  { id: "ads", name: "Объявления" },
  { id: "services", name: "Услуги" },
  { id: "consultation", name: "Консультация" },
];
const Navi = () => {
  return (
    <>
      {ListLinkProp.map((list: LinkProp) => (
        <NavLink className={"home-navigation_link"} to={list.id}>
          {list.name}
        </NavLink>
      ))}
    </>
  );
};

export default Navi;
