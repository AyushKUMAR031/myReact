import { useContext } from "react";
import { GlobalContext } from "../../Context/context";
import RecipeItem from "../../Recipe-Item/recipe";


export default function Favourite() {
    const { favList } = useContext(GlobalContext);

    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                favList && favList.length > 0 ?
                favList.map((item) => <RecipeItem key={item.id} item={item} />)
                    : <div>
                        <p className="lg:text-4xl text-xl text-center text-black font-extrabold">Favourite List is Empty :( </p>
                    </div>
            }
        </div>
    )
}