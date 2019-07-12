(function(){
    document.getElementById('submit').addEventListener('click', function() {
        var username = document.getElementById('uname');
        var password = document.getElementById('psw');

        // validate ?

        var currentUser = new User(username, password);

        // get all users 
        var users = window.localStorage.getItem('users');

        for (var index = 0; index < users.length; index++) {
            if (users[index].equals(currentUser)) {
                document.getElementById('statusLabel').style.visibility = "hidden";
                var validUser = true;
                break;
            } else {
                document.getElementById('statusLabel').style.visibility = "visible";
            }
        }
        
        if (validUser) {
            window.location = 'patientPageView.html';
        }
    });
})();