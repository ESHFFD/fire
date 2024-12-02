import {
  TextField,
  Grid2 as Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFieldData, setFieldData } from "../../store/features/field";
const StepThree = () => {
  const {
    saze,
    year,
    totalFloor,
    floorUp,
    floorDown,
    numBuilding,
    numBuildingBussiness,
    numBuildingEdari,
    zirbana,
  } = useSelector(getFieldData);
  const dispatch = useDispatch();
  // const [field, setField] = useState({
  //   saze: "",
  //   year: "",
  //   totalFloor: "",
  //   floorUp: "",
  //   floorDown: "",
  //   numBuilding: "",
  //   numBuildingBussiness: "",
  //   numBuildingEdari: "",
  //   zirbana: "",
  // });

  // const sazeList =[
  //   id:'',
  //   tit
  // ]

  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">سازه</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="سازه"
            value={saze}
            onChange={(e) => {
              dispatch(
                setFieldData({
                  type: "SAZE",
                  data: e.target.value,
                })
              );
            }}
          >
            <MenuItem value={"فلزی"}>فلزی</MenuItem>
            <MenuItem value={"بتنی"}>بتنی</MenuItem>
            <MenuItem value={"بنایی"}>بنایی</MenuItem>
            <MenuItem value={"خشتی و گلی/چوبی"}>خشتی و گلی/چوبی</MenuItem>
            <MenuItem value={"ترکیبی"}>ترکیبی</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField sx={{ width: "100%" }} label={"شناسه قبض برق"} /> */}
      </Grid>
      <Grid size={4}>
        <TextField
          type="number"
          value={year}
          sx={{ width: "100%" }}
          label={"سال ساخت"}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "YEAR",
                data: e.target.value,
              })
            )
          }
        />
      </Grid>

      <Grid size={4}>
        <TextField
          value={totalFloor}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "TOTAL_FLOOR",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد طبقات"}
        />
      </Grid>

      <Grid size={4}>
        <TextField
          value={floorUp}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "FLOOR_UP",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد طبقات روی زمین"}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          value={floorDown}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "FLOOR_DOWN",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد طبقات زیر زمین"}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          value={numBuilding}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "NUM_BUILDING",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد واحد مسکونی"}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          value={numBuildingBussiness}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "NUM_BUSSINESS",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد واحد تجاری"}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          value={numBuildingEdari}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "NUM_EDARI",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"تعداد واحد اداری"}
        />
      </Grid>
      <Grid size={4}>
        <TextField
          value={zirbana}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "ZIRBANA",
                data: e.target.value,
              })
            )
          }
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">متر مربع</InputAdornment>
              ),
            },
          }}
          sx={{ width: "100%" }}
          label={"زیر بنای کل"}
        />
      </Grid>
      {/* <Grid>
      <DatePicker
        label={"تاریخ"}
        onChange={(e) => console.log(moment(e).format("jYYYY/jMM/jDD"))}
      />
    </Grid> */}
    </Grid>
  );
};

export default StepThree;
