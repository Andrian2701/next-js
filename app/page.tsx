import Tasks from "@/componets/dash/Tasks";
import WidgetSummary from "@/componets/dash/WidgetSummary";

const Home = () => {
  return (
    <>
      <h2
        style={{
          fontWeight: 450,
          fontSize: "1.2rem",
          letterSpacing: "0.1rem",
        }}
      >
        Hi, Welcome back
      </h2>
      <WidgetSummary />
      <Tasks />
    </>
  );
};

export default Home;
