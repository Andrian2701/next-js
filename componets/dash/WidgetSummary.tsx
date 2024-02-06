import Grid from "@mui/material/Grid";

import { widgetsData } from "@/data/widgets";
import "../../styles/components/dash/WidgetSummary.scss";

const WidgetSummary = () => {
  return (
    <Grid className="grid-container">
      {widgetsData.map((item) => (
        <Grid key={item.title}>
          <div className="widget" style={{ backgroundColor: item.bg }}>
            <div className="icon" style={{ color: item.iconColor }}>
              {item.icon}
            </div>
            <div className="typo">
              <h3 style={{ color: item.iconColor }}>{item.value}</h3>
              <p style={{ color: item.fontColor }}>{item.title}</p>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default WidgetSummary;
