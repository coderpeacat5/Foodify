const heading = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("h2", {}, "I am an h2 tag"),
        React.createElement("h3", {}, "I am an h3 tag")
    ]),
    React.createElement("div", { id: "child2" }, [  // Corrected placement of parenthesis
        React.createElement("h2", {}, "I am an h2 tag"),
        React.createElement("h3", {}, "I am an h3 tag")
    ])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
