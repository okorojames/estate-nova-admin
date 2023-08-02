import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <section className="app_container">
        <Sidebar />
        <main className="main_pages">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </section>
      <footer style={{ backgroundColor: "red" }}>This is footer</footer>
    </>
  );
};

export default App;
