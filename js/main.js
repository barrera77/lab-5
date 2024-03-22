/*
Steps 1-3 READ THE PDF!
*/
(function () {
  let videoGameForm = document.querySelector("#video-game-form");
  let allGameList = document.querySelector(".all-games");
  let allGameListItems = document.querySelectorAll(".all-games li");
  let myGameList = document.querySelector(".my-favourite-games");
  let myGames = [];
  let feedbackContainer = document.querySelector("#feedback-container");

  function filterGames(platform) {
    const query = platform;

    allGameListItems.forEach((game) => {
      let gamePlatform = game.textContent.toLowerCase();

      if (gamePlatform.includes(query.toLowerCase())) {
        game.classList.remove("hidden-item");
      } else {
        game.classList.add("hidden-item");
      }
    });
  }

  // event listener for step 1
  videoGameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let platform = event.target.elements["platform-family"].value.toLowerCase();
    filterGames(platform);
  });

  //Step 2
  function addToFavouriteGames(game) {
    if (!myGames.includes(game)) {
      feedbackContainer.innerHTML = "";
      myGames.push(game);
      renderFavouriteList();
    } else {
      createFeedbackMessage();
    }
  }

  function renderFavouriteList() {
    //Clear my fav-games list
    myGameList.innerHTML = "";

    myGames.forEach((game) => {
      //Add each fav-game
      myGameList.innerHTML += `
      <li class="list-group-item">${game}</>`;
    });
  }

  function createFeedbackMessage() {
    feedbackContainer.innerHTML = `
    <div id="feedback-container" class="alert alert-warning p-2 text-dark fw-bold">
      <p class="m-auto">Game already in the list!!!</p>
    </div>
    `;
  }
  // event listener for step 2
  /* HTML for step 2 to add to the list
  <li class="list-group-item">VIDEO GAME NAME HERE</li>
  */
  allGameList.addEventListener("click", (event) => {
    let game = event.target.innerText;
    addToFavouriteGames(game);
  });

  //Step 3
  function removeFromFavouriteGames(game) {
    let gameIndex = myGames.indexOf(game);
    myGames.splice(gameIndex, 1);
    renderFavouriteList();
    feedbackContainer.innerHTML = "";
  }
  // event listener for step 3
  myGameList.addEventListener("click", (event) => {
    let favGame = event.target.innerText;
    removeFromFavouriteGames(favGame);
  });
})();
