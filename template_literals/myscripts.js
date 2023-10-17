let tags = ["eggs", "bread", "milk", "chicken", "oil", "cucumbers", "bananas", "tomatos"];

let cnt = 0;

function add_element() {
    document.getElementById("demo").innerHTML += `<li>you need to buy ${tags[cnt%tags.length]}</li>`;
    cnt += 1;
    
}
