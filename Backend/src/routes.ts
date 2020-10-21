import { Router } from 'express';
import multer from 'multer';
import uploadConfig from './config/upload';

import UsuarioController from './controllers/usuarioController';
import EndereçosController from './controllers/endereçoController';
import CategoriaController from './controllers/categoriaController';
import ProdutoController from './controllers/produtoController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get("/usuarios", UsuarioController.index);
routes.get("/usuarios/:email", UsuarioController.show);
routes.post("/usuarios", upload.array('avatar'), UsuarioController.create);

routes.get("/enderecos", EndereçosController.index);
routes.get("/enderecos/:id", EndereçosController.show);
routes.post("/enderecos", EndereçosController.create);

routes.get("/categorias", CategoriaController.index);
routes.get("/categorias/:id", CategoriaController.show);
routes.post("/categorias", upload.array('imagens'), CategoriaController.create);

routes.get("/produtos", ProdutoController.index);
routes.get("/produtos/:id", ProdutoController.show);
routes.post("/produtos", upload.array('imagens'), ProdutoController.create);

export default routes;