<template>
  <div id="footer" class="pt-5 pb-5 footer">
    <div class="container">
      <div class="row">
        <div class="col-lg-5 col-xs-12 about-company">
          <h2>ATF Chile</h2>
          <p>
              Nuestro objetivo es dar el mejor servicio optimizando los recursos...!</p>
        </div>

        <div class="col-lg-3 col-xs-12 links">
          <h4 class="mt-lg-0 mt-sm-3">Links</h4>
          <ul class="m-0 p-0">
            <li class="lista-alinhamento">
              -
              <router-link to="/">Início</router-link>
            </li>
            <li class="lista-alinhamento">
              -
              <router-link to="/Productos">Productos</router-link>
            </li>
            <li class="lista-alinhamento">
              - Servicios:
            </li>
            <li class="lista-alinhamento">
              
              <router-link to="/PhdMaster">PhdMaster</router-link>
            </li>
            <li class="lista-alinhamento">
              
              <router-link to="/Metroval">Metroval</router-link>
            </li>
            <li class="lista-alinhamento">
              
              <router-link to="/Servicios">TsPro</router-link>
            </li>
            <li class="lista-alinhamento">
              -
              <router-link to="/Contacto">Contacto</router-link>
            </li>
          </ul>
        </div>

        <div class="col-lg-4 col-xs-12 location">
          <h4 class="mt-lg-0 mt-sm-4 telefonefooter">Teléfono</h4>
          <p class="mb-0">
            <i class="fa fa-phone mr-3"></i>+56 9 4270-8322
          </p>
          <p class="mb-0">
            <i class="fa fa-phone mr-3"></i>+56 9 5748-7427
          </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col copyright">
          <p class>
            <small class="text-white-50">© ATF- Chile 2020. All Rights Reserved.</small>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.footer {
  background: #0077B6;
  color: white;
  margin-top:20px;
  /* position: initial*/
}
.footer .links ul {
  list-style-type: none;
}
.footer .links li a {
  color: white;
  transition: color 0.2s;
}
.footer .links li a:hover {
  text-decoration: none;
  color: #CAF0F8;
}
 .lista-alinhamento {
    text-align: center;
}
.footer .about-company i {
  font-size: 25px;
}
.footer .about-company a {
  color: white;
  transition: color 0.2s;
}
.footer .about-company a:hover {
  color: #CAF0F8;
}
.footer .location i {
  font-size: 18px;
}
.footer .copyright p {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.telefonefooter{
  margin-top: 20px;
}

</style>