let myLibrary=[]

function Book(title,author,pages,read){
    //creating a constructor for the book object
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read

    

}
Book.prototype.addBook=function(){
    console.log(this.title)
}




function addBookToLibrary(title){
    //adding my book to my library
    this.title=title
    this.author="Jacob Aliet"
    this.pages=100
    this.read="Not yet red"

   

}
addBookToLibrary.prototype.addBook=function(){
    console.log("js")
}
addBookToLibrary.prototype=Object.create(Book.prototype)

const book=new addBookToLibrary("js")
book.addBook()

console.log(myLibrary.push(addBookToLibrary))


