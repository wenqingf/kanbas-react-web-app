import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { findModulesForCourse, createModule } from "./client";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    findModulesForCourse(courseId).then((modules) =>
      dispatch(setModules(modules))
    );
  }, [courseId]);
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };
  const handleAddMoudule = () => {
    createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          className="float-end btn btn-success"
          onClick={handleAddMoudule}
        >
          Add
        </button>
        <button
          className="float-end btn btn-primary"
          onClick={() => handleUpdateModule(module)}
        >
          Update
        </button>

        <input
          className="form-control"
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <br></br>
        <textarea
          className="form-control"
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary">
            <button
              className="float-end btn btn-success"
              onClick={() => dispatch(setModule(module))}
            >
              Edit
            </button>
            <button
              className="float-end btn btn-danger"
              onClick={() => handleDeleteModule(module._id)}
            >
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
            {module.lessons && (
              <ul className="list-group">
                {module.lessons.map((lesson, index) => (
                  <li key={index} className="list-group-item">
                    <h6>{lesson.name}</h6>
                    <p>{lesson.description}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </ul>
  );
}
export default ModuleList;