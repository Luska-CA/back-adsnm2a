const express = require('express');

const produtosController = require("../controllers/controller_produto.js");

const router = express.Router();

router.get("/", produtosController.listarTodos);

router.get("/:produtoId", produtosController.buscarPeloId);

router.post("/", produtosController.criar);

router.put("/:produtoId", produtosController.buscarPeloId, produtosController.atualizar);

router.delete("/:produtoId", produtosController.buscarPeloId,produtosController.remover);

module.exports = router;