// async function main() {
//   const rawRes = await fetch(
//     "https://api.freeapi.app/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1",
//     {
//       method: "GET",
//       headers: {
//         "content-Type": "application/json",
//       },
//     },
//   );

//   const res = await rawRes.json();
//   const data = (res['data'].data[0].id);
//   console.log(data)

// }
// main();

async function fetchCountries() {
  const rawData = await fetch(
    "https://countriesnow.space/api/v0.1/countries/positions",
    {
      method: "GET",
      headers: {
        "content-Type": "application/json",
      },
    },
  );

  const res = await rawData.json()
  console.log(res.data[0].name)
}
fetchCountries()


