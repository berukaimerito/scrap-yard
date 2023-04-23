document.getElementById('searchBtn').addEventListener('click', async () => {
    const pokemonName = document.getElementById('pokemonName').value.toLowerCase();
    const pokemonContainer = document.getElementById('pokemonContainer');
    pokemonContainer.innerHTML = '';
  
    try {
      const response = await fetch(`/pokemon/${pokemonName}`);
      const data = await response.json();
  
      const pokemonCard = `
        <div class="pokemon-card">
          <h2>${data.name}</h2>
          <img src="${data.sprites.front_default}" alt="${data.name}">
          <p>Height: ${data.height}</p>
          <p>Weight: ${data.weight}</p>
          <p>Base experience: ${data.base_experience}</p>
        </div>
      `;
  
      pokemonContainer.innerHTML = pokemonCard;
    } catch (error) {
      console.error(error);
      pokemonContainer.innerHTML = '<p>Error fetching Pokémon data</p>';
    }
  });
  