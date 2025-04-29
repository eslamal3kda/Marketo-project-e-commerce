import SinglePaginationContainer from "./SinglePaginationContainer";


export default function PaginationSection({ title, oldPrice }) {

    return (

        <>
            <section className="pagination-section x-padding">
                <SinglePaginationContainer title='Recent Product' id={1}  />
                <SinglePaginationContainer oldPrice='old' title='Trending Products' id={2} />
                <SinglePaginationContainer title='Featured Product' id={3} />
            </section>
        </>
    );
}
