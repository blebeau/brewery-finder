import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";

const setup = () => {
  const utils = render(<Searchbar />);
  const input = screen.getByLabelText("Select");
  return {
    input,
    ...utils,
  };
};

describe("searchbar component tests", () => {
  afterEach(() => {
    cleanup();
  });

  test("check proper initial display", async () => {
    render(<Searchbar />);

    screen.getByText("City");
    screen.getByText("Closing time! No Bars Found");
  });

  test("simulate changing the search type", async () => {
    const { input } = setup();
    screen.getByText("City");
    screen.getByText("Closing time! No Bars Found");

    fireEvent.change(input, { target: { value: "by_country=" } });

    screen.getByText("Country");

    fireEvent.change(input, { target: { value: "by_name" } });

    screen.getByText("Name");
  });
});
