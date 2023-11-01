import { React } from "react";
import { Link } from "react-router-dom";
function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}) {
  return (
    <div>
      <h1>Dashboard</h1>
      <hr />
      <h4 className="mb-3">Published Courses ({courses.length})</h4>

      <ul className="list-group mb-3" style={{ width: "300px" }}>
        <li>
          <input
            value={course.name}
            className="form-control"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <input
            value={course.number}
            className="form-control"
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
          />
          <input
            value={course.startDate}
            className="form-control"
            type="date"
            onChange={(e) =>
              setCourse({ ...course, startDate: e.target.value })
            }
          />
          <input
            value={course.endDate}
            className="form-control mb-2"
            type="date"
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
          />
          <button className="float-end btn btn-success" onClick={addNewCourse}>
            Add
          </button>
          <button className="float-end btn btn-primary" onClick={updateCourse}>
            Update
          </button>
        </li>
      </ul>

      <div className="container-fluid">
        <div className="row">
          {courses.map((course) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3 mb-3"
              style={{ width: "260px" }}
            >
              <div className="card h-100">
                <img
                  src="/images/react.png"
                  className="card-img-top"
                  alt="course image"
                />
                <div className="card-body">
                  <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    className="list-group-item"
                  >
                    <h5 className="card-title" style={{ color: "blue" }}>
                      {course.name}
                    </h5>
                  </Link>
                  <p className="card-text" style={{ marginBottom: 0 }}>
                    {course.number || "Course description not provided."}
                  </p>
                  <small className="card-text">
                    startDate: {course.startDate}
                  </small>
                  <br />
                  <button
                    className="btn btn-danger"
                    onClick={(event) => {
                      event.preventDefault();
                      deleteCourse(course._id);
                    }}
                  >
                    Delete
                  </button>
                  <button
                    className="btn btn-success"
                    onClick={(event) => {
                      event.preventDefault();
                      setCourse(course);
                    }}
                  >
                    Edit
                  </button>
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
