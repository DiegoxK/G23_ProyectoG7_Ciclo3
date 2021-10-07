<template>
  <!-- Noticias -->
  <section id="news" class="news-section">
    <div class="container  py-5 ">
      <h2>Noticias</h2>
      <div class="row row-cols-1 row-cols-sm-2 display-flex">
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div class="n1 feature col">
            <a href="https://www.instagram.com/p/B-j_aUggu8h/">
              <img
                src="../../assets/images/index/noticias/news1.png"
                id="news1"
              />
            </a>
            <div class="t1"><h2> Haz clic en la imagen</h2></div>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div class="n2 feature col">
            <a href="https://www.instagram.com/p/CQB1bvWnMG2/">
              <img
                src="../../assets/images/index/noticias/news2.png"
                id="news2"
              />
            </a>
            <div class="t1"><h2>Haz clic en la imagen</h2></div>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#calendar3"></use>
          </svg>
          <div class="n3 feature col">
            <a href="https://www.instagram.com/p/CL4jr2LAKUk/">
              <img
                src="../../assets/images/index/noticias/news3.png"
                id="news3"
              />
            </a>
            <div class="t1"><h2>Haz clic en la imagen</h2></div>
          </div>
        </div>
        <div class="col d-flex align-items-start">
          <svg
            class="bi text-muted flex-shrink-0 me-3"
            width="1.75em"
            height="1.75em"
          >
            <use xlink:href="#home"></use>
          </svg>
          <div class="n4 feature col">
            <a href="https://www.instagram.com/p/B-j735dAPaO/">
              <img src="../../assets/images/index/noticias/news4.png" id="news4"
            /></a>
            <div class="t1"><h2>Haz clic en la imagen</h2></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .n1,
  .n3 {
    height: 75%;
    border: 4px solid #62f5abed;
    border-radius: 15px 50px;
  }

  .n2,
  .n4 {
    height: 75%;
    border: 4px solid #62f5abed;
    border-radius: 15px 50px;
  }

  #news1,
  #news2,
  #news3,
  #news4 {
    position: backgroung;
    width: 85%;
    height: 85%;
    border-radius: 15px 50px;
    margin: 15px;
    border: 5px solid #62f5abed;
    align-content: center;
  }

  img:hover {
    -webkit-transform: scale(1.5);
    -moz-transform: scale(1.5);
    -o-transform: scale(1.5);
    -ms-transform: scale(1.5);
    transform: scale(1.5);
  }

  .t1 {
    text-align: center;
  }
</style>
