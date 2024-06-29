import { useState } from "react";
import styles from "./AddDataForm.module.css";

const AddDataForm = ({ data, setData }) => {
    const [msg, setMsg] = useState("");
    const [service, setService] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSubmitAction = async (e) => {
        e.preventDefault();

        // perform checks
        if (service === "" || email === "" || password === "") {
            setMsg("All Fields Are Required!");
            return;
        } else {
            const emailRegax = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const isEmailValid = emailRegax.test(email);
            if (!isEmailValid) {
                setMsg("Enter Valid Email!");
                return;
            }
        }

        // send data
        const response = await fetch("/api", {
            method: "POST",
            body: JSON.stringify({
                service: service.charAt(0).toUpperCase() + service.slice(1),
                email: email,
                password: password,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const json = await response.json();
        setService("");
        setEmail("");
        setPassword("");

        setData([json.msg, ...data]);
        console.log([json.msg, ...data]);
        setMsg("Data submitted successfully!");
    };

    return (
        <div className={styles.container}>
            <h4>Add New Login Details</h4>
            <form onSubmit={onSubmitAction} className={styles.form}>
                <div className="service">
                    <label htmlFor="service">Service</label>
                    <input
                        type="text"
                        name="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                    />
                </div>
                <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="submit">
                    <button type="submit">Submit</button>
                </div>
            </form>
            {msg !== "" ? (
                <h5 className={msg.includes("success") ? styles.success : styles.error}>{msg}</h5>
            ) : null}
        </div>
    );
};

export default AddDataForm;
