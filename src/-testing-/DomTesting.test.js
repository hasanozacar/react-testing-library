import React from "react";
import ReactDOM from "react-dom";
import { within } from "@testing-library/dom";
import RenderTesting from "../RenderTesting";

const root = document.createElement("div");
ReactDOM.render(<RenderTesting />, root);
test("it works getByText", () => {

  const { getByText, getByLabelText } = within(root);

  expect(getByText("React Testing Library")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull();

  // Above code can be shortend to
  getByText("React Testing Library");
  getByText("Add #1");
});
test("it works getByLabelText", () => {

  const { getByLabelText } = within(root);

  expect(getByLabelText("What needs to be done?")).not.toBeNull();

  // Above code can be shortend to
  getByLabelText("What needs to be done?");
});