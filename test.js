test('GET: kiểm tra API hoạt động', async () => {
    const res = await fetch('http://localhost:3000');
    expect(res.status).toBe(200);
});

test('DELETE: đọc lại sản phẩm không tồn tại -> 404', async () => {
    const res = await fetch('http://localhost:3000/api/products/P111');
    expect(res.status).toBe(404);
});