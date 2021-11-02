// export const getRecipesByCategory = (category: string) => {
//   fetch(`www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// };
//
// export const getSingleRecipe = (recipeName: string) => {
//   fetch(`www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// };
//
// ///////TEST HARD CODED FETCH /////////
// export function getSeafood() {
//   return fetch('www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// };

// interface res {
//   data: {ok: boolean, status: {text: string}, json(): string}[]
//  }


export const getBookByCategory = (): any => {
  return fetch(`https://openlibrary.org/subjects/history.json`)
    .then(response => response.json())
};

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
single book : https://openlibrary.org/<works.key>
<works.key> is found in each book's works.key value
i.e. key: "/works/OL61981W"

source for individual book cover = https://covers.openlibrary.org/b/id/<coverID>-L.jpg
<coverID> is the number given as the value to the cover key for each book
*note* -L stands for large picture -- you could also use -S or -M for small or medium thumbnails

books by category: https://openlibrary.org/subjects/<category>
<category> is the book genre
*/
