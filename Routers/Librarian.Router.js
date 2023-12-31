const expess = require("express");
const router = expess.Router();

const librarianController = require("../Controllers/Labrarian.Controller");
router.get("/listLibrarian",librarianController.index);
router.get("/addLibrarian",librarianController.indexadd)
router.post("/addLibrarianAPI",librarianController.AddlibrarianAPI);
router.post("/addLibrarian",librarianController.Addlibrarian);
router.post("/loginLibrarian",librarianController.LoginLibrarian);
router.put("/:id/changePasswordAPI",librarianController.changePasswordAPI);
router.delete("/:id/API",librarianController.deleteLibrarian);
router.get("/api",librarianController.getApi);

module.exports = router;   