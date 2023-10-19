import db from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Home from "./Home";
import Modules from "./Modules";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "../../kanbas.css"

function Courses() {
    const { courseId } = useParams();
    const { pathname } = useLocation();
    const [home, kanbas,couses,id,screen] = pathname.split("/")
    const course = db.courses.find((course) => course._id === courseId);

    return (
        <div>
            <h2 className="d-block d-md-none">navbar</h2>
            <h4 className="mt-2" style={{color:'red', fontWeight: 'normal'}}>Course {course.name}&gt;<span style={{color: 'black'}}>{screen}</span></h4>
            <hr/>
            <span className="d-none d-md-block"><CourseNavigation /></span>
            <div className="overflow-y-scroll position-fixed bottom-0 end-0 wd-main-div" >
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home/>} />
                    <Route path="Modules" element={<Modules/>} />
                    <Route path="Assignments" element={<Assignments/>} />
                    <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                    <Route path="Grades" element={<Grades/>} />
                </Routes>
            </div>
        </div>
    ); 
}
export default Courses;