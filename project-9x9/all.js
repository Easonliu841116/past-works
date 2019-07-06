for (var i = 1; i < 10; i++) {
    var output = document.querySelector('.flexWrap');
    var titleStr = '';
    var contentStr = '';
    var total = '';
    var outputValue = '';
    contentStr += `<h2>${i}</h2>`;
    for (var j = 1; j < 10; j++) {
        contentStr += `<li>${i} X ${j} = ${i * j}</li>`;
    }
    total = titleStr + contentStr;
    outputValue = `<ul class="list list${i}"> ${total} </ul>`;
    output.innerHTML += `<div class="main main${i}">${outputValue}</div>`;
}