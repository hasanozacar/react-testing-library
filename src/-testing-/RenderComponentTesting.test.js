import React from "react";
import ReactDOM from "react-dom";

import  RenderTesting  from "../RenderTesting";

test("it works", () => {
  const root = document.createElement("div");
  ReactDOM.render(<RenderTesting />, root);

  expect(root.querySelector("h1").textContent).toBe("React Testing Library");
  expect(root.querySelector("label").textContent).toBe(
    "What needs to be done?"
  );
  expect(root.querySelector("button").textContent).toBe("Add #1");
});
