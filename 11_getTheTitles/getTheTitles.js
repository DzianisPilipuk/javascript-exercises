const getTheTitles = function(books) {
    let titles = [];
    books.forEach( (e , i) => titles.push(books[i].title));
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
