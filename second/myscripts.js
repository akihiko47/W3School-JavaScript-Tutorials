// I can store functions in objects
// I can get objects in function with "this"

const my_object = {
    value_1: "First",
    value_2: "Second",

    value_function: function(){
        return this.value_1 + " " + this.value_2;
    }
};

function on_click(){
    document.getElementById("test").innerHTML = my_object.value_function();
}