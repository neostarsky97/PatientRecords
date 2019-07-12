(function(globalRef){

    var dr1 = new globalRef.Philips.Objects.DiagnosticReport('DRN1', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr2 = new globalRef.Philips.Objects.DiagnosticReport('DRN2', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr3 = new globalRef.Philips.Objects.DiagnosticReport('DRN3', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr4 = new globalRef.Philips.Objects.DiagnosticReport('DRN4', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr5 = new globalRef.Philips.Objects.DiagnosticReport('DRN5', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr6 = new globalRef.Philips.Objects.DiagnosticReport('DRN6', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr7 = new globalRef.Philips.Objects.DiagnosticReport('DRN7', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr8 = new globalRef.Philips.Objects.DiagnosticReport('DRN8', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr9 = new globalRef.Philips.Objects.DiagnosticReport('DRN9', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr10 = new globalRef.Philips.Objects.DiagnosticReport('DRN10', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');
    var dr11 = new globalRef.Philips.Objects.DiagnosticReport('DRN11', '29/01/2017', 'Dr. John Doe', 'kjbsdvkbdkvskdvs');

    globalRef.localStorage.setItem("reports", JSON.stringify([dr1, dr2, dr3, dr4, dr5, dr6, dr7, dr8, dr9, dr10, dr11])); 

    var p1 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr1, dr2]);
    var p2 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr3, dr4, dr5]);
    var p3 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr6]);
    var p4 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr7, dr8, dr9, dr10]);
    var p5 = new globalRef.Philips.Objects.Patient('MRN1000', 'Aron', '20', 'Male', [dr11]);

    globalRef.localStorage.setItem("patients", JSON.stringify([p1, p2, p3, p4, p5])); 

})(window);