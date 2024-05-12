function displayDetailMovie(movie) {

  // console.log("display the detial of this ", movie)

  const main = document.querySelector("main")
  // console.log(main)

  main.innerHTML = `  
  <section class="detail-container" style="background-image: url(${movie.cover});">
      <div class="overlay">
        <div class="detail-header">
          <h1>${movie.title}</h1>
          <div class="tabbar">
            <button class="tab-btn active" data-id="detail">Detail</button>
            <button class="tab-btn" data-id="video">Video</button>
            <button class="tab-btn" data-id="reviews">Reviews</button>
          </div>
        </div>
        <div class="detail-body">
          <section class="tab detail-tab active-tab" id="detail">
            <p>
              <ion-icon name="information-circle"></ion-icon>
              <span class="text">OVERVIEW: ${movie.overview}</span>
            </p>
            <p>
              <ion-icon name="pricetags"></ion-icon>
              <span class="text">CATEGORY: ${movie.category}</span>
            </p>
            <p>
              <ion-icon name="alarm"></ion-icon>
              <span class="text">DURATION: ${movie.duration}</span>
            </p>
            <p>
              <ion-icon name="calendar-number"></ion-icon>
              <span class="text">RELEASED DATE: ${movie.releasedDate}</span>
            </p>
          </section>

          <section class="tab video-tab" id="video">
            <iframe src="${movie.trailerId}" allowfullscreen></iframe>
          </section>

          <section class="tab review-tab" id="reviews">
            REVIEWS
          </section>

        </div>
      </div>
    </section>


  `




  
}

export default displayDetailMovie