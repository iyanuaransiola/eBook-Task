let txtTitle = document.querySelector("#txtTitle");
let txtAuthor = document.querySelector("#txtAuthor");
let isbnNumber = document.querySelector("#isbnNumber");
let txtAlert = document.querySelector("#txtAlert");
let addBtn = document.querySelector("#addBtn");
let table = document.querySelector("#table");

addBtn.addEventListener("click", addNewBook);

const elibrary = [];


function Book(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
}

function addNewBook(){
    if (validateInput()){
        let title = txtTitle.value;
        let author = txtAuthor.value;
        let isbn = isbnNumber.value;
        

        let book = new Book (title, author, isbn);

       
        saveBook(book);
       
    }else {
        txtAlert.innerHTML = "Sorry, all fields are required";
    }
}

function validateInput(){
    if (txtTitle.value == "" || txtAuthor.value == "" || 
     isbnNumber.value == ""){
        return false
    }return true;
}




