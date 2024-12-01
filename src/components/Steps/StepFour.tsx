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
const StepFour = () => {
  //   const [field, setField] = useState({
  //     postalCode: "",
  //     provience: "",
  //     city: "",
  //     cityprov: "",
  //     section: "",
  //     address: "",
  //   });
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
  const [checkId, setCheckId] = useState<string>();
  return (
    <Grid container columns={12} spacing={4}>
      <Grid size={6}>
        <TextField sx={{ width: "100%" }} label={"طبقه محل قرارگیری واحد"} />
      </Grid>
      <Grid size={6}>
        <TextField
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">متر مربع</InputAdornment>
              ),
            },
          }}
          sx={{ width: "100%" }}
          label={"متراژ واحد مسکونی"}
        />
      </Grid>
      <Grid sx={{ display: "flex", alignItems: "center" }} size={6}>
        <Typography sx={{ mr: "4px" }}>وضعیت بهره برداری: </Typography>
        {checkboxTypeFour.map((e) => (
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
    </Grid>
  );
};

export default StepFour;
