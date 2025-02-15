import { render, screen } from "@testing-library/react";
import Searchbar from "../Components/Searchbar";
import BarList from "../Components/BarList";
import BarTag from "../Components/BarTag";

const testData1 = {
  id: "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
  name: "MadTree Brewing 2.0",
  city: "Cincinnati",
  state: "Ohio",
  street: "5164 Kennedy Ave",
  phone: "5138368733",
  website_url: "http://www.madtreebrewing.com",
  type: "regional",
  index: 0,
};

const testData2 = {
  id: "ef970757-fe42-416f-931d-722451f1f59c",
  name: "10 Barrel Brewing Co",
  city: "San Diego",
  state: "California",
  street: "1501 E St",
  phone: "6195782311",
  website_url: "http://10barrel.com",
  type: "large",
  index: 1,
};

test("check proper initial display", async () => {
  render(<Searchbar />);

  screen.getByText("Search");
  screen.getByText("City");
  screen.getByText("Closing time! No Bars Found");
});

test("check barlist renders multiple items", async () => {
  render(<BarList bars={[testData1, testData2]} />);

  screen.getByText("City and State: Cincinnati, Ohio");
  screen.getByText("City and State: San Diego, California");
});

test("check bartag initial render", async () => {
  render(
    <BarTag
      id={testData1.id}
      name={testData1.name}
      type={testData1.type}
      phone={testData1.phone}
      website_url={testData1.website_url}
      city={testData1.city}
      state={testData1.state}
      street={testData1.street}
      index={testData1.index}
    />
  );

  screen.getByText("Name: MadTree Brewing 2.0");
  screen.getByText("City and State: Cincinnati, Ohio");
  screen.getByText("Phone number: 5138368733");
  screen.getByText("Website: http://www.madtreebrewing.com");
});
