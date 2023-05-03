<template>
  <div class="row mt-3">
    <div class="col">
      <div class="card text-white bg-success">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="card-title h4">1500</p>
              <p class="card-text">Servers</p>
            </div>
            <div class="col my-auto">
              <font-awesome-icon class="card-text" icon="fa-solid fa-server" size="2xl" />
            </div>
          </div>
        </div>
        <div class="card-footer">Go to   <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </div>
        <router-link :to="{name: 'testpage'}">
          <a class="stretched-link"></a>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="card text-white bg-success">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="card-title h4">70</p>
              <p class="card-text">Locations</p>
            </div>
            <div class="col my-auto">
              <font-awesome-icon class="card-text" icon="fa-solid fa-globe" size="2xl" />
            </div>
          </div>
        </div>
        <div class="card-footer">Go to   <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </div>
        <router-link :to="{name: 'testpage'}">
          <a class="stretched-link"></a>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="card text-white bg-success">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="card-title h4">23</p>
              <p class="card-text">Roles</p>
            </div>
            <div class="col my-auto">
              <font-awesome-icon class="card-text" icon="fa-solid fa-file-lines" size="2xl" />
            </div>
          </div>
        </div>
        <div class="card-footer">Go to   <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </div>
        <router-link :to="{name: 'testpage'}">
          <a class="stretched-link"></a>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="card text-white bg-success">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="card-title h4">5</p>
              <p class="card-text">Platforms</p>
            </div>
            <div class="col my-auto">
              <font-awesome-icon class="card-text" icon="fa-solid fa-microchip" size="2xl" />
            </div>
          </div>
        </div>
        <div class="card-footer">Go to   <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </div>
        <router-link :to="{name: 'testpage'}">
          <a class="stretched-link"></a>
        </router-link>
      </div>
    </div>
    <div class="col">
      <div class="card text-white bg-success">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="card-title h4">4</p>
              <p class="card-text">OS</p>
            </div>
            <div class="col my-auto">
              <font-awesome-icon class="card-text" icon="fa-solid fa-window-maximize" size="2xl" />
            </div>
          </div>
        </div>
        <div class="card-footer">Go to   <font-awesome-icon icon="fa-solid fa-circle-arrow-right" />
        </div>
        <router-link :to="{name: 'testpage'}">
          <a class="stretched-link"></a>
        </router-link>
      </div>
    </div>
  </div>    
</template>

<script>
export default {
  name: 'OverviewSummaryCards'
}
</script>