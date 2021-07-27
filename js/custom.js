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

function bookTable() {
    let selectedBook = [title, author, isbn];

    document.write("<table border= '1'>");

        document.write("<tr><th>Title</th><th>Author</th><th>ISBN</th><th>Action</th></tr>");

    for(let i = 0; i < selectedBook.length; i++) {
        document.write("<tr>");
            for(let k = 0; k < selectedBook[i].length; k++){
                document.write(`<td>${selectedBook[i][k]}</td>`);
            }
            document.write("</tr>");
    }
}



