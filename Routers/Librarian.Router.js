const expess = require("express");
const router = expess.Router();

const librarianController = require("../Controllers/Labrarian.Controller");
<<<<<<< HEAD
router.get("/listLibrarian", librarianController.index);
router.get("/addLibrarian", librarianController.indexadd);
router.post("/addLibrarian", librarianController.Addlibrarian);
router.post("/loginLibrarian", librarianController.LoginLibrarian);
router.put("/:id/changePassword", librarianController.changePassword);
router.get("/api", librarianController.getApi);
router.get("/danhsach", librarianController.getdanhsach);
=======
router.get("/listLibrarian",librarianController.index);
router.get("/addLibrarian",librarianController.indexadd);
router.post("/addLibrarian",librarianController.Addlibrarian);
router.post("/loginLibrarian",librarianController.LoginLibrarian);
router.put("/:id/changePassword",librarianController.changePasswordAPI);
router.delete("/:id",librarianController.deleteLibrarian);
router.get("/api",librarianController.getApi);
>>>>>>> vinh

module.exports = router;
