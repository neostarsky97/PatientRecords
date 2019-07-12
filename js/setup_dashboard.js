(function(globalRef){
    var table = globalRef.document.getElementById('ptable_tbody');

    var patients = JSON.parse(globalRef.localStorage.getItem('patients'));

    for (var index = 0; index < patients.length; index++) {
        var actualPatientObject = new globalRef.Philips.Objects.Patient(patients[index]._mrn, patients[index]._name, patients[index]._age, patients[index]._gender, patients[index]._reports);
        
        var row = table.insertRow(0);
        var cell = row.insertCell(0);
        cell.innerHTML = actualPatientObject.getMrn();
        var callBack = function(){
            var display = globalRef.document.getElementById('patient_info');
            var data = '';
            data += 'Name: ' + this.getName() + '<br>';
            data += 'Age: ' + this.getAge() + '<br>';
            data += 'Gender: ' + this.getGender() + '<br>';            
            display.innerHTML = data;
        }
        callBack = callBack.bind(actualPatientObject);
        row.addEventListener('click', callBack);

        var parent = globalRef.document.getElementById('patient_show_record_button');
        var button = globalRef.document.createElement("Show Records");
        var recordCallBack = function () {
            var record_table = ;
            
            var patientRecords = this.getReports();
            for (var record_index = 0; record_index < patientRecords.length; record_index++) {
                var record_row = record_table.insertRow(record_index);

                var drnCell = record_row
            }
        }

        recordCallBack = recordCallBack.bind(actualPatientObject);
        button.addEventListener('click', recordCallBack);
        parent.appendChild(button);
    }

    globalRef.document.getElementById('showRecord').addEventListener('click', function() {
        var table = globalRef.document.getElementById('rtable');
        
    });
})(window);