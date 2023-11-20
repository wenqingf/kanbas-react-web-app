import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../../kanbas.css"

function Courses() {
  const { courseId } = useParams();
  const API_BASE = process.env.REACT_APP_API_BASE;
  const URL = `${API_BASE}/courses`;
  const [course, setCourse] = useState({});
  const findCourseById = async (courseId) => {
    const response = await axios.get(`${URL}/${courseId}`);
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  const { pathname } = useLocation();
  const [home, kanbas, couses, id, screen] = pathname.split("/");
  // const course = courses.find((course) => course._id === courseId);

  return (
    <div>
      <h2 className="d-block d-md-none">navbar</h2>
      <h4 className="mt-2" style={{ color: "red", fontWeight: "normal" }}>
        Course {course.name}&gt;<span style={{ color: "black" }}>{screen}</span>
      </h4>
      <hr />
      <span className="d-none d-md-block">
        <CourseNavigation />
      </span>
      <div className="overflow-y-scroll position-fixed bottom-0 end-0 wd-main-div">
        <Routes>
          <Route path="/" element={<Navigate to="Home" />} />
          <Route path="Home" element={<Home />} />
          <Route path="Modules" element={<Modules />} />
          <Route path="Assignments" element={<Assignments />} />
          <Route
            path="Assignments/:assignmentId"
            element={<AssignmentEditor />}
          />
          <Route path="Grades" element={<Grades />} />
        </Routes>
      </div>
    </div>
  );
}
export default Courses;