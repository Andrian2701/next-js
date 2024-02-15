"use client";

import { Box, StepLabel, Step, Stepper } from "@mui/material";

import QontoStepIcon from "./StepIcon";
import "../../styles/dash/OrderTimeline.scss";

const steps: string[] = [
  "New order placed #XF-2346",
  "15 Invoices have been paid",
  "Order #37745 from September",
  "2010, orders, $5220",
];

const OrderTimeline = () => {
  return (
    <Box className="order-container" boxShadow={2}>
      <h2>Order Timeline</h2>
      <div className="stepper-container">
        <Stepper orientation="vertical" className="stepper">
          {steps.map((step) => (
            <Step key={step}>
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
