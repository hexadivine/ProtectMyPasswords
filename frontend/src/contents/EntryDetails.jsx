import styles from "./EntryDetails.module.css";
import { FaTrashCan } from "react-icons/fa6";
import formatDistanceToNow from "date-fns/formatDistanceToNow";

const EntryDetails = ({ data, unitedData, setData }) => {
    const deleteEntry = async () => {
        const uri = "api/" + data._id;
        const response = await fetch(uri, {
            method: "DELETE",
        });

        const json = await response.json();

        console.log(json.msg._id);
        const newData = unitedData.filter((element) => element._id !== json.msg._id);
        setData(newData);
        console.log(newData);
        console.log(setData);
        // console.log(json);
    };

    return (
        <div className={styles.entryDetails}>
            <div className={styles.flexBox}>
                <b className={styles.heading}>{data.service}</b>{" "}
                <span>
                    <FaTrashCan onClick={deleteEntry} />
                </span>
            </div>
            <p>
                <b>Email</b> : {data.email}
            </p>
            <p>
                <b>Password</b> : {data.password}
            </p>
            <p className={styles.timestamp}>
                {formatDistanceToNow(new Date(data.createdAt), { addSuffix: true })}
            </p>
        </div>
    );
};

export default EntryDetails;
