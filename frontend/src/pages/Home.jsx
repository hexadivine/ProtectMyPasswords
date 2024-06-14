import { useEffect, useState } from "react";
// import styles from "./Home.module.css";
import EntryDetails from "../contents/EntryDetails";

const Home = () => {
    // fetch data when page reloads
    const [data, setData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("/api");
            const result = await response.json();

            if (response.ok && result.status === "ok") setData(result.msg);
        };

        fetchData();
    }, []);
    // console.log(data);
    return (
        <>
            <div>
                {/* {data && data.map((element) => <p key={element._id}>{element._id} </p>)} */}
                {data.map((element) => (
                    <EntryDetails key={element._id} data={element} />
                ))}
                {/* </div> */}
            </div>
        </>
    );
};

export default Home;
