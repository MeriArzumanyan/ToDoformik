import { useState } from "react";
import { Formik } from "formik";
import "./App.css";

function App() {
  return (
    <Formik
      initialValues={{
        text: "",
      }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {/* Remove curly braces or add a return statement */}
      {({values, handleChange,handleSubmit}) => (
        <form action="" onSubmit={handleSubmit}>
          <input type="text" value={values.text} onChange={handleChange} name="text"/>
          <button>+</button>
        </form>
      )}
    </Formik>
  );
}

export default App;
