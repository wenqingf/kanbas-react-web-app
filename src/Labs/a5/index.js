import SimpleAPIExamples from "./SimpleAPIExamples";
// const API_BASE = process.env.REACT_APP_API_BASE;
function Assignment5() {
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <div className="list-group">
        <a href={"https://kanbas-node-server-app-ka37.onrender.com/a5/welcome"} className="list-group-item">
          Welcome
        </a>
      </div>
      <SimpleAPIExamples />
    </div>
  );
}
export default Assignment5;
