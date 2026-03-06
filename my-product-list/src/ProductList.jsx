export default function ProductList () {
    const frogs = [
        {
            id: 1,
            name: "Glass Frog",
            fact: "One of the smallest frogs, smaller than a dime",
        },
        {
            id: 2,
            name: "Galaxy Frog",
            fact: "Poisonous frog with a black body and white spots resembling stars",
        },
        {
            id: 3,
            name: "Horror Frog",
            fact: "Pops sharp bones out of its knuckles as a defense mechanism",
        },
        {
            id: 4,
            name: "Purple Frog",
            fact: "Extremely bulbous with a teeny-tiny nose, this frog spends most of its life burrowing underground ",
        },
        {
            id: 5,
            name: "Paradoxical Frog",
            fact: "The tadpole phase is much larger than its adult frog phase",
        },
    ];
    const listProducts = frogs.map((frog) => {
        return (
            <ul type="none" className="frogCard">
                <li key={frog.id}>
                    {frog.name}
                </li>
                <li key={frog.id}>
                    fact: {frog.fact}
                </li>
            </ul>
        );
    });
    return <div className="frogs">{listProducts}</div>;
}