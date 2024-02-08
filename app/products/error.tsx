"use client";

import { Alert, AlertTitle } from "@mui/material";

const ErrorWrapper = () => {
  return (
    <Alert severity="error" sx={{ borderRadius: "0.5rem" }}>
      <AlertTitle>Error</AlertTitle>
      It seems there was an error while fetching the requested data. Check your
      Network connection and try again.
    </Alert>
  );
};

export default ErrorWrapper;
