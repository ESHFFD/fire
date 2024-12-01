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
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
const StepThree = () => {
  const [field, setField] = useState({
    saze: "",
    year: "",
    totalFloor: "",
    floorUp: "",
    floorDown: "",
    numBuilding: "",
    numBuildingBussiness: "",
    numBuildingEdari: "",
    zirbana: "",
  });

  console.log(field, "ff");
  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={4}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">سازه</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Age"
            value={field.saze}
            onChange={(e) => {
              setField((prev) => ({
                ...prev,
                saze: e.target.value as string,
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
        <TextField
          type="number"
          value={field.year}
          sx={{ width: "100%" }}
          label={"سال ساخت"}
          onChange={(e) =>
            setField((prev) => ({ ...prev, year: e.target.value }))
          }
        />
      </Grid>

      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد طبقات"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد طبقات"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد طبقات روی زمین"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد طبقات زیر زمین"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد واحد مسکونی"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد واحد تجاری"} />
      </Grid>
      <Grid size={4}>
        <TextField sx={{ width: "100%" }} label={"تعداد واحد اداری"} />
      </Grid>
      <Grid size={4}>
        <TextField
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
