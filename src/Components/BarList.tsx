import { barType } from "../Types/barType";
import BarTag from "./BarTag";
import "../styles/barStyles.css";

const BarList = (bars: barType[]) => {
  return (
    <div className="barList">
      {bars.map((bar: barType, index: number) => (
        <div>
          <BarTag
            id={bar.id}
            name={bar.name}
            type={bar.type}
            phone={bar.phone}
            website_url={bar.website_url}
            city={bar.city}
            state={bar.state}
            street={bar.street}
            index={index}
          />
        </div>
      ))}
    </div>
  );
};

export default BarList;
