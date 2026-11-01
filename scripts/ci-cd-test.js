const { test } = require("node:test");
const assert = require("node:assert/strict");

const BASE_URL = "http://localhost:3000";

async function api(method, path, body = null) {
  const options = {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  };

  if (body !== null) {
    options.body = JSON.stringify(body);
  }

  return fetch(`${BASE_URL}${path}`, options);
}

test("Product API CRUD test", async (t) => {

  await t.test("Health check API", async () => {
    const res = await api("GET", "/");

    assert.strictEqual(res.status, 200);
  });

  await t.test("CREATE: thêm sản phẩm P111", async () => {
    // Xóa trước nếu P111 còn từ lần test cũ
    await api("DELETE", "/api/products/P111");

    const res = await api(
      "POST",
      "/api/products",
      {
        pid: "P111",
        pname: "Mouse",
        price: 1,
        quantity: 1
      }
    );

    assert.strictEqual(res.status, 201);
  });

  await t.test("READ: đọc sản phẩm P111", async () => {
    const res = await api("GET","/api/products/P111");
    assert.strictEqual(res.status, 200);

    const product = await res.json();
    assert.strictEqual(product.pid, "P111");
  });

  await t.test("DELETE: xóa sản phẩm P111", async () => {
    const res = await api("DELETE","/api/products/P111");
    assert.ok(res.status === 200 || res.status === 204);
  });

  await t.test("API OK", 
    async () => assert.strictEqual((await api("GET", "/")).status, 200));
});