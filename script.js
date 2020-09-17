//declaring my input variables
const titleInput=document.querySelector('#Title')
const authorInput=document.querySelector('#author')
const pagesInput=document.querySelector('#page')
const readInput=document.querySelector('#check')
const addButton=document.querySelector('#add')
const bookForm=document.querySelector('#book-form')
const bookList=document.querySelector('#list-books')


let myLibrary=[]


function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    this.showBook=function(){
        return this.title
    };

}

// let book1=new Book("My life story","Vivian Alemba",2,"read")
// let book2=new Book("My life story","Vivian Alemba",2,"read")
// let book3=new Book("My life story","Vivian Alemba",2,"read")

// console.log(book1)


function addBookToLibrary(){
     if(titleInput.value== ""  || authorInput.value== "" || pagesInput.value== "" ||
    readInput.value== ""){
        alert("Enter inputs for the fields")

   }else{
       const bookListRow=document.createElement("tr")

       const newTitle=document.createElement("td")
       newTitle.innerHTML=titleInput.value
       bookListRow.appendChild(newTitle)

       const newAuthor=document.createElement("td")
       newAuthor.innerHTML=authorInput.value;
       bookListRow.appendChild(newAuthor)

       const newPage=document.createElement("td")
       newPage.innerHTML=pagesInput.value;
       bookListRow.appendChild(newPage)

    

    //    const newRead=document.createElement("td")
    //    newRead.innerHTML=readInput.value;
    //    bookListRow.appendChild(newRead)

       bookList.appendChild(bookListRow)

       for(let i; i<myLibrary.length; i++){
          return myLibrary[i].push(bookList)
           
       }
       
}
}
addButton.addEventListener('click',addBookToLibrary)













