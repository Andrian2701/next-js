import { Box, Grid } from "@mui/material";

import { widgetsData } from "@/placeholder/widgets";
import "../../styles/dash/WidgetSummary.scss";

const WidgetSummary = () => {
  return (
    <Grid className="grid-container">
      {widgetsData.map((item) => (
        <Grid key={item.title}>
          <Box
            className="widget"
            style={{ backgroundColor: item.bg }}
            boxShadow={2}
          >
            <div className="icon" style={{ color: item.iconColor }}>
              {item.icon}
            </div>
            <div className="typo">
              <h3 style={{ color: item.iconColor }}>{item.value}</h3>
              <p style={{ color: item.fontColor }}>{item.title}</p>
            </div>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default WidgetSummary;
