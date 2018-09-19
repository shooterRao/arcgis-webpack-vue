<template>
  <div id="map"></div>
</template>

<script>
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';

export default {
  name: 'Map',
  data() {
    return {};
  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const map = new Map({
        basemap: 'streets'
      });
      // eslint-disable-next-line
      const view = new MapView({
        container: 'map',
        map,
        center: [15, 65],
        zoom: 4
      });
      // 保存map、view对象到vuex中
      this.$store.dispatch('map/setMap', map);
      this.$store.dispatch('map/setView', view);
    }
  }
};
</script>

<style lang='scss' scoped>
#map {
  height: 100%;
  width: 100%;
}
</style>
