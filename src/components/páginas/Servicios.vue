<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col cols="12" md="12" sm="12" xs="12">
        <p class="descricao">
          <br>A ATF-Chile fornece serviços das empresas PHD Master, METROVAL e TSPro. Sendo eles: 
        </p>
      </b-col>

      <b-col cols="3" xl="3" md="3" sm="12" xs="12">
          <b-col xl="12" md="3" sm="12" xs="12">
            <img src="../../assets/servicios-imgs/braço-carregamento.png" id="imgbraço">  
          </b-col>
      </b-col>

      <b-col cols="3" xl="3" md="3" sm="12" xs="12" class="link">
          <b-col xl="12" md="12" sm="12" xs="12">
            informações tecnicas <br>
            clique
            <a href="http://" target="_blank" rel="noopener noreferrer">aqui</a>
          </b-col>
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
    background-color:white;
  }
  #coluna > h1{
    margin-top: 10px;
    font-size: 20px;
  }
  
  .descricao{
    margin: 10px;
    padding: 0;
    list-style: none;
    margin-left: 20%;
    margin-right: 10%;
    text-align: center;
    text-align: justify;
    font-size: 20px;
    grid-area: menu;
    color:black;
  }
  #imgbraço{

    padding: 15px;
    margin-top: 10px;
  }

  .link {
    text-align: justify;
    margin-top: 100px;
  }

</style>