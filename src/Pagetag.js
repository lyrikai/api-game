

const Pagetag = (argument = '') => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, '-');
  
      const displayResults = (articles) => {
        console.log(articles)
        const resultsContent = articles.map((article) => (
          `
          <article class="cardGame">

            <h2>${article.released}</h2>
            <a href="#pagedetail/${article.id}">${article.name}</a>
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
  
    };
  
    const render = () => {
      pageContent.innerHTML = `
      <section>
      <h1 class="color-pink">Welcome,</h1>
      <p>The Hyper Progame is the world’s premier event for computer and video games and related products. At The Hyper Progame,
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
  
    export { Pagetag };