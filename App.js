const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "I'm an h1 tag"),
    React.createElement("h2", { id: "heading" }, "I'm an h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h3", { id: "heading" }, "I'm an h3 tag"),
    React.createElement("h4", { id: "heading" }, "I'm an h4 tag"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
