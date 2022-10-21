const form = document.querySelector('#add-books');
const booksList = document.querySelector('#books-list');

form.addEventListener('submit', addBook)

function addBook(event){
    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#author');
    const isbnInput = document.querySelector('#isbn');

    let title = titleInput.value;
    let author = authorInput.value;
    let isbn = isbnInput.value;

    const books = [title, author, isbn]
    const tr = document.createElement('tr')
    for(let i = 0; i < book.length; i++){
        let td = document.createElement('td')
        let text = document.createTextNode(book[i])

        td.appendChild(text)
        tr.appendChild(td)
        tr.appendChild(td)
    }
}

