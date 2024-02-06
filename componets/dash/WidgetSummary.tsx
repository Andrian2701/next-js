import Grid from "@mui/material/Grid";

import { widgetsData } from "@/data/Widgets";
import "../../styles/components/dash/WidgetSummary.scss";

const WidgetSummary = () => {
  return (
    <Grid sx={{ flexGrow: 1 }}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={3}>
          {widgetsData.map((item) => (
            <Grid key={item.title} item>
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
      </Grid>
    </Grid>
  );
};

export default WidgetSummary;
