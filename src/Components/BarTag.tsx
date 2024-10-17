import { barType } from "../Types/barType";
import "../styles/barStyles.css";

const BarTag = ({
  id,
  name,
  type,
  phone,
  website_url,
  city,
  state,
  street,
  index,
}: barType) => {
  return (
    <div key={id} className={"barTag " + (index % 2 === 0 ? "even" : "odd")}>
      <div>Name: {name} </div>
      <div>Type: {type}</div>
      <div>Phone number: {phone}</div>
      <div>Website: {website_url}</div>
      <div>
        City and State: {city}, {state}
      </div>
      <div>Address: {street}</div>
    </div>
  );
};

export default BarTag;
