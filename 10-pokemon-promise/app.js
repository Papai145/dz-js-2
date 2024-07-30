function getData(url, errorMessage = "Error 404") {
  return fetch(url).then((res) => {
    if (!res.ok) {
      throw new Error(errorMessage);
    }
    return res.json();
  });
}

getData("https://pokeapi.co/api/v2/pokemon/ditto")
  .then(({ abilities }) => {
    return getData(abilities[0].ability.url);
  })
  .then(({ effect_entries }) => {
    const effectEN = effect_entries.find((el) => el.language.name == "en");
    console.log(effectEN);
  })
  .catch((error) => {
    if (error.message == "Failed to fetch") {
      console.log(
        "Не получилось сделать запрос и получить данные,проверьте название домена"
      );
    }
    console.log(error.message);
  });
