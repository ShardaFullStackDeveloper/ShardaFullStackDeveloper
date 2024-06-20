// call add brick function
let currentCount = 1;
let brickAdd = ['<div class="brick"></div>'];
function addBrick() {
    if (currentCount <= 19) {
        currentCount++;
brickAdd.push('<div class="brick"></div>');
document.getElementById("right-container").innerHTML = brickAdd;

    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#99BC85";

}

// remove bricks
function removeBrick() {
    if (currentCount >= 1) {
        currentCount--;
        brickAdd.pop();
        document.getElementById("right-container").innerHTML = brickAdd;
    }
    document.getElementById("count").innerHTML = currentCount;
    document.getElementById("count").style.color = "#D80032"
}
