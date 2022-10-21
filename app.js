const form = document.querySelector('form');
const booksList = document.querySelector('#books-list');


form.addEventListener('submit', addBook);

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
        let td = document.createElement('td');
        let text = document.createTextNode(book[i]);
        td.appendChild(text);
        tr.appendChild(td);
        tr.appendChild(td);
    }

    td = document.createElement('td');
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    link.appendChild(document.createTextNode('X'));
    td.appendChild(link);
    tr.appendChild(td);
    booksList.appendChild(tr);

    titleInput.value = '';
    authorInput.value = '';
    isbnInput.value = '';
    event.preventDefault();
}