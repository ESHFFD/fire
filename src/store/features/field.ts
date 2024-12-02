import { createSlice } from "@reduxjs/toolkit";

interface FieldProps {
  fildData: {
    companyname?: string;
    id?: string;
    factorNumber?: string;
    date?: string;
  };
}

const initialState = {
  companyname: null,
  id: null,
  factorNumber: null,
  date: null,
  typeAccount: null,
  //
  postalCode: null,
  provience: null,
  city: null,
  cityprov: null,
  section: null,
  address: null,
  //
  saze: null,
  year: null,
  totalFloor: null,
  floorUp: null,
  floorDown: null,
  numBuilding: null,
  numBuildingBussiness: null,
  numBuildingEdari: null,
  zirbana: null,

  ///
  tabaghe: null,
  metraj: null,
  statusBuilding: null,

  //
  companyName: null,
  bimeType: null,
  limiteMony: null,
  bimeMony: null,
};

const field = createSlice({
  name: "field",
  initialState,
  reducers: {
    setFieldData: (state, action) => {
      const data = action.payload.data;
      const type = action.payload.type;
      switch (type) {
        // step one
        case "COMPANY_NAME":
          state.companyname = data;
          break;
        case "ID_CONTORE":
          state.id = data;
          break;
        case "TYPE_ACCOUNT":
          state.typeAccount = data;
          break;
        case "DATE":
          state.date = data;
          break;
        case "FACTOR_NUMBER":
          state.factorNumber = data;
          break;
        // step two
        case "POSTAL_CODE":
          state.postalCode = data;
          break;
        case "PROVINCE":
          state.provience = data;
          break;
        case "CITY":
          state.city = data;
          break;
        case "CITY_PROVE":
          state.cityprov = data;
          break;
        case "SECTION":
          state.section = data;
          break;
        case "ADDRESS":
          state.address = data;
          break;
        // step three
        case "SAZE":
          state.saze = data;
          break;
        case "YEAR":
          state.year = data;
          break;
        case "TOTAL_FLOOR":
          state.totalFloor = data;
          break;
        case "FLOOR_UP":
          state.floorUp = data;
          break;
        case "FLOOR_DOWN":
          state.floorDown = data;
          break;
        case "NUM_BUILDING":
          state.numBuilding = data;
          break;
        case "NUM_BUSSINESS":
          state.numBuildingBussiness = data;
          break;
        case "NUM_EDARI":
          state.numBuildingEdari = data;
          break;
        case "ZIRBANA":
          state.zirbana = data;
          break;
        // step four
        case "TABAGHE":
          state.tabaghe = data;
          break;
        case "METRAJ":
          state.metraj = data;
          break;
        case "STATUS_BUILDING":
          state.statusBuilding = data;
          break;

        // step five
        case "BIME_TYPE":
          state.bimeType = data;
          break;
        case "LIMITED_MONY":
          state.limiteMony = data;
          break;
        case "BIME_MONY":
          state.bimeMony = data;
          break;
        // case "COMPANY_NAME":
        //         state.fildData.companyname=data
        //     break;
        // case "COMPANY_NAME":
        //         state.fildData.companyname=data
        //     break;

        case "REST_ALL_DATA":
          return {
            companyname: null,
            id: null,
            factorNumber: null,
            date: null,
            typeAccount: null,
            //
            postalCode: null,
            provience: null,
            city: null,
            cityprov: null,
            section: null,
            address: null,
            //
            saze: null,
            year: null,
            totalFloor: null,
            floorUp: null,
            floorDown: null,
            numBuilding: null,
            numBuildingBussiness: null,
            numBuildingEdari: null,
            zirbana: null,

            ///
            tabaghe: null,
            metraj: null,
            statusBuilding: null,

            //
            companyName: null,
            bimeType: null,
            limiteMony: null,
            bimeMony: null,
          };

        default:
          break;
      }
    },
  },
});

export const getFieldData = (state: any) => state.field;

export const { setFieldData } = field.actions;

export default field.reducer;
