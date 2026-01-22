import { useState } from "react";

import "./App.css";
import Header from "./Header";
import { courses } from "./Data"; // courses sayıfasını import ettik
import Course from "./Course";
import "./css/course.css";

function App() {
  return (
    <div>
      <Header />

      <div className="course-main">
        {courses.map((course) => (
          <Course key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
