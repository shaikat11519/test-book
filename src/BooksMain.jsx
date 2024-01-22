import BookHeader from "./BookHeader";
import Star from "./assets/star.svg";
import Book from "./assets/book.png";
import { useState } from "react";

export default function BooksMain() {
  const [books, setBooks] = useState([
    {
      id: crypto.randomUUID(),
      bookName: "Elo Catcher in the Rye",
      author: "J.D. Salinger",
      price: 10.99,
      isFavorite: true,
      publishYear: 2011,
    },
    {
      id: crypto.randomUUID(),
      bookName: "JavaScript and Jquery",
      author: "F. Scott Fitzgerald",
      price: 11.99,
      isFavorite: true,
      publishYear: 1990,
    },
    {
      id: crypto.randomUUID(),
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      isFavorite: false,
      publishYear: 1705,
    },
    {
      id: crypto.randomUUID(),
      bookName: "Abc and Prejudice",
      author: "George Orwell",
      price: 8.99,
      isFavorite: true,
      publishYear: 1720,
    },
    {
      id: crypto.randomUUID(),
      bookName: "Elo Catcher in the Rye",
      author: "J.D. Salinger",
      price: 10.99,
      isFavorite: true,
      publishYear: 2011,
    },
    {
      id: crypto.randomUUID(),
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      isFavorite: false,
      publishYear: 1705,
    },
    {
      id: crypto.randomUUID(),
      bookName: "To Kill a Mockingbird",
      author: "Harper Lee",
      price: 12.99,
      isFavorite: false,
      publishYear: 1705,
    },
    {
      id: crypto.randomUUID(),
      bookName: "JavaScript and Jquery",
      author: "F. Scott Fitzgerald",
      price: 11.99,
      isFavorite: true,
      publishYear: 1990,
    }
  ]);

  const handleSearch = (searchData) => {
    const keywords = searchData.toLowerCase().split(' ');
    const filtered = books.filter((book) =>
      keywords.every((keyword) =>
        book.bookName.toLowerCase().includes(keyword)
      )
    );
    setBooks([...filtered]);
  };

  const handleSort = (sortData) => {
    if (sortData === "name_asc") {
      const sortedBooks = [...books].sort((a, b) =>
        a.bookName.localeCompare(b.bookName)
      );
      setBooks([...sortedBooks]);
    } else if (sortData === "name_desc") {
      const sortedBooks = [...books].sort((a, b) =>
        b.bookName.localeCompare(a.bookName)
      );
      setBooks([...sortedBooks]);
    } else if (sortData === "year_asc") {
      const sortedBooksByPublishedYear = [...books].sort(
        (a, b) => a.publishYear - b.publishYear
      );
      setBooks([...sortedBooksByPublishedYear]);
    } else if (sortData === "year_desc") {
      const sortedBooksByPublishedYearDescending = [...books].sort(
        (a, b) => b.publishYear - a.publishYear
      );
      setBooks([...sortedBooksByPublishedYearDescending]);
    }
  };

  const handleOnFavorite = (fevId) => {
    const bookIndex = books.findIndex((book) => book.id === fevId);
    const newBooks = [...books];
    newBooks[bookIndex].isFavorite = !newBooks[bookIndex].isFavorite;
    setBooks(newBooks);
  };

  return (
    <main className="my-10 lg:my-14">
      <BookHeader onSearch={handleSearch} onSort={handleSort} />
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.length > 0 ? (
          <>
            {books.map((book) => (
              <div key={book.id} className="space-y-3">
                <div className="flex items-center justify-center rounded-md border border-[#324251]/30 bg-white p-4">
                  <img className="max-w-[144px]" src={Book} alt="book name" />
                </div>

                <div className="space-y-3">
                  <h4 className="text-lg font-bold lg:text-xl">
                    {book.bookName} ({book.publishYear})
                  </h4>
                  <p className="text-xs lg:text-sm">
                    By : <span>{book.author}</span>
                  </p>
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-bold lg:text-xl">
                      ${book.price}
                    </h4>
                    <div className="flex items-center space-x-1">
                      <img src={Star} />
                      <img src={Star} />
                      <img src={Star} />
                      <img src={Star} />
                      <span className="text-xs lg:text-sm">(4 Star)</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-xs lg:text-sm">
                    <button className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336] py-1.5 text-white transition-all hover:opacity-80 lg:py-1.5">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      Add to Cart
                    </button>
                    <button
                      onClick={() => handleOnFavorite(book.id)}
                      className="flex min-w-[132px] items-center justify-center gap-1 rounded-md bg-[#1C4336]/[14%] py-1.5 text-[#1C4336] transition-all hover:bg-[#1C4336]/[24%] lg:py-1.5"
                    >
                      {book.isFavorite ? (
                        <svg
                          width="16"
                          height="14"
                          viewBox="0 0 21 19"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                            fill="#DC2954"
                          />
                          <path
                            d="M18.0001 10.572L10.5001 18L3.00006 10.572C2.50536 10.0906 2.1157 9.51202 1.8556 8.87264C1.59551 8.23326 1.47062 7.54695 1.48879 6.85693C1.50697 6.16692 1.66782 5.48814 1.96121 4.86334C2.25461 4.23854 2.67419 3.68126 3.19354 3.22658C3.71289 2.77191 4.32076 2.42969 4.97887 2.22148C5.63697 2.01327 6.33106 1.94359 7.01743 2.0168C7.70379 2.09002 8.36756 2.30456 8.96693 2.64691C9.56631 2.98926 10.0883 3.452 10.5001 4.006C10.9136 3.45602 11.4362 2.99732 12.0352 2.65861C12.6341 2.31989 13.2966 2.10845 13.981 2.03752C14.6654 1.96659 15.3571 2.0377 16.0128 2.24639C16.6685 2.45509 17.2741 2.79687 17.7916 3.25036C18.3091 3.70386 18.7275 4.25929 19.0205 4.88189C19.3135 5.5045 19.4748 6.18088 19.4944 6.86871C19.5139 7.55653 19.3913 8.24099 19.1342 8.87925C18.8771 9.51751 18.491 10.0958 18.0001 10.578"
                            stroke="#DC2954"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      )}

                      {book.isFavorite ? "Unfavourite" : "Favourite"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          "Books Nof Found !!"
        )}
      </div>
    </main>
  );
}

//
