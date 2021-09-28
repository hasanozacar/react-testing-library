import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import RenderAsync from "../RenderAsync";
import { api } from "../Api";

// Using jest.mock('./api);
const mockCreate = (api.create = jest.fn());

test("allows users to add items to their list", async () => {
  const todoText = "Learn async";
  mockCreate.mockResolvedValueOnce({ id: 34, text: todoText });

  const { getByText, getByLabelText } = render(<RenderAsync />);

  const input = getByLabelText("What needs to be done?");
  const button = getByText("Add #1");

  fireEvent.change(input, { target: { value: todoText } });
  fireEvent.click(button);

  await waitFor(() => getByText(todoText));

  expect(mockCreate).toBeCalledTimes(1);
  expect(mockCreate).toBeCalledWith(
    "/items",
    expect.objectContaining({ text: todoText })
  );
});
