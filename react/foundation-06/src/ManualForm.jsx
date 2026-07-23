import React, { useState } from "react";

function ManualForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    role: "",
    experience: "",
  });

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  function set(filed){
    return (e)=> setValues((v)=> ({...v, [filed]: e.target.value}))
  }
  return <div>ManualForm</div>;
}

export default ManualForm;
