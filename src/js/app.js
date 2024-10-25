let courses = [];
let scores = [];

const getScores = async () => {
  const response = await fetch('http://localhost:4000/scores');
  const data = await response.json();
  scores = data;
  console.log('Scores', scores);
}

getScores();

const getCourseData = async () => {
  const response = await fetch('http://localhost:4000/courses');
  const data = await response.json();
  courses = data;
  console.log('Courses', courses);
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
        let frontNinetitle = 'OUT';
        let backNinetitle = 'IN';
        let totaltitle = 'TOT';
        holes.forEach((hole, index) => {
            const holeItem = document.createElement('li');
            holeItem.textContent = hole.number;
            holeItem.classList.add('border', 'border-black');
            holeList.appendChild(holeItem);

            if (index === 8) {
              const frontNineItem = document.createElement('li');
              frontNineItem.textContent = frontNinetitle;
              frontNineItem.classList.add('border', 'border-black');
              holeList.appendChild(frontNineItem);
            }

            if (index === 17) {
              const backNineItem = document.createElement('li');
              backNineItem.textContent = backNinetitle;
              backNineItem.classList.add('border', 'border-black');
              holeList.appendChild(backNineItem);

              const totalItem = document.createElement('li');
              totalItem.textContent = totaltitle;
              totalItem.classList.add('border', 'border-black');   
              holeList.appendChild(totalItem);
            }
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
  renderInputs(filteredCourses, scores[0].scores);
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

    let frontNineSum = 0;
    let backNineSum = 0;
    let totalPar = 0;
    holes = course.holes;
    holes.forEach((hole, index) => {
        const parItem = document.createElement('li');
        parItem.textContent = hole.par;
        parItem.classList.add('border', 'border-black');
        parList.appendChild(parItem);

        if (index < 9) {
          frontNineSum += hole.par;
        } else {
          backNineSum += hole.par;
        }

        totalPar += hole.par;

        if (index === 8) {
          const frontNineItem = document.createElement('li');
          frontNineItem.textContent = frontNineSum;
          frontNineItem.classList.add('border', 'border-black');
          parList.appendChild(frontNineItem);
        }

        if (index === 17) {
          const backNineItem = document.createElement('li');
          backNineItem.textContent = backNineSum;
          backNineItem.classList.add('border', 'border-black');
          parList.appendChild(backNineItem);

          const totalParItem = document.createElement('li');
          totalParItem.textContent = totalPar;
          totalParItem.classList.add('border', 'border-black');
          parList.appendChild(totalParItem);
        }

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

    let frontDistanceSum = 0; 
    let backDistanceSum = 0;
    let totalDistance = 0;

    holes = course.holes;
    holes.forEach((hole, index) => {
        const distanceItem = document.createElement('li');
        distanceItem.textContent = hole.length;
        distanceItem.classList.add('border', 'border-black');
        distanceList.appendChild(distanceItem);

        if (index < 9) {
          frontDistanceSum += hole.length;
        } else {
          backDistanceSum += hole.length;
        }

        totalDistance += hole.length;

        if (index === 8) {
          const frontDistanceItem = document.createElement('li');
          frontDistanceItem.textContent = frontDistanceSum;
          frontDistanceItem.classList.add('border', 'border-black');
          distanceList.appendChild(frontDistanceItem);
        }

        if (index === 17) {
          const backDistanceItem = document.createElement('li');
          backDistanceItem.textContent = backDistanceSum;
          backDistanceItem.classList.add('border', 'border-black');
          distanceList.appendChild(backDistanceItem);

          const totalDistanceItem = document.createElement('li');
          totalDistanceItem.textContent = totalDistance;
          totalDistanceItem.classList.add('border', 'border-black');
          distanceList.appendChild(totalDistanceItem);
        }
    });
  });
}

const renderInputs = (filteredCourses, scores) => {
  const scoreList = document.querySelector('.score-list');
  scoreList.innerHTML = ''; 
  filteredCourses.forEach(course => {
    const holes = course.holes;
    const parList = document.querySelector('.par-list');
    for (let i = 0; i < parList.children.length; i++) { 
      const inputItem = document.createElement('li');
      const input = document.createElement('input');
      let total = 0;
      if (i > 0 && i <= 19 && i !== 10) {
        input.type = 'number';
        input.min = 0;
        input.max = 9;
      } else {
        input.type = 'text';
      }
      input.classList.add('border', 'border-black', 'w-full');

      if (i !== 10) {
        const holeScore = scores.find(score => score.hole === i);
        if (holeScore) {
          input.value = holeScore.score;
        }
      }

      total += parseInt(input.value);

      input.addEventListener('change', (e) => {
        const score = e.target.value;
        const hole = i;
        const index = scores.findIndex(score => score.hole === hole);
        if (index !== -1) {
          scores[index].score = score;
        } else {
          scores.push({ hole, score });
        }
        console.log(scores);
      });

      inputItem.appendChild(input);
      scoreList.appendChild(inputItem);
    }
  });
}

document.querySelector('.search').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchCourses();
  }
});

