<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col cols="12" md="6" sm="12" xs="12" id="logo">
        <img src="../../assets/Metroval.png">
        <p class="texto1">Mas de 30 anos midiendo lo que precisa ser medido</p>
      </b-col>

      <b-col cols="12" md="6" sm="12" xs="12">
        <p class="texto">Fundada en 1987 en la ciudad interior de Nova Odessa Estado de Sao Paulo y a partir de 2002 una filial en Macaé, RJ </p>

          <ul class="m-0 p-0">
            <li class="lista-produtos">
              Empresa 100% brasileña
            </li>
            <li class="lista-produtos">
              Certificación iso-9000
            </li>
            <li class="lista-produtos">
              Certificación iso-14001
            </li>
            <li class="lista-produtos lista">
              Certificación oshas-18001
            </li>
          </ul>

      </b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
  #fundo{
    background-color: rgb(231, 230, 230);
  }
  .texto{
    margin: 0;
    padding: 20px;
    list-style: none;
    margin-right: 20%;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
  }
  .texto1{
    margin-left: 20px;
    font-size: 20px;
    padding: 10px;
  }
  .lista{
    padding-bottom: 40px;
  }
  #logo{
    padding: 20px;
  }
  .lista-produtos{
    padding-left: 20px;
    text-decoration: none;
    text-align: justify;
    font-size: 20px;
    list-style: none;
  }
</style>