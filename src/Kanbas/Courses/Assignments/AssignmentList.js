import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer"; 

function AssignmentList() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button 
          className="float-end btn btn-success" 
          onClick={() => dispatch(addAssignment({ ...assignment, course: courseId }))}
        >
          Add
        </button>
        <button 
          className="float-end btn btn-primary" 
          onClick={() => dispatch(updateAssignment(assignment))}
        >
          Update
        </button>

        <input
          value={assignment.title} 
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, title: e.target.value }))
          }
        />
        <textarea
          value={assignment.description}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, description: e.target.value }))
          }
        />
      </li>
      {assignments
        .filter((assignment) => assignment.course === courseId)
        .map((assignment, index) => (
          <li key={index} className="list-group-item">
            <button 
              className="float-end btn btn-success" 
              onClick={() => dispatch(setAssignment(assignment))}
            >
              Edit
            </button>
            <button 
              className="float-end btn btn-danger" 
              onClick={() => dispatch(deleteAssignment(assignment._id))}
            >
              Delete
            </button>
            <h3>{assignment.title}</h3>
            <p>{assignment.description}</p>
            <p>{assignment._id}</p>
          </li>
        ))}
    </ul>
  );
}

export default AssignmentList;
