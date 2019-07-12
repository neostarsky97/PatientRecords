(function (_super){

    function DiagnosticReport(drn, date, doctor, message) {
        this._drn = drn;
        this._date = date;
        this._doctor = doctor;
        this._message = message;
    }

    DiagnosticReport.prototype.getDrn = function () {
        return this._drn;
    }

    DiagnosticReport.prototype.getDate = function () {
        return this._date;
    }

    DiagnosticReport.prototype.getDoctor = function () {
        return this._doctor;
    }

    DiagnosticReport.prototype.getMessage = function () {
        return this._message;
    }

    _super.DiagnosticReport = DiagnosticReport;
})(window.Philips.Objects);