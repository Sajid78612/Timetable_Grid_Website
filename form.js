function makeForm(min, max) {
    form = document.createElement("form");
    form.name = "Multiply";

for(let j=min;j<=max;j++){
    for (let i = min; i <= max; i++) {
        cell = document.createElement("input");
        form.appendChild(cell);
    
    }
}

    document.body.appendChild(form);

}


makeForm(1,12);