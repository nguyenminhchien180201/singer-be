import express from "express";
let configViewEngine = (app) => {
    // lấy ảnh trên server
    app.use(express.static("./src/public"));
    //gõ câu lệnh logic html ex for if 
    //sử dụng ejs để quản lý view
    app.set("view engine", "ejs");
    //lấy các file ejs trong views
    app.set("views", "./src/views");
}

module.exports = configViewEngine