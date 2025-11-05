import { useEffect, useState } from "react";

const CountryCard = ({ name, flag, abbr }) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "200px",
                width: "200px",
                border: "1px solid black",
                borderRadius: "5px",
                textAlign: "center",
            }}
        >
            <img src={flag} alt={`Flag of ${abbr}`} style={{
                width: "100px", height: "100px"
            }} />
            <h2>{name}</h2>
            {/* <img src="Flag.svg" alt="Flag of India" />
            <h2>India</h2> */}
        </div>
    );
};

const API_POINT = "https://xcountries-backend.labs.crio.do/all";

export default function Countries() {
    // let temp = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    const [state, setState] = useState([]);
    console.log({ state });

    useEffect(() => {
        // fetch(API_POINT);
        const fetchData = async () => {
            try {
                const res = await fetch(API_POINT);
                const jsonRes = await res.json();
                setState(jsonRes);
            } catch (error) {
                console.error("Error fetching data:", error);
            }


        }

        fetchData();
    }, [])

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
                alignItems: "center",
            }}
        >
            {state.map(({ name, flag, abbr }) => (
                <CountryCard key={abbr} name={name} flag={flag} abbr={abbr} />
            ))}
            {/* {temp.map((i) => (
                <CountryCard key={i} />
            ))} */}
            {/* <CountryCard />      */}
        </div>
    )
}