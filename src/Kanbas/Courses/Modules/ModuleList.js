import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaEllipsisV,FaPlus} from 'react-icons/fa';
import "../../../kanbas.css"

function ModuleList() {
const { courseId } = useParams();
// console.log("courseId", courseId);
const modules = db.modules.filter((module) => module.course === courseId);
// console.log("modules", modules);

return (
    <>
        <div className="float-end">
            <button type="button" className="btn btn-secondary">Collapse All</button>
            <button type="button" className="btn btn-secondary">View Progress</button>
            <select className="btn btn-secondary btn-md">
                <option>Publish All</option>
                <option>UnPublish All</option>
            </select>
            <button type="button" className="btn btn-danger">+Module</button>
            <button type="button" className="btn btn-secondary">
                <FaEllipsisV style={{color: "white"}} />
            </button>
        </div>
        <div className="clearfix"></div>
        <hr/>
        <ul className="list-group">
            {modules.map((module, index) => (
                <li key={index} className="list-group-item list-group-item-secondary">
                    <h5>
                        <span className = "wd-module-icon" style={{color: 'grey', float: 'left'}}><FaGripVertical /></span>
                        {module.name}
                        <span className = "wd-module-icon" style={{color: 'grey', float: 'right'  }}><FaEllipsisV /></span>
                        <span className = "wd-module-icon" style={{color: 'grey   ', float: 'right' }}><FaPlus /></span>
                        <span className = "wd-module-icon" style={{color: 'green', float: 'right' }}><FaCheckCircle /></span>
                    </h5>
                    <p>{module.description}</p>
                    {
                        module.lessons && (
                            <ul className="list-group">
                                {
                                    module.lessons.map((lesson, index) => (
                                        <li key={index} className="list-group-item">
                                            <h6>{lesson.name}</h6>
                                            <p>{lesson.description}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        )
                    }
                </li>
            ))} 
        </ul>
    </>
    ); 
}
export default ModuleList;