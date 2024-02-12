import LinearProgress from "@mui/material/LinearProgress";

const LoadingSneakers = () => {
  return (
    <LinearProgress
      sx={{
        backgroundColor: "rgba(0, 171, 85, 0.08)",
        "& .MuiLinearProgress-bar": {
          backgroundColor: "#50c878",
        },
      }}
    />
  );
};

export default LoadingSneakers;
