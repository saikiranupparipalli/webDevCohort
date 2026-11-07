import crypto from "node:crypto";
import fs from "node:fs"

// const kid = crypto.randomUUID();
// // if(kid){

// //    fs.readFileSync("./kid.json", kid )
// // }else{
// //    fs.writeFileSync("./kid.json", kid )
// // }
// export const { k } = JSON.parse(
//   fs.readFileSync("./kid.json", "utf-8")

// );
// fs.writeFileSync(
//   "./kid.json",
//   JSON.stringify({ kid }, null, 2)
// );
// console.log(kid)
const kidPath = "./kid.json"
let kid;

if (fs.existsSync(kidPath)) {
  const data = JSON.parse(
    fs.readFileSync(kidPath, "utf-8")
  );
  // console.log(data)
  kid = data.kid;
} else {
  kid = crypto.randomUUID();

  fs.writeFileSync(
    kidPath,
    JSON.stringify({ kid }, null, 2)
  );
}

// export { kid };
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: "spki",
    format: "pem",
  },
  privateKeyEncoding: {
    type: "pkcs8",
    format: "pem",
  },
});

const keyObject = crypto.createPublicKey(publicKey);

const jwk = keyObject.export({
  format: "jwk",
});

export {kid, jwk};

// generateKeyPairSync() creates a brand new pair, { publicKey, privateKey }, with fresh random keys.
// createPublicKey() takes a public key you already have (PEM, DER, JWK) and turns it into a single public KeyObject.
