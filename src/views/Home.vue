<template>
  <div class="row">
    <div class="col-lg-6 left-content">
      <img class="teaser-img img-fluid" src="https://placekitten.com/1000/1000" alt="Macolor - We communicate colors"/>
    </div>
    <div class="col-lg-6 right-content">
      <div class="row">
        <div class="col-lg-12">
          <img class="logo img-fluid pt-4 mt-5" alt="Macolor Logo" src="../assets/logo_macolors.png">
          <h2 class="mt-5 pt-5 display-6">We communicate colors</h2>
          <p class="lead mt-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <form class="inline pt-4">
            <div class="form-row">
              <div class="col-7">
                <input type="email" class="form-control form-control-lg" id="staticEmail2" value="" placeholder="your.email@example.com">
              </div>
              <div class="col-2">
                <button type="submit" class="btn btn-primary btn-lg">Sign up</button>
              </div>
            </div>
            <div class="form-row">
              <div class="col-8 mt-2">
                <input class="form-check-input ml-1" type="checkbox" value="" id="defaultCheck1">
                <label class="form-check-label ml-4 text-muted" for="defaultCheck1">Hereby I banfdsklfjldsa</label>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12 footer">
          <ul class="nav justify-content-center pt-5 mt-5">
            <li class="nav-item">
              <a class="nav-link" href="#">Instagram</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Imprint/Impressum</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Data Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'home',
  components: {
   
  },
};
</script>

<style>
body, html {
  height: 100%;
}

.home {
  position: relative;
  background-image: url("../assets/out_test_2.png");
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>

