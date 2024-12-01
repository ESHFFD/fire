import { createSlice } from '@reduxjs/toolkit';

interface FieldProps {
    fildData: {
        companyname?:string,
        id?:string,
        factorNumber?:string,
        date?:string
      },
}

const initialState = {
    companyname:null,
    id:null,
    factorNumber:null,
    date:null,
    typeAccount:null
};

const field = createSlice({
  name: 'field',
  initialState,
  reducers: {
    setFieldData: (state, action) => {
      const data = action.payload.data;
      const type = action.payload.type;
      switch (type) {
        case "COMPANY_NAME":
                state.companyname=data
            break;
        case "ID_CONTORE":
                state.id=data
            break;
        case "TYPE_ACCOUNT":
                state.typeAccount=data
            break;
        case "DATE":
                state.date=data
            break;
        // case "COMPANY_NAME":
        //         state.fildData.companyname=data
        //     break;
        // case "COMPANY_NAME":
        //         state.fildData.companyname=data
        //     break;
      
        default:
            break;
      }
     
    },
  },
});

export const getFieldData = (state :any) => state.field;

export const { setFieldData } = field.actions;

export default field.reducer;
