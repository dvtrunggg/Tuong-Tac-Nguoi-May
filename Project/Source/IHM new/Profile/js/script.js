function editProfile() {
    document.getElementById("info-header").innerHTML = 
    '<div class="row">\n' +
    '    <div class="avatar col-md-3">\n' +
    '       <img class="img-fluid" src="images/user.png">\n' +
    '    </div>\n' +
    '    <div class="info col-md-4">\n' +
    '        <p class="name">Thierry Tancredi</p>\n' +
    '       <div class="change-avatar">\n' +
    '           <form>\n' +
    '               <label for="myfile">Select a file:</label>\n' +
    '               <input type="file" id="myfile" name="myfile"><br><br>\n' +
    '           </form>\n' +
    '       </div>\n' +
    '    </div>\n' +
    '    <div class="edit-profile" onclick="editProfile()">\n' +
    '        <p><i class="fas fa-edit"></i>Edit</p>\n' +
    '    </div>\n' +
    '</div>\n' ;

    
    let field = document.querySelectorAll("#field");
   
    field[0].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" Thierry Tancredi"><br><br>';
    field[1].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" 01/01/2000"><br><br>';
    field[2].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" 0123456789"><br><br>';
    field[3].innerHTML = '<input id="text-change" type="text" name="fname"><br><br>';
    field[4].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" 1m70"><br><br>';
    field[5].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" 49kg"><br><br>';
    field[6].innerHTML = '<input id="text-change" type="text" name="fname" placeholder=" Student"><br><br>';
    field[7].innerHTML = '<input id="text-change" type="text" name="fname" placeholder="Street style, Sporty style"><br><br>';
    /*
    for (let i=0; i < field.length; i++) {
        field[i].innerHTML = '<input id="text-change" type="text" name="fname"><br><br>';
    }
    */
    /*
    var node = document.createElement("button");
    node.setAttribute("id", "confirm-change");
    var textnode = document.createTextNode("Confirm change");
    node.appendChild(textnode);
    document.getElementById("content-side").appendChild(node);
    */

    document.getElementById("confirm-change").innerHTML = 
    '<a href="profile-changed.html"><button type="submit" class="btn btn-primary">Comfirm sign in</button></a>';
}


