export const changeBook = (book) => {
    console.log("You clicked on user: ");
    console.log(book)
    return {
        type: 'USER_SELECTED',
        payload: book
    }
};
