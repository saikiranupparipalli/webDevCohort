import express from "express";
import path from "node:path";
import session from "express-session";
import { kid, jwk } from "./keys.js";
import authorization_code from "./services.js";
import req from "express";
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  }),
);
const auth_code = new Map();

const PORT = 8000;
async function main() {
  app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });

  app.get("/info", (_, res) => {
    console.log("Hello from ");
    return res.send("Hello, From nodejs");
  });

  app.get("/.well-known/openid-configuration", (_, res) => {
    return res.send({
      issuer: "https://localhost:3000",
      authorization_endpoint: "https://accounts.google.com/o/oauth2/v2/auth",
      token_endpoint: "https://oauth2.googleapis.com/token",
      userinfo_endpoint: "https://openidconnect.googleapis.com/v1/userinfo",
      jwks_uri: "http://.well-known/jwks.json",
    });
  });

  app.get("/.well-known/jwks.json", (_, res) => {
    return res.send({
      keys: [
        {
          kid: kid,
          use: "sig",
          alg: "RS256",
          kty: jwk.kty,
          e: jwk.e,
          n: jwk.n,
        },
      ],
    });
  });

  app.get("/oauth/authorize", (req, res) => {
    // console.log(req.session.user);
    // console.log(req.query.client_id)

    if (req.session.user) {
      const arr = [];
      const supported_scope = ["openid", "profile", "email"];
      const client_scope = req.query.scope.split(" ");
      for (const n of client_scope) {
        if (supported_scope.includes(n)) {
          // console.log("its supported");
        } else {
          arr.push(n);
        }
      }

      const len = arr.length;
      if (len > 0) {
        return res.status(400).json({
          error: "invalid_scope",
          error_description: "One or more requested scopes are not supported.",
        });
      }

      const res_type = req.query.response_type;
      if (res_type !== "code") {
        return res.status(400).json({ error: "unsupported_response_type" });
      }

      const client_id = req.query.client_id;
      // console.log(client_id);
      if (client_id !== "shop-app-123") {
        return res.status(400).json({
          error: "unsupported_client_id",
        });
      }

      const redirect_uri = req.query.redirect_uri;
      if (redirect_uri !== "http://localhost:5173/callback") {
        return res.status(400).json({
          error: "invalid_redirect_uri",
        });
      }
      const state = req.query.state;
      if (state !== "abc123") {
        return res.status(400).json({
          error: "unsupported_state",
        });
      }

      (auth_code.set(authorization_code, {
        user: req.session.user,
        client_id: client_id,
        redirect_uri: redirect_uri,
      }),
        console.log(auth_code));
    } else {
      return res.redirect("/login");
    }
  });

  app.get("/login", (req, res) => {
    return res.sendFile(path.join(process.cwd(), "index.html"));
  });

  app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email !== "test@example.com" || password !== "123456") {
      return res.status(400).json({
        error: "unauthorized",
      });
    } else {
      req.session.user = email;

      return res.send("Login success");
    }
  });
} //main

main();

// export default main

// const filter_cs = client_scope.filter((n) => {
//   return n;
// });
// const filter_ss = supported_scope.filter((n)=>{
//   return n
// })
// client_scope.filter((n)=>{
//   if(filter_ss.includes(n)){
//     return
//   }else{
//      return n
//   }
// })
