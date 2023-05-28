import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <main className="main-layout">
      <h2>nav</h2>
      <p>
        <Outlet></Outlet>
      </p>
    </main>
  );
};

export default Main;
