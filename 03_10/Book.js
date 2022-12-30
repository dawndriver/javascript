/**
 * Creating classes:
 *
 * Class declaration: class Name {}
 * Class expression:  const Name = class {}
 */

class Books {
  constructor(
    // Defines parameters:
    title,
    pages,
    subject,
    author,
    progress,
    bookOpen
  ) {
    // Define properties:
    this.title = title;
    this.pages = pages;
    this.subject = subject;
    this.author = author;
    this.progress = progress;
    this.bookOpen = bookOpen;
  }
  // Add methods like normal functions:
  toggleStatus(bookStatus) {
    this.bookOpen = bookStatus;
  }
  toggleProgress(bookProgress) {
    this.progress = bookProgress;
  }
}

export default Books;
