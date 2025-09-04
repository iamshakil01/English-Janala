const loadLessons = () => {
  fetch("https://openapi.programming-hero.com/api/levels/all") //promise of response
    .then((res) => res.json()) // Promise of json
    .then((json) => displayLessons(json.data));
};

const displayLessons = (lessons) => {
  //    1.Get the container and empty
  const levelContainer = document.getElementById("level-container");
  levelContainer.innerHTML = "";

  // Get into every lessons
  for (let lesson of lessons) {
    // 3.create element

    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `<button href="" class="btn btn-outline btn-primary"
                  ><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button
                >
    `;

    // 4.append into container
    levelContainer.append(btnDiv);
  }
};

loadLessons();
