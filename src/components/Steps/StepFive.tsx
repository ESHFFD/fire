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
const StepFive = () => {
  const checkboxTypeFour = [
    {
      id: 1,
      title: "قعال",
    },
    {
      id: 2,
      title: "غیر فعال",
    },
  ];

  //   const handleComma  =(price:string)=>{
  //     price.s
  //   }
  //   var theNumber = 3500;
  //   console.log(theNumber., "xxx");
  const [price, setPrice] = useState<number | string>();
  const [type, setType] = useState<string>();

  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"نام شرکت بیمه گر تکمیلی"} />
      </Grid>

      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">نوع بیمه تکمیلی</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="نوع بیمه تکمیلی"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          >
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مشهد</MenuItem>
            <MenuItem value={30}>اصفهان</MenuItem>
          </Select>
        </FormControl>
        {/* <TextField sx={{ width: "100%" }} label={"شناسه قبض برق"} /> */}
      </Grid>
      <Grid size={6}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">ریال</InputAdornment>
              ),
            },
          }}
          sx={{ width: "100%" }}
          label={"سقف سرمایه بیمه تکمیلی"}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          type="text"
          sx={{ width: "100%" }}
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          label={"میزان حق بیمه تکمیلی"}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">ریال</InputAdornment>
              ),
            },
          }}
        />
      </Grid>
    </Grid>
  );
};

export default StepFive;
