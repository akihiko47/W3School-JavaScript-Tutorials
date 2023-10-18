function update_date(){
    document.getElementById('container').innerHTML = "";

    let date = new Date();

    let text;

    text = `<div class="element"><p class="item-text">Year: ${date.getFullYear()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Month: ${date.getMonth()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Day: ${date.getDay()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Hours: ${date.getHours()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Minutes: ${date.getMinutes()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Seconds: ${date.getSeconds()}</p></div>`;
    document.getElementById('container').innerHTML += text;

    text = `<div class="element"><p class="item-text">Milliseconds: ${date.getMilliseconds()}</p></div>`;
    document.getElementById('container').innerHTML += text;
}


