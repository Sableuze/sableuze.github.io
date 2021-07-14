input = document.querySelectorAll(".input");

input.forEach(function (item) {
    item.addEventListener("focus", function () {
        let parent = this.closest(".form__block");
        console.log(parent)
        parent.classList.add("_focus");


    })


    item.addEventListener("blur", function () {
        this.parentNode.classList.remove("_focus");
    })
});

//for select tag which is changed by app.js
let inputSelect = document.querySelectorAll(".select_input");
inputSelect.forEach(function (item) {
    item.addEventListener("click", function () {
        let parent = this.closest(".form__block");
        if (this.classList.contains("_active")) {
            parent.classList.add("_focus");
        }
        else {
            parent.classList.remove("_focus")
        }


    })
})

// let selectParent = inputSelect.closest("._active")
// if (selectParent) {
//         console.log(selectParent)
//         selectParent.classList.toggle("_focus")
//     }


    const labelCondition = document.querySelectorAll("[data-tab]");

    const contentBoxes = document.querySelectorAll("[data-tab-content]")

    labelCondition.forEach(function (item) {
        item.addEventListener("click", function () {
            labelCondition.forEach(function (removeClass) {
                removeClass.classList.remove("_active");
            })

            this.classList.toggle("_active");
            contentBoxes.forEach(function (item) {
                item.classList.add("_hidden")
            })

            let contentBox = document.querySelector("#" + this.dataset.tab);
            contentBox.classList.remove("_hidden")

        });
    });


function ibg(){

    let ibg=document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if(ibg[i].querySelector('img')){
            ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
        }
    }
}

ibg();
