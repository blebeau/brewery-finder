// "id": "28945428-2326-41b3-b2d9-97f6e8154783",
// "name": "Gordon Biersch Brewery Restaurant - San Diego",
// "brewery_type": "brewpub",
// "address_1": "5010 Mission Center Rd",
// "address_2": null,
// "address_3": null,
// "city": "San Diego",
// "state_province": "California",
// "postal_code": "92108-3211",
// "country": "United States",
// "longitude": "-117.1539235",
// "latitude": "32.7740128",
// "phone": "6196881120",
// "website_url": "http://www.craftworksrestaurants.com",
// "state": "California",
// "street": "5010 Mission Center Rd"
import { barType } from "../Types/barType";

const BarTag = ({
  name,
  type,
  phone,
  website_url,
  city,
  state,
  street,
}: barType) => {
  return (
    <div>
      <div>Name: </div>
      <div>Type: </div>
      <div>Phone number: </div>
      <div>Website: </div>
      <div>City and State: </div>
      <div>Address: </div>
    </div>
  );
};

export default BarTag;
