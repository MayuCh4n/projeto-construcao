<template>
<div>
  <b-navbar toggleable="lg" id="menu">
    <b-navbar-brand><a href="/"><img src="../../assets/menu-imgs/logo2.png" id="imagem" alt="logo"></a></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    
    <b-collapse id="nav-collapse" is-nav>

      <b-navbar-nav class="navbar"> 

        <router-link to="/" class="espaçamento">
          Início
        </router-link>

        <router-link to="/Productos" class="espaçamento">
          Productos
        </router-link>

      <!-- TODO TRANSFORMAR SERVICIOS EM DROPDOWN COM TRÊS PÁGINAS -->
      <b-nav-item-dropdown
        id="my-nav-dropdown"
        class="espaçamento idioma"
        text="Servicios"
        toggle-class="nav-link-custom"
        right
      >
        <b-dropdown-item to="/Metroval">Metroval</b-dropdown-item>
        <b-dropdown-item to="/PhdMaster">Phd Master</b-dropdown-item>
        <b-dropdown-item to="/Servicios">Ts pro</b-dropdown-item>
      </b-nav-item-dropdown>

        <router-link to="/Contacto" class="espaçamento">
          Contacto
        </router-link>

      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <!-- <b-navbar-nav class="ml-auto">
        

        <b-nav-item-dropdown text="Idioma" class="espaçamento idioma" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">PT</b-dropdown-item>
        </b-nav-item-dropdown>

        
          
      </b-navbar-nav> -->
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

    .espaçamento{
      margin-left: 40px;
      margin-top: 10px;
      color:black !important; 
      display: block;
    }
    .navbar > a{
      color:rgb(49, 49, 49) !important; 
    }
    .navbar > a:hover{
      color: #0077B6 !important;
      text-decoration: none;
    }
    .idioma > a{
      color:rgb(49, 49, 49) !important; 
    }
    .idioma > a:hover{
      color: #0077B6 !important; 
    }

    @media(max-width: 1141px) {
        #imagem{
          height: 50%;
          width: 200px;
          margin: 0;
          padding: 0;
          position:inherit;
          align-self: start;
    }

    }

    @media(max-width: 991px) {
      .espaçamento {
        align-self: center;
        margin-left: 0;
      }
    }



</style>