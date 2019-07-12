(function(globalRef){

    var dr1 = new globalRef.Philips.Objects.DiagnosticReport('DRN1', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr2 = new globalRef.Philips.Objects.DiagnosticReport('DRN2', '11/07/2018', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr3 = new globalRef.Philips.Objects.DiagnosticReport('DRN3', '18/06/2016', 'Dr. Niel Armstrong', 'kjbsdvkbdkvskdvs');
    var dr4 = new globalRef.Philips.Objects.DiagnosticReport('DRN4', '10/08/2016', 'Dr. Niel Armstrong', 'kjbsdvkbdkvskdvs');
    var dr5 = new globalRef.Philips.Objects.DiagnosticReport('DRN5', '07/02/2019', 'Dr. Ricky Martin', 'kjbsdvkbdkvskdvs');
    var dr6 = new globalRef.Philips.Objects.DiagnosticReport('DRN6', '31/05/2015', 'Dr. Michael Potter', 'kjbsdvkbdkvskdvs');

    var dr7 = new globalRef.Philips.Objects.DiagnosticReport('DRN7', '03/04/2014', 'Dr. Mark Ronson', 'kjbsdvkbdkvskdvs');
    var dr8 = new globalRef.Philips.Objects.DiagnosticReport('DRN8', '16/08/2016', 'Dr. Mary Washington', 'kjbsdvkbdkvskdvs');
    var dr9 = new globalRef.Philips.Objects.DiagnosticReport('DRN9', '27/02/2017', 'Dr. Abraham Lincoln', 'kjbsdvkbdkvskdvs');
    var dr10 = new globalRef.Philips.Objects.DiagnosticReport('DRN10', '19/09/2017', 'Dr. Mary Washington', 'kjbsdvkbdkvskdvs');

    var dr11 = new globalRef.Philips.Objects.DiagnosticReport('DRN11', '14/12/2016', 'Dr. Akshat Gupta', 'kjbsdvkbdkvskdvs');

    globalRef.localStorage.setItem("reports", JSON.stringify([dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8, dr9, dr10, dr11])); 
    globalRef.localStorage.setItem('report_index', '1004');

    var p1 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr1, dr2]);
    var p2 = new globalRef.Philips.Objects.Patient('MRN1001', 'Jason', '27', 'Male', [dr3, dr4, dr5]);
    var p3 = new globalRef.Philips.Objects.Patient('MRN1002', 'Kiran', '28', 'Male', [dr6]);
    var p4 = new globalRef.Philips.Objects.Patient('MRN1003', 'Lily', '30', 'Female', [dr7, dr8, dr9, dr10]);
    var p5 = new globalRef.Philips.Objects.Patient('MRN1004', 'Morgan', '24', 'Female', [dr11]);

    globalRef.localStorage.setItem("patients", JSON.stringify([p1, p2, p3, p4, p5]));

})(window);