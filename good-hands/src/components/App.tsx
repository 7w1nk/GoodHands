import React from "react";
import {Route, Routes} from 'react-router-dom';
import Navigation from "./navigation/navigation";
import {LinkProp, ListLinkProp} from "./navigation/navi/navi";


const App = () => {
    return (
        <div className={"container"}>
            <Navigation/>
            <Routes>
                <Route path={"/"} element={<h1>Домашня</h1>}/>
                {ListLinkProp.map((list: LinkProp) => (
                    <Route path={list.id} element={<h1>{list.name}</h1>}/>
                ))};
            </Routes>
        </div>
    )
}

export default App;