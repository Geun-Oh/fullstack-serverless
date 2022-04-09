import React from "react";
import { styles } from "./Form";

const Container = ({ children }) => (
    <div style={styles.container}>
        { children }
    </div>
)

export default Container;