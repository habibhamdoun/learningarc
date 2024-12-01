import React, { useState } from "react";

const AddLesson = ({ onAddLesson }) => {
  const [lessonData, setLessonData] = useState({
    lessonId: "",
    duration: "",
    title: "",
    description: "",
    datePosted: "",
    rating: "",
    materials: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setLessonData({
      ...lessonData,
      [name]: name === "materials" ? files[0] : value,
    });
  };

  const handleAdd = () => {
    if (
      lessonData.lessonId &&
      lessonData.duration &&
      lessonData.title &&
      lessonData.description &&
      lessonData.datePosted &&
      lessonData.rating &&
      lessonData.materials
    ) {
      onAddLesson(lessonData);
      setLessonData({
        lessonId: "",
        duration: "",
        title: "",
        description: "",
        datePosted: "",
        rating: "",
        materials: null,
      });
    } else {
      alert(
        "Please fill in all fields and upload a material file before adding a lesson."
      );
    }
  };

  return (
    <div className="mt-5">
      <h3 className="text-lg font-medium text-gray-700 mb-3">Add Lesson</h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm text-gray-600">Lesson ID</label>
          <input
            type="text"
            name="lessonId"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.lessonId}
            onChange={handleChange}
            placeholder="Enter lesson ID"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Duration (in minutes)</label>
          <input
            type="number"
            name="duration"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.duration}
            onChange={handleChange}
            placeholder="Enter duration"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Title</label>
          <input
            type="text"
            name="title"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.title}
            onChange={handleChange}
            placeholder="Enter lesson title"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Description</label>
          <textarea
            name="description"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.description}
            onChange={handleChange}
            placeholder="Enter lesson description"
            rows="3"
            required
          ></textarea>
        </div>
        <div>
          <label className="text-sm text-gray-600">Date Posted</label>
          <input
            type="date"
            name="datePosted"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.datePosted}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Rating</label>
          <input
            type="number"
            name="rating"
            className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
            value={lessonData.rating}
            onChange={handleChange}
            placeholder="Enter rating (e.g., 4.5)"
            min="0"
            max="5"
            step="0.1"
            required
          />
        </div>
        <div>
          <label className="text-sm text-gray-600">Upload Materials</label>
          <input
            type="file"
            name="materials"
            className="w-full mt-1"
            onChange={handleChange}
            required
          />
        </div>
      </div>
      <button
        type="button"
        onClick={handleAdd}
        className="mt-4 px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-green-600 transition"
      >
        Add Lesson
      </button>
    </div>
  );
};

export default AddLesson;
