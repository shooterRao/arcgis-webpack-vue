<template>
  <div class="map-wrap">
    <Map/>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';
import mapMix from '@/utils/mixins/map';
import Map from './Map';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: {
    Map
  },
  // computed: {
  //   ...mapGetters(['map', 'mapView'])
  // },
  methods: {
    getMapInfo() {
      // 方便在各个组件中获取map对象和mapView对象
      console.log(this.map)
      console.log(this.mapView)
    }
  },
  mounted() {
    this.getMapInfo()
  },
  mixins: [mapMix]
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
