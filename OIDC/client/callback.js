async function token() {
  try {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");
    const state = params.get("state");
    console.log("Authorization code:", code);
    console.log("state:", state);

    if (!code) {
      throw new Error("Authorization code not found");
    } else if (!state) {
      throw new Error("State not found");
    }

    console.log("Sending POST request to provider...");

    const res = await fetch("http://localhost:8000/oauth/token", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        grant_type: "authorization_ code",
        code:code,
        client_id: "shop-app-123",
        redirect_uri: "http://localhost:5173/callback.html"
     }),
    });
    console.log("Provider response status:", res.status);

    const data = await res.json();

    console.log("Token response:", data);
  } catch (error) {
      console.error("Fetch error:", error);
  }
}
token()
// export default token;
