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
        } else {
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

// const animItems = document.querySelectorAll("._animation-item")
//
// if (animItems.length > 0) {
//     window.addEventListener("scroll", animOnScroll);
//
//     function animOnScroll() {
//         for (let i = 0; i < animItems.length; i++) {
//             const animItem = animItems[i];
//             const animItemHeight = animItem.offsetHeight;
//             const animItemOffset = offset(animItem).top;
//             const animStart = 4;
//
//
//             let animItemPoint = window.innerHeight - animItemHeight / animStart;
//             if (animItemHeight > window.innerHeight) {
//                 animItemPoint = window.innerHeight - window.innerHeight / animStart;
//             }
//
//             if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemPoint + animItemHeight)) {
//                 animItem.classList.add("_animation-active")
//             }
//             // else {
//             //     if (!animItem.classList.contains("_anim-no-hide")){
//             //     animItem.classList.remove("_active")
//             // }}
//             //
//
//         }
//
//
//     }
//
//     setTimeout(() => {
//         animOnScroll()
//     }, 300);
// }
document.addEventListener('DOMContentLoaded', () => {

    const scrollItems = document.querySelectorAll('._animation-item');

    const scrollAnimation = () => {
        let windowCenter = (window.innerHeight / 2) + window.scrollY;
        console.log(windowCenter)
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + (el.offsetHeight / 4);
            if (windowCenter >= scrollOffset) {
                el.classList.add('_animation-active');
            }
        });
    };




    scrollAnimation();
    window.addEventListener('scroll', () => {
        scrollAnimation();
    });
});