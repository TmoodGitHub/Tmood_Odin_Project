function Book(title, author, pageNum, read) {
    if(!new.target) {
        throw Error("You must use the 'new' operator to call the Book constructor.");
    }

    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.info = info;

    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pageNum} pages, ${this.read ? 'read' : 'not read yet'}.`;
    }
}

const book1 = new Book('Silly Celena', 'Celena Amira Mahmoud Jimenez', '250', false);
console.log(book1.info())