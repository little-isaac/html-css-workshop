function addition(){
//    debugger;
    /* comment */
    var input1 = document.querySelector(".input-field-1");
    var input2 = document.querySelector(".input-field-2");
    
    var input1Value = parseInt(input1.value);
    var input2Value = parseInt(input2.value);
    
    var added = input1Value + input2Value;
    document.querySelector(".result").innerHTML = added;
    document.querySelector(".result-field").value = added;
}

function toggleElement() {
    var hideElement = document.querySelector('.hide-element');
    var elemClassList = document.querySelector('.hide-element').classList;
    
    if (elemClassList.contains("hidden")) {
        document.querySelector('.hide-element').classList.remove("hidden");
    }else{
        document.querySelector('.hide-element').classList.add("hidden");
    }
}

var toggleButton = document.querySelector('.toggle-button');

toggleButton.addEventListener("click", toggleElement);