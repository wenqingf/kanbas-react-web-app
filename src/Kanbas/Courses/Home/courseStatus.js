function CourseStatus() {
    return (
            <div>
                <h3>Course Status</h3>
                <div>
                    <button type="button" className="btn btn-secondary">Unpublish</button>
                    <button type="button" className="btn btn-success">Published</button>
                </div>
                
                <div>
                    <button type="button" className="btn btn-light">Import Existing Content</button>
                    <button type="button" className="btn btn-light">Import Form Commons</button>
                    <button type="button" className="btn btn-light">View Course Stream</button>
                    <button type="button" className="btn btn-light">New Announcement</button>
                    <button type="button" className="btn btn-light">New Analytics</button>
                    <button type="button" className="btn btn-light">View Course Notifications</button>
                </div>
            </div>
    );
}
export default CourseStatus;
