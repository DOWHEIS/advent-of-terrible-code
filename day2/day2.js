function GetUlLis(ulId) {
    const ul = document.getElementById(ulId);
    const lis = ul.getElementsByTagName('li');
    //get all li text content
    const lisText = [];
    for (let i = 0; i < lis.length; i++) {
        lisText.push(lis[i].textContent);
    }
    return lisText;
}

const array1 = GetUlLis('array1')
const array2 = GetUlLis('array2')