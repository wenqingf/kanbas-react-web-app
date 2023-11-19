import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaGripVertical,
  FaEllipsisV,
  FaPlus,
} from "react-icons/fa";
import "../../../kanbas.css";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";
function Assignments() {
  const { courseId } = useParams();
  const assignment = useSelector(
    (state) => state.assignmentsReducer.assignment
  );
  const assignments = useSelector(
    (state) => state.assignmentsReducer.assignments
  );
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  const dispatch = useDispatch();

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <input placeholder="Search for Assignments" />
        </div>
        <div>
          <button type="button" className="btn btn-secondary">
            Group
          </button>
          <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}
                  className="float-right btn btn-danger"
                >
                  {" "}
                  +Assignment{" "}
                </Link>
          <button type="button" className="btn btn-secondary">
            <FaEllipsisV style={{ color: "white", marginTop: 0 }} />
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group">
        <li className="list-group-item list-group-item-secondary">
          <h4>
            <span
              className="wd-module-icon"
              style={{ color: "grey", float: "left" }}
            >
              <FaGripVertical />
            </span>
            Assignments for course {courseId}
            <span
              className="wd-module-icon"
              style={{ color: "grey", float: "right" }}
            >
              <FaEllipsisV />
            </span>
            <span
              className="wd-module-icon"
              style={{ color: "grey", float: "right" }}
            >
              {" "}
              <FaPlus />
            </span>
            <span
              style={{
                float: "right",
                border: "1px solid black",
                marginRight: "10px",
              }}
              className="rounded-pill px-2 py-1 fs-6"
            >
              40% of total
            </span>
            
          </h4>
          <ul className="list-group">
            {courseAssignments.map((assignment) => (
              <div className="list-group-item ">
                <Link
                  key={assignment._id}
                  to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                  onClick={() => dispatch(setAssignment(assignment))}
                  className="float-end btn btn-success"
                >
                  Edit
                </Link>
                <button
                  className="float-end btn btn-danger"
                  onClick={() => dispatch(deleteAssignment(assignment._id))}
                >
                  Delete
                </button>
                <li style={{ listStyleType: "none" }}>
                  <h5>{assignment.title}</h5>
                  {assignment.description}<br/>
                  {assignment._id}
                </li>
              </div>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
export default Assignments;
