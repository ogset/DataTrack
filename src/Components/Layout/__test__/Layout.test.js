import React from "react";
import "@testing-library/jest-dom/extend-expect";
import CargoItem from "../CargoItem/CargoItem";
import RowData from "../CargoItem/Rowdata/RowData";
import Button from "../CargoItem/Button/Button";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

const ShipmentTestData = {
  reference: "TestReference",
  reference_route: "ABCD12Y",
  state: "Delivered",
  tracking_number: "TESTREFERENCE1907",
  cargo: {
    weight: "200 kg",
    size: "2 cm",
    type: "Pallets"
  },
  pickup: {
    address: {
      company: "aaaaa GmbH",
      country: "Germany",
      city: "Berlin",
      postcode: "10999",
      street: "Some Street"
    },
    date: {
      min: "28/11/2019",
      max: "29/11/2019"
    },
    hour: {
      min: "06:00",
      max: "17:00"
    },
    contact: {
      name: "Oguzhan Guler",
      email: "ınfo@aaaa.com",
      phone: "+49(0)30340603300"
    }
  },
  drop_off: {
    address: {
      company: "Test GmbH",
      country: "Germany",
      city: "Berlin",
      postcode: "10365",
      street: "Another Street 103"
    },
    date: {
      min: "01/12/2019",
      max: "08/12/2019"
    },
    hour: {
      min: "09:00",
      max: "20:00"
    },
    contact: {
      name: "Test-",
      email: "info@email.com",
      phone: "+49987654321"
    }
  }
};
const index = 1;
configure({ adapter: new Adapter() });

it("Should render one RowData and Button", () => {
  const wrapper = shallow(<CargoItem data={ShipmentTestData} index={index} />);
  expect(wrapper.find(RowData)).toHaveLength(2);
  expect(wrapper.find(Button)).toHaveLength(1);
});
