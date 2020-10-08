<template>
  <b-container id="container" fluid>
    <b-row id="fundo1">

      <b-col cols="12" md="6" sm="12" xs="12" id="logo">
        <a href="https://metroval.com.br/" target="blank"><img src="../../assets/productos-imgs/Metroval.png"></a>
        <p class="subtitulo-imagem">Mas de 30 anos midiendo lo que precisa ser medido</p>
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

      <b-col cols="12" md="6" sm="12" xs="12" id="logo">
        <a href="http://www.phdmaster.com.br/index.html" target="blank"><img src="../../assets/productos-imgs/PHDMaster.png"></a>
        <p class="subtitulo-imagem">La experiencia de tres décadas de phd master ofreciendo soluciones a sus clientes en:</p>
      </b-col>

      <b-col cols="12" md="6" sm="12" xs="12" id="logo">
        <p class="texto-produto">Nuestro aliado de ingeniería y soluciones MASTER. PHD nos permite afrontar con garantía los proyectos 
          más complejos dando una solución única al cliente.</p>
      </b-col>

      <b-col cols="12" md="1" sm="12" xs="12" id="icone">
        <img src="../../assets/productos-imgs/icone1.png">
        <p class="subtitulo-icone">Industria Farmacéutica</p>
      </b-col>

      <b-col cols="12" md="1" sm="12" xs="12" id="icone">
        <img src="../../assets/productos-imgs/icone2.png">
        <p class="subtitulo-icone">Biocombustibles y Alcoholes</p>
      </b-col>

      <b-col cols="12" md="1" sm="12" xs="12" id="icone">
        <img src="../../assets/productos-imgs/icone3.png">
        <p class="subtitulo-icone">Logística y Distribución</p>
      </b-col>

      <b-col cols="12" md="1" sm="12" xs="12" id="icone">
        <img src="../../assets/productos-imgs/icone4.png">
        <p class="subtitulo-icone">Industria Petroquímica</p>
      </b-col>

      <b-col cols="12" md="1" sm="12" xs="12" id="icone">
        <img src="../../assets/productos-imgs/icone5.png">
        <p class="subtitulo-icone">Combustibles Fósiles</p>
      </b-col>

      <b-col cols="12" md="7" sm="12" xs="12" id="icone"></b-col>

      <b-col cols="12" md="6" sm="12" xs="12" id="logo1">
        <a href="https://www.tspro.com.br/" target="blank"><img src="../../assets/productos-imgs/TSPro.png"></a>
      </b-col>

      <b-col cols="12" md="6" sm="12" xs="12">
        <p class="texto-tspro">TSPRO es una empresa especializada en sistemas seguros para la manipulación, carga y descarga de tanques, monitoreo de fugas, 
          movimiento y transferencia de fluidos y sus gases / vapores. Todo lo que es transferencia de fluidos y gases.</p>
      </b-col>

    </b-row>
  </b-container>
</template>

<script>
export default {

}
</script>

<style>
  #fundo1{
    background-color: white;
  }
  .texto{
    margin: 0;
    padding: 10px;
    list-style: none;
    margin-right: 20%;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
    margin-top: 20px;
  }
  .texto-produto{
    margin: 0;
    list-style: none;
    margin-right: 20%;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
    margin-top: 0px !important;
  }
  .texto-tspro{
    margin: 0;
    padding: 20px;
    list-style: none;
    margin-right: 20%;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
    margin-top: 40px;
    margin-bottom: 30px;
  }
  .subtitulo-imagem{
    margin-left: 20px;
    font-size: 20px;
    padding: 10px;
  }

  /*TO DO: PADRONIZAR A PIXELAGEM DAS IMAGENS*/
  .subtitulo-icone{
    text-align: center;
    margin-top: 10px;
  }
  .lista{
    padding-bottom: 40px;
  }
  #logo{
    padding: 30px;
    margin-top: 30px;
  }
  #logo1{
    padding: 20px;
    margin-top: 50px;
  }
  #icone{
    padding: 10px;
    margin-left: 30px;
  }
  .lista-produtos{
    padding-left: 20px;
    text-decoration: none;
    text-align: justify;
    font-size: 20px;
    list-style: none;
  }
  @media(max-width: 765px){
    html,body
    {
        width: 100%;
        height: 100%;
        margin: 0px;
        padding: 0px;
        overflow-x: hidden; 
    }

    .texto, .texto-produto, .texto-tspro {
    margin: 0;
    padding: 20px;
    list-style: none;
    margin-right: 0%;
    text-align: center;
    font-size: 20px;
    grid-area: menu;
    margin-top: 30px;
    }
  }
</style>