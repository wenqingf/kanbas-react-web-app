import { Link } from "react-router-dom";
import db from "../Database";
import { FiEdit } from 'react-icons/fi';

function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {db.courses.map((course) => (
                    <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} style={{textDecoration: 'none'}}>
                        <div className="card h-100 wd-dashboard col" style={{width: 260}}>
                            <img src="/images/react.png" className="card-img-top" alt="course image" />
                            <div className="card-body">
                                <h5 className="card-title" style={{color:'blue'}}>{course.name}</h5>
                                <p className="card-text" style={{marginBottom: 0}}>{course.number || "Course description not provided."}</p>
                                <small className="card-text">startDate: {course.startDate}</small>
                                <br/>
                                <FiEdit/>
                            </div>
                        </div>
                    </Link>
                ))} 
            </div>
        </div>
    ); 
}
export default Dashboard;