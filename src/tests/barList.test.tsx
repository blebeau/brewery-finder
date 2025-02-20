import { render, screen, cleanup } from "@testing-library/react";
import BarList from "../Components/BarList";
import { act } from "react";

const testData1 = [
  {
    id: "b54b16e1-ac3b-4bff-a11f-f7ae9ddc27e0",
    name: "MadTree Brewing 2.0",
    city: "Cincinnati",
    state: "Ohio",
    street: "5164 Kennedy Ave",
    phone: "5138368733",
    website_url: "http://www.madtreebrewing.com",
    type: "regional",
    index: 0,
  },
  {
    id: "ef970757-fe42-416f-931d-722451f1f59c",
    name: "10 Barrel Brewing Co",
    city: "San Diego",
    state: "California",
    street: "1501 E St",
    phone: "6195782311",
    website_url: "http://10barrel.com",
    type: "large",
    index: 1,
  },
];

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

describe("barlist component test", () => {
  afterEach(() => {
    cleanup();
  });
  test("check barlist renders multiple items", async () => {
    render(<BarList bars={testData1} />);

    screen.getByText("City and State: Cincinnati, Ohio");
    screen.getByText("City and State: San Diego, California");
  });
});
