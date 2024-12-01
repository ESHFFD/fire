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
import { useDispatch, useSelector } from "react-redux";
import { getFieldData, setFieldData } from "../../store/features/field";

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
  const { companyname, typeAccount, date } = useSelector(getFieldData);
  const dispatch = useDispatch();
  console.log(date, "xxx");
  const [dataselected, setDate] = useState(moment());
  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={6}>
        <TextField
          sx={{ width: "100%" }}
          value={companyname}
          label={"نام شرکت برق منطقه"}
          onChange={(e) =>
            dispatch(
              setFieldData({ type: "COMPANY_NAME", data: e.target.value })
            )
          }
        />
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
          // value={moment('2022-02-01')}

          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "DATE",
                data: moment(e).format("jYYYY/jMM/jDD"),
              })
            )
          }
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
                  checked={typeAccount === e.title}
                  onChange={(e) =>
                    dispatch(
                      setFieldData({
                        type: "TYPE_ACCOUNT",
                        data: e.target.value,
                      })
                    )
                  }
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
