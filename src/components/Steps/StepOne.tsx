import {
  Box,
  TextField,
  Typography,
  Grid2 as Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import moment from "moment-jalaali";
import { useState } from "react";

const checkboxType = [
  {
    id: 1,
    title: "شهری",
  },
  {
    id: 2,
    title: "روستایی",
  },
];
const StepOne = () => {
  const [checkId, setCheckId] = useState<string>();

  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"نام شرکت برق منطقه"} />
      </Grid>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"شناسه قبض برق"} />
      </Grid>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"شماره بدنه کنتور"} />
      </Grid>

      <Grid size={6}>
        <DatePicker
          sx={{ width: "100%" }}
          label={"تاریخ"}
          onChange={(e) => console.log(moment(e).format("jYYYY/jMM/jDD"))}
        />
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={6}>
        <Typography sx={{ mr: "4px" }}>نوع اشتراک: </Typography>
        {checkboxType.map((e) => (
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value={e.title}
                  checked={checkId === e.title}
                  onChange={(e) => setCheckId(e.target.value)}
                />
              }
              label={e.title}
            />
          </FormGroup>
        ))}
      </Grid>
      {/* <Grid>
        <DatePicker
          label={"تاریخ"}
          onChange={(e) => console.log(moment(e).format("jYYYY/jMM/jDD"))}
        />
      </Grid> */}
    </Grid>
    // <Box>
    //   <TextField label={"نام شرکت برق منطقه"} />

    // </Box>
  );
};

export default StepOne;
