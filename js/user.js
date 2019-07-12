(function(_super){
    function User(username, password) {
        this._username = username;
        this._password = password;
    }

    User.prototype.getUsername = function () {
        return this._username;
    }

    User.prototype.getPassword = function () {
        return this._password;
    }

    User.prototype.equals = function (user) {
        if (user instanceof User) {
            return (this._username == user._username) && (this._password == user._password); 
        }

        return false;
    }

    _super.User = User;
})(window.Philips.Objects);