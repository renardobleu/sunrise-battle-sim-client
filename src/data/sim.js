const axios = require('axios');

export function computeTurn(opts) {
  opts = {
    gravity: false,
    teamSize: '1',
    terrain: undefined,
    weather: undefined,
    team1: {
      stealthRock: false,
      steelSurge: false,
      // Wildfire Vine Lash  Volcalith Cannonade
      spikes: 0,
      reflect: false,
      lightScreen: false,
      pokemons:[{
      pokemon: 'cyndaquil',
      atk: '59',
      }]
    },
    team2: [{
      pokemon: 'hoothoot',
      atk: '59',
    }],
    actions: [{
      source: 1,
      target: 1,
      action_type: 'attack',
      action: 'tackle',
    }],
  };
  axios.post('http://localhost:8080/sim/turn', opts)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
