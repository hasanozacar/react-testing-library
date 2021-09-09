import React from "react";
import { render } from "@testing-library/react";
import RenderTesting from "../RenderTesting";



test("it works getByText", () => {
  const { getByText } = render(<RenderTesting />);

  expect(getByText("React Testing Library")).not.toBeNull();
  expect(getByText("Add #1")).not.toBeNull();
  // Above code can be shortend to
  getByText("React Testing Library");
  getByText("Add #1");
});
test("it works getByLabelText", () => {
  const { getByLabelText } = render(<RenderTesting />);
  
  expect(getByLabelText("What needs to be done?")).not.toBeNull();
  getByLabelText("What needs to be done?");
});
