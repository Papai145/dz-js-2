function createSelector(arr) {
  const [latitude, longitude] = arr;

  const elLatitude = document.querySelector(".latitude");
  const elLongitude = document.querySelector(".longitude");
  elLatitude.innerText = latitude;
  elLongitude.innerText = longitude;
}
function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      throw new Error("геолокация не поддерживается данным браузером");
    }
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const userPosition = [
          position.coords.latitude,
          position.coords.longitude,
        ];
        resolve(userPosition); // выводит координаты местоположения пользователя
      },
      function (error) {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            throw new Error("User denied the request for Geolocation.");

          case error.POSITION_UNAVAILABLE:
            throw new Error("Location information is unavailable.");

          case error.TIMEOUT:
            throw new Error("The request to get user location timed out.");

          case error.UNKNOWN_ERROR:
            throw new Error("An unknown error occurred.");
        }
      }
    );
  });
}
getCurrentLocation()
  .then((data) => createSelector(data))
  .catch((error) => console.error(error));
