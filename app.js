const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');

form.addEventListener('submit', addBook);
document.addEventListener('DOMContentLoaded', getBooksFromLS);
booksList.addEventListener('click', deleteBook);

function getBooksFromLS(){
    let books
    if (localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    for (let i = 0; i < books.length; i++){
        let book = books[i]
        const tr = document.createElement('tr')
        for (let i = 0; i < book.length; i++){
            let td = document.createElement('td')
            let text = document.createTextNode(book[i])
            td.appendChild(text)
            tr.appendChild(td)
        }
        td = document.createElement('td')
        const link = document.createElement('a')
        link.setAttribute('href', '#')
        link.appendChild(document.createTextNode('X'))
        td.appendChild(link)
        tr.appendChild(td)
        booksList.appendChild(tr)
    }
}


// Add Book
function addBook(event){
    // Get input values
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    //Add values to table
    const book = [title, author, isbn]
    const tr = document.createElement('tr');
    for(let i = 0; i < book.length; i++){
        // create <td> element
        let td = document.createElement('td');
        // create text element
        let text = document.createTextNode(book[i]);
        // add text to <td>
        td.appendChild(text);
        // add td to tr
        tr.appendChild(td);// add td to tr
    }
    // X link
    // create <td> element
    td = document.createElement('td');
    // create <a> element
    const link = document.createElement('a');
    // set href atribute to <a>
    link.setAttribute('href', '#');
    // add text content to <a>
    link.appendChild(document.createTextNode('X'));
    // add <a> to <li>
    td.appendChild(link);
    // add td to tr
    tr.appendChild(td);
    // add tr to tbody
    booksList.appendChild(tr);
    // save book
    addBookToLS(book);
    event.preventDefault();
}

// Add Books to Local Storage
function addBookToLS(book){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.push(book)
    localStorage.setItem('books', JSON.stringify(books))
}

//Delete book function
function deleteBook(event){
    if(event.target.textContent === 'X'){
        if(confirm('Are you sure you want to delete this book?')){
            event.target.parentElement.parentElement.remove();
            let bookISBN = event.target.parentElement.previousElementSibling.textContent
            deleteBookFromLS(bookISBN);
        }
    }
}

// Delete from LS
function deleteBookFromLS(bookISBN){
    let books
    if(localStorage.getItem('books') === null){
        books = []
    } else {
        books = JSON.parse(localStorage.getItem('books'))
    }
    books.forEach(function (book, index) {
        if (book[2] === bookISBN){
            books.splice(index, 1)
        }
    })
    localStorage.setItem('books', JSON.stringify(books))
}

