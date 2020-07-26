<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col cols="12" md="6" sm="12" xs="12">
        <p class="descricao">
          <br>Surge como necesidad de dar una alternativa nueva, dando soluciones más ecológicas y seguras.  
          Aportando un valor añadido a las empresas, con soluciones de alta tecnología y primera calidad con 
          un coste al alcance de toda empresa o usuario. 
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
  
  .descricao{
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