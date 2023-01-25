

const PageList = (argument = '') => {
  const preparePage = () => {
    const cleanedArgument = argument.trim().replace(/\s+/g, '-');

    const displayResults = (articles) => {
      console.log(articles)
      const resultsContent = articles.map((article) => (
        `
        <article class="cardGame">
          <img class="img" src="${article.background_image}"></h2>
          <a class="game-name" href="#pagedetail/${article.id}">${article.name}</a>
        </article>`
      ));
      const resultsContainer = document.querySelector('.page-list .articles');
      resultsContainer.innerHTML = resultsContent.join("\n");
    };

    const fetchList = (url, argument) => {
      const finalURL = argument ? `${url}&search=${argument}` : url;
      fetch(finalURL)
        .then((response) => response.json())
        .then((responseData) => {
          displayResults(responseData.results)
        });
    };


    fetchList(`https://api.rawg.io/api/games?key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);
    //fetchList(`https://api.rawg.io/api/games?genres=1&key=e59342cc36f443888806b7b87b1c6c01`, cleanedArgument);

    document.getElementById("send").addEventListener('click', ()=>{
     let gamename = document.getElementById("game").value
     fetchList(`https://api.rawg.io/api/games?key=e59342cc36f443888806b7b87b1c6c01`, gamename);
    })

  };

  const render = () => {
    pageContent.innerHTML = `
    <section>
    <h1>Welcome,</h1>
    <p class="intro-txt">The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
    the video game industry’s top talent pack the Los Angeles Convention Center, connecting tens of thousands of the best,
    brightest, and most innovative in the interactive entertainment industry. For three exciting days, leading-edge companies,
    groundbreaking new technologies, and never-before-seen products will be showcased. The Hyper Progame connects you
    with both new and existing partners, industry executives, gamers, and social influencers providing unprecedented exposure</p>
  </section>
      <section class="page-list">
        <div class="articles">Loading...</div>
      </section>
    `;

    preparePage();
  };

  render();
};

  export { PageList };