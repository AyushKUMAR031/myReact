import { useContext } from "react"
import { GlobalContext } from "../../Context/context"
import RecipeItem from "../../Recipe-Item/recipe";


export default function Home() {
    const { loading, recipeList } = useContext(GlobalContext);

    if (loading) {
        return <div className="text-3xl font-semibold text-center mt-20">Loading...</div>
    }
    return (
        <div className="py-8 container mx-auto flex flex-wrap justify-center gap-10">
            {
                recipeList && recipeList.length > 0 ?
                    recipeList.map((item) => <RecipeItem key={item.id} item={item} />)
                    : <div className="h-full w-50 overflow-hidden rounded-lg shadow-md group">
                        <p className="text-lg lg:text-2xl text-center text-gray-700 font-medium my-4">Search Any Recipe Here</p>
                    <img
                        src="src\assets\Main-pageImage.jpg"
                        alt="Description"
                        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105"
                    />
                </div>
            }
        </div>
    )
}