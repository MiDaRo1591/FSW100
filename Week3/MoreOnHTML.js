/*
Make the html code easier to read by using semantic tags to identify the different parts of the website.

    Give your header a name and change the text to the color blue.

    Add a table to the main section of the website, with at least 3 headers (you can name them whatever you want), 
        and two rows of data (you can include whatever data you want)

Style your table to have a black border.

    Add any content you want to all of your sections.

    Link to another .html page. This requires you to add another .html page (e.g. about.html), and use the “a” element to link it.

<article> <aside> <details> <figcaption> <figure> <footer> <header> <main> <mark> <nav> <section> <summary> <time>
*/

console.log("Working");

var lItem = document.querySelector('h1');
lItem.className = "h1Name";
lItem.style.color = "blue"; // Adjust color to blue.

var lTable = document.createElement('table'); // Create the new element here.
lTable.textContent = 'Brand new Table Element.'; // Text fill in so we have something to read.
lTable.id = 'newTable'; // Set the ID so we can grab it later.
document.body.appendChild(lTable); // Apply the change to the parent element.
console.log(lTable); // Log Check.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    var lHead = document.createElement('header'); // Create the new element here.
//    lHead.textContent = 'New Header Element 1.'; // Text fill in so we have something to read.
    lHead.id = 'newHeader1'; // Set the ID so we can grab it later.
    lTable.appendChild(lHead); // Apply the change to the parent element.
    console.log(lItem); // Log Check

    lItem = document.createElement('p'); // Create the new element here.
    lItem.textContent = 'So this is one of the new data types.'; // Text fill in so we have something to read.
    lItem.id = 'newP1'; // Set the ID so we can grab it later.
    lHead.appendChild(lItem); // Apply the change to the parent element.
    console.log(lItem); // Log Check

    lItem = document.createElement('p'); // Create the new element here.
    lItem.textContent = 'And this is the other data type.'; // Text fill in so we have something to read.
    lItem.id = 'newP2'; // Set the ID so we can grab it later.
    lHead.appendChild(lItem); // Apply the change to the parent element.
    console.log(lItem); // Log Check

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    lHead = document.createElement('header');
    lHead.id = 'newHeader1';
    lTable.appendChild(lHead)
    console.log(lItem);

    lItem = document.createElement('p');
    lItem.textContent = 'So this is one of the new data types.';
    lItem.id = 'newP1';
    lHead.appendChild(lItem);
    console.log(lItem);

    lItem = document.createElement('p');
    lItem.textContent = 'And this is the other data type.';
    lItem.id = 'newP2';
    lHead.appendChild(lItem);
    console.log(lItem);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    lHead = document.createElement('header');
    lHead.id = 'newHeader2';
    lTable.appendChild(lHead)
    console.log(lItem);

    lItem = document.createElement('p');
    lItem.textContent = 'So this is one of the new data types.';
    lItem.id = 'newP1';
    lHead.appendChild(lItem);
    console.log(lItem);

    lItem = document.createElement('p');
    lItem.textContent = 'And this is the other data type.';
    lItem.id = 'newP2';
    lHead.appendChild(lItem);
    console.log(lItem);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    lItem = document.createElement('a');
    lItem.textContent = 'Link to a Google.';
    lItem.id = 'Link';
    lItem.href = 'https://www.google.com/'
    document.body.appendChild(lItem);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    lTable.style.color = "blue"; // Adjust color to blue.
    lTable.style.borderWidth = "5px";
    lTable.style.borderColor = 'black';
    lTable.style.borderStyle = "solid";
/*
*/