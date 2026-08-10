import * as React from "react";

interface Country {
  name: string;
}

interface CountriesResponse {
  data: Country[];
}

export function useCountry() {
  const [coun, setCoun] = React.useState<Country | null>(null);
  const [index, setIndex] = React.useState(0);
  const [fetching, isFetching] = React.useState<Boolean>(false);
  const [error, setError] = React.useState<null | string>(null);

  async function fetchRes() {
    try {
      isFetching(true);
      const rawRes = await fetch(
        "https://countriesnow.space/api/v0.1/countries/positions",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const res = (await rawRes.json()) as CountriesResponse;

      setCoun(res.data[index]);
      setIndex(index + 1);
      setError(null);
    } catch (error) {
      setError("something Went Wrong..!");
    } finally {
      isFetching(false);
    }
  }

  return [coun, fetchRes, fetching, error] as const;
}
