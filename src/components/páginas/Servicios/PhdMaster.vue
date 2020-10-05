<template>
  <b-container id="container" fluid>
    <b-row id="fundo">

      <b-col xl="12" md="12" sm="12" xs="12">
        <p class="descricaophd">
          <br>Los productos que ofrece PhdMaster son: 
        </p>
      </b-col>

      <b-col xl="6" md="6" sm="12" xs="12">
            <img src="../../../assets/PhdMaster/smp.png" alt="Left image">  
            <p>Preset Eletrônico - Single Meter Preset (SMP)</p>
             Informaciones Técnicas:<br>
                    <a href="http://www.phdmaster.com.br/produtos-presets-eletronicos-toptech.html" target="blank">www.phdmaster.com.br</a><br>
      </b-col>

      <b-col xl="4" md="6" sm="12" xs="12">
            <img src="../../../assets/PhdMaster/preset.png" alt="Left image">  
            <p class="phd">Preset Eletrônico - Multiload II</p>
             Informaciones Técnicas:<br>
                    <a href="http://www.phdmaster.com.br/produtos-presets-eletronicos-toptech.html" target="blank">www.phdmaster.com.br</a><br>
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

  .descricaophd{
    margin: 10px;
    padding: 0;
    list-style: none;
    margin-right: 10%;
    text-align: center;
    font-size: 20px;
    grid-area: menu;
    color:black;
    margin-bottom: 50px;
  }
  #imgbraço{

    padding: 15px;
    margin-top: 10px;
  }
  .phd{
    margin-top: 57px;
  }

</style>