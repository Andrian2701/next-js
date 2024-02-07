import OrderTimeline from "@/componets/dash/OrderTimeline";
import Tasks from "@/componets/dash/Tasks";
import WidgetSummary from "@/componets/dash/WidgetSummary";
import "../styles/pages/Home.scss";

const Home = () => {
  return (
    <>
      <h2>Hi, Welcome back</h2>
      <WidgetSummary />
      <div className="second-layer">
        <Tasks />
        <OrderTimeline />
      </div>
    </>
  );
};

export default Home;
