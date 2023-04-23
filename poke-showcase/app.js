const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/pokemon/:name', async (req, res) => {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.name}`);
    res.json(response.data);
  } catch (error) {
    console.log(error);
    res.status(500).send('Error fetching Pokémon data');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
