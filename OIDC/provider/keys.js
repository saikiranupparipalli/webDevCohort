import crypto from "node:crypto";
import fs from "node:fs";
// const kidPath = "./kid.json";
// let kid;

// if (fs.existsSync(kidPath)) {
//   const data = JSON.parse(fs.readFileSync(kidPath, "utf-8"));
//   console.log("data:", data);
//   kid = data.kid;
//   console.log("kid:", kid);
// } else {
//  kid = crypto.randomUUID();

//   fs.writeFileSync(kidPath, JSON.stringify({ kid }, null, 2));
// }

// generation of token ID
const keypair = "./keypair.json";
let pb_k;
let pk_k;
let k_id;
if (fs.existsSync(keypair)) {
  const data = JSON.parse(fs.readFileSync(keypair, "utf-8"));
  pb_k = data.publicjwk;
  pk_k = data.privatejwk;
  k_id = data.publicjwk.kid
  // return pb_k
  // console.log("pb_key", pb_k);
  // console.log("pb_key", pk_k);
} else {
  const kid = crypto.randomUUID()
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
  const publickey_object = crypto.createPublicKey(publicKey);
  // console.log("publickey_object:", publickey_object)
  const publicjwk = publickey_object.export({
    format: "jwk",
  });
  publicjwk.kid = kid
  const privatekey_object = crypto.createPrivateKey(privateKey);
  const privatejwk = privatekey_object.export({
    format: "jwk",
  });
  // privatejwk.kid = kid
  pb_k = publicjwk;
  pk_k = privatejwk;
  k_id = kid
  fs.writeFileSync(keypair, JSON.stringify({kid, publicjwk, privatejwk }, null, 2));
}

// console.log("publicKey:", publicKey);
// console.log("privateKey:", privateKey);

export { pb_k, pk_k };

// generateKeyPairSync() creates a brand new pair, { publicKey, privateKey }, with fresh random keys.
// createPublicKey() takes a public key you already have (PEM, DER, JWK) and turns it into a single public KeyObject.

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

// const keypair = "./keypairs.json"
// if(publicKey && privateKey){
//  const {pb_key, pk_key} =  fs.readFileSync(keypair,  "utf-8")
//   {pb_key, pk_key}= data
//   return data.json({
//     pb_key,
//     pk_key
//   })
// }
