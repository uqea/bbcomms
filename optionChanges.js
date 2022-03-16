var nameInput = document.getElementById('ccName');
var nameInputBox = document.getElementById('nameInputBox');
var examPeriod = $('#examPeriodSelect').val();
$('#examPeriodSelect').on('change', function(){
    if(examPeriod == "midSem"){
        $('span#examPeriodSelected').html("<strong>Mid-Semester</strong>")
    }
    else if(examPeriod == "endOfSem"){
        $('span#examPeriodSelected').html("<strong>End-of-Semester</strong>")
    }
    else if(examPeriod == ""){
        $('span#examPeriodSelected').html("<strong>Choose your semester above</strong>")
    }
});
nameInputBox.addEventListener('input', function getText() {
    nameInput.innerText = nameInputBox.value;
});
$('body').change(function(){
    if(examPeriod != "" && nameInputBox.value != ""){
        $('#copyTemplateBtn').removeClass('d-none');
    }
    else{
        $('#copyTemplateBtn').addClass('d-none');
    }
});