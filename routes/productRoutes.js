const express = require("express");
const router = express.Router();

const productController = require("../controllers/productController");

// Lấy tất cả sản phẩm
router.get("/", productController.getAllProducts);

// Lấy sản phẩm theo pid
router.get("/:pid", productController.getProductByPid);

// Thêm sản phẩm
router.post("/", productController.createProduct);

// Cập nhật sản phẩm theo pid
router.put("/:pid", productController.updateProduct);

// Xóa sản phẩm theo pid
router.delete("/:pid", productController.deleteProduct);

module.exports = router;