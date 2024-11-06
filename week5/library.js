// list containing the books object.
let lib = [];

class Book {
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}.`;
    }
}

function addBook(title, author, year) {
    // add a new book to the list
    for (let i = 0; i < lib.length; i++) {
        if (lib[i] == undefined) {
            // replace an undefined item with a new book object
            lib[i] = new Book(title, author, year);
            return 0;
        }
    }
    const book = new Book(title, author, year);
    lib.push(book);
}

function viewBook() {
    // view all book description in the list
    for (let i = 0; i < lib.length; i++) {
        if (lib[i] == undefined) {
            // skip an undefined item
            continue;
        }
        else {
            console.log(lib[i].getSummary());
        }
    }
}

function deleteBook(title) {
    // delete a book from the list
    for (let i = 0; i < lib.length; i++){
        if (lib[i] == undefined) {
            // skip an undefined item
            continue;
        }
        else if (title == lib[i].title) {
            delete lib[i];
            return 0;
        }
    }
    console.log(`the title ${title} is not available`);
}

// empty list
console.log(lib);

// add books
addBook('The rugged', 'Mark luther', 1780);
addBook('Revelation', 'Marton willy', 1403);
addBook('Mouse eater', 'josh D', 2017);
addBook('Insidious', 'unknown', 1000);
addBook('Breath', 'jake Lime', 1982);

// view book
viewBook();

// delete the anonymous writer's book
deleteBook('Insidious');

// checklist
console.log(lib)
viewBook()