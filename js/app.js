let courses = []

const getCourseData = async () => {
  const response = await fetch('http://localhost:4000/courses');
  const data = await response.json();
  courses = data;
  console.log(courses);
};

getCourseData();


