<template>
  <div class="map-wrap">
    <Map/>
  </div>
</template>

<script>
import Map from './Map';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Map
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.map-wrap {
  height: 70%;
  width: 800px;
  margin: 0 auto;
}
</style>
