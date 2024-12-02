import {
  TextField,
  Grid2 as Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getFieldData, setFieldData } from "../../store/features/field";
import { useEffect } from "react";
import toast from "react-hot-toast";
const StepTwo = () => {
  const { postalCode, provience, cityprov, address, city } =
    useSelector(getFieldData);
  const dispatch = useDispatch();

  useEffect(() => {
    if (postalCode && postalCode.length == 10 && postalCode == "1413914763") {
      const t = setTimeout(() => {
        toast.success("اطلاعات با موفقیت یافت شد");
        dispatch(
          setFieldData({
            type: "PROVINCE",
            data: "تهران",
          })
        );
        dispatch(
          setFieldData({
            type: "CITY_PROVE",
            data: "تهران",
          })
        );
        dispatch(
          setFieldData({
            type: "CITY",
            data: "تهران",
          })
        );
        dispatch(
          setFieldData({
            type: "CITY",
            data: "تهران",
          })
        );
        dispatch(
          setFieldData({
            type: "ADDRESS",
            data: "تهران-تهران-خیابان کارگرشمالی-خیابان شکرالله- پلاک70-واحد2",
          })
        );
      }, 2000);
      return () => {
        clearTimeout(t);
      };
    }
  }, [postalCode]);

  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={12}>
        <TextField
          value={postalCode}
          sx={{ width: "100%" }}
          label={"کد پستی"}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "POSTAL_CODE",
                data: e.target.value,
              })
            )
          }
        />
      </Grid>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">استان</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="استان"
            value={provience}
            onChange={(e) =>
              dispatch(
                setFieldData({
                  type: "PROVINCE",
                  data: e.target.value,
                })
              )
            }
          >
            <MenuItem value={"تهران"}>تهران</MenuItem>
            <MenuItem value={"مشهد"}>مشهد</MenuItem>
            <MenuItem value={"اصفهان"}>اصفهان</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField sx={{ width: "100%" }} label={"شناسه قبض برق"} /> */}
      </Grid>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">شهرستان</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="شهرستان"
            value={cityprov}
            onChange={(e) =>
              dispatch(
                setFieldData({
                  type: "CITY_PROVE",
                  data: e.target.value,
                })
              )
            }
          >
            <MenuItem value={"تهران"}>تهران</MenuItem>
            <MenuItem value={"مشهد"}>مشهد</MenuItem>
            <MenuItem value={"اصفهان"}>اصفهان</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">شهر</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="شهر"
            value={city}
            onChange={(e) =>
              dispatch(
                setFieldData({
                  type: "CITY",
                  data: e.target.value,
                })
              )
            }
          >
            <MenuItem value={"تهران"}>تهران</MenuItem>
            <MenuItem value={"مشهد"}>مشهد</MenuItem>
            <MenuItem value={"اصفهان"}>اصفهان</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={12}>
        <TextField
          value={address}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "ADDRESS",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"آدرس محل پستی"}
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

export default StepTwo;
