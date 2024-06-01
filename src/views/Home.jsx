import { getRecipes, getTopTwoRecipes } from "../infrastructure/services/RecipeService"
import { useEffect, useState } from "react";
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import DisplayRecipes from "../components/Recipes/DisplayRecipes";
import Pagination from "../components/General/Pagination";



function Home() {
    const [recipes, setRecipes] = useState([]);
    const [topTwo, setTopTwo] = useState([]);

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [search, setSearch] = useState();
    const [total, setTotal] = useState(1);

    const [status1, setStatus1] = useState("loading");
    const [status2, setStatus2] = useState("loading");



    useEffect(() => {
        callGetRecipes(1, 10);

        getTopTwoRecipes().then((res) => {

            console.log("topTwo", res)
        })

    }, []);


    useEffect(() => {
        callGetRecipes(page, perPage, total);
    }, [page, perPage, total]);


    function callGetRecipes(p, perP) {
        setStatus1("loading");
        getRecipes(p, perP).then((res) => {
            setRecipes(res.recipes);
            setTotal(res.total);
            setStatus1("success");
        }).catch((err) => {
            iziToast.error({
                title: 'Error',
                message: err.message,
            });
            setStatus1("error");

            console.log(err);
        })
    }


    return (<>
        <div>HOME</div>
        <Pagination page={page} perPage={perPage} total={total} changePageNumber={setPage}/>
        <DisplayRecipes
            recipes={recipes}
            page={page}
            perPage={perPage}
            search={search}
            status1={status1}
            total={total}
            changePageNumber={setPage}
        />
    </>)
}

export default Home;