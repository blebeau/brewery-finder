import { render, screen } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";
import BarList from "../Components/BarList";
import BarTag from "../Components/BarTag";

const testData = {
  id: "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
  name: "MadTree Brewing 2.0",
  city: "Cincinnati",
  type: "regional",
  state: "Ohio",
  phone: "5138368733",
  website_url: "http://www.madtreebrewing.com",
  street: "5164 Kennedy Ave",
  index: 0,
};
test("check proper initial display", async () => {
  render(<Searchbar />);

  screen.getByText("Search");
  screen.getByText("City");
  screen.getByText("Closing time! No Bars Found");
});

test("check barlist renders", async () => {
  render(<BarList bars={[testData]} />);

  screen.getByText("Cincinnati, Ohio");
});

test("check bartag initial render", async () => {
  render(
    <BarTag
      id={testData.id}
      name={testData.name}
      type={testData.type}
      phone={testData.phone}
      website_url={testData.website_url}
      city={testData.city}
      state={testData.state}
      street={testData.street}
      index={testData.index}
    />
  );

  screen.getByText("Cincinnati, Ohio");
});
