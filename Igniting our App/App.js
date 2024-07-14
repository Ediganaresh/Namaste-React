import React from "react";
import ReactDom from "react-dom";


/*
<div id=parent>
 <div id="child">
   <h1>I am h1</h1>
    <h1>I am h1</h1>
 </div>
 <div id="child2">
   <h1>I am h1</h1>
    <h1>I am h1</h1>
 </div>
</div>
*/

const parent=React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"i jlam h1"),React.createElement("h2",{},"I am h2 tag")]
),    [React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Naresh"),React.createElement("h2",{},"I am h4 tag")]
)]]
);

const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(parent);

