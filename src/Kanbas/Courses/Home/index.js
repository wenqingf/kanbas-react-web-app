import ModuleList from "../Modules/ModuleList.js";
import ComingUp from "./ComingUp.js";
import CourseStatus from "./courseStatus.js";
import { FaEllipsisV  } from 'react-icons/fa';
    function Home() {
    return (
        <div className="row">
            <div className="col-md">
                {/* <h2>Home</h2> */}
                <ModuleList />
            </div>
            <div className="col-md-auto">
                <div className="course-status" style={{width: '260px'}}>
                    <CourseStatus />
                    <ComingUp />
                </div>
            </div>
        </div>
    ); 
}
export default Home; 