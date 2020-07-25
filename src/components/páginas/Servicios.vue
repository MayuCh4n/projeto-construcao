<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col cols="12" md="12" sm="12" xs="12">
        <p class="descricao">
          <br>A ATF-Chile fornece serviços das empresas PHD Master, METROVAL e TSPro. Sendo eles: 
        </p>
      </b-col>

      <b-col xl="6" md="6" sm="12" xs="12">
            <img src="../../assets/servicios-imgs/braço-carregamento.png" alt="Left image">  
            <p>braço mecânico</p>
      </b-col>

      <b-col  xl="6" md="6" sm="12" xs="12" class="link">
          <b-col align-v="end" xl="12" md="12" sm="12" xs="12" class="link">
                    informações tecnicas:<br>
                    <a href="http://"></a>
                    <b-button class="btn-baixar" href="https://docs.google.com/uc?export=download&id=1vUbObQtomVkGYSgKLEi6nEqnDIhQv4Cl" variant="info">Download pdf</b-button>
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
  
  .link {
    padding: 10px;
    text-align: center;
  }

  .btn-baixar {
    margin: 10px;
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

</style>