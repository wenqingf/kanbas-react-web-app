import React, { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import { findAssignmentsForModule, createAssignment } from "../client";
import {
  addAssignment,
  deleteAssignment,
  updateAssignment,
  setAssignment,
  setAssignments,
} from "../assignmentsReducer";

import * as client from "../client";

function AssignmentEditor() {
  const { courseId } = useParams();
  useEffect(() => {
    findAssignmentsForModule(courseId).then((assignments) =>
      dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const assignments = useSelector( (state) => state.assignmentsReducer.assignments);
  const handleDeleteAssignment = (assignmentId) => {
    deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const handleUpdateAssignment = async () => {
    const status = await client.updateAssignment(assignment);
    dispatch(updateAssignment(assignment));
  };

  const handleAddAssignment = () => {
    createAssignment(courseId, assignment).then((assignment) => {
      dispatch(addAssignment(assignment));
    });
  };


  const dispatch = useDispatch();

  //const { assignmentId } = useParams();
  //const assignment = db.assignments.find((assignment) => assignment._id === assignmentId);
  //const { courseId } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <form>
        <label id="assignmentname" className="form-label">
          Assignment Name
        </label>
        <input
          for="assignmentname"
          className="form-control"
          value={assignment.title}
          onChange={(e) =>dispatch(setAssignment({ ...assignment, title: e.target.value}))}
        />
        <label id="assignmentdescription" className="form-label">
          Assignment Description
        </label>
        <textarea
          for="assignmentdescription"
          className="form-control"
          value={assignment.description}
          onChange={(e) =>dispatch(setAssignment({ ...assignment, description: e.target.value }))}
        />
        <label id="assignmentduedate" className="form-label">
          Due
        </label>
        <input
          for="assignmentduedate"
          className="form-control"
          type="date"
          value={assignment.dueDate}
          onChange={(e) => dispatch(setAssignment({ ...assignment, dueDate: e.target.value })) }
        />
        <label id="assignmentavailablefromdate" className="form-label">
          Available From
        </label>
        <input
          for="assignmentduedate"
          className="form-control"
          type="date"
          value={assignment.availableFromDate}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, availableFromDate: e.target.value }))
          }
        />
        <label id="assignmentavailableuntildate" className="form-label">
          Until
        </label>
        <input
          for="assignmentavailableuntildate"
          className="form-control"
          type="date"
          value={assignment.availableUntilDate}
          onChange={(e) =>
            dispatch(setAssignment({ ...assignment, availableUntilDate: e.target.value }))
          }
        />
      </form>
      <hr />
      <div className="float-end">
        <Link
          to={`/Kanbas/Courses/${courseId}/Assignments`}
          className="btn btn-danger"
        >
          Cancel
        </Link>
        <button
          onClick={() => {
            console.log("Saving assignment");
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            dispatch(() => handleUpdateAssignment());
          }}
          className="btn btn-success me-2"
        >
          Update
        </button>
        <button
          onClick={() => {
            console.log("Saving assignment");
            navigate(`/Kanbas/Courses/${courseId}/Assignments`);
            dispatch(() => handleAddAssignment());
          }}
          className="btn btn-success me-2"
        >
          ADD
        </button>
      </div>
    </div>
  );
}
export default AssignmentEditor;
