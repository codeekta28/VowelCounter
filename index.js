console.log("This is index file");
let validate = function (input) {
    let isError = false;
    let feedback = document.querySelector(".feedBack");
    feedback.innerHTML = "";
    if (input == "") {
        isError = true;
        feedback.innerHTML = "Dont keep the box empty";
        feedback.classList.add("showItem", "alert-danger");
        setTimeout(() => {
            feedback.classList.remove("showItem", "alert-danger");
        }, 2000);
        return isError
    }
    return isError
}
let form = document.querySelector(".inputForm");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let input = document.querySelector("#inputText").value;
    let isError = validate(input);
    console.log("iserror",isError);
    if (!isError) {
        
        // regular expressions to find the vowel
     let pattern = /[aeiou]/ig;
     let result = input.match(pattern);
     console.log(result.length);
     alert(`There are ${result.length} vowels in input and they are ${result}`);
    }
    document.querySelector("#inputText").value='';
})