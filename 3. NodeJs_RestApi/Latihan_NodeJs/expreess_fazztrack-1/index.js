//import express
import express from "express";
//tambahkan import router
import router from "./routes_express/router.js";
//


//initialize express
const app = express();
//import routes
// app.get("/", (req, res) => {
//      res.send("Hello World Express JSa");
// });
// //contoh route dengan initialize about
// app.get( "/about", (req, res) => {
//     res.send("About Page");
// });
// //contoh route dengan initialize contact
// app.get("/contact", (req, res) => {
//     res.send("Contact Page");
// });

//import routes
app.use(router);
// //contoh route dengan initialize about


 
//listen to port
app.listen(3000, () => {
        console.log("Server started on port 3000");
    }
);