## CREACION DE POKEAPP

POKEAPP, es una webApp que cuenta con:

1. registro de cuenta personal con base de datos en mongoo
2. un menu de navegacion que permite visualizar (home,shop,favorites,settings,account)
3. una seccion Home, donde veras una lista de pokemones random que podran ser agregados a favoritos, y el pokemon del dia
4. una seccion shop, en esta seccion podras comprar tus pokemones (buscarlos o los que ya tengas en favorito)
5. una seccion de favoritos que te permite ver aquellos pokemones guardados para luego si deseas los compras
6. una seccion settings => cambio de contrasena, thema, agregar tarjetas
7. una seccion account donde veras tus datos personales y tus pokemones comprados

#### HERRAMIENTAS QUE SE USARION

---

|HERRAMIENTAS          |      |CLI                                  |
| -------------------- |------|------------------------------------ |
| *Redux toolkits*     |      |yarn add @reduxjs/toolkit react-redux|
| *React icons*        |      |yarn add|
| *React router*       |      |yarn add|
| *React toast*        |      |yarn add|
| *Mongoo*             |      |yarn add|
| *Mongoose*           |      |yarn add|

### IMPORTANTE ###

--- 

Las variables que se encuentra en el archivo .env.template deben contener tus datos para que la app funcione
1. Renombrar el archivo .env.template por .env
2. Hacer los cambios respectivos en las variables de entorno

```
VITE_API_URL = http://localhost:4000/api
```

### **| FUNCIONAMIENTO|** ###

---
### {#app-jsx}
__APP.JSX__ :  Este  componente  contiene a  < PokemonRoute /> el cual permite enruta a el HomePage o el AuthRoutes, asi tambien contiene una ruta de proteccion para evitar que el usuario quiera dirigirse a rutas no correspondientes. 

> Dichos enrutamiento dependeran de un *status* otorgado por el [useAuthStore()](#useauthstore-info); 
> La funcion checkAuthToken() permite chequear el Token


__HOMEPAGE.JSX__ : Este componte principal contiene un sub-componente llamado [< Navbar/>](#navbar-info).
Asi tambien cuenta con una seccion-routes que contiene la ruta que lleva a cada uno de sus vistas asociadas a sus componentes 

``` Javascript
 <div className='seccion-routes'>
    <Routes>
        <Route path='/*' element={<Navigate to="/" />} />
        <Route path='/' element={ <Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/settings' element={<Settings /> } />
        <Route path='/account' element={<Account />} />
    </Routes>
 </div>

```

__HOME.JSX__: Muestra la vista principal una vez que se realiza el login con usuario y contrasena. Esta vista contiene dos estructuras, un slice de imagenes de pokemones que cuentan con un boton para agregados a favoritos. 
Dichos pokemones se van generando de manera random en la medida que se navega por la app y se retorna a la vista Home. Tambien se muestra el pokemon del dia.

El subcomponente llamado < ShowPokemons/> en su codigo hace uso del useDispatch, useSelector y useEffect.

=Como funciona=
Al seleccionar el icono que lleva a la vista del Home, se ejecuta el useEffect despachando la funcion getRAndomPokemons(), la cual me retorna los pokemons randoms que figuran en el slice.Esta funcion realiza una peticion a la api de pokemons para luego settear el estado de Pokemon en el PokemonSlice
Acto seguido mediante useSelector se extrae del estado lo necesario para renderizar la vista del Home.

Home.jsx cuenta con una funcion llamada AddFavorite() que permite guardar los pokemones favorites para luego mostrarlos en la seccion de favoritos que es mostrada por el componente < Favorite/> que se encuentra en < HomePage/>.

__FAVORITE.JSX__: Muestra los pokemones favoritos guardados, tambien permite ver a mayor profundidad las caracteristicas de cada uno, asi tambien precio (realizar compras).


### {#navbar-info}
Es Navbar component es una barra de navegacion que contiene solo una funcion llamada ShowNavbar() que permite ocultar o mostrar la misma haciendo uso del useState. Asi tambien contiene la etiqueta NavLink que permiten designar una ruta mediante el atributo *to =/xruta*.
[Regresar](#app-jsx)

### {#useauthstore-info}
El useAuthStore, es un CoustumHook que contiene funciones asincronicas y sincronicas.

|     FUNCIONES        |  | ACCION                                     | REQUISITOS                          |
| -------------------- |--|--------------------------------------------|------------------------------------ |
|  startLogin          |  | peticion post y dispatch onLogin del slice | email, password
|  startLogout         |  | dispatch la funcion onLogout del slice     | none 
|  startRegister       |  | peticion post y dispatch onLogin del slice | email, password, name
|  checkAuthToken      |  | peticion get y dispatch onLogin            | none


Los metodos startLogin, startRegister guardan en el localStorage el token generado para validar su identidad. En caso de errores dispatch onLogout().

El meotdo checkAuthToiken por el contrario obtiene el token de esta manera valida la authenticacion del usuario
[Regresar](#app-jsx)