import Card from "./Card";

function Special({data}) {
    return(
        <section id="special" className="container mb-3">
            <h2>This Week Specials</h2>
            <div className="special-body">
                {data.map((element, index) => {
                    return <Card key={index} data={element}></Card>;
                })}
            </div>
        </section>
    );
};

export default Special;