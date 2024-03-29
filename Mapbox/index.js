mapboxgl.accessToken =
  "pk.eyJ1IjoiYXNpYW5jaHVuIiwiYSI6ImNrejdxeW8yczFkNTMybm9mMTVmY3U4eWQifQ.X-L8D_gXUpQP0GIZitbfvA"

navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
  enableHighAccuracy: true,
})

function successLocation(position) {
  setupMap([position.coords.longitude, position.coords.latitude])
}

function errorLocation() {
  setupMap([-2.24, 53.48])
}

function setupMap(center) {
  const map = new mapboxgl.Map({
    container: "map",
    style: "mapbox://styles/mapbox/streets-v11",
    center: center,
    zoom: 14,
  })

  const nav = new mapboxgl.NavigationControl()
  map.addControl(nav)

  const directions = new MapboxDirections({
    accessToken: mapboxgl.accessToken,
  })
  map.addControl(directions, "top-left")
}
