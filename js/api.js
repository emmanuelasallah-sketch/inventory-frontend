const API_URL = "https://inventory-system-eipk.onrender.com";

function getToken() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user?.access_token;
}

async function login(email, password) {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  return res.json();
}

async function getProducts() {
  const res = await fetch(`${API_URL}/products/`, {
    headers: {
      Authorization: `Bearer ${getToken()}`
    }
  });

  return res.json();
}

async function addProduct(data) {
  const res = await fetch(`${API_URL}/products/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data),
  });

  return res.json();
}

async function createSale(data) {
  const res = await fetch(`${API_URL}/sales/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`
    },
    body: JSON.stringify(data),
  });

  return res.json();
}