import { describe, expect, test } from "@jest/globals";
import { render, screen, fireEvent } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";

test("check proper result displayed when no results found", async () => {
  render(<Searchbar />);

  await screen.findByRole("p");

  expect(screen.getByRole("p")).toHaveTextContent(
    "Closing time! No Bars Found"
  );
});
