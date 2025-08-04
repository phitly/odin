const myLibrary=[];
function Book(title,author,pages){
    this.title=title,
    this.author=author,
    this.pages=pages
}
function addBookToLib(title,author,pages){
    const newbook=new Book(title,author,pages);
    myLibrary.push(newbook)
}

addBookToLib('h','s',222)
addBookToLib('hss','swwwww',322)

function displayBook(){
    for (const book of myLibrary){
        console.log(book.title,book.author,book.pages);
    }
}

displayBook();