function nameMale(){	
var firstName = ['Ari',	
'Bokk', 'Daen', 'Dover', 'Erben', 'Gavrin', 'Hagro',
'Herschen', 'Breyten' ,'Huys', 'Jurian', 'Killian', 'Kleris', 'Reny', 'Retief', 'Riaan', 'Saal', 'Sithov', 'Tak', 'Tyman', 'Urik', 'Theoban', 'Vorik', 'Urdan', 'Verodin', 'Adalstan', 'Alarich', 'Arend', 'Berend', 'Bresuix', 'Detlev', 'Drago', 'Evetius', 'Falko', 'Fraedus', 'Garrick', 'Geroldt', 'Gertam', 'Gustavus', 'Halden', 'Leonus', 'Leodrgar', 'Maenrad', 'Rochus', 'Rolund', 'Sigor', 'Vedium', 'Wultram', 'Valtar', 'Alestair', 'Arrun', 'Andri', 'Calemi', 'Coref', 'Demodir', 'Drego', 'Drosin', 'Egen', 'Javi', 'Jeffin', 'Kaith', 'Lukar', 'Mizar', 'Ossul', 'Pentar', 'Rave', 'Sercyl', 'Sudro', 'Suthar', 'Syro', 'Taram', 'Tokorin', 'Vencyl', 'Zoder', ] ;
var lastName = ['Aeyliros',	
'Askarda', 'Atrelioth', 'Corus', 'Desekane', 'Drosin', 'Entarro', 'Ghastor', 'Hetrion', 'Imaradi', 'Irvallo', 'Krayci', 'Lerendazi','Marktaras', 'Neskus', 'Ovion', 'Sarhain', 'Talandro', 'Tarravan', 'Vanatar', 'Vasivaghi', 'Dreamur', 'Shivoson', 'Avalane', 'De Notreame', ] ;
var firstnameLength = firstName.length;	
var lastnameLength = lastName.length;	
var message = '';	
var randomFirstName = Math.floor((Math.random() * firstnameLength) );	 
message += firstName[randomFirstName];	
message += ' '; 
var randomLastName = Math.floor((Math.random() * lastnameLength) );	
message += lastName[randomLastName];	
var elMessage = document.getElementById('yourNameIs');	
elMessage.textContent = message;	
}	

function nameFemale(){	
var firstName = ['Aafki', 'Agate', 'Baltia', 'Batrok', 'Beleth', 'Fientia', 'Flerentia', 'Gwen', 'Hjeltia', 'Juliona', 'Margana', 'Marloes', 'Sanne', 'Sien', 'Tannelies', 'Villina', 'Thrandi', 'Adalgar', 'Adalgisa', 'Alinda', 'Asta', 'Bauin', 'Glotrila', 'Dermuth', 'Ebba', 'Ermena', 'Forsindh', 'Gisaul', 'Harika', 'Margil', 'Melindri', 'Norah', 'Sede', 'Suspiris', 'Avaliah', 'Beret', 'Chantalyn', 'Draci', 'Ghanji', 'Hariel', 'Heken', 'Imperi', 'Irulan', 'Jahanah', 'Kaklia', 'Lycia', 'Maradal', 'Morgan', 'Narvala', 'Nyllestra', 'Supiris', 'Varikah',];
var lastName = ['Aeyliros',	
'Askarda', 'Atrelioth', 'Corus', 'Desekane', 'Drosin', 'Entarro', 'Ghastor', 'Hetrion', 'Imaradi', 'Irvallo', 'Krayci', 'Lerendazi','Marktaras', 'Neskus', 'Ovion', 'Sarhain', 'Talandro', 'Tarravan', 'Vanatar', 'Vasivaghi', 'Dreamur', 'Shivos', 'Avalane', 'De Notreame', ] ;
var firstnameLength = firstName.length;	
var lastnameLength = lastName.length;	
var message = '';	
var randomFirstName = Math.floor((Math.random() * firstnameLength) );	 
message += firstName[randomFirstName];	
message += ' '; 
var randomLastName = Math.floor((Math.random() * lastnameLength) );	
message += lastName[randomLastName];	
var elMessage = document.getElementById('yourNameIs2');	
elMessage.textContent = message;	
}	

function nametype(){	
var firstName = [ 'Elf' ,'Dwarf',  'Halfling', 'Human', 'Giant', 'Fairy', 'Werewolf', 'Goblin', 'Troll', 'Vampire', 'Satyr','Half-Giant','Centaur', 'Djinn', 'Demon', 'Naga',] ;
var lastName = ['Cleric','Warrior', 'Wizard', 'Thief', 'Knight', 'Barbarian', 'Assasin', 'Pirate', 'Priest', 'Witch Doctor', 'Bard', 'Monk',  ] ;
var firstnameLength = firstName.length;	
var lastnameLength = lastName.length;	
var message = '';	
var randomFirstName = Math.floor((Math.random() * firstnameLength) );	 
message += firstName[randomFirstName];	
message += ' '; 
var randomLastName = Math.floor((Math.random() * lastnameLength) );	
message += lastName[randomLastName];	
var elMessage = document.getElementById('yourNameIs3');	
elMessage.textContent = message;	
}	

