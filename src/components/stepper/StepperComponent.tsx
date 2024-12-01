import { Box, Step, StepLabel, Stepper } from "@mui/material";

const steps = [
  {
    label: "مشخصات واحد مسکونی",
  },
  {
    label: "نشانی موقعیت واحد بیمه شده",
  },
  {
    label: "مشخصات عمومی ساختمان",
  },
  {
    label: "مشخصات اختصاصی ساختمان",
  },
  {
    label: "مشخصات بیمه گر",
  },
];

const StepperComponent = ({ activeStep }: { activeStep: number }) => {
  return (
    <Box dir="rtl" sx={{ maxWidth: 400 }}>
      <Stepper dir="rtl" activeStep={activeStep} orientation="vertical">
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel
            // optional={
            //   index === steps.length - 1 ? (
            //     <Typography variant="caption">Last step</Typography>
            //   ) : null
            // }
            >
              {step.label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
