// import login from "./index.js";

//  app.post("/login", (req, res)=>{
//   const {data} = login.req.body
//   console.log(data)
//  })

import crypto from "node:crypto";
const authorization_code = crypto.randomBytes(32).toString("hex");
// console.log(authoization_code)

export default authorization_code;


