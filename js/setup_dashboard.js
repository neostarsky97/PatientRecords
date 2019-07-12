(function(globalRef){
    var table = globalRef.document.getElementById('ptable');

    var patients = JSON.parse(globalRef.localStorage.getItem('patients'));

    for (var index = 0; index < patients.length; index++) {
        var actualPatientObject = new globalRef.Philips.Objects.Patient(patients[index]._mrn, patients[index]._name, patients[index]._age, patients[index]._gender, patients[index]._reports);
        
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = actualPatientObject.getMrn();
        row.addEventListener('click', function(){
            var display = globalRef.document.getElementById('patient_display');
            var data = '<h4>Patient Details</h4>'
            data += 'Name: ' + actualPatientObject.getName() + '<br>';
            data += 'Age: ' + actualPatientObject.getAge() + '<br>';
            data += 'Gender: ' + actualPatientObject.getGender() + '<br>';
            display.innerHTML = data;
        });
    }
})(window);