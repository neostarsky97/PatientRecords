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

        var parent = globalRef.document.getElementById('patient_display');
        var button = globalRef.document.createElement('button');

        var recordCallBack = function () {
            var record_table = globalRef.document.getElementById('rtable_tbody');
            
            while(record_table.hasChildNodes()) {
                record_table.removeChild(record_table.firstChild);
            }

            for (var record_index = 0; record_index < this.length; record_index++) {
                var record_row = record_table.insertRow(record_index);

                console.log(this);
                var drnCell = record_row.insertCell(0);
                drnCell.innerHTML += this[record_index]._drn;
            
                var dateCell = record_row.insertCell(1);
                dateCell.innerHTML += this[record_index]._date;

                var doctorCell = record_row.insertCell(2);
                doctorCell.innerHTML += this[record_index]._doctor;

                var messageCell = record_row.insertCell(3);
                messageCell.innerHTML += this[record_index]._message;
            }
        }

        recordCallBack = recordCallBack.bind(actualPatientObject._reports);
        button.addEventListener('click', recordCallBack);
        parent.appendChild(button);
    }
})(window);