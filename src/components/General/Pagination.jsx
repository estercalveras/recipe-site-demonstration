import propTypes from "prop-types";
import { useTranslation } from "react-i18next";

const Pagination = ({ page, perPage, total, changePageNumber }) => {

    const {t} = useTranslation();

    const totalPages = Math.ceil(total / perPage);


    function handlePage(pageNr) {

        console.log(pageNr)

        if (pageNr > 0 && pageNr <= totalPages) {
            changePageNumber(pageNr);
        }
    }


    return (
        <>

            <div>Page: {page}</div>

            <div className="flex">
                {/* < 1 2 4 5 ... > */}

                <button className="cursor-pointer" onClick={() => handlePage(page - 1)} disabled={page === 1}>{t('prev')}</button>
                {new Array(totalPages).fill(0).map((item, index) =>

                    (<button key={`pageId${index}`} onClick={() =>handlePage(index + 1)} className={index + 1 === page ? 'bg-red-500' : ''}>{index + 1}</button>))}
                <button className="cursor-pointer" onClick={() => handlePage(page + 1)} disabled={page === totalPages}>{t('next')}</button>
            </div>

            <div>
                {/* How many items: 10, 20, 30, 50 */}

            </div>

        </>
    )

}

Pagination.propTypes = {
    page: propTypes.number,
    perPage: propTypes.number,
    total: propTypes.number,
    changePageNumber: propTypes.func
};

export default Pagination;