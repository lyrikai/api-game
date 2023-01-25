const PageDetail = (argument) => {
    const preparePage = () => {
      const cleanedArgument = argument.trim().replace(/\s+/g, "-");
      const displayGame = (gameData) => {
        console.log(gameData)
        const { name, released, description, background_image, description_raw, rating, ratings_count, developers, platforms, publishers, genres, tags, stores} = gameData;
        const articleDOM = document.querySelector(".page-detail .article");
        function firstSentence(text) {
            let firstSentence = text.split(/[.?!]/)[0];
            return firstSentence;
          }

          let a = []
          platforms.forEach(function(item){
            a.push(item.platform.name + "</br>");
          });

          let b = []
          genres.forEach(function(item){
            b.push(`<a href="#pagetag">`+ item.name + "</a><br>");
          });

          let c = []
          let ci = 0
          tags.forEach(function(item){
            ci = ci + 1
            if(ci < 5){
                c.push(item.name + "</br>");
            }
          });

          let d = []
          stores.forEach(function(item){
            d.push(`<a href="https://`+item.store.domain +`">`+ item.store.name + "</><br>");
          });
        
        let ok = firstSentence(description_raw)

        articleDOM.querySelector("img.back").src = background_image;
        articleDOM.querySelector(".rating").innerHTML = rating + "/5 - " + ratings_count +" votes";
        articleDOM.querySelector(".title-d").innerHTML = name;
        articleDOM.querySelector(".short-desc").innerHTML = ok;
        articleDOM.querySelector(".release").innerHTML = released;
        articleDOM.querySelector("p.description").innerHTML = description;
        articleDOM.querySelector(".dev").innerHTML = developers[0].name;
        articleDOM.querySelector(".platforms").innerHTML = a;
        articleDOM.querySelector(".publiser").innerHTML = publishers[0].name;
        articleDOM.querySelector(".genre").innerHTML = b;
        articleDOM.querySelector(".tags").innerHTML = c;
        articleDOM.querySelector(".buy-txt").innerHTML = d;
        

      };
  
      const fetchGame = (url, argument) => {
        let a = `${url}/${argument}?key=e59342cc36f443888806b7b87b1c6c01`
        console.log(a)
        fetch(`${url}/${argument}?key=e59342cc36f443888806b7b87b1c6c01`)
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData)
            displayGame(responseData);
          });
      };

      fetchGame('https://api.rawg.io/api/games', cleanedArgument);
    };
  
    const render = () => {
      pageContent.innerHTML = `
      <div class="page-detail">

      <div class="article">

      <img class="back" src="">
    
      <div class="head">
          <div class="tilte-bloc">
              <p class="title-d"></p>
              <p class="short-desc"></p>
          </div>
          <div class="rate-bloc">
              <p class="rating"></p>
          </div>
      </div>
  
      <div class="text">
          <div class="plot-box">
              <p class="title-s">Plot</p>
              <p class="description"></p>
          </div>
  
          <div class="game-box">
              <p class="title-s">Gameplay</p>
              <p></p>
          </div>
  
          <div class="shot-info">
              <div>
                  <p class="title-s">Release Date</p>
                  <p class="release"></p>
              </div>
              <div>
                  <p class="title-s">Developper</p>
                  <p class="dev"></p>
              </div>
              <div>
                  <p class="title-s">Platforms</p>
                  <p class="platforms"></p>
              </div>
              <div>
                  <p class="title-s">Publiser</p>
                  <p class="publiser"></p>
              </div>
          </div>
  
          <div class="shot-info-two">
              <div>
                  <p class="title-s">Genre</p>
                  <p class="genre"></p>
              </div>
              <div>
                  <p class="title-s">Tags</p>
                  <p  class="tags"></p>
              </div> 
          </div>
      </div>
  
      <div class="buy">
          <h2 class="title-s">Buy</h2>
          <p class="buy-txt"></p>
          
      </div>
      
      <div class="trailer">
          <h2 class="title-s">Trailer</h2>
          <p></p>
          <p></p>
      </div>
  
      <div>
          <h2>SCREENSHOTS</h2>
          <div>
              <img src="" alt="" class="scren1">
              <img src="" alt="" class="scren2">
          </div>
          <div>
              <img src="" alt="" class="scren3">
              <img src="" alt="" class="scren4">
          </div>
      </div>
  
      <div>
          <h2>Similar games</h2>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
          <div>
              <div></div>
              <div></div>
              <div></div>
          </div>
      </div>
      </div>
  
      </div>

        
      `;
  
      preparePage();
    };
  
    render();
  };

  

  export { PageDetail };