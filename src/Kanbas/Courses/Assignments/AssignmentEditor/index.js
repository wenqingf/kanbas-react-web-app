import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Saving assignment");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <p>Assignment Name</p>
            <input value={assignment.title} className="form-control mb-2" />
            <hr/>
            <div className="float-end">
                <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-danger">
                    Cancel
                </Link>
                <button onClick={handleSave} className="btn btn-success me-2">
                    Save
                </button>
            </div>
            
            
        </div>
    ); 
}
export default AssignmentEditor;