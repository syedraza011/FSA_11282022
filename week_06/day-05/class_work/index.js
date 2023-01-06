const bookData = [
  {
    author: ["Burroughs, Edgar Rice"],
    language: "en",
    subject: [
      "Adventure stories",
      "PZ",
      "Fantasy fiction",
      "Tarzan (Fictitious character) -- Fiction",
      "PS",
      "Jungle animals -- Fiction",
    ],
    title: "The Beasts of Tarzan",
  },
  {
    author: ["Kipling, Rudyard"],
    language: "en",
    subject: [
      "India -- History -- 19th century -- Fiction",
      "Feral children -- Fiction",
      "Animals -- Fiction",
      "Jungles -- Fiction",
      "India -- Fiction",
      "PR",
      "Adventure stories, English",
      "Mowgli (Fictitious character) -- Fiction",
      "Short stories",
      "Jungle animals -- Fiction",
    ],
    title: "The Jungle Book",
  },
];

const body = document.querySelector("body");
const cardMaker = (aBook) => {
  console.log(aBook);
  const container = document.createElement("div");
  const author = document.createElement("h3");
  const language = document.createElement("h3");
  const subject = document.createElement("h3");
  const title = document.createElement("h3");
  //make pieces
  //add content
  author.innerHTML = aBook.author;
  language.innerHTML = aBook.language;
  subject.innerHTML = aBook.subject;
  title.innerHTML = aBook.title;
  container.append(author, language, subject, title);
 
  return container;

};
bookData.map((singleObj) => {
  console.log(singleObj);
  const card = cardMaker(singleObj);
  body.append(card);
});
