let vars = [10, 2, 333, 412, 54, 111, 34, 0, 756];

function array_to_html(arr){
    document.getElementById('container').innerHTML = "";
    for (v of vars) {
        let text = `<div class="element"><p class="item-text">`;
        text += v;
        text += `</p></div>`;
        document.getElementById('container').innerHTML += text;
    }
};

window.onload = function () {
    array_to_html(vars)
};

function sort_num() {
    array_to_html(vars.sort(function(a, b){return a - b}));
};

function sort_aph() {
    array_to_html(vars.sort())
};

function sort_ran() {
    array_to_html(vars.sort(function(){return 0.5 - Math.random()}));
};

function sort_reverse() {
    array_to_html(vars.reverse());
};

