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
    courseItem.classList.add('text-2xl', 'font-bold');
    courseList.appendChild(courseItem);
  });
};

renderHoles = (filteredCourses) => {
    const holeList = document.getElementById('hole-list');
    holeList.innerHTML = '';
    filteredCourses.forEach(course => {
        const holeTitle = document.createElement('h2');
        holeTitle.textContent = 'Hole';
        holeList.appendChild(holeTitle);
        holeTitle.classList.add('font-bold', 'border', 'border-black');
        holes = course.holes;
        holes.forEach(hole => {
            const holeItem = document.createElement('li');
            holeItem.textContent = hole.number;
            holeItem.classList.add('border', 'border-black');
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
  renderPars(filteredCourses);
  renderDistance(filteredCourses);
  renderInputs(filteredCourses);

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
    courseItem.classList.add('text-2xl', 'font-bold');
    courseList.appendChild(courseItem);
  });
}

const renderPars = (filteredCourses) => {
  const parList = document.querySelector('.par-list');
  parList.innerHTML = '';
  filteredCourses.forEach(course => {
    const parTitle = document.createElement('h2');
    parTitle.textContent = 'Par';
    parList.appendChild(parTitle);
    parTitle.classList.add('font-bold', 'border', 'border-black');
    holes = course.holes;
    holes.forEach(hole => {
        const parItem = document.createElement('li');
        parItem.textContent = hole.par;
        parItem.classList.add('border', 'border-black');
        parList.appendChild(parItem);
    });
  });
}

const renderDistance = (filteredCourses) => {
  const distanceList = document.querySelector('.distance-list');
  distanceList.innerHTML = '';
  filteredCourses.forEach(course => {
    const distanceTitle = document.createElement('h2');
    distanceTitle.textContent = 'Blues';
    distanceList.appendChild(distanceTitle);
    distanceTitle.classList.add('font-bold', 'border', 'border-black');
    holes = course.holes;
    holes.forEach(hole => {
        const distanceItem = document.createElement('li');
        distanceItem.textContent = hole.length;
        distanceItem.classList.add('border', 'border-black');
        distanceList.appendChild(distanceItem);
    });
  });
}

const renderInputs = (filteredCourses) => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = ''; 
  filteredCourses.forEach(course => {
    const holes = course.holes;
    for (let i = 0; i <= holes.length; i++) { 
      const inputItem = document.createElement('li');
      const input = document.createElement('input');
      input.type = 'number';
      input.classList.add('border', 'border-black', 'w-full');
      inputItem.appendChild(input);
      scoreList.appendChild(inputItem);
    }
  });
}

