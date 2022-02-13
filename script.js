setInterval(function(){ 
    let timerElement = document.getElementById('timer');
    let currentTime = timerElement.innerHTML;
    currentTime++;
    timerElement.innerHTML = currentTime;
}, 1000);

/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/
function replace() {
    document.write('<h1>Hello!</h1>');
    document.write("Today is ", Date());
    document.write('<p>Each call to <code>document.write()</code> is appended in order to the document, without newlines.</p>');
    document.write('<p>Notice the css for the &lt;code&gt; tag isn\'t working anymore...</p>');
    document.write('<p>That\'s because the whole document was replaced, including the link to the css file!</p>');

    document.write('The calls above are on new lines because they\'re writing paragraphs and headings. If writing plaintext...');
    document.write('notice that this method will NOT append a new line after each statement.');
    document.write('<br><br>To do that, you can use break tags');
}

/*
Note: ignore the function here and focus on what's inside it.
The function is only here to allow you to change the content with
the button
*/
function turnOff() {
    let turnOff = document.getElementById('switch');
    turnOff.style.backgroundColor = "red";
    turnOff.innerHTML = "OFF"
}

/*
Note: ignore the functions here and focus on what's inside them.
The function is only here to allow you to change the content with
the button
*/

function createShoppingList() {
    // Get the document body (just for convenience)
    let body = document.body;

    // Create a new heading
    let newHeading = document.createElement("h3");

    // Set its innerHTML
    newHeading.innerHTML = "Shopping List:";

    // Add it to the body
    body.appendChild(newHeading);

    // Now make the new list
    let shoppingList = document.createElement('ul');

    // Create an array of items to add
    let shoppingItems = ['Milk', 'Butter', 'Eggs'];
    // Loop through the array and create <li> elements
    for (let i = 0; i < shoppingItems.length; i++) {
        let listItem = document.createElement('li');
        listItem.innerHTML = shoppingItems[i];
        shoppingList.appendChild(listItem);
    };

    // Now append the whole new list to the body
    body.appendChild(shoppingList);

    // When shopping is completed, clear out the shopping list and add the purchased items to kitchen stock
    let button = document.createElement('button');
    button.innerHTML = "Finished Shopping";

    // Set the onclick attribute to call the addToKitchenStock() function below
    button.setAttribute('onclick', 'addToKitchenStock();');

    // Append it to the body
    body.appendChild(button);
}


function addToKitchenStock() {
    // First remove the shopping list heading
    let shoppingListHeading = document.getElementsByTagName('h3')[1];
    shoppingListHeading.remove();

    // Get both lists, then iterate through the shopping list's children (the <li> elements), cloning each item and appending it to the kitchen stock list
    let kitchenStock = document.getElementsByTagName('ul')[0];
    let shoppingList = document.getElementsByTagName('ul')[1];
    for (let i = 0; i < shoppingList.children.length; i++) {
        let clone = shoppingList.children[i].cloneNode(true)
        kitchenStock.appendChild(clone);
    }

    // Remove the old shopping list and the buttons
    shoppingList.remove();
    let i = 0;
    while (i < 2) {
        /* This removes the first button in the document each time.
        We need to do it this way since once we delete the first
        one, the 2nd one's index is now 0 */
        document.getElementsByTagName('button')[0].remove();
        i++;
    };

    // Insert a completion note at the top
    let complete = document.createElement('p');
    complete.innerHTML = "Shopping complete!"
    complete.style.color = "red";
    complete.style.fontWeight = "bold";
    let kitchenStockHeading = document.getElementsByTagName('h3')[0];
    document.body.insertBefore(complete, kitchenStockHeading);
}

// 47 challenge


function todayReport() {
    let divReport = document.getElementById("report");
    divReport.innerHTML = `
    <h4>Today</h4>
        <p>Scattered thunderstorms</p>
        <ul>
            <li>Temp: 29C</li>
            <li>Precipitation: 25%</li>
            <li>Humidity: 58%</li>
            <li>Wind: 16km/h</li>
        </ul>
`;
}

function tomorrowReport() {
    let divReport = document.getElementById("report");
    divReport.innerHTML = `
    <h4>Tomorrow</h4>
        <p>Partly cloudy</p>
        <ul>
            <li>Temp: 27C</li>
            <li>Precipitation: 20%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 13km/h</li>
        </ul>
`;
}

