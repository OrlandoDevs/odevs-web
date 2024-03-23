const fetch = require('node-fetch');

async function geoEncode(addressString) {
  const apiKey = process.env.GEO_API_KEY;

  const apiBaseUri = 'https://api.geoapify.com/v1/geocode/search';

  console.log(`Geocoding address: ${addressString}`)

  try {
    const response = await fetch(
      `${apiBaseUri}?text=${addressString}&filter=circle:-81.38198880271398,28.537558304182696,80000&apiKey=${apiKey}`,
      {
        method: 'GET',
      }
    )

    const result = await response.json()

    const matches = result.features.filter((feature) => {
      return feature.properties.rank.confidence >= 0.9
    })
    .filter((feature) => {
      return feature.properties.postcode === result.query.parsed.postcode;
    })

    switch (matches.length) {
      case 1:
        break;
      case 0:
        throw new Error(`No matches found for address "${addressString}".`)
      default:
        throw new Error(`Too many matches (${matches.length}) found for address "${addressString}:\n${JSON.stringify(result, null, 2)}".`)
    }

    console.log(matches);
    const resultString = JSON.stringify({
      "lat": matches[0].properties.lat,
      "lon": matches[0].properties.lon,
    })
    console.log(`result: ${resultString}`)
    return resultString
  }

  catch (e) {
    console.log(e)
  }
}

module.exports = {
  "geoApify": async (address) => {
    if (address) {
      console.log(`Address: ${address}`);
      return geoEncode(address);
    }
    else {
      console.log(`Address is undefined. Boo...`)
      return JSON.stringify([0,0])
    }
  }
};
