//data Blogs
const BLOGS_LIST = [
    {
        id: "BL_01",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/1.jpg",
        date: "15/08/2023",
        blog_pic: "Trung Thông"
    },
    {
        id: "BL_02",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/2.jpg",
        date: "15/07/2023",
        blog_pic: "Trung Thông"
    },
    {
        id: "BL_03",
        Title: "Hội nghị nông nghiệp thu hoạch  2023 tại Việt Nam",
        blog_img: "./img/blogs/3.jpg",
        date: "15/06/2023",
        blog_pic: "Trung Thông"
    },
]
//click Blog 
let btnBlog = document.getElementById("btnBlog"); 
btnBlog.addEventListener('click',()=>{
    location.assign('blog.html');
})

//click Blog 
let btnHome = document.getElementById("btnHome"); 
btnHome.addEventListener('click',()=>{
    location.assign('index.html');
})
//click Product 
let btnSanPham = document.getElementById("btnSanPham"); 
btnSanPham.addEventListener('click',()=>{
    location.assign('product.html');
})