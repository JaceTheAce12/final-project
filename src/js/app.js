let courses = []

const getCourseData = async () => {
  const response = await fetch('http://localhost:4000/courses');
  const data = await response.json();
  courses = data;
  console.log(courses);
  searchCourses()
};

getCourseData();

renderCourses = () => {
  const courseList = document.getElementById('course-list');
  courses.forEach(course => {
    const courseItem = document.createElement('li');
    courseItem.textContent = course.name;
    courseList.appendChild(courseItem);
  });
};

renderHoles = (filteredCourses) => {
    const holeList = document.getElementById('hole-list');
    holeList.innerHTML = '';
    filteredCourses.forEach(course => {
        holes = course.holes;
        const holeTitle = document.createElement('h3');
        holeTitle.textContent = 'Hole';
        holeTitle.classList.add('font-bold', 'border-l-2', 'border-black');
        holeList.appendChild(holeTitle);
        holes.forEach(hole => {
            const holeItem = document.createElement('li');
            holeItem.textContent= hole.number;
            holeItem.classList.add('mx-2', 'border-l-2', 'border-black', 'pl-2');
            holeList.appendChild(holeItem);
        });
    });
}

const searchCourses = () => {
  const searchInput = document.querySelector('.search');
  const searchValue = searchInput.value;
  const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue.toLowerCase()));
  console.log(filteredCourses);
  renderFilteredCourses(filteredCourses);

  renderHoles(filteredCourses);

  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchCourses();
    }
  });
}

const renderFilteredCourses = (filteredCourses) => {
  const courseList = document.getElementById('course-list');
  courseList.innerHTML = '';
  filteredCourses.forEach(course => {
    const courseItem = document.createElement('li');
    courseItem.textContent = course.name;
    courseList.appendChild(courseItem);
  });
}

