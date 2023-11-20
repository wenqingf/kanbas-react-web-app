import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_URL = `${API_BASE}/courses`;
const ASSIGNMENTS_URL = `${API_BASE}/assignments`;

export const deleteAssignment = async (assignmentId) => {
  try {
    const response = await axios.delete(`${ASSIGNMENTS_URL}/${assignmentId}`);
    return response.data;
  } catch (error) {
    console.error("Error deleting assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (assignment) => {
  try {
    const response = await axios.put(`${ASSIGNMENTS_URL}/${assignment._id}`, assignment);
    return response.data;
  } catch (error) {
    console.error("Error updating assignment:", error);
    throw error;
  }
};

export const createAssignment = async (courseId, assignment) => {
  try {
    const response = await axios.post(`${COURSES_URL}/${courseId}/assignments`,assignment);
    return response.data;
  } catch (error) {
    console.error("Error creating assignment:", error);
    throw error;
  }
};

export const findAssignmentsForModule= async (courseId) => {
  try {
    const response = await axios.get(`${COURSES_URL}/${courseId}/assignments`);
    return response.data;
  } catch (error) {
    console.error("Error retrieving assignments:", error);
    throw error;
  }
};
