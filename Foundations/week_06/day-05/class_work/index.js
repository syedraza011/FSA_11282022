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
    author: ["Anonymous"],
    language: "en",
    subject: [
      "Picture books for children",
      "PZ",
      "Children's stories",
      "Domestic animals -- Juvenile fiction",
    ],
    title: "Familiar Animals",
  },
  {
    author: ["Samachson, Joseph"],
    language: "en",
    subject: [
      "Mars (Planet) -- Fiction",
      "Science fiction",
      "Bureaucrats -- Fiction",
      "Dogs -- Fiction",
      "Families -- Fiction",
      "Predatory animals -- Fiction",
      "Short stories",
      "PS",
    ],
    title: "Monster",
  },
  {
    author: ["Bullen, Frank Thomas"],
    language: "en",
    subject: ["Sea stories", "PR", "Seafaring life", "Marine animals"],
    title: "Idylls of the Sea, and Other Marine Sketches",
  },
  {
    author: ["Burroughs, Edgar Rice"],
    language: "fi",
    subject: [
      "PS",
      "Adventure stories",
      "Fantasy fiction",
      "Tarzan (Fictitious character) -- Fiction",
      "Jungle animals -- Fiction",
    ],
    title: "Tarzanin pedot",
  },
  {
    author: ["Hickson, Sydney J. (Sydney John)"],
    language: "en",
    subject: ["QL", "Marine animals"],
    title: "The fauna of the deep sea",
  },
  {
    author: ["Ewald, Carl"],
    language: "en",
    subject: [
      "PZ",
      "Fathers and sons -- Juvenile fiction",
      "Human beings -- Juvenile fiction",
      "Animals -- Juvenile fiction",
      "Human-animal relationships -- Juvenile fiction",
    ],
    title: "Two-Legs",
  },
  {
    author: ["Burgess, Thornton W. (Thornton Waldo)"],
    language: "en",
    subject: [
      "Friendship -- Juvenile fiction",
      "PZ",
      "Robbers and outlaws -- Juvenile fiction",
      "Minks -- Juvenile fiction",
      "Forest animals -- Juvenile fiction",
    ],
    title: "Billy Mink",
  },
  {
    author: ["Gautier, Théophile"],
    language: "en",
    subject: ["QL", "Domestic animals"],
    title: "My household of pets",
  },
  {
    author: ["Grey, Eliza"],
    language: "en",
    subject: [
      "Children and animals -- Juvenile fiction",
      "PZ",
      "Pets -- Juvenile fiction",
      "Marmots -- Juvenile fiction",
    ],
    title: "The Adventures of a Marmotte\nSold for the Distressed Irish",
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

//---------------Sort seelctions---------------------------
const sortingSelection = document.getElementById("sort");
sortingSelection.addEventListener("change", function () {
  let optionSelected = sortingSelection.value;
  // book(sortingSelection.value)
  //{
  console.log(optionSelected);
  bookData.sort((a, b) => {
    if (a.optionSelected < b.optionSelected) {
      console.log(b.optionSelected);
      return -1;
    }
    if (a.optionSelected > b.optionSelected) {
      console.log(a.optionSelected);
      return 1;
    }
    return 0;
  });
  console.log(bookData);
  //   } else if (optionSelected === "language") {
  //     console.log("Hello");
  //     bookData.sort((a, b) => {
  //       if (a.language < b.language) {
  //         return -1;
  //       }
  //       if (a.language > b.language) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   } else if (optionSelected === "title") {
  //     bookData.sort((a, b) => {
  //       if (a.title < b.title) {
  //         return -1;
  //       }
  //       if (a.title > b.title) {
  //         return 1;
  //       }
  //       return 0;
  //     });
  //   } else if(optionSelected === "author"){
  //     bookData.sort((a, b) => {
  //       if (a.author < b.author) {
  //         return -1;
  //       }
  //       if (a.author > b.author) {
  //         return 1;
  //       }
  //       return 0;
  //     });
});
bookData.map((singleObj) => {
  console.log(singleObj);
  const card = cardMaker(singleObj);
  body.append(card);
});
//--------------------------------------------------
