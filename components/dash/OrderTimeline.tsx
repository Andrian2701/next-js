"use client";

import { Box, StepLabel, Step, Stepper } from "@mui/material";

import QontoStepIcon from "./StepIcon";
import "../../styles/components/dash/OrderTimeline.scss";

const steps: any = process.env.STEPS;

const OrderTimeline = () => {
  return (
    <Box className="order-container" boxShadow={2}>
      <h2>Order Timeline</h2>
      <div className="stepper-container">
        <Stepper orientation="vertical" className="stepper">
          {steps.map((step: string) => (
            <Step>
              <StepLabel key={step} StepIconComponent={QontoStepIcon}>
                {step}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>
    </Box>
  );
};

export default OrderTimeline;
