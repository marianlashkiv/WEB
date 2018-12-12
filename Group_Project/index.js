function myFunction(){
    var input,filter,table,tr;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    table = document.getElementById('table');
    tr = table.getElementsByTagName('tr');

    for (var i=0; i<tr.length; i++) {
        if (tr[i].innerHTML.toUpperCase().indexOf(filter) > -1){
            tr[i].style.display = "block";
        }
        else {
            tr[i].style.display = "none";
        }
    }
}
function newTableRow() {
    var table = document.getElementById('table');
    var newRow = document.createElement('tr');
    newRow.innerHTML = '' +
        '<td width="210"><textarea class="newRowInput"></textarea></td>' +
        '<td width="100" ><input type="text" class="newRowInput"></td>' +
        '<td width="116" ><input type="text" class="newRowInput"></td>' +
        '<td width="47" ><input type="text" class="newRowInput"></td>' +
        '<td width="45" ><input type="text" class="newRowInput"></td>' +
        '<td width="47" ><input type="text" class="newRowInput"></td>' +
        '<td width="66" ><input type="text" class="newRowInput"></td>' +
        '';
    table.appendChild(newRow);
}