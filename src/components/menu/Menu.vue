<template>
<div>
  <b-navbar toggleable="lg" id="menu">
    <b-navbar-brand><a href="/"><img src="../../assets/logo2.png" id="imagem" alt="logo"></a></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#" class="espaçamento">Home</b-nav-item>
        <b-nav-item href="#" class="espaçamento">Productos</b-nav-item>
        <b-nav-item href="#" class="espaçamento">Servicios</b-nav-item>
        <b-nav-item href="#" class="espaçamento">Contacto</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown text="Idioma" id="idioma" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">PT</b-dropdown-item>
        </b-nav-item-dropdown>
          
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
  export default {

  }
</script>

<style>
    #menu {
        padding-left: 30px;
        background-color: #90E0EF;
        padding-bottom: 0;
        padding-top: 0;
        color: #03045E !important;
        font-size: 22px;
        color: black;
    }

    #imagem{
        max-height: 100px;
        margin: 0;
        padding: 0;
    }
    #nav-collapse{
      margin-left: 90px;
    }
    .espaçamento{
      margin-left: 20px;
      color:black !important; 
    }
    .espaçamento > a{
      color:rgb(49, 49, 49) !important; 
    }
    .espaçamento > a:hover{
      color: #0077B6 !important;
    }
    #idioma > a{
      color:rgb(49, 49, 49) !important; 
    }
    #idioma > a:hover{
      color: #0077B6 !important; 
    }


</style>