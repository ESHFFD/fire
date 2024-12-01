import {
  Box,
  TextField,
  Typography,
  Grid2 as Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useState } from "react";
const StepTwo = () => {
  const [field, setField] = useState({
    postalCode: "",
    provience: "",
    city: "",
    cityprov: "",
    section: "",
    address: "",
  });

  console.log(field, "ff");
  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={12}>
        <TextField
          value={field.postalCode}
          sx={{ width: "100%" }}
          label={"کد پستی"}
          onChange={(e) =>
            setField((prev) => ({ ...prev, postalCode: e.target.value }))
          }
        />
      </Grid>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">استان</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={field.provience}
            onChange={(e) => {
              setField((prev) => ({
                ...prev,
                provience: e.target.value as string,
              }));
            }}
          >
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مشهد</MenuItem>
            <MenuItem value={30}>اصفهان</MenuItem>
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
            label="Age"
            value={field.cityprov}
            onChange={(e) => {
              setField((prev) => ({
                ...prev,
                cityprov: e.target.value as string,
              }));
            }}
          >
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مشهد</MenuItem>
            <MenuItem value={30}>اصفهان</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">استان</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={field.city}
            onChange={(e) => {
              setField((prev) => ({
                ...prev,
                city: e.target.value as string,
              }));
            }}
          >
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مشهد</MenuItem>
            <MenuItem value={30}>اصفهان</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid size={12}>
        <TextField sx={{ width: "100%" }} label={"آدرس محل پستی"} />
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
