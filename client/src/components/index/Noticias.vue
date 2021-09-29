<template>
  <!-- Noticias -->
   <section id="news" class="news-section">
      <div class="container py-5">
          <h2>Noticias</h2>
          <div class="row row-cols-1 row-cols-lg-2 align-items-stretch g-2 "  >
            <div class="col d-flex align-items-start" >
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#bootstrap"></use>
              </svg>
              <div class="n1" >
                <img src="../../assets/images/index/noticias/news1.png" id="news1">
                <h4 class="fw-bold mb-0"></h4><br>
                <div class="col text-center">
                  <a class="btn btn-outline-dark" href="https://www.instagram.com/p/B-j_aUggu8h/" role="button">Ver más </a>
                </div>
              </div>
            </div>
            <div class="col d-flex align-items-start" >
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#cpu-fill"></use>
              </svg>
              <div class="n2">
                <img  src="../../assets/images/index/noticias/news2.png" id="news2">
                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/CQB1bvWnMG2/"  role="button">Ver más </a>
                </div>  
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em" >
                <use xlink:href="#calendar3"></use>
              </svg>
              <div class="n3">
                <img  src="../../assets/images/index/noticias/news3.png" id="news3" class="rounder">
                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/CL4jr2LAKUk/"  role="button">Ver más </a>
                </div>  
              </div>
            </div>
            <div class="col d-flex align-items-start">
              <svg class="bi text-muted flex-shrink-0 me-3" width="1.75em" height="1.75em">
                <use xlink:href="#home"></use>
              </svg>
              <div class="n4">
                <img src="../../assets/images/index/noticias/news4.png" id="news4">

                <div class="col text-center"><br>
                  <a class="btn btn-outline-dark" href= "https://www.instagram.com/p/B-j735dAPaO/"  role="button" >Ver más </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
</template>

<style>
.n1,
.n3 {
  width:75%;
  height: 75%;
  left: 10em;
  right: 10em;
  border: 4px solid #62f5abed;
  border-radius: 15px 50px;

}

.n2,
.n4 {
  width: 75%;
  height: 75%;
  left: 50em;
  right: 50em;
  border: 4px solid #62f5abed;
  border-radius: 15px 50px;

}

#news1,
#news2,
#news3,
#news4 {
  position: backgroung;
  width: 100%;
  height: 100%;
  border-radius: 15px 50px;

}

.btn-outline-dark,
.btn-outline-dark:hover,
.btn-outline-dark:active,
.btn-outline-dark:visited,
.btn-outline-dark:focus {
  background-color: #62f5abed;
  border: 4px solid #62f5abed;
  color: black;
}
</style>
