(function(globalRef){
    var u1 = new globalRef.Philips.Objects.User('u1','p1');
    var u2 = new globalRef.Philips.Objects.User('u2','p2');

    globalRef.localStorage.setItem("users", JSON.stringify([u1, u2])); 

})(window);
