import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
    const [searchParameter, setSearchParameter] = useState('');
    const [loading, setLoading] = useState(false);
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favList, setFavList] = useState([]);

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        try {

            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParameter}`);
            const data = await response.json();
            if (data?.data?.recipes) {
                setRecipeList(data.data.recipes);
                navigate('/');
            }
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
            setSearchParameter('');
        }
    }

    function handleAddToFav(getCurrentItem) { 
        console.log(getCurrentItem);
        let cpyfavList = [...favList];
        const index = cpyfavList.findIndex(item => item.id === getCurrentItem.id);
        if (index === -1) {
            cpyfavList.push(getCurrentItem);
        } else {
            cpyfavList.splice(index,1);
        }
        setFavList(cpyfavList);
    }

    console.log(favList, 'favList');

    return (
        <GlobalContext.Provider
            value={{ searchParameter, loading, recipeList, setSearchParameter, handleSubmit, recipeDetailsData, setRecipeDetailsData, handleAddToFav, favList }}>
            {children}
        </GlobalContext.Provider>
    );
}
