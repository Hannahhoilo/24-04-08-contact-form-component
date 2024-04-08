import { useState } from "react";
import "./App.css";
import FormComponent from "./FormComponent"
import styles from "./App.module.css"

function App() {
  return (
    <>
    <div className={styles.main_container}>
      <FormComponent></FormComponent>
      </div>
    </>
  );
}

export default App;
