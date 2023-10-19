import { Link } from "react-router-dom";
import db from "../Database";
import { FiEdit } from 'react-icons/fi';

function Dashboard() {
    const courses = db.courses;
    return (
        <div>
            <h4 className="mt-2" style={{color:'red', fontWeight: 'normal'}}>Dashboard</h4>
            <hr/>
            <h4 className="mb-3">Published Courses ({courses.length})</h4>
            <div className="container-fluid">
                <div className="row">
                    {db.courses.map((course) => (
                        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3" style={{ width: '260px' }}>
                            <div className="card h-100">
                                <img src="/images/react.png" className="card-img-top" alt="course image" />
                                <div className="card-body">
                                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} style={{textDecoration: 'none',color:'black'}}>
                                        <h5 className="card-title" style={{color:'blue'}}>{course.name}</h5>
                                        <p className="card-text" style={{marginBottom: 0}}>{course.number || "Course description not provided."}</p>
                                        <small className="card-text">startDate: {course.startDate}</small>
                                        <br/>
                                        <FiEdit/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    ); 
}
export default Dashboard;