import React, { useState } from "react";
import axios from "axios";

const AddCourseForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration: "",
    thumbnail: "",
  });

  const [lessons, setLessons] = useState([]);
  const [lessonData, setLessonData] = useState({
    title: "",
    description: "",
    duration: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleCourseChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLessonChange = (e) => {
    const { name, value } = e.target;
    setLessonData({
      ...lessonData,
      [name]: value,
    });
  };

  const addLesson = () => {
    if (!lessonData.title || !lessonData.description || !lessonData.duration) {
      setMessage("Please fill in all lesson fields before adding.");
      return;
    }

    setLessons([...lessons, lessonData]);
    setLessonData({
      title: "",
      description: "",
      duration: "",
    });
    setMessage("Lesson added successfully!");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (lessons.length === 0) {
      setMessage(
        "You must add at least one lesson before submitting the course."
      );
      setLoading(false);
      return;
    }

    try {
      // Add token if required (e.g., for logged-in teachers)
      const token = localStorage.getItem("token");
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      };

      const payload = { ...formData, lessons };

      // Send POST request to add the course
      const response = await axios.post(
        "http://localhost:5000/api/courses",
        payload,
        config
      );

      setMessage(response.data.message); // Show success message
      setFormData({
        title: "",
        description: "",
        duration: "",
        thumbnail: "",
      });
      setLessons([]); // Reset lessons
    } catch (error) {
      const errorMessage =
        error.response?.data?.error || "An unexpected error occurred";
      setMessage(errorMessage); // Show error message
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>
      {message && (
        <div
          className={`mb-4 p-3 rounded ${
            message.includes("successfully")
              ? "bg-green-200 text-green-800"
              : "bg-red-200 text-red-800"
          }`}
        >
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block font-medium">
            Course Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleCourseChange}
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Enter course title"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleCourseChange}
            className="w-full mt-2 p-3 border rounded-md"
            rows="4"
            placeholder="Enter course description"
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="duration" className="block font-medium">
            Duration (in hours)
          </label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleCourseChange}
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Enter duration"
            required
          />
        </div>
        <div>
          <label htmlFor="thumbnail" className="block font-medium">
            Thumbnail URL
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            value={formData.thumbnail}
            onChange={handleCourseChange}
            className="w-full mt-2 p-3 border rounded-md"
            placeholder="Enter thumbnail URL"
            required
          />
        </div>
        <div className="mt-6">
          <h3 className="text-lg font-bold">Add Lessons</h3>
          <div className="space-y-4 mt-4">
            <div>
              <label htmlFor="lessonTitle" className="block font-medium">
                Lesson Title
              </label>
              <input
                type="text"
                id="lessonTitle"
                name="title"
                value={lessonData.title}
                onChange={handleLessonChange}
                className="w-full mt-2 p-3 border rounded-md"
                placeholder="Enter lesson title"
                required
              />
            </div>
            <div>
              <label htmlFor="lessonDescription" className="block font-medium">
                Lesson Description
              </label>
              <textarea
                id="lessonDescription"
                name="description"
                value={lessonData.description}
                onChange={handleLessonChange}
                className="w-full mt-2 p-3 border rounded-md"
                rows="2"
                placeholder="Enter lesson description"
                required
              ></textarea>
            </div>
            <div>
              <label htmlFor="lessonDuration" className="block font-medium">
                Lesson Duration (in minutes)
              </label>
              <input
                type="number"
                id="lessonDuration"
                name="duration"
                value={lessonData.duration}
                onChange={handleLessonChange}
                className="w-full mt-2 p-3 border rounded-md"
                placeholder="Enter lesson duration"
                required
              />
            </div>
            <button
              type="button"
              onClick={addLesson}
              className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              Add Lesson
            </button>
          </div>
        </div>
        {lessons.length > 0 && (
          <div className="mt-6">
            <h3 className="text-lg font-bold">Lessons</h3>
            <ul className="mt-2 list-disc list-inside">
              {lessons.map((lesson, index) => (
                <li key={index}>
                  {lesson.title} - {lesson.duration} minutes
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          type="submit"
          className={`w-full p-3 text-white font-bold rounded-md ${
            loading ? "bg-gray-500 cursor-not-allowed" : "bg-blue-500"
          }`}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Add Course"}
        </button>
      </form>
    </div>
  );
};

export default AddCourseForm;
