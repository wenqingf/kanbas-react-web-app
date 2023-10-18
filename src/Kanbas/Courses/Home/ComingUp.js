import db from "../../Database";
function ComingUp() {
    return(
        <>
        <h3>Coming up</h3>
       <ul>
            {db.courses.map((course) => (
                <li key={course._id || course.id}>
                    <p style={{color:'red',marginBottom:0}}>{course.name} {course.number}</p>
                    <small>{course.startDate}</small>
                </li>
            ))}
       </ul>
       </>
    );
}
export default ComingUp;