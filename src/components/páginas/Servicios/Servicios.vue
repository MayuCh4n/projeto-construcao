<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col xl="12" md="12" sm="12" xs="12">
        <p class="descricao">
          <br>São os serviços oferidos pela TsPro: 
        </p>
      </b-col>

      <b-col xl="6" md="6" sm="12" xs="12">
            <img src="../../../assets/servicios-imgs/braço-carregamento.png" alt="Left image">  
            <p>Braço de Carregamento - BOTTOM Loading (Carregamento por Baixo)</p>
             Informações Técnicas:<br>
                    <a href="https://www.tspro.com.br/" target="blank">www.tspro.com.br</a><br>
                    <b-button class="btn-baixar" href="https://docs.google.com/uc?export=download&id=1vUbObQtomVkGYSgKLEi6nEqnDIhQv4Cl" variant="info">Download pdf</b-button>
      </b-col>

      <b-col xl="4" md="6" sm="12" xs="12">
            <img src="../../../assets/servicios-imgs/bracotop.png" alt="Left image">  
            <p>Braço de Carregamento - TOP Loading (Carregamento por Cima)</p>
             Informações Técnicas:<br>
                    <a href="https://www.tspro.com.br/" target="blank">www.tspro.com.br</a><br>
                    <b-button class="btn-baixar" href="https://docs.google.com/uc?export=download&id=1vUbObQtomVkGYSgKLEi6nEqnDIhQv4Cl" variant="info">Download pdf</b-button>
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
    margin-bottom: 20px;
  }

  .descricao{
    margin: 10px;
    padding: 0;
    list-style: none;
    margin-left: 700px;
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