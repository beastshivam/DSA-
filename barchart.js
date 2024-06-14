function getMaxElement(arr) {
    var maxiEle = -Infinity;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > maxiEle) {
            maxiEle = arr[i];
        }
    }
    return maxiEle;
}
function barChart(arr) {
    var height = getMaxElement(arr);
    var widgth = arr.length;
    for (var currFloor = height; currFloor >= 1; currFloor--) {
        var s = "";
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] >= currFloor)
                s += "*";
            else
                s += " ";
        }
        console.log(s);
    }
}
barChart([7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7, 6, 5, 4, 3, 2, 1, 2, 3, 4, 5, 6, 7]);
