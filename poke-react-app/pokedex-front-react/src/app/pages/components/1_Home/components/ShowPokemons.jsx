import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addFavoritePokemons, getRandomsPokemons } from '../../../../../store/slices/tunks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RiStarSLine } from "react-icons/ri";
import { usePokemonStore } from '../../../../../hooks/usePokemonStore';
import { getPokemonByName } from '../../../../../apis/Pokemons/controller/getPokemonByName';


export const ShowPokemons = () => {

    const dispatch = useDispatch();
    const { pokemons, randomNumber, favorites, isLoading } = useSelector(state => state.pokemons)
    const { startSavingFavorite } = usePokemonStore();

    useEffect(() => {
        dispatch(getRandomsPokemons(randomNumber))
    }, []);


    const addFavorite = async (e) => {
        const name = e.target.ariaLabel;

        let oldFavorite = favorites.find((pokemon) => {
            return pokemon.name === name
        })

        if (oldFavorite != undefined) {
            toast.warning(' you have already this pokemon on favorites')
            return
        }
        toast.success('You got a new pokemon on favorites')
        const favorite = await getPokemonByName(name)
        await startSavingFavorite(favorite)
    }



    return (
        <div className='showPokemons-scroll'>

            {/* Toast Notification -addFavoritePokemons */}
            <ToastContainer position="top-center"
                autoClose={600}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />

            {pokemons.length > 0 && pokemons.map((pokemon) => (
                <ul className={isLoading ? "skeleton" : ""} key={pokemon?.name}>
                    {isLoading ? "" : (
                        <>
                            <div className='img'>
                                <img src={pokemon?.sprites?.front_default} alt="" />
                            </div>
                            <div className='name'>
                                <p>{pokemon?.name} - #{pokemon?.id}</p>
                            </div>

                            <div className='favorite'
                                aria-label={pokemon?.name}
                                onClick={(e) => {
                                    e.preventDefault();
                                    addFavorite(e);
                                }}>
                                Add favorite
                                <RiStarSLine />
                            </div>
                        </>
                    )
                    }
                </ul>
            ))}
        </div>
    )
}