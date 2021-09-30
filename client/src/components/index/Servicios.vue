<template>
  <div>
    <!--Seccion de servicios -->
    <section id="services" class="services-section">
      <div class="container py-5">
        <h2>Servicios</h2>
        <div class="row g-5 py-5 row-cols-1 row-cols-lg-3 container-fluid">
          <!-- Servicio1 -->
          <div class="feature col">
            <div>
              <img
                src="../../assets/images/index/servicios/Donacion.jpeg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Donaciones</h2>
            <p>
              Recuerda, puedes apoyar todo nuestro trabajo y esfuerzo, puedes
              poner tu granito de arena, cada uno de estos peluditos te lo
              agredecerá. !Dona Ya!
            </p>

            <button
              onclick="window.location.href='https://www.paypal.com/co/home'"
              type="button"
              class="btn btn-outline-dark"
            >
              Donaciones!!
            </button>

            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </div>
          <!-- Servicio 2 -->
          <div class="feature col">
            <div>
              <img
                src="../../assets/images/index/servicios/productos.jpg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Productos</h2>
            <p>
              Puedes adquirir los mejores productos para tu nuevo amigo, o si ya
              tienes mascota lo puedes consentir con los mejores productos del
              mercado para aseo, alimentación y salud.
            </p>

            <button
              onclick="window.location.href='https://listado.mercadolibre.com.co/productos-animales#D[A:productos%20animales]'"
              type="button"
              class="btn btn-outline-dark"
            >
              Compra Ya!
            </button>
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </div>
          <!-- Servicio 3 -->
          <div class="feature col">
            <div>
              <img
                src="../../assets/images/index/servicios/adopta.jpeg"
                class="img-fluid servicios-imagen"
              />
            </div>
            <h2>Adopciones</h2>
            <p>
              Todavía no tienes mascota, no compres, adopta ya, decenas de
              peluditos esperan por tí, de seguro hay uno que se quedatá en tu
              corazón y en tu alma.
            </p>

            <button
              type="button"
              onclick="window.location.href='/adopciones'"
              class="btn btn-outline-dark"
            >
              Adopta ya!!
            </button>
            <svg class="bi" width="1em" height="1em">
              <use xlink:href="#chevron-right"></use>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
