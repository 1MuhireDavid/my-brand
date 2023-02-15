const jwts = JSON.parse(localStorage.getItem("token"));
const jwt = jwts[0].tok

// Split the token into its three parts
const [header, payload, signature] = jwt.split('.');

// Decode the base64-encoded payload
const decodedPayload = atob(payload);

// Parse the JSON object
const data = JSON.parse(decodedPayload);

console.log(data);