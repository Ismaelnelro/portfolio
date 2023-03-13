const $pokedex = document.querySelector('[data-pokedex]');
const $pokename = document.querySelector('[data-pokename]');
const $pokeCont = document.querySelector('[data-img-container]');
const $PokeImg = document.querySelector('[data-img-pokemon]');
const $pokeID = document.querySelector('[data-pokemon-id]');
const $pokeType = document.querySelector('[data-pokemon-type]');
const $pokeTypeLogo = document.querySelector('[data-pokemon-typelogo1]');
const $pokeTypeLogo2 = document.querySelector('[data-pokemon-typelogo2]');
const $pokeStats = document.querySelector('[data-pokemon-stats]');


const typeColors = {
    electric: '#FFEA70',
    normal: '#B09398',
    fire: '#FF675C',
    water: '#0596C7',
    ice: '#AFEAFD',
    rock: '#999799',
    flying: '#7AE7C7',
    grass: '#4A9681',
    psychic: '#FFC6D9',
    ghost: '#561D25',
    bug: '#A2FAA3',
    poison: '#795663',
    ground: '#D2B074',
    dragon: '#DA627D',
    steel: '#1D8A99',
    fighting: '#2F2F2F',
    default: '#2A1A1F',
};

const imglogo = {

    electric: "imagenTipo/electric.png",
    normal: 'url(imagenTipo/electric.png)',
    fire: "imagenTipo/fire.png",
    water: "imagenTipo/water.png",
    ice: "imagenTipo/ice.png",
    rock: "imagenTipo/rock.png",
    flying: "imagenTipo/flying.png",
    grass: "imagenTipo/grass.png",
    psychic: "imagenTipo/psychic.png",
    ghost: "imagenTipo/ghost.png",
    bug: "imagenTipo/bug.png",
    poison: "imagenTipo/poison.png",
    ground: "imagenTipo/ground.png",
    dragon: "imagenTipo/dragon.png",
    steel: "imagenTipo/steel.png",
    fighting: "imagenTipo/fighting.png",
    default: "imagenTipo/default.png",

}



//======================================================================================
// BUSCADOR POR LISTA DE POKEMONS DETERMINADA


const $btnLista = document.querySelector('[data-buscarlista]') // btn search list

$btnLista.addEventListener('click', () => {
    const $limit = document.querySelector('.inputDesde').value;
    const $offset = document.querySelector('.inputHasta').value;

    fetch(`https://pokeapi.co/api/v2/pokemon?limit=${$limit}&offset=${$offset}`)
        // .then(data => console.log(data))
        .then(data => data.json())
        .then(res => searchLista(res));

})



const searchLista = (data) => {
    console.log(data) //--> show Pokemon's list in console
    /*
        data shows an object inside of this object there are an Array called 
        'results' with all the pokemons depending my parameters
    */

    data.results.forEach(result => {
        const names = result.name;

        fetch(`https://pokeapi.co/api/v2/pokemon/${names.toLowerCase()}`)
            .then(datafiltrada => datafiltrada.json())
            .then(res => filtraList(res))
    })

}

const filtraList = (res) => {
    // console.log(res)

    /*
    in order to mock up each pokemon on the web page 
    i filter the pokemons from the list and then i prepare 
    each container
    */

    const $containerList = document.querySelector('.container-list');

    let $individualBox = document.createElement('div');
    $individualBox.classList.add('individual-box');

    let $individualBoxPokemon = document.createElement('div');
    $individualBoxPokemon.classList.add('individual-box-pokemon');

    let $PokemonNameList = document.createElement('h1');
    $PokemonNameList.classList.add('pokemon-name-list');
    $PokemonNameList.textContent = `${res.name}`;
    let $imgPokemonList = document.createElement('img');
    $imgPokemonList.setAttribute('src', `${res.sprites.back_default}`);
    $imgPokemonList.classList.add('img-pokemon-lista');

    let $PokemonIdList = document.createElement('h1');
    $PokemonIdList.textContent = `${res.id}`
    $PokemonIdList.classList.add('pokemon-id-list');

    $individualBoxPokemon.appendChild($PokemonNameList);
    $individualBoxPokemon.appendChild($imgPokemonList);
    $individualBoxPokemon.appendChild($PokemonIdList);

    $individualBox.appendChild($individualBoxPokemon);

    $containerList.appendChild($individualBox);

    $imgPokemonList.addEventListener('click', () => {
        updatePokedex(res)
    })
}


// =====================================================================================

// BUSCADOR POR POKEMON INDIVIDUAL
const $btn = document.querySelector('[data-buscar]');
// const verificador = document.querySelector('[data-pokemon]').value;
$btn.addEventListener('click', () => {


    const pokemon = document.querySelector('[data-pokemon]').value;
    var mensaje = "El pokemon que buscas no existe"
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)
        .then(data => data.json())
        .then(res => updatePokedex(res))
        .catch(error => err(mensaje))

});


