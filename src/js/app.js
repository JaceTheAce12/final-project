let courses = []

const getCourseData = async () => {
  const response = await fetch('http://localhost:4000/courses');
  const data = await response.json();
  courses = data;
  console.log(courses);
  renderCourses();
  renderHoles();
};

getCourseData();

renderCourses = () => {
  const courseList = document.getElementById('course-list');
  courses.forEach(course => {
    const courseItem = document.createElement('li');
    courseItem.innerText = course.name;
    courseList.appendChild(courseItem);
  });
};

renderHoles = () => {
    const holeList = document.getElementById('hole-list');
    courses.forEach(course => {
        holes = course.holes;
        holes.forEach(hole => {
            const holeItem = document.createElement('li');
            holeItem.innerText = hole.number;
            holeList.appendChild(holeItem);
        });
    });
}

