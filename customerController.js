'use strict'

// Asenna ensin mysql driver 
// npm install mysql --save

var mysql = require('mysql');

var connection = mysql.createConnection({
  host : 'localhost', // tietokantapalvelimen osoite
  port : 3306, // jos oletusportti ei toimi
  user : 'root', // kehitysatarkoituksessa voidaan käyttää root-käyttäjää. Tuotannossa ei saa käyttää root-käyttäjää
  password : '', // voi olla tyhjäkin, käyttäkää sitä mikä teillä on
  database : 'jalkapallo', // tai asiakas_woj
});

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


module.exports = 
{

    fetchTypesRevised : function()
    {
        return new Promise((resolve, reject) => {
          
          connection.query('SELECT Avain, Lyhenne, Selite FROM Asiakastyyppi', function(error, results, fields){
            if ( error ){
              console.log("Virhe haettaessa dataa Asiakas-taulusta, syy: " + error);
              reject("Virhe haettaessa dataa Asiakas-taulusta, syy: " + error);
            }
            else
            {
              console.log("Data (rev) = " + JSON.stringify(results));
              resolve(results);
            }    
        })
      })    
  },

  fetchCustomersRevised2: function() {
    var connection = mysql.createConnection({
      host : 'localhost', // tietokantapalvelimen osoite
      port : 3306, // jos oletusportti ei toimi
      user : 'root', // kehitysatarkoituksessa voidaan käyttää root-käyttäjää. Tuotannossa ei saa käyttää root-käyttäjää
      password : '', // voi olla tyhjäkin, käyttäkää sitä mikä teillä on
      database : 'asiakas_woj' // tai asiakas_woj
    });
    
    return new Promise((resolve, reject) => {
          
      connection.query('SELECT avain, nimi, osoite, postinro, postitmp, asty_avain FROM asiakas', function(error, results, fields){
        if ( error ){
          console.log("Virhe haettaessa dataa Customer-taulusta, syy: " + error);
          reject("Virhe haettaessa dataa customer-taulusta, syy: " + error);
        }
        else
        {
          console.log("Data (rev) = " + JSON.stringify(results));
          resolve(results);
        }    
    })
  })
  },

  fetchCustomersRevised: function() {
    return new Promise((resolve, reject) => {
          
      connection.query('SELECT ottelumaara, joukkue_id, voittoja, tappioita, tasapeleja, tehdyt_maalit, paastetyt_maalit, pisteet FROM sarjataulukko', function(error, results, fields){
        if ( error ){
          console.log("Virhe haettaessa dataa Sarjataulukko-taulusta, syy: " + error);
          reject("Virhe haettaessa dataa Sarjataulukko-taulusta, syy: " + error);
        }
        else
        {
          console.log("Data (rev) = " + JSON.stringify(results));
          resolve(results);
        }    
    })
  })
  },

  fetchPelaajatRevised: function() {
    return new Promise((resolve, reject) => {
          
      connection.query('SELECT sukunimi, etunimi, pelinumero, joukkue_id FROM pelaaja', function(error, results, fields){
        if ( error ){
          console.log("Virhe haettaessa dataa Pelaaja-taulusta, syy: " + error);
          reject("Virhe haettaessa dataa Pelaaja-taulusta, syy: " + error);
        }
        else
        {
          console.log("Data (rev) = " + JSON.stringify(results));
          resolve(results);
        }    
    })
  })
  }
}
