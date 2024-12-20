import { useState } from "react";
import SideBar from "../SideBar";
import AddLesson from "./AddLesson";
import axios from "axios";

const AddCourse = () => {
  const [courseData, setCourseData] = useState({
    title: "",
    description: "",
    duration: "",
    rating: "",
    dateCreated: "",
    thumbnail: "",
    lessons: [],
  });

  const [isLessonDropdownOpen, setIsLessonDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({
      ...courseData,
      [name]: value,
    });
  };

  const handleAddLesson = (lesson) => {
    setCourseData((prevData) => ({
      ...prevData,
      lessons: [...prevData.lessons, lesson],
    }));
    setIsLessonDropdownOpen(false);
  };

  const handleLessonToggle = () => {
    setIsLessonDropdownOpen((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate lessons
    if (courseData.lessons.length === 0) {
      alert("Please add at least one lesson before submitting the course.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await axios.post("/api/courses/add", courseData);
      alert("Course submitted successfully!");
      console.log("Response:", response.data);

      // Reset form
      setCourseData({
        title: "",
        description: "",
        duration: "",
        rating: "",
        dateCreated: "",
        thumbnail: "",
        lessons: [],
      });
    } catch (error) {
      console.error("Error submitting course:", error);
      alert("Failed to submit the course. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex">
      <SideBar />
      <div className="p-6 bg-white rounded-md max-w-4xl mx-auto ml-6 mb-10">
        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              type="text"
              name="title"
              className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={courseData.title}
              onChange={handleChange}
              placeholder="Enter course title"
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Description</label>
            <textarea
              name="description"
              className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
              value={courseData.description}
              onChange={handleChange}
              placeholder="Enter course description"
              required
            ></textarea>
          </div>

          <div>
            <label className="text-sm text-gray-600">Date Created</label>
            <input
              type="date"
              name="dateCreated"
              className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={courseData.dateCreated}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Thumbnail URL</label>
            <input
              type="text"
              name="thumbnail"
              className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={courseData.thumbnail}
              onChange={handleChange}
              placeholder="Enter thumbnail URL"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-600">
                Duration (in hours)
              </label>
              <input
                type="number"
                name="duration"
                className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                value={courseData.duration}
                onChange={handleChange}
                placeholder="Enter duration"
                required
              />
            </div>
            <div>
              <label className="text-sm text-gray-600">Rating</label>
              <input
                type="number"
                name="rating"
                className="w-full mt-1 p-3 bg-white border border-gray-300 rounded focus:ring-2 focus:ring-blue-400 focus:outline-none"
                value={courseData.rating}
                onChange={handleChange}
                placeholder="Enter rating (e.g., 4.5)"
                min="0"
                max="5"
                step="0.1"
                required
              />
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={handleLessonToggle}
              className="px-4 py-2 bg-primary text-white font-medium rounded-md hover:bg-blue-600 transition"
            >
              {isLessonDropdownOpen ? "Close Add Lesson" : "Add Lesson"}
            </button>
            {isLessonDropdownOpen && (
              <AddLesson onAddLesson={handleAddLesson} />
            )}
          </div>

          <div className="flex gap-4">
            <button
              type="submit"
              className="px-6 py-2 bg-primary text-white font-medium rounded-md hover:bg-blue-600 transition"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Publish Course"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
