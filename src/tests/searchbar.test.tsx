import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";
import { secureHeapUsed } from "crypto";

const setup = () => {
  const utils = render(<Searchbar />);
  const input = screen.getAllByTestId("search-input")[0];
  return {
    input,
    ...utils,
  };
};

test("check proper initial display", async () => {
  render(<Searchbar />);

  screen.getByLabelText("Search");
  screen.getByText("City");
  screen.getByText("Closing time! No Bars Found");
});

test("simulate the search button", async () => {
  render(<Searchbar />);

  screen.getByText("City");
  screen.getByText("Closing time! No Bars Found");

  const { input } = setup();
  fireEvent.change(input, { target: { value: "Detroit" } });

  screen.getByText("Detroit");

  const searchBtn = screen.getByLabelText("Search");

  fireEvent.click(searchBtn);

  screen.getByText("Name: Brew Detroit");
});
