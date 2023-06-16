const mongoose = require("mongoose");

// callback
mongoose.connect("mongodb://val23:1234@127.0.0.1:27017/pokemon", {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Conexión de base datos exitosa"))
.catch(err => console.log("Error al conectar con la base de datos", err));

// creación del esquema
const pokemonSchema = new mongoose.Schema(
    {
        nombre: String, 
        tipo: String,
        nivel: Number
    }
);

// creación de modelo en base al esquema
const pokemonModel = mongoose.model("Pokemones", pokemonSchema);

// creación de objeto
const nuevoPokemon = new pokemonModel({
    nombre: "Charizard",
    tipo: "fuego",
    nivel: 100
});

nuevoPokemon.save()
.then(() => console.log("Se agregó correctamente el nuevo pokemon"))
.catch(err => console.log("Error al agregar el nuevo pokemon", err));

// leer todos los registros
pokemonModel.find()
.then(pokemones => console.log("Lista de todos los pokemones: ", pokemones))
.catch(err => console.log("Se produjo un error al leer los pokemones", err));

// mongoose.disconnect();