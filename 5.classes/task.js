class PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = null) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = state;
    this.type = type;
  }

  fix() {
    this.state = this.state * 1.5;
    this.stateChange = this.state;
  }

  set state(state) {
    if (state < 0) {
      this._state = 0;
    } else if (state > 100) {
      this._state = 100;
    } else {
      this._state = state;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state = 100, type = "magazine") {
    super(name, releaseDate, pagesCount, state, type);
  }
}

class Book extends PrintEditionItem {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "book"
  ) {
    super(name, releaseDate, pagesCount, state, type);
    this.author = author;
  }
}

class NovelBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "novel"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class FantasticBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "fantastic"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class DetectiveBook extends Book {
  constructor(
    author,
    name,
    releaseDate,
    pagesCount,
    state = 100,
    type = "detective"
  ) {
    super(author, name, releaseDate, pagesCount, state, type);
  }
}

class Library {
  constructor(name, books = []) {
    this.name = name;
    this.books = books;
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    const result = this.books.find(
      (book) => book.hasOwnProperty(type) && book[type] === value
    );
    return result || null;
  }

  giveBookByName(bookName) {
    let result = null;
    const index = this.books.findIndex((book) => book.name === bookName);
    if (index !== -1) {
      result = this.books[index];
      this.books.splice(index, 1);
    }
    return result;
  }
}

class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (mark <= 5 && mark >= 2) {
      if (this.marks.hasOwnProperty(subject)) {
        this.marks[subject].push(mark);
      } else {
        this.marks[subject] = [];
        this.marks[subject].push(mark);
      }
    }
  }

  getAverageBySubject(subject) {
    if (this.marks.hasOwnProperty(subject)) {
      let result = this.marks[subject].reduce((acc, mark, index) => {
        acc += mark;
        if (index === this.marks[subject].length - 1) {
          return acc / this.marks[subject].length;
        }
        return acc;
      }, 0);
      return result;
    } else {
      return 0;
    }
  }

  getAverage() {
    const result = Object.keys(this.marks).reduce((acc, subject, index, arr) => {
        acc += this.getAverageBySubject(subject);
        if (index === arr.length -1){
            return acc / arr.length;
        }
        return acc;
    }, 0);
    return result;
  }
}
