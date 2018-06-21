<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <label>
        <gmap-autocomplete @place_changed="setPlace" style="width:80%; display: inline;"></gmap-autocomplete>
        <button @click="addMarker">Add</button>
    </label>
    <br><br>
    <gmap-map :center="center" :zoom="14" style="width:100%;  height: 65vh;"><br>
      <gmap-marker :key="index" v-for="(m, index) in markers" :position="m.position" @click="center=m.position"></gmap-marker>
    </gmap-map>	
  </div>
</template>

<script>
export default {
  name: 'GoogleMap',
  data () {
    return {
      msg: 'How Are you 2 day',
      center: { lat: 35.140, lng: 129.100 },
      currentPlace: null,
      markers: [],
      places: []
    }
  },
  mounted () {
    this.geolocate()
  },
  methods: {
    setPlace (place) {
      this.currentPlace = place
    },
    geolocation: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      })
    },
    addMarker () {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        }
        this.markers.push({ position: marker })
        this.places.push(this.currentPlace)
        this.center = marker
        this.currentPlace = null
      }
    }

  }
}
</script>
