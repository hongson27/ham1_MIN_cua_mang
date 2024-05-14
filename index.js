function timMin(array) {
    if (array.length === 0) {
        alert('Mang ko co MIN');
    } else if (array.length === 1) {
        alert('Min la ' + array[0]);
    } else {
        let min = array[0];
        for (var i = 1; i < array.length; i++) {
            if (array[i] < min) {
                min = array[i];
            }
        }
        alert('Min la '+ min);
    }
}
let arr=[];
function taoMang() {

    let n = prompt('Nhap so luong phan tu mang:');
    for (let i=0; i<n; i++) {
        let input = prompt('nhap phan tu thu ' + i + ' :');
        arr.push(input);
    }
    alert('Mang cua ban la: ' + arr);
}
taoMang();
timMin(arr);