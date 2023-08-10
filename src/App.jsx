import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import AddProperty from "./pages/AddProperty";
import MyProperties from "./pages/MyProperties";
import { GetToTop } from "./components/on-render-checks/GetToTop";
import PageNotFound from "./pages/page-not-found/PageNotFound";

const App = () => {
  return (
    <>
      <GetToTop />
      <section className="app_container">
        <Sidebar />
        <main className="main_pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/my-sites" element={<MyProperties />} />
            <Route path="/new-site" element={<AddProperty />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </main>
      </section>
    </>
  );
};

export default App;
