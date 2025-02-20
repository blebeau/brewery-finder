import { render, screen, cleanup } from "@testing-library/react";
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

describe("bartag component tests", () => {
  afterEach(() => {
    cleanup();
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
});
