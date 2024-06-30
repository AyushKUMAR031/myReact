import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../Context/context";


export default function Details() {
    const { id } = useParams();
    const { recipeDetailsData, setRecipeDetailsData, favList, handleAddToFav } = useContext(GlobalContext);


    useEffect(() => {
        async function getRecipeDetails() {
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
            const data = await response.json();

            if (data?.data) {
                setRecipeDetailsData(data?.data);
            }
        }

        getRecipeDetails();
    }, []);

    return (
        <div className="container mx-auto py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="row-start-2 lg:row-start-auto">
                <div className="h-96 overflow-hidden rounded-xl group">
                    <img
                        src={recipeDetailsData?.recipe?.image_url}
                        className="w-full h-full object-cover block group-hover:scale-105 duration-300"
                    />
                </div>
            </div>
            <div className="flex flex-col gap-3 ">
                <span className="text-md text-cyan-700 font-medium text-left">{recipeDetailsData?.recipe?.publisher}</span>
                <h3 className="font-bold text-4xl truncate text-black text-left">{recipeDetailsData?.recipe?.title}</h3>
                <div>
                    <button onClick={() => handleAddToFav(recipeDetailsData?.recipe)}
                        className="p-3 px-8 rounded-lg text-sm uppercase font-medium tracking-wider mt-3 inline-block shadow-md bg-black text-white ">
                        {
                            favList && favList.length > 0 && favList.findIndex(item => item.id === recipeDetailsData?.recipe?.id) !== -1 ? 'Remove from Favourites' : 'Add to Favourites'
                        }
                    </button>
                </div>
                <div>
                    <span className="text-2xl truncate text-center font-bold text-black">Ingredients:</span>
                    <ul className="flex flex-col gap-3 text-left">
                        {
                            recipeDetailsData?.recipe?.ingredients?.map((ingredient, index) => (
                                <li key={index}>
                                    <span className="text-2x font-semibold text-black">&#8227; {ingredient.quantity} &#8259; {ingredient.unit} &rarr;</span>
                                    <span className="text-2x font-semibold text-black">{ingredient.description}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}