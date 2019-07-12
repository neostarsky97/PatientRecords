(function(globalRef){
    globalRef.document.getElementById('submit').addEventListener('click', function() {
        var username = globalRef.document.getElementById('uname').value;
        var password = globalRef.document.getElementById('psw').value;

        var statusLabel =  globalRef.document.getElementById('statusLabel');
        
        if (username == '' || password == '') {
            statusLabel.style.visibility = "visible";
            statusLabel.innerHTML = "Enter all fields.";            
            return;
        } 

        var currentUser = new globalRef.Philips.Objects.User(username, password);                
        // get all users 
        var users = JSON.parse(globalRef.localStorage.getItem('users'));
        // console.log(users);

        var validUser = false; 

        for (var index = 0; index < users.length; index++) {
            var userObject = new globalRef.Philips.Objects.User(users[index]._username, users[index]._password);            
            if (userObject.equals(currentUser)) {                
               statusLabel.style.visibility = "hidden";
                validUser = true;
                break;
            } else {                
                statusLabel.style.visibility = "visible";
            }
        }
        
        if (validUser) {
            globalRef.location = 'patientPageView.html';
        }
    });
})(window);