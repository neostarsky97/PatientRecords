(function (_super) {

    function Patient(mrn, name, age, gender, reports) {
        this._mrn = mrn;
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._reports = reports;
    }

    Patient.prototype.getMrn = function () {
        return this._mrn;
    }

    Patient.prototype.getAge = function () {
        return this._age;
    }

    Patient.prototype.getGender = function () {
        return this._gender;
    }

    Patient.prototype.getReports = function () {
        return this._reports;
    }

    Patient.prototype.addRecord = function (report) {
        this._reports.push(report);
    }

    Patient.prototype.equals = function (patient) {
        if (patient instanceof Patient) {
            return (this._mrn == patient._mrn) && 
                   (this._name == patient._name) && 
                   (this._age == patient._age) && 
                   (this._gender == patient._gender);
        }  
        
        return false;
    }

    _super.Patient = Patient;
})(window.Philips.Objects);