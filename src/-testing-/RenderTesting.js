import React from "react";
import ReactDOM from "react-dom";
import { within } from "@testing-library/dom";
import RenderTesting from "../RenderTesting";

const { getByText, getByLabelText } = render(<RenderTesting />);


test("it works getByText", () => {
  expect(getByText("React Testing Library")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull();
  // Above code can be shortend to
  getByText("React Testing Library");
  getByText("Add #1");
});
test("it works getByLabelText", () => {
  expect(getByLabelText("What needs to be done?")).not.toBeNull();
  getByLabelText("What needs to be done?");
});
