export const getCharacters = async (page = 1) => {
  try {
    const res = await fetch(
      `https://rickandmortyapi.com/api/character?page=${page}`
    );
    const { info, results } = await res.json();
    return {
      pages: info.pages,
      characters: results.map((character) => ({
        id: character.id,
        name: character.name,
        status: character.status,
        species: character.species,
        image: character.image,
      }))
    };
  } catch (error) {
    console.error(error.message);
    return [];
  }
};

export const getCharacter = async (id) => {
  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();
    return character;
  } catch (error) {
    console.error(error.message);
    return {};
  }
};
