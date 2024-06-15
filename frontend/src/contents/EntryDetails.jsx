import styles from "./EntryDetails.module.css";

const EntryDetails = ({ data }) => {
    return (
        <div className={styles.entryDetails}>
            <b className={styles.heading}>{data.service}</b>
            <p>
                <b>Email</b> : {data.email}
            </p>
            <p>
                <b>Password</b> : {data.password}
            </p>
            <p className={styles.timestamp}>{data.createdAt}</p>
        </div>
    );
};

export default EntryDetails;
