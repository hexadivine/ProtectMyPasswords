import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <Link to="/">
                    <h2>ProtectMyPassword</h2>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
