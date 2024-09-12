
// Book Class
class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this._isbn = isbn; // private property
        this.available = true; // defaults to true
    }

    // Getter for ISBN
    get isbn() {
        return this._isbn;
    }

    // Setter for ISBN (we can restrict or validate this if needed)
    set isbn(value) {
        console.log('ISBN cannot be modified directly.');
    }

    // Method to borrow a book
    borrowBook() {
        if (this.available) {
            this.available = false;
            console.log(`You have borrowed "${this.title}"`);
        } else {
            console.log(`"${this.title}" is not available.`);
        }
    }

    // Method to return a book
    returnBook() {
        this.available = true;
        console.log(`You have returned "${this.title}"`);
    }
}

// Library Class
class Library {
    constructor() {
        this.books = [];
    }

    // Add a book to the library
    addBook(book) {
        this.books.push(book);
        console.log(`Book titled "${book.title}" added to the library.`);
    }

    // Remove a book by ISBN
    removeBook(isbn) {
        this.books = this.books.filter(book => book.isbn !== isbn);
        console.log(`Book with ISBN: ${isbn} removed from the library.`);
    }

    // Find a book by title
    findBookByTitle(title) {
        const book = this.books.find(book => book.title === title);
        if (book) {
            return `Title: ${book.title}, Author: ${book.author}, ISBN: ${book.isbn}, Available: ${book.available}`;
        } else {
            return `Book titled "${title}" not found in the library.`;
        }
    }
}

// DigitalLibrary Class (inherits from Library)
class DigitalLibrary extends Library {
    // Method to download a book if it's available
    downloadBook(isbn) {
        const book = this.books.find(book => book.isbn === isbn);
        if (book) {
            if (book.available) {
                console.log(`You downloaded "${book.title}".`);
            } else {
                console.log(`"${book.title}" is not available for download.`);
            }
        } else {
            console.log(`Book with ISBN: ${isbn} not found in the digital library.`);
        }
    }
}



// Creating Book instances
const book1 = new Book('Things fall apart', 'Chinue Achebe', '22210');
const book2 = new Book('The Sun is still', 'Jeff Doubra', '22211');

// Creating a Library instance and adding books
const myLibrary = new Library();
myLibrary.addBook(book1);
myLibrary.addBook(book2);

console.log(myLibrary.findBookByTitle('The Sun is still')); // Find book by title

// Borrow and return a book
book2.borrowBook(); // Borrow the book
book2.returnBook(); // Return the book

// Remove a book
myLibrary.removeBook('22210'); // Remove book by ISBN

// Creating a DigitalLibrary instance
const myDigitalLibrary = new DigitalLibrary();
myDigitalLibrary.addBook(book2);

// Download a book
myDigitalLibrary.downloadBook('22211'); // Download available book
