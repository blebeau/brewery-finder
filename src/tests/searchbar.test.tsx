import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";

const setup = () => {
  const utils = render(<Searchbar />);
  const input = screen.getAllByTestId("search-input")[0];
  return {
    input,
    ...utils,
  };
};

describe("searchbar component tests", () => {
  // const { unmount } = render(<Searchbar />);

  afterEach(() => {
    cleanup();
  });

  // test("check proper initial display", async () => {
  //   render(<Searchbar />);

  //   screen.getByLabelText("Search");
  //   screen.getByText("City");
  //   screen.getByText("Closing time! No Bars Found");
  // });

  test("simulate the search button", async () => {
    // render(<Searchbar />);

    const { input } = setup();
    screen.getByText("City");
    screen.getByText("Closing time! No Bars Found");

    fireEvent.change(input, { target: { value: "Detroit" } });

    const searchBtn = screen.getByLabelText("Search-label");

    fireEvent.click(searchBtn);

    screen.getByText("Name: Brew Detroit");
  });
});
