import axios from 'axios';

// const URL = "http://localhost:4000/api/courses";
const URL = `${process.env.REACT_APP_API_BASE}/courses`;
console.log("URL ", URL);
// const URL = "https://kanbas-node-server-app-l29z.onrender.com/api/courses";
export const fetchCourses = async () => {
  const response = await axios.get(URL);
  console.log("hey kanbas");
  return response.data;
  };

export const fetchCourse = async (id) => {
const response = await axios.get(`http://localhost:4000/api/courses/${id}`);
return response.data;
};

export  const addNewCourse = async (course) => {
    const response = await axios.post(URL, course);
    console.log("try to add");
    return response.data;
  };

export  const deleteCourse = async (id) => {
    const response = await axios.delete(`${URL}/${id}`);
    return response.data;
  };

export const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    return response.data;
  };