import {
  TextField,
  Grid2 as Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
  Box,
  Typography,
  Divider,
} from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { getFieldData, setFieldData } from "../../store/features/field";
import moment from "moment-jalaali";
import LOGO from "../../assets/images/lg-removebg-preview.png";
interface Props {
  open: boolean;
  handleClose: () => void;
}

var num = 945775536;
const StepFive = ({ open, handleClose }: Props) => {
  const { bimeMony, limiteMony, bimeType, factorNumber, id } =
    useSelector(getFieldData);
  const dispatch = useDispatch();
  const todey = moment().format("jYYYY/jMM/jDD");
  const onyearLater = moment()
    .add(1, "jYear")
    .subtract(1, "day")
    .format("jYYYY/jMM/jDD");

  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"نام شرکت بیمه گر تکمیلی"} />
      </Grid>

      <Grid size={6}>
        <TextField
          value={bimeType}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "BIME_TYPE",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"نوع بیمه تکمیلی"}
        />
        {/* <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">نوع بیمه تکمیلی</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="نوع بیمه تکمیلی"
            value={bimeType}
            onChange={(e) => {
              dispatch(
                setFieldData({
                  type: "",
                  data: e.target.value,
                })
              );
            }}
          >
            <MenuItem value={10}>تهران</MenuItem>
            <MenuItem value={20}>مشهد</MenuItem>
            <MenuItem value={30}>اصفهان</MenuItem>
          </Select>
        </FormControl> */}
        {/* <TextField sx={{ width: "100%" }} label={"شناسه قبض برق"} /> */}
      </Grid>
      <Grid size={6}>
        <TextField
          value={limiteMony}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "LIMITED_MONY",
                data: e.target.value,
              })
            )
          }
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
          value={bimeMony}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "BIME_MONY",
                data: e.target.value,
              })
            )
          }
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
      <Dialog
        open={!!open}
        keepMounted
        //   onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box
          sx={{
            minWidth: "500px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            my: 2,
          }}
        >
          <img src={LOGO} alt="logo" width={"100px"} />
          <DialogTitle sx={{ mb: 4 }}>
            {"بیمه نامه پایه حوادث طبیعی ساختمان"}
          </DialogTitle>
          <DialogContent sx={{ width: "100%" }}>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", px: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>تاریخ شروع :</Typography>
                <Typography>{todey}</Typography>
              </DialogContentText>
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>تاریخ انقضا :</Typography>
                <Typography>{onyearLater}</Typography>
              </DialogContentText>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>حق بیمه سالیانه(سهم دولت) :</Typography>
                <Typography>%70</Typography>
              </DialogContentText>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>حق بیمه سالیانه(سهم بیمه گزار) :</Typography>
                <Typography>%30</Typography>
              </DialogContentText>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>سقف تعهد بیمه پایه :</Typography>
                <Typography>{`${num.toLocaleString()} ریال`}</Typography>
              </DialogContentText>
            </Box>
            <Divider sx={{ mt: 2 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>شناسه قبض برق :</Typography>
                <Typography>{id}</Typography>
              </DialogContentText>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", p: 2 }}
            >
              <DialogContentText
                sx={{ display: "flex" }}
                id="alert-dialog-slide-description"
              >
                <Typography>شناسه بدنه کنتور :</Typography>
                <Typography>{factorNumber}</Typography>
              </DialogContentText>
            </Box>
            {/* <Divider sx={{ mt: 2 }} /> */}
          </DialogContent>
          {/* <DialogContent sx={{ width: "100%" }}>
            <Typography>تاریخ انقضا :</Typography>
          </DialogContent> */}
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>
              ثبت نهایی
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Grid>
  );
};

export default StepFive;
