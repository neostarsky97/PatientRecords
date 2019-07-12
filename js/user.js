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

    _super.User = User;
})(window.Philips.Objects);