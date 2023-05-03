<template>
  <div class="offcanvas offcanvas-start text-bg-dark border-end border-secondary" tabindex="-1" id="offcanvasWithBackdrop" aria-labelledby="offcanvasWithBackdropLabel">
    <div class="offcanvas-header">
      <router-link class="text-decoration-none text-white" :to="{name: 'overviewpage'}">
        <h5 class="offcanvas-title" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">DRX Windows Automation</h5>
      </router-link>
    </div>
    <hr>
    <div class="offcanvas-body">
      <div class="accordion accordion-flush" id="offcanvasMenu1Acc">
        <div class="accordion-item">  
          <h3 class="accordion-header" id="offcanvasMenuHeadingOne">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu1ItemOne" aria-expanded="false" aria-controls="offcanvasMenu1ItemOne">
              <div><font-awesome-icon class="card-text" icon="fa-solid fa-bars" size="sm" /> New server</div>
            </button>
          </h3>
          <div id="offcanvasMenu1ItemOne" class="accordion-collapse collapse" aria-labelledby="offcanvasMenuHeadingOne" data-bs-parent="#offcanvasMenu1Acc">
            <router-link class="text-decoration-none text-white" :to="{name: 'newhv'}">
              <div class="accordion-body-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <div class="accordion-body" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu1ItemOne" aria-expanded="false" aria-controls="offcanvasMenu1ItemOne">
                  <div><font-awesome-icon class="card-text" icon="fa-solid fa-minus" size="sm" /> New Hyper-V machine</div>
                </div>
              </div>
            </router-link>
            <router-link class="text-decoration-none text-white" :to="{name: 'testpage'}">
              <div class="accordion-body-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <div class="accordion-body" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu1ItemOne" aria-expanded="false" aria-controls="offcanvasMenu1ItemOne">
                  <div><font-awesome-icon class="card-text" icon="fa-solid fa-minus" size="sm" /> New Win server in DB</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
        <div class="accordion-item">  
          <h3 class="accordion-header" id="offcanvasMenuHeadingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu2ItemTwo" aria-expanded="false" aria-controls="offcanvasMenu2ItemTwo">
              <div><font-awesome-icon class="card-text" icon="fa-solid fa-bars" size="sm" /> Reconfigure servers</div>
            </button>
          </h3>
          <div id="offcanvasMenu2ItemTwo" class="accordion-collapse collapse" aria-labelledby="offcanvasMenuHeadingTwo" data-bs-parent="#offcanvasMenu1Acc">
            <router-link class="text-decoration-none text-white" :to="{name: 'testpage'}">
              <div class="accordion-body-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <div class="accordion-body" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu2ItemTwo" aria-expanded="false" aria-controls="offcanvasMenu2ItemTwo">
                  <div><font-awesome-icon class="card-text" icon="fa-solid fa-minus" size="sm" /> Reconfigure DSC</div>
                </div>
              </div>
            </router-link>
            <router-link class="text-decoration-none text-white" :to="{name: 'testpage'}">
              <div class="accordion-body-link" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
                <div class="accordion-body" data-bs-toggle="collapse" data-bs-target="#offcanvasMenu2ItemTwo" aria-expanded="false" aria-controls="offcanvasMenu2ItemTwo">
                  <div><font-awesome-icon class="card-text" icon="fa-solid fa-minus" size="sm" /> Reset DSC</div>
                </div>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <nav class="navbar navbar-dark  sticky-top navbar-expand-sm">
    <div class="container-fluid">
      <ul class="navbar-nav align-items-center">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBackdrop" aria-controls="offcanvasWithBackdrop">
            <font-awesome-icon icon="fa-solid fa-bars" />
          </a>
        </li>
        <li class="nav-item">
          <router-link class="nav-link active" :to="{name: 'overviewpage'}">
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Events</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Tasks</a>
        </li>
      </ul>
      <p class="text-white my-auto mx-2">Logged in as: <router-link class="text-decoration-none text-white" :to="{name: 'testpage'}">user100</router-link></p>
    </div>    
  </nav>

  <router-view/>
  
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: #454d55 !important;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #454d55;
  height: 100%;
}
.footer {
    bottom: 0;
    height: auto;
    width:100%;
    background-color: #343a40;
    color: white;
    position: absolute;
}
.navbar {
  background-color: #343a40;
}
.offcanvas{
     width:25% !important;
     background-color: #343a40;
}
.accordion-button{
  background-color: #343a40 !important;
  color: white !important;
}
.accordion-button:not(.collapsed){
  background-color: #373e44 !important;
}
.accordion{
  --bs-accordion-bg: #384345 !important;
  --bs-accordion-color: white !important;
  --bs-accordion-btn-focus-border-color: #343a40 !important;
  --bs-accordion-btn-focus-box-shadow: #343a40 !important;
  --bs-accordion-btn-icon: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill='white'%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e") !important;
  --bs-accordion-btn-active-icon: url("data:image/svg+xml,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill='white'%3e%3cpath fill-rule=%27evenodd%27 d=%27M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z%27/%3e%3c/svg%3e") !important;
  --bs-accordion-border-color: #384345 !important;
  text-align: left !important;
}
.accordion-body-link:hover{
  background-color: #424749;
}
</style>
