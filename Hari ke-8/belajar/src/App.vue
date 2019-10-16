<template>
  <div id="app">
    <div class="flex">
      <div class="row">
        <div class="col">
          <ul class="nav mt-2">
            <li class="nav-item d-flex align-item-center justify-content-center p-2">
              <router-link class="nav-link active" style="color:white" to="/">Home</router-link>
            </li>
            <li class="nav-item d-flex align-item-center justify-content-center p-2">
              <a>
                <router-link class="nav-link" style="color:white" to="/Kontak">Kontak</router-link>
              </a>
            </li>
            <li class="nav-item d-flex align-item-center justify-content-center p-2">
              <a>
                <router-link class="nav-link" style="color:white" to="/gallery">Gallery</router-link>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="banner">
      <img src="/46885.jpg" style="width: 100%; height: 500px; object-fit:cover" />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
.banner{
    margin-top: -61px;
}
</style>
