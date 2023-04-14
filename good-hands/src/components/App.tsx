import React from "react";
import { LinkProp, ListLinkProp } from "./navigation/navi";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/homePage";

const App = () => {
    return (
        <Routes>
            <Route path={"/"} element={<HomePage />} />
            {ListLinkProp.map((list: LinkProp) => (
                <Route path={list.id} element={<h1>{list.name}</h1>} />
            ))}
            ;
        </Routes>
    );
};

export default App;
