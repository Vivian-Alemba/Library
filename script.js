//A Book class: to represent a book
class Book{
    constructor(title,author,pages,read){
        this.title=title;
        this.author=author;
        this.pages=pages;
        this.read=read;

    }

}

//UI class: to handle the user interface tasks

class UI{
    static displayBooks(){
    //     const storedBooks=[{
    //         title:"Love Portion",
    //         author:"Jacob Aliet",
    //         pages:1,
    //         read:"not yet read"
    //     },
    //     {
    //         title:"Javascript Eloquent",
    //         author:"Flavio's",
    //         pages:4,
    //         read:"Ongoing"
    //     }
    //  ]
     const books=Store.getBook();
    books.forEach((book) => UI.addBookToLibrary(book));
    }

    static addBookToLibrary(book){
        //creating a row to add to the tbody in the html
        const bookList=document.querySelector('#list-books')
        const bookListRow=document.createElement("tr")
        bookListRow.innerHTML=`
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.read}</td>
        <td>${book.pages}</td>
        <td><a href="#" class="btn btn-success btn-lg  delete"><i class="fa  fa-trash"><i></a></td>`   //using backticks to use variables inside a string
        bookList.appendChild(bookListRow)
    }

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove()
        }

    }
   
    static showAlert(message,className){
        const div=document.createElement('div')
        div.className=`alert alert-${className}`
        div.appendChild(document.createTextNode(message))
        const container=document.querySelector(".container")
        const form=document.querySelector('#book-form')
        container.insertBefore(div,form)

        //vanish in 3 seconds
        // setTimeout(()=> document.querySelector('.alert').remove(),3000);

        


    }

    static clearFields(){
        document.querySelector('#Title').value=""
        document.querySelector('#author').value=""
        document.querySelector('#page').value=""
        document.querySelector('#check').value=""

    }

}

//Store class:handles storage
class Store{

   static getBook(){
       let books
       if(localStorage.getItem('books')===null){
           books=[]
       }else{
           books=JSON.parse(localStorage.getItem('books'))
       }
       return books;

    }
   static addBook(book){
       const books=Store.getBook()

       books.push(book)

       localStorage.setItem('books',JSON.stringify(books))

    }

   static removeBook(pages){
       const books=Store.getBook();

       books.forEach((book,index)=> {
           if(book.pages===pages){
               books.splice(index,1)
           }
       });

       localStorage.setItem('books',JSON.stringify(books))

    }
}





//Event:display a book
document.addEventListener('DOMContentLoaded',UI.displayBooks)

//Event:add a book
document.querySelector('#book-form').addEventListener('submit',(e) =>{
    //prevent actual submit
    e.preventDefault();
    //getting form values
    const titleInput=document.querySelector('#Title').value
    const authorInput=document.querySelector('#author').value
    const pagesInput=document.querySelector('#page').value
    const readInput=document.querySelector('#check').value

    //validate the fields
    if(titleInput==="" || authorInput==="" || pagesInput==="" || readInput===""){
        // UI.showAlert("Please fill in all fields","danger")
        alert("Please fill in all fields","danger")
    }else{

        //instaniate book
    const book=new Book(titleInput,authorInput,pagesInput,readInput)
    //console.log(book)

    //add book to UI
    UI.addBookToLibrary(book)

    //add book to store
    Store.addBook(book)

    //show success message when a book is added

    // UI.showAlert('book added','success')



    //clear fielda
    UI.clearFields()

    }

    

}); 

//Event:remove a book
document.querySelector('#list-books').addEventListener('click',(e) => {
    //remove book from UI
    UI.deleteBook(e.target)

    //remove book from store
    Store.removeBook(e.target.parentElement.previousElementSibling.textContent);

     //show success message when a book is added

    // UI.showAlert('book deleted','success')

})


















//declaring my input variables
// const titleInput=document.querySelector('#Title')
// const authorInput=document.querySelector('#author')
// const pagesInput=document.querySelector('#page')
// const readInput=document.querySelector('#check')
// const addButton=document.querySelector('#add')
// const bookForm=document.querySelector('#book-form')
// const bookList=document.querySelector('#list-books')


// let myLibrary=[]


// function Book(title,author,pages,read){
//     this.title=title;
//     this.author=author;
//     this.pages=pages;
//     this.read=read;
//     this.showBook=function(){
//         return this.title
//     };

// }

// let book1=new Book("My life story","Vivian Alemba",2,"read")
// let book2=new Book("My life story","Vivian Alemba",2,"read")
// let book3=new Book("My life story","Vivian Alemba",2,"read")

// console.log(book1)


// function addBookToLibrary(){
//      if(titleInput.value== ""  || authorInput.value== "" || pagesInput.value== "" ||
//     readInput.value== ""){
//         alert("Enter inputs for the fields")

//    }else{
//        const bookListRow=document.createElement("tr")

//        const newTitle=document.createElement("td")
//        newTitle.innerHTML=titleInput.value
//        bookListRow.appendChild(newTitle)

//        const newAuthor=document.createElement("td")
//        newAuthor.innerHTML=authorInput.value;
//        bookListRow.appendChild(newAuthor)

//        const newPage=document.createElement("td")
//        newPage.innerHTML=pagesInput.value;
//        bookListRow.appendChild(newPage)

    

//     //    const newRead=document.createElement("td")
//     //    newRead.innerHTML=readInput.value;
//     //    bookListRow.appendChild(newRead)

//        bookList.appendChild(bookListRow)

//        for(let i; i<myLibrary.length; i++){
//           return myLibrary[i].push(bookList)
           
//        }
       
// }
// }
// addButton.addEventListener('click',addBookToLibrary)













