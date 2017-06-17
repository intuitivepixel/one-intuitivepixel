export function initialize(application) {
  application.deferReadiness();
  const geo = navigator.geolocation;
  geo.getCurrentPosition((position) => {
    const pt = position.coords;
    const location = {
      lat: pt.latitude,
      lng: pt.longitude
    };
    application.register('data:location', location, {instantiate: false});
    //application.inject('route', 'currentLocation', 'data:location');
    application.advanceReadiness();
  });
}

export default {
  name: 'location',
  initialize
};
