import Nav from "../Nav";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";


function Kanbas() {

  return (
    <Provider store={store}>
    <div>
      <Nav />
      <div className="d-flex">
        <span className="d-none d-md-block">
          <KanbasNavigation />
        </span>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard/>
            }
          />
          <Route path="Courses/:courseId/*" element={<Courses />} />
          <Route path="Courses" element={<Navigate to="RS101/Home" />} />
        </Routes>
      </div>
    </div>
    </Provider>
  );
}
export default Kanbas;
