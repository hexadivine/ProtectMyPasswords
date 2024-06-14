import styles from "./EntryDetails.module.css";

const EntryDetails = ({ data }) => {
    return (
        <div className={styles.entryDetails}>
            <h4>{data.service}</h4>
            <p> Email : {data.email}</p>
            <p>Password : {data.password}</p>
        </div>
    );
};

export default EntryDetails;
