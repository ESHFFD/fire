import { Box, Button, Card, Container } from "@mui/material";

import ResponsiveAppBar from "./nav/Navbar";
import StepperComponent from "./stepper/StepperComponent";
import { useState } from "react";
import StepOne from "./Steps/StepOne";
import StepTwo from "./Steps/StepTwo";
import StepThree from "./Steps/StepThree";
import StepFour from "./Steps/StepFour";
import StepFive from "./Steps/StepFive";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setFieldData } from "../store/features/field";

const HomePage = () => {
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useDispatch();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    toast.success("عملیات با موفقیت انجام شد");
    dispatch(
      setFieldData({
        type: "REST_ALL_DATA",
      })
    );
    setActiveStep(0);
  };

  //   const stepShowFunc = (step: number) => {
  //     switch (step) {
  //       case 0:
  //         <StepOne />;
  //         break;
  //       // case 1:

  //       // break;
  //       // case 2:

  //       // break;

  //       default:
  //         break;
  //     }
  //   };
  return (
    <>
      <ResponsiveAppBar />
      <Container maxWidth={"lg"}>
        <Box
          sx={{
            width: "100%",
            position: "relative",
            // position: "fixed",
            display: "flex",
            // alignItems: "center",
            justifyContent: "space-between",
            // height: "500px",
            top: "90px",
          }}
        >
          {/* main */}
          <Box sx={{ width: "75%" }}>
            <Card
              sx={{
                height: "500px",
                p: 2,
                position: "relative",
              }}
            >
              <Box sx={{ overflow: "auto", height: "480px", p: 1 }}>
                {activeStep === 0 ? (
                  <StepOne />
                ) : activeStep === 1 ? (
                  <StepTwo />
                ) : activeStep === 2 ? (
                  <StepThree />
                ) : activeStep === 3 ? (
                  <StepFour />
                ) : activeStep === 4 ? (
                  <StepFive handleClose={handleClose} open={open} />
                ) : null}
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  bgcolor: "white",
                  position: "absolute",
                  borderTop: "1px solid #f1f1f1",
                  bottom: "0px",
                  width: "100%",
                  height: "10%",
                  right: 0,
                }}
              >
                <Box
                  sx={{
                    zIndex: 10,
                    bgcolor: "white",
                    mx: "8px",
                    width: "100%",
                    display: "flex",
                    justifyContent: activeStep !== 0 ? "space-between" : "end",
                  }}
                >
                  {activeStep !== 0 && (
                    <Button onClick={handleBack}>قبلی</Button>
                  )}
                  {activeStep !== 4 ? (
                    <Button onClick={handleNext} variant="contained">
                      ادامه
                    </Button>
                  ) : (
                    <Button onClick={handleClickOpen} variant="contained">
                      ثبت
                    </Button>
                  )}
                </Box>
              </Box>
            </Card>
          </Box>
          {/* stepper */}
          <Box
            sx={{
              width: "25%",
              position: "fixed",
              right: 0,
              maxHeight: "500px",
            }}
          >
            <StepperComponent activeStep={activeStep} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default HomePage;
