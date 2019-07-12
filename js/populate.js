(function(){
    var u1 = new User('u1','p1');
    var u2 = new User('u2','p2');

    localStorage.setItem("users", JSON.stringify([u1, u2])); 

})();
