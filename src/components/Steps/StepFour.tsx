import {
  TextField,
  Typography,
  Grid2 as Grid,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFieldData, setFieldData } from "../../store/features/field";
const StepFour = () => {
  const { tabaghe, metraj, statusBuilding } = useSelector(getFieldData);
  const dispatch = useDispatch();
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
      title: "فعال",
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
        <TextField
          value={tabaghe}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "TABAGHE",
                data: e.target.value,
              })
            )
          }
          sx={{ width: "100%" }}
          label={"طبقه محل قرارگیری واحد"}
        />
      </Grid>
      <Grid size={6}>
        <TextField
          value={metraj}
          onChange={(e) =>
            dispatch(
              setFieldData({
                type: "METRAJ",
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
                  checked={statusBuilding === e.title}
                  onChange={(e) =>
                    dispatch(
                      setFieldData({
                        type: "STATUS_BUILDING",
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
    </Grid>
  );
};

export default StepFour;
