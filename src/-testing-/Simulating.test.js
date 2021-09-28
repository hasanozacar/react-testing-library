import React from "react";
import { render, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import RenderTesting from "../RenderTesting";


test("it works", () => {
  const { getByText, getByLabelText } = render(<RenderTesting />);
  getByText("React Testing Library");
  getByLabelText("What needs to be done?");
  getByText("Add #1");
});

// fireEvent
test("allows users to add items to their list", () => {
  const { getByText, getByLabelText } = render(<RenderTesting />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  // Simulate user events
  fireEvent.change(input, { target: { value: "Learn React-testing" } });
  fireEvent.click(button);

  // Make assertion
  getByText("Learn React-testing");
  getByText("Add #2");
});

// userEvent
test("user-events allows users to add...", () => {
  const { getByText, getByLabelText } = render(<RenderTesting />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  userEvent.type(input, "Learn Enzyme");
  userEvent.click(button);

  getByText("Learn Enzyme");
  getByText("Add #2");
});

test("user-events allows users to add more items", () => {
  const { getByText, getByLabelText } = render(<RenderTesting />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  userEvent.type(input, "Learn Jest");
  userEvent.click(button);

  getByText("Learn Jest");
  getByText("Add #2");

  userEvent.type(input, "Learn Jest with React Testing");
  userEvent.click(button);
  
  getByText("Add #3");

});
