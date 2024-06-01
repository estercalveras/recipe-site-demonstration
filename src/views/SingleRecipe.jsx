import { useParams } from "react-router-dom";

function SingleRecipe() {
    const {id} = useParams()
    return (<>
        <div>SINGLE RECIPE Nº{id}</div>
    </>)
}

export default SingleRecipe;