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
        [React.createElement("h1",{},"i am h1"),React.createElement("h2",{},"I am h2 tag")]
),    [React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"i am h3"),React.createElement("h2",{},"I am h4 tag")]
)]]
);

const heading = React.createElement("h1", {id:"heading"}, "Hello world from React");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

