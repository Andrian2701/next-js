import OrderTimeline from "@/components/dash/OrderTimeline";
import Tasks from "@/components/dash/Tasks";
import WidgetSummary from "@/components/dash/WidgetSummary";
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
