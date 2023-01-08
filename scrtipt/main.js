// const firstElement = document.getElementsByClassName('first')[0];
// const secondElement = document.getElementsByClassName('second')[0];
// const thirdElement = document.getElementsByClassName('third')[0];

// document.body.addEventListener("click", function(evt){
//     const target = evt.target;
//     if(target.classList.contains('first')){
//        return console.log("clicked first");
//     }
//     if(target.classList.contains('second')){
//        return console.log("clicked second");
//     }
//     if(target.classList.contains('third')){
//        return console.log("clicked third");
//     }
//     return console.log('body clicked');
// })
// firstElement.addEventListener('click', function (evt) {
//     console.log(evt.target);
//     console.log('clicked first');
// });
// secondElement.addEventListener('click', function (evt) {
//     console.log('clicked second');
//     evt.stopPropagation();
// });
// thirdElement.addEventListener('click', function (evt) {
//     console.log('clicked third');
// });

// secondElement.addEventListener('click', function (evt){

//     if (secondElement.classList.contains('blue')){
//         return;
//     }
//     else{
//         secondElement.classList.add('blue');
//     }
// });

// thirdElement.addEventListener('click', function(evt){
//     evt.stopPropagation();
// })
// secondElement.addEventListener('click', function (evt){
//     if(evt.target.classList.contains('second')){
//        secondElement.classList.toggle('blue');
// }});

// firstElement.addEventListener('mouseenter', function(){
//     console.log('enter red');
// });
// secondElement.addEventListener('mouseenter', function(){
//     console.log('enter yellow');
// });
// thirdElement.addEventListener('mouseenter', function(){
//     console.log('enter green');
// });
// firstElement.addEventListener('mouseleave', function(){
//     console.log('leave red');
// });
// secondElement.addEventListener('mouseleave', function(){
//     console.log('leave yellow');
// });
// thirdElement.addEventListener('mouseleave', function(){
//     console.log('leave green');
// });

// firstElement.addEventListener('mouseenter', function(){
//         console.log('Active element: first')});
// secondElement.addEventListener('mouseenter', function(){
//         console.log('Active element: second')});
// thirdElement.addEventListener('mouseenter', function(){
//         console.log('Active element: third')});

// firstElement.addEventListener('mouseleave', function(){
//             console.log('Active element: first')});
// secondElement.addEventListener('mouseleave', function(){
//             console.log('Active element: second')});
// thirdElement.addEventListener('mouseleave', function(){
//             console.log('Active element: third')});


// const redCircle = document.getElementsByClassName('red')[0];
// const blueCircle = document.getElementsByClassName('blue')[0];
// const greenCircle = document.getElementsByClassName('green')[0];

// redButton.addEventListener ('click', function () {
//     redCircle.classList.toggle('active');
//     if (!redCircle.classList.contains('active')){
//         const previousActive = document.getElementsByClassName('active')[0];
//         if (previousActive){
//             previousActive.classList.remove('active');
//         }
//     }
// })
// greenButton.addEventListener ('click', function () {
//     if (!greenCircle.classList.contains('active')){
//         const previousActive = document.getElementsByClassName('active')[0];
//         if (previousActive){
//             previousActive.classList.remove('active');
//         }
//     }
//     greenCircle.classList.toggle('active');
// })
// blueButton.addEventListener ('click', function () {
//     if (!blueCircle.classList.contains('active')){
//         const previousActive = document.getElementsByClassName('active')[0];
//         if (previousActive){
//             previousActive.classList.remove('active');
//         }
//     }
//     blueCircle.classList.toggle('active');
// })


const circle = document.getElementsByClassName('circle')[0];
const redButton = document.getElementById('red');
redButton.innerText = "Turn Red";
const greenButton = document.getElementById('green');
greenButton.innerText = "Turn Green";
const blueButton = document.getElementById('blue');
blueButton.innerText = "Turn Blue";

const inputColor = document.getElementById('inputColor');
const additionalColorButton = document.getElementById('additionalColorButton');

redButton.addEventListener ('click', function () {
    if (!circle.classList.contains('activered') || circle.classList.contains('activegreen') || circle.classList.contains('activeblue')){
        circle.removeAttribute('style');
        circle.classList.remove('activegreen');
        circle.classList.remove('activeblue');
        circle.classList.add('activered');

    }
    else{
            circle.classList.remove('activered');
        }
    });
greenButton.addEventListener ('click', function () {
    if (!circle.classList.contains('activegreen') || circle.classList.contains('activered') || circle.classList.contains('activeblue')){
        circle.removeAttribute('style');
        circle.classList.remove('activered');
        circle.classList.remove('activeblue');
        circle.classList.add('activegreen');

    }
    else{
            circle.classList.remove('activegreen');
        }
    });
blueButton.addEventListener ('click', function () {
    if (!circle.classList.contains('activeblue') || circle.classList.contains('activered') || circle.classList.contains('activegreen')){
        circle.removeAttribute('style');
        circle.classList.remove('activered');
        circle.classList.remove('activeblue');
        circle.classList.add('activeblue');

    }
    else{
            circle.classList.remove('activeblue');
        }
    });


    additionalColorButton.addEventListener ('click', function () {
        circle.removeAttribute('style');
        circle.classList.remove('activered');
        circle.classList.remove('activeblue');
        circle.classList.remove('activegreen');
        circle.style.backgroundColor = inputColor.value;
        });