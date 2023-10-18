import db from "../../Database";
import { useParams } from "react-router-dom";
import { FaSignInAlt,FaSignOutAlt, FaCog,FaFilter } from 'react-icons/fa';
function Grades() {
    const { courseId } = useParams();
    const users = db.users;
    const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
    const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
    const grades = db.grades;
    return (
        <div>
            {/* <h1>Grades</h1> */}
            <div className="float-end">
                <button type="button" className="btn btn-secondary"><FaSignInAlt /> Import</button>
                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <FaSignOutAlt /> Export
                </button>
                <button type="button" className="btn btn-secondary"><FaCog /></button>
            </div>
            <div className="clearfix"></div>
            <div className="form-group row mb-2">
                <div className="col">
                <label htmlFor="assignmentName">Assignment Name:</label>
                <input type="text" className="form-control" id="assignmentName" placeholder="Search Assignments" />
                </div>
                <div className="col">
                <label htmlFor="studentName">Student Name:</label>
                <input type="text" className="form-control" id="studentName" placeholder="Search Student" />
                </div>
            </div>
            <button type="button" className="btn btn-secondary mb-2"><FaFilter/> Apply Filters</button>

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <th>Student Name</th>
                        {assignments.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {enrollments.map((enrollment) => {
                        const user = users.find((user) => user._id === enrollment.user);
                        return (
                            <tr>
                                <td>{user.firstName} {user.lastName}</td>
                                {assignments.map((assignment) => {
                                    const grade = grades.find(
                                    (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                    return (<td>{grade?.grade || ""}</td>);
                                })} 
                            </tr>);
                        })} 
                    </tbody>
                </table>
            </div>
        </div>
    ); 
}  
export default Grades;