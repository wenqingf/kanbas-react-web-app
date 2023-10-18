import React from "react";
import { Link, useParams } from "react-router-dom";
import { FaGripVertical, FaCheckCircle, FaEllipsisV,FaPlus} from 'react-icons/fa';
import db from "../../Database";
import "../../../kanbas.css"
function Assignments() {
    const { courseId } = useParams();
    const assignments = db.assignments;
    const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);
    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
                <input placeholder="Search for Assignments" />
            </div>
            <div>
                <button type="button" className="btn btn-secondary">Group</button>
                <button type="button" className="btn btn-danger">+Assignment</button>
                <button type="button" className="btn btn-secondary">
                    <FaEllipsisV style={{ color: 'white', marginTop: 0 }} />
                </button>
            </div>
        </div>
        <hr/>
        <ul className="list-group">
            <li className="list-group-item list-group-item-secondary">
                <h4>
                    <span className="wd-module-icon" style={{ color: 'grey', float: 'left' }}><FaGripVertical /></span>
                    Assignments for course {courseId}
                    <span className="wd-module-icon" style={{ color: 'grey', float: 'right' }}><FaEllipsisV /></span>
                    <span className="wd-module-icon" style={{ color: 'grey', float: 'right' }}> <FaPlus /></span>
                    <span style={{ float: 'right', border: '1px solid black',marginRight:'10px' }} className="rounded-pill px-2 py-1 fs-6" >
                        40% of total  
                    </span>
                </h4>
                <ul className="list-group">
                    {
                        courseAssignments.map((assignment) => (
                            <Link 
                                key={assignment._id}
                                to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                className="list-group-item"
                            >   
                            <li style={{listStyleType: 'none'}}>
                                <span className="wd-module-icon" style={{ color: 'grey', float: 'left' }}><FaGripVertical /></span>
                                {assignment.title}
                                <span className="wd-module-icon" style={{ color: 'grey', float: 'right' }}><FaEllipsisV /></span>
                                <span className="wd-module-icon" style={{ color: 'green', float: 'right' }}><FaCheckCircle /></span>
                            </li>
                            </Link>
                        ))
                    }
                </ul>
            </li>
        </ul>
        </>
    ); 
}
export default Assignments