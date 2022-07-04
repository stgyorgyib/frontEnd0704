const express = require("express")
const countryRoutes = express.Router();
const fs = require('fs');

const dataPath = './Data/country.json' 


const saveCountryData = (data) => {
    const stringifyData = JSON.stringify(data)
    fs.writeFileSync(dataPath, stringifyData)
}

const getCountryData = () => {
    const jsonData = fs.readFileSync(dataPath)
    return JSON.parse(jsonData)    
}


countryRoutes.get('/country', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });


  countryRoutes.post('/country/addcountry', (req, res) => {
   
    var existCountries = getCountryData()

    console.log(req.body)
    const jsonBody = req.body;
    const shortCountry = jsonBody.short;
   
    existCountries[shortCountry] = 
    {
      name: jsonBody.name,
      capital: jsonBody.capital,
      population: jsonBody.population
    }
     
    console.log(existCountries);

    saveCountryData(existCountries);
    res.send({success: true, msg: 'country data added successfully'})
})


countryRoutes.get('/country/list', (req, res) => {
  const countries = getCountryData()
  res.send(countries)
})

countryRoutes.put('/country/:short', (req, res) => {
   var existCountries = getCountryData()
   fs.readFile(dataPath, 'utf8', (err, data) => {
    const shortCountry = req.params['short'];
    existCountries[shortCountry] = req.body;

    saveCountryData(existCountries);
    res.send(`Country with short name ${shortCountry} has been updated`)
  }, true);
});

//delete - using delete method
countryRoutes.delete('/country/delete/:short', (req, res) => {
   fs.readFile(dataPath, 'utf8', (err, data) => {
    var existCountries = getCountryData()

    const shortCountry = req.params['short'];

    delete existCountries[shortCountry];  
    saveCountryData(existCountries);
    res.send(`Countries with short name ${shortCountry} has been deleted`)
  }, true);
})
module.exports = countryRoutes