<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col cols="12" md="6" sm="12" xs="12">
        <p class="descricao10">
          <br>Surge como necesidad de dar una alternativa nueva, dando soluciones más ecológicas y seguras. Aportando un valor añadido a las empresas, 
          con soluciones de alta tecnología y primera calidad con un coste al alcance de toda empresa o usuario.
          Gracias a las alianzas de METROVAL, PHD Master y TSPro tenemos el potencial para atender con garantía de éxito, pues contamos en METROVAL 
          con el más moderno laboratorio de Latinoamérica donde se atiende calibraciones de la norma ABNT ISO/IEC 17025, 
          además es integrante de la RBC (Red Brasileña de Calibración), además de poseer medidores de calibración en campo.
          <br><br>Contamos con los sistemas de carga y descarga de fluidos peligrosos químicos, petroquímicos y combustibles más modernos. 
          Nuestra misión es la transferencia, manipulación y transporte de dichos fluidos con la mayor seguridad y control.
          <br><br>Desde ATF Chile pretendemos hacer frente a las necesidades de nuestros clientes de los sectores de Alcohol, petroquímico, óleo y gas, terminales de combustibles, etc. 
          Donde se necesite tener un control del líquido o gas, transformando las necesidades de los clientes en una solución optimizada, para garantizar un retorno de su inversión a corto plazo.
        </p>

      </b-col>

      <b-col cols="12" md="6" sm="12" xs="12" id="img">
            <a href="/"><img src="../../assets/menu-imgs/teste.jpg" id="imagemhome" alt="home"></a>
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
  #coluna > h1{
    margin-top: 10px;
    font-size: 20px;
  }
  
  .descricao10{
    margin: 10px;
    padding: 0;
    list-style: none;
    margin-left: 10%;
    margin-right: 10%;
    text-align: center;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
  }
  #imagemhome {
    max-height: 100%;
    max-width: 100%;
    height: auto;
    width: auto;
    padding: 0;
  }
  #img{
    padding: 44px;
  }

</style>