/*
Mensaje de erro si el pokemon no se ingreso correctamente
*/
const err = (mensaje) => {
    alert(mensaje)
};

/* Update Pokemonks depending parameters*/
const updatePokedex = (data) => {
    const sprite = data.sprites.front_default; //Pokemon's image

    const arrayAbilities = data.abilities; //Abilities
    const { stats, types } = data; // Stats and type of pokemons

    $PokeImg.setAttribute('src', sprite);
    $pokename.textContent = data.name.toUpperCase();
    $pokeID.textContent = `N-${data.id}`;


    setLogoCard();
    setTypePokemons(types);
    setStats(stats, types);
    setAbitilies(arrayAbilities);

}


const setLogoCard = () => {
    $PokeImg.style.width = '130px';
    $PokeImg.style.height = '130px';
}

const setTypePokemons = types => {
    /*
    Aqui creo un camino para agregar dos div con texto para los typos de pokemons
    tambien incorporo dos div para logotype y el otro camino es por si solo existe
    un solo tipo
    */
    if (types.length > 1) {
        for (let i = 0; i < types.length - 1; i++) {
            const $typeElement = document.createElement('div');
            $typeElement.classList.add("types")
            $typeElement.style.color = typeColors[types[0].type.name];
            $typeElement.textContent = types[0].type.name;
            $pokeType.appendChild($typeElement);

            const $typeElement2 = document.createElement('div');
            $typeElement2.classList.add("types")
            $typeElement2.style.color = typeColors[types[1].type.name];
            $typeElement2.textContent = types[1].type.name;
            $pokeType.appendChild($typeElement2)
            
        }
        
        
    } else {
        const $typeElement = document.createElement('div');
        $typeElement.classList.add("types")
        $typeElement.style.color = typeColors[types[0].type.name];
        $typeElement.textContent = types[0].type.name;
        $pokeType.appendChild($typeElement)
        
    }
    
    

    const $logo = document.createElement('img');
    $logo.setAttribute('src', `${imglogo[types[0].type.name]}`)
    $logo.style.width = '15px'
    $logo.style.height = '15px'
    $pokeTypeLogo.style.border = `1.5px solid ${typeColors[types[0].type.name]}`
    $pokeTypeLogo.appendChild($logo);
    
    if (types[1]) {
        const $logo2 = document.createElement('img');
        $logo2.setAttribute('src', `${imglogo[types[1].type.name]}`)
        $logo2.style.width = '15px'
        $logo2.style.height = '15px'
        $pokeTypeLogo2.classList.add('typelogo2')
        $pokeTypeLogo2.style.border = `1.5px solid ${typeColors[types[1].type.name]}`
        
        $pokeTypeLogo2.appendChild($logo2);
    }

    if (types.length > 1) {
        $pokeTypeLogo.classList.add('typelogo1')
        
    } else {
        $pokeTypeLogo.classList.add('typelogoSolo')
        
    }
    



}



const setStats = (stats, types) => {
    stats.forEach(stats => {
        //Aumento un poco mas el valor de las stat
        //para de esta menra sea vean un poco mejor represtandas
        //en el grafico
        const stat = stats.base_stat;
        var stataumentada = parseInt(stat)
        stataumentada += 70;

        const $statElement = document.createElement("div");
        const $statElementName = document.createElement("div");
        const $statElementAmount = document.createElement("div");
        const $statbarAmount = document.createElement("div");

        //Este div llena la barra
        const $statbarPorcent = document.createElement('div');
        $statbarPorcent.classList.add('barPorcent');
        $statbarPorcent.style.backgroundColor = `${typeColors[types[0].type.name]}`;
        $statbarPorcent.style.transform = `translateX(${stataumentada}px)`;

        $statElementName.classList.add('stats_name');
        $statElementAmount.classList.add('stats_amount');
        $statbarAmount.classList.add('stats_bar');

        $statElementName.textContent = stats.stat.name;
        $statElementAmount.textContent = stats.base_stat;
        $statElement.appendChild($statElementName);
        $statElement.appendChild($statElementAmount);
        $statElement.appendChild($statbarAmount);
        $statbarAmount.appendChild($statbarPorcent);
        $pokeStats.appendChild($statElement);



    });

}


const setAbitilies = arrayAbilities => {
    const $statAbilitiesUL = document.querySelector('[data-abilities-ul]');
    arrayAbilities.forEach(ability => {
        const $statAbility = document.createElement("li");
        $statAbility.textContent = ability.ability.name;
        $statAbilitiesUL.appendChild($statAbility);
    });

}
