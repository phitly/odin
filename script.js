const myLibrary=[];
//creating a book object with properties, basically defines the 
//structure of each book object stored in myLib
function Book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.isRead=isRead;
    //this generate unique ids 
    this.id=crypto.randomUUID();
}

Book.prototype.toggleStatus=function(){
    this.isRead=!this.isRead;
}

function addBookToLib(title,author,pages,isRead){
    const newbook=new Book(title,author,pages,isRead);
    myLibrary.push(newbook);
    displayBook()
}

//function to display books
function displayBook(){
    //choosing the div book-container elememnt, the var ref this dom for manip
    const bookContainer=document.getElementById('book-container');
    //clear existing content aka prev rendered book cards
    bookContainer.innerHTML=''; 
    //iterates over each Book object. book param rep curent book obj in iteration
    myLibrary.forEach(book => {
        //creating a book card var
        //create new <div> ele for each book which acts as a "card"
        //containg book's details
        const bookCard=document.createElement('div');
        // create a book-card class to style the cards appearances
        bookCard.classList.add('book-card');
        // adds a data id attribute to card linkin it to books id
        bookCard.setAttribute('data-id',book.id);

        //populate the card
        bookCard.innerHTML=`
            <p>${book.title}</p>
            <p>${book.author}</p>
            <p>${book.pages}</p>
            <p>${book.isRead ? 'yes' : 'no'}</p>
            <button class="toggle-read-btn" data-id="${book.id}">Toogle read</button>
            <button class="remove-btn" data-id="${book.id}">Remove</button>
            `;
        bookContainer.appendChild(bookCard);       
    });
    // handles the button clicks make the "toggle read" and remove fucntional
    //functin is called wheneber the lib changes (after removing, adding ect)
    addButtonListeners();   
};

function addButtonListeners(){
    document.querySelectorAll('.toggle-read-btn').forEach(button=>{
        button.addEventListener('click',()=>{
            const id=button.getAtrribute('data-id');
            const book=myLibrary.find(b=> b.id===id);
            if(book){
                book.toggleStatus();
                displayBook();
            }
        });
    });
    document.querySelectorAll('.remove-btn').forEach(button=>{
        button.addEventListener('click',()=>{
            const id=button.getAtrribute('data-id');
            const index=myLibrary.findIndex(b=> b.id===id);
            if(index!== -1){
                myLibrary.splice(index,1);
                displayBook();
            }
        });
    });
}
