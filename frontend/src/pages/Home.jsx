import { useEffect, useState } from "react";
import styles from "./Home.module.css";
import EntryDetails from "../contents/EntryDetails";
import AddDataForm from "../contents/AddDataForm";

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
            <div className={styles.home}>
                <div className="workouts">
                    {data &&
                        data.map((element) => (
                            <EntryDetails
                                key={element._id}
                                data={element}
                                unitedData={data}
                                setData={setData}
                            />
                        ))}
                </div>
                <AddDataForm data={data} setData={setData} />
            </div>
        </>
    );
};

export default Home;
