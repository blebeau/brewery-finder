import { barType } from "../Types/barType";
import BarTag from "./BarTag";
import "../styles/barStyles.css";

interface bars {
  bars: barType[];
}

const BarList = ({ bars }: bars) => {
  return (
    <div className="barList">
      {bars.length > 0 ? (
        <div>
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
      ) : (
        <div>Closing time! No Bars Found</div>
      )}
    </div>
  );
};

export default BarList;
