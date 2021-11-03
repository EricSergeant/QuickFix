export const getBookByCategory = (category: string) => {
  return fetch(`https://openlibrary.org/subjects/${category}.json`)
    .then(response => response.json())
    .catch(err => console.log(err))
};

export const getIndividualBook = (id: any) => {
  return fetch(`https://openlibrary.org${id}.json`)
  .then(response => response.json())
  // .then(() => console.log(id))
  .then(data => (console.log(data)))
  .catch(err => console.log(err))
}
//availability.openlibrary_work will also get you the value that needs to be interpolated in 



//refactor any VVVV



//  const checkResponse = (data: res) => {
//    if (!data.ok) {
//      throw new Error(
//        `Status: ${data.status} StatusText: ${data.status.text}`
//      );
//    }
//    return data.json();
//  }

////////ENDPOINTS ////////
/*
single book : https://openlibrary.org/works/OL61981W
<works.key> is found in each book's works.key value
i.e. key: "/works/OL61981W"

source for individual book cover = https://covers.openlibrary.org/b/id/<coverID>-L.jpg
<coverID> is the number given as the value to the cover key for each book
*note* -L stands for large picture -- you could also use -S or -M for small or medium thumbnails

books by category: https://openlibrary.org/subjects/<category>
<category> is the book genre
*/
