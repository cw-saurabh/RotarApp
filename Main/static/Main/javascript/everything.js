let membersCount = 0;
let membersIndex = 0;
let gbmsCount = 0;
let gbmsIndex = 0;
let bodsCount = 0;
let bodsIndex = 0;
let futureEventsCount = 0;
let futureEventsIndex = 0;
let eventsCount = 0;
let eventsIndex = 0;
let month = "this month";
let countN = 0;
let countn = 0;
let paid = 0;
let owedMoney = 0;
let pending = 0;

let gbmlist = []
let bodlist = []
let futureEventlist = []
let eventlist = []


let memberMatrix00 = 0, memberMatrix01 = 0, memberMatrix02 = 0, memberMatrix03 = 0, memberMatrix10 = 0, memberMatrix11 = 0, memberMatrix12 = 0, memberMatrix13 = 0, memberMatrix20 = 0, memberMatrix21 = 0, memberMatrix22 = 0, memberMatrix23 = 0, memberMatrix30 = 0, memberMatrix31 = 0, memberMatrix32 = 0, memberMatrix33 = 0, memberMatrix40 = 0, memberMatrix41 = 0, memberMatrix42 = 0, memberMatrix43 = 0, memberMatrix50 = 0, memberMatrix51 = 0, memberMatrix52 = 0, memberMatrix53 = 0;


let active="Admin";

let order = {
    'Admin' : 0,
    'Avenue' : 1,
    'Others' : 2,

}

let requiredFields = {
    'Admin' : ['month',
                'memberMatrix00','memberMatrix01','memberMatrix02',
                'memberMatrix10','memberMatrix11','memberMatrix12',
                'memberMatrix20','memberMatrix21','memberMatrix22',
                'memberMatrix30','memberMatrix31','memberMatrix32',
                'memberMatrix40','memberMatrix41','memberMatrix42',
                'dues04'],
    'Avenue' : [],
    'Others' : ['bulletin00','bulletin01','bulletin02','bulletin05']
};

$(document).ready(function(){
    
        $("#memberMatrix03").val(memberMatrix03);
        $("#memberMatrix13").val(memberMatrix13);
        $("#memberMatrix23").val(memberMatrix23);
        $("#memberMatrix33").val(memberMatrix33);
        $("#memberMatrix43").val(memberMatrix43);
        $("#memberMatrix50").val(memberMatrix50);
        $("#memberMatrix51").val(memberMatrix51);
        $("#memberMatrix52").val(memberMatrix52);
        $("#memberMatrix53").val(memberMatrix53);

        let now = new Date();
        let month = parseInt(("0" + (now.getMonth() + 1)).slice(-2))-1;
        let today2 = now.getFullYear()+"-"+(month<10?"0"+month.toString():month.toString()) ;   
        $("input[type=month]").val(today2); 
        

    if($(window).width()>1000)
    {
        $("#data01").html("<p class=\"text-center\">Male");
        $("#data02").html("<p class=\"text-center\">Female");
        $("#data03").html("<p class=\"text-center\">Other");
        $("#data04").html("<p class=\"text-center\">Total");
        $("#data10").html("<p>Members at the beginning of "+month+" <b style=\"color:red\"> **</b>");
        $("#data20").html("<p>Members Added<b style=\"color:red\"> **</b>");
        $("#data30").html("<p>Members Left<b style=\"color:red\"> **</b>");
        $("#data40").html("<p>Prospective<b style=\"color:red\"> **</b>");
        $("#data50").html("<p>Guests (RYE /NGSE /Family)<b style=\"color:red\"> **</b>");
        $("#data60").html("<p>Total");
    }

    appendMember();
    appendGeneralBodyMeeting();
    appendBoardOfDirectorsMeeting();
    appendFutureEvent();
    appendEvent();
    fillDues();

    $("#reportButton00,#reportButton10,#reportButton20").html("Prev");
    $("#member1Del,#gbm1Del,#bod1Del,#futureEvent1Del,#event1Del").attr('disabled', true);
    // $("#reportButton21").attr('disabled', true);

    // $("#bar").css('width','0%');
    updateMonth();
    
});

function updateMatrix(id) {
    if(id.includes("memberMatrix00"))
    {
        if($("#memberMatrix00").val()!='')
        memberMatrix00 = parseInt($("#memberMatrix00").val());
        else
        memberMatrix00 = 0;
    }
    if(id.includes("memberMatrix01"))
    {
        if($("#memberMatrix01").val()!='')
        memberMatrix01 = parseInt($("#memberMatrix01").val());
        else
        memberMatrix01 = 0;
    }
    if(id.includes("memberMatrix02"))
    {
        if($("#memberMatrix02").val()!='')
        memberMatrix02 = parseInt($("#memberMatrix02").val());
        else
        memberMatrix02 = 0;
    }
    if(id.includes("memberMatrix10"))
    {
        if($("#memberMatrix10").val()!='')
        memberMatrix10 = parseInt($("#memberMatrix10").val());
        else
        memberMatrix10 = 0;
    }
    if(id.includes("memberMatrix11"))
    {
        if($("#memberMatrix11").val()!='')
        memberMatrix11 = parseInt($("#memberMatrix11").val());
        else
        memberMatrix11 = 0;
    }
    if(id.includes("memberMatrix12"))
    {
        if($("#memberMatrix12").val()!='')
        memberMatrix12 = parseInt($("#memberMatrix12").val());
        else
        memberMatrix12 = 0;
    }
    if(id.includes("memberMatrix20"))
    {
        if($("#memberMatrix20").val()!='')
        memberMatrix20 = parseInt($("#memberMatrix20").val());
        else
        memberMatrix20 = 0;
    }
    if(id.includes("memberMatrix21"))
    {
        if($("#memberMatrix21").val()!='')
        memberMatrix21 = parseInt($("#memberMatrix21").val());
        else
        memberMatrix21 = 0;
    }
    if(id.includes("memberMatrix22"))
    {
        if($("#memberMatrix22").val()!='')
        memberMatrix22 = parseInt($("#memberMatrix22").val());
        else
        memberMatrix22 = 0;
    }
    if(id.includes("memberMatrix30"))
    {
        if($("#memberMatrix30").val()!='')
        memberMatrix30 = parseInt($("#memberMatrix30").val());
        else
        memberMatrix30 = 0;
    }
    if(id.includes("memberMatrix31"))
    {
        if($("#memberMatrix31").val()!='')
        memberMatrix31 = parseInt($("#memberMatrix31").val());
        else
        memberMatrix31 = 0;
    }
    if(id.includes("memberMatrix32"))
    {
        if($("#memberMatrix32").val()!='')
        memberMatrix32 = parseInt($("#memberMatrix32").val());
        else
        memberMatrix32 = 0;
    }
    if(id.includes("memberMatrix40"))
    {
        if($("#memberMatrix40").val()!='')
        memberMatrix40 = parseInt($("#memberMatrix40").val());
        else
        memberMatrix40 = 0;
    }
    if(id.includes("memberMatrix41"))
    {
        if($("#memberMatrix41").val()!='')
        memberMatrix41 = parseInt($("#memberMatrix41").val());
        else
        memberMatrix41 = 0;
    }
    if(id.includes("memberMatrix42"))
    {
        if($("#memberMatrix42").val()!='')
        memberMatrix42 = parseInt($("#memberMatrix42").val());
        else
        memberMatrix42 = 0;
    }
    
    
    memberMatrix03 = memberMatrix00 + memberMatrix01 + memberMatrix02;
    memberMatrix13 = memberMatrix10 + memberMatrix11 + memberMatrix12;
    memberMatrix23 = memberMatrix20 + memberMatrix21 + memberMatrix22;
    memberMatrix33 = memberMatrix30 + memberMatrix31 + memberMatrix32;
    memberMatrix43 = memberMatrix40 + memberMatrix41 + memberMatrix42;
    
    memberMatrix50 = memberMatrix00 + memberMatrix10 - memberMatrix20;
    memberMatrix51 = memberMatrix01 + memberMatrix11 - memberMatrix21;
    memberMatrix52 = memberMatrix02 + memberMatrix12 - memberMatrix22;
    memberMatrix53 = memberMatrix03 + memberMatrix13 - memberMatrix23;
    
    $("#memberMatrix03").val(memberMatrix03);
    $("#memberMatrix13").val(memberMatrix13);
    $("#memberMatrix23").val(memberMatrix23);
    $("#memberMatrix33").val(memberMatrix33);
    $("#memberMatrix43").val(memberMatrix43);
    $("#memberMatrix50").val(memberMatrix50);
    $("#memberMatrix51").val(memberMatrix51);
    $("#memberMatrix52").val(memberMatrix52);
    $("#memberMatrix53").val(memberMatrix53);

    updateProgress();
}
//
function updateMonth() {
    let monthNo = $("#month").val().slice(5,7);
    if(monthNo == "01")
    month="January";
    else if(monthNo == "02")
    month="February";
    else if(monthNo == "03")
    month="March";
    else if(monthNo == "04")
    month="April";
    else if(monthNo == "05")
    month="May";
    else if(monthNo == "06")
    month="June";
    else if(monthNo == "07")
    month="July";
    else if(monthNo == "08")
    month="August";
    else if(monthNo == "09")
    month="September";
    else if(monthNo == "10")
    month="October";
    else if(monthNo == "11")
    month="November";
    else if(monthNo == "12")
    month="December";
    
    if($(window).width()>1000)
    $("#data10").html("<p>Members at the beginning of "+month+" <b style=\"color:red\"> **</b>");
    updateProgress();
}

function updateProgress(id) {
    let filledCount = 0;
    let totalCount = requiredFields['Admin'].length+requiredFields['Avenue'].length+requiredFields['Others'].length;
    
    for(let x=0;x<requiredFields['Admin'].length;x++)
    {
        let input = document.getElementById(requiredFields['Admin'][x]);
        if(input.value.length != 0) {
            filledCount += 1;
        }
    }
    
    for(let x=0;x<requiredFields['Avenue'].length;x++)
    {
        let input = document.getElementById(requiredFields['Avenue'][x]);
        if(input.value.length != 0) {
            filledCount += 1;
        }    
    }

    // alert(requiredFields['Others'].length[0]);
    
    for(let x=0;x<requiredFields['Others'].length;x++)
    {
        let input = document.getElementById(requiredFields['Others'][x]);
        if(input.value.length != 0) {
            filledCount += 1;
        }    
    }
    
    let progress = parseInt(filledCount/totalCount*100);
    $("#bar").css('width',progress.toString()+'%');

    if(progress==100)
    {
        $("#reportButton21").attr('disabled', false);
    }
    countN = ($("#memberMatrix03").val());
    countn = ($("#memberMatrix13").val());
    paid = ($("#dues04").val());
    fillDues();
}

function isFilled(currentSectionName) {
    let flag1 = false, flag2=false, flag3=false;

    let filledCount = 0;
    for(let x=0;x<requiredFields[currentSectionName].length;x++)
    {
        
        let input = document.getElementById(requiredFields[currentSectionName][x]);
        input.className = "";
        if(input.value == "" && input.className == "") {
            input.className = 'empty';
        }
        else if(input.value.length != 0) {
            filledCount += 1;
        }    
    }

    if (filledCount == requiredFields[currentSectionName].length) flag1 = true;
    if(flag1) {
        $("#errorMessages").html("");
        return true;
    }
    else {
        $("#errorMessages").html("<p><br>You must have missed some of the required fields. Fill them in order to proceed.</p>");
    }
    // if(flag1)
    // {
    //     let correctCount=0;
    //     for(let x=0;x<requiredFieldsNumeric[currentSectionName].length;x++)
    //     {
            
    //         let input = document.getElementById(requiredFieldsNumeric[currentSectionName][x]);
    //         if(input.value!="" && isNaN(input.value))
    //         input.className = 'empty';
    //         else if(input.value!="" && !isNaN(input.value))
    //         correctCount+=1;
    //     }
    //     if (correctCount == requiredFieldsNumeric[currentSectionName].length) flag2 = true;
    //     if(flag2) {
    //         $("#errorMessages").html("");
    //     }
    //     else{
    //         $("#errorMessages").append("<p><br>Invalid input/inputs received. Numeric values are expected.</p>");
    //     }
    // }
    // if(flag2)
    // {
            
    //     let correctlengthCount = 0;
    //     let totalCount = 0;
        
    //     for (key in characterLimit[currentSectionName])
    //     {
    //         let input = document.getElementById(key);
    //         totalCount+=1;
    //         if (input.value.length>characterLimit[currentSectionName][key])
    //         input.className = 'empty';
    //         else 
    //         correctlengthCount+=1;
    //     }
        
    //     if(correctlengthCount==totalCount) flag3=true;
    //     if(flag3) {
    //         $("#errorMessages").html("");
    //         return true;
    //     }
    //     else{
    //         $("#errorMessages").append("<p><br>Character limit exceeded. check highlighted fields</p>");
    //     }
    // }
    return false;
}

function customsubmit() {
    $("#gbmlist").val(gbmlist);
    $("#bodlist").val(bodlist);
    $("#eventlist").val(eventlist);
    $("#futureEventlist").val(futureEventlist);
    let flag = false;
    flag = isFilled(active);
    if(flag)
    {
        $("form").submit();
    }
    
}


function openSection(sectionName) {

    let flag = false;

    if(order[sectionName] > order[active]) {
        flag = isFilled(active);
    }
    else if (order[sectionName] < order[active]) {
        flag = true;
    }
    if(flag) {
        active=sectionName;
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) 
        {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) 
        {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        // document.getElementById(sectionName).style.display = "block";
        // evt.currentTarget.className += " active";
        document.getElementById(sectionName+"Link").className+= " active";
        document.getElementById(sectionName).style.display = "block";
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
}

function appendMember() {
    membersCount+=1;
    membersIndex+=1;
    $("#membersData").append(`
    
    <div class="row" id="member`+membersIndex+`">
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date of joining</p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="member`+membersIndex+`-0" name="member`+membersIndex+`-0">
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Member</p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="text" id="member`+membersIndex+`-1" name="member`+membersIndex+`-1">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Type</p><br>
            <select id="member`+membersIndex+`-2" name="member`+membersIndex+`-2">
                <option>Inducted Member</option>
                <option>Prospective Member</option>
                <option>Guest Member</option>
                <option style="display:none" selected></option>
            </select>
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Gender</p><br>
            <select id="member`+membersIndex+`-3" name="member`+membersIndex+`-3">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>Prefer not to say</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-tint" aria-hidden="true"></i>&nbsp;&nbsp;Blood Group</p><br>
            <select id="member`+membersIndex+`-4" name="member`+membersIndex+`-4">
                <option>A +</option>
                <option>A -</option>
                <option>A Unknown</option>
                <option>B +</option>
                <option>B -</option>
                <option>B Unknown</option>
                <option>AB +</option>
                <option>AB -</option>
                <option>AB Unknown</option>
                <option>O +</option>
                <option>O -</option>
                <option>O Unknown</option>
                <option>Unknown</option>
                <option style="display:none" selected></option>
            </select>
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-id-card-o" aria-hidden="true"></i>&nbsp;&nbsp;Rotary Id</p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="text" id="member`+membersIndex+`-5" name="member`+membersIndex+`-5">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date of Birth</p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="member`+membersIndex+`-6" name="member`+membersIndex+`-6">
        </div>   
        <div class="col-lg-3">
            <br>
            <button type="button" id="member`+membersIndex+`Del" onclick="deleteRow('member',this.id)">Delete Row</button>
        </div>
        <div class="col-lg-12">
            <hr style="border-width : thin; border-color:grey;border-radius : 4px;">
        </div>
    </div>
    
    `);
}  

function appendGeneralBodyMeeting() {
    gbmsCount+=1;
    gbmsIndex+=1;
    
    $("#generalBodyMeetings").append(`
    <div class="row" id="gbm`+gbmsIndex+`">
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Meeting No. <b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" min=0 step=1 max=31 oninput="validity.valid||(value='');" id="gbm`+gbmsIndex+`-0" name="gbm`+gbmsIndex+`-0">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="gbm`+gbmsIndex+`-1" name="gbm`+gbmsIndex+`-1">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="text" maxlength='100' id="gbm`+gbmsIndex+`-2" name="gbm`+gbmsIndex+`-2">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?<b style="color:red"> *</b></p><br>
            <select id="gbm`+gbmsIndex+`-3" name="gbm`+gbmsIndex+`-3">
                <option value="True">Yes</option>
                <option value="False" selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?<b style="color:red"> *</b></p><br>
            <select id="gbm`+gbmsIndex+`-4" name="gbm`+gbmsIndex+`-4">
            <option value="True">Yes</option>
            <option value="False" selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><b style="color:red"> **</b><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" min=0 step=1 max=9999 oninput="validity.valid||(value='');" id="gbm`+gbmsIndex+`-5" name="gbm`+gbmsIndex+`-5">
        </div>
        <div class="col-lg-3">
            <br>
            <button type="button" id="gbm`+gbmsIndex+`Res" onclick="resetRow('gbm',this.id)">Reset Row</button>
        </div>
        <div class="col-lg-3">
            <br>
            <button type="button" id="gbm`+gbmsIndex+`Del" onclick="deleteRow('gbm',this.id)">Delete Row</button>
        </div>
        <div class="col-lg-12">
            <hr style="border-width : thin; border-color:grey;border-radius : 4px;">
        </div>
    </div>
    
    `);
    
    requiredFields['Admin'].push(`gbm`+gbmsIndex+`-0`,`gbm`+gbmsIndex+`-1`,`gbm`+gbmsIndex+`-2`,`gbm`+gbmsIndex+`-3`,`gbm`+gbmsIndex+`-4`,`gbm`+gbmsIndex+`-5`);
    gbmlist.push("gbm"+gbmsIndex);
}

function appendBoardOfDirectorsMeeting() {
    bodsCount+=1;
    bodsIndex+=1;

    $("#boardOfDirectorsMeetings").append(`
    <div class="row" id="bod`+bodsIndex+`">
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Meeting No.<b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" min=0 step=1 max=31 oninput="validity.valid||(value='');" id="bod`+bodsIndex+`-0" name="bod`+bodsIndex+`-0">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="bod`+bodsIndex+`-1" name="bod`+bodsIndex+`-1">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="text" maxlength="100" id="bod`+bodsIndex+`-2" name="bod`+bodsIndex+`-2">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?<b style="color:red"> *</b></p><br>
            <select id="bod`+bodsIndex+`-3" name="bod`+bodsIndex+`-3">
                <option value="True">Yes</option>
                <option value="False" selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?<b style="color:red"> *</b></p><br>
            <select id="bod`+bodsIndex+`-4" name="bod`+bodsIndex+`-4">
                <option value="True">Yes</option>
                <option value="False" selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees<b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" min=0 step=1 max=9999 oninput="validity.valid||(value='');" id="bod`+bodsIndex+`-5" name="bod`+bodsIndex+`-5">
        </div>
        <div class="col-lg-3">
            <br>
            <button type="button" id="bod`+bodsIndex+`Res" onclick="resetRow('bod',this.id)">Reset Row</button>
        </div>
        <div class="col-lg-3">
            <br>
            <button type="button" id="bod`+bodsIndex+`Del" onclick="deleteRow('bod',this.id)">Delete Row</button>
        </div>
        <div class="col-lg-12">
            <hr style="border-width : thin; border-color:grey;border-radius : 4px;">
        </div>
    </div>
    
    `);
    requiredFields['Admin'].push(`bod`+bodsIndex+`-0`,`bod`+bodsIndex+`-1`,`bod`+bodsIndex+`-2`,`bod`+bodsIndex+`-3`,`bod`+bodsIndex+`-4`,`bod`+bodsIndex+`-5`);
    bodlist.push("bod"+bodsIndex);
}

function appendFutureEvent() {
    futureEventsCount+=1;
    futureEventsIndex+=1;
    
    $("#futureEvents").append(`
    <div class="row" id="futureEvent`+futureEventsIndex+`" >
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="futureEvent`+futureEventsIndex+`-0" name="futureEvent`+futureEventsIndex+`-0">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Name<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()" maxlength="15" type="text" id="futureEvent`+futureEventsIndex+`-1" name="futureEvent`+futureEventsIndex+`-1">
        </div>
        <div class="col-lg-4">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Details<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()" maxlength="100" type="text" id="futureEvent`+futureEventsIndex+`-2" name="futureEvent`+futureEventsIndex+`-2">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue<b style="color:red"> *</b></p><br>
            <select id="futureEvent`+futureEventsIndex+`-3" name="futureEvent`+futureEventsIndex+`-3">
                <option value="CM">Community Service</option>
                <option value="CS">Club Service</option>
                <option value="IS">International</option>
                <option value="PD">Professional Development</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-2">
            <br>
            <button type="button" id="futureEvent`+futureEventsIndex+`Del" onclick="deleteRow('futureEvents',this.id)">Delete Row</button>
        </div>
        <div class="col-lg-12">
            <hr style="border-width : thin; border-color:grey;border-radius : 4px;">
        </div>
    </div>
    `);
    
    requiredFields['Others'].push(`futureEvent`+futureEventsIndex+`-0`,`futureEvent`+futureEventsIndex+`-1`,`futureEvent`+futureEventsIndex+`-2`,`futureEvent`+futureEventsIndex+`-3`);
    futureEventlist.push("futureEvent"+futureEventsIndex);

}

function validateUrl(id) {
    
    let input = document.getElementById(id);
    var str = input.value;
    var patt1 = /^(https:\/\/www.instagram.com\/|-|https:\/\/drive.google.com\/)/g;
    var res = patt1.test(str);
    return res;
    
}

function appendEvent() {
    eventsCount+=1;
    eventsIndex+=1;
    
    $("#events").append(`
    <div class="row" id="event`+eventsIndex+`" >
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="date" id="event`+eventsIndex+`-0" name="event`+eventsIndex+`-0">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Event<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()" maxlength="15" type="text" id="event`+eventsIndex+`-1" name="event`+eventsIndex+`-1">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue<b style="color:red"> *</b></p><br>
            <select id="event`+eventsIndex+`-2" name="event`+eventsIndex+`-2">
                <option value="CM">Community Service</option>
                <option value="CS">Club Service</option>
                <option value="IS">International Service</option>
                <option value="PD">Professional Development</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees<b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()" min=0 step=1 max=99999 oninput="validity.valid||(value='');" type="number" id="event`+eventsIndex+`-3" name="event`+eventsIndex+`-3">
        </div>    
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;Volunteer Hrs<b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" Placeholder="Hrs" min=0 step=1 max=99999 oninput="validity.valid||(value='');" id="event`+eventsIndex+`-4" name="event`+eventsIndex+`-4">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;Funds raised<b style="color:red"> **</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="number" Placeholder="Rs. " min=0 max=9999999 step=1 oninput="validity.valid||(value='');" id="event`+eventsIndex+`-5" name="event`+eventsIndex+`-5">
        </div>
        <div class="col-lg-5">
            <p class="label"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;Description<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="text" maxlength="100" id="event`+eventsIndex+`-6" name="event`+eventsIndex+`-6">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;&nbsp;Instagram Link of the Event<b style="color:red"> *</b></p><br>
            <input autocomplete="off" onchange="updateProgress()"  type="url" maxlength="100" oninput="validateUrl(this.id)||(value='');" id="event`+eventsIndex+`-7" name="event`+eventsIndex+`-7">
        </div>
        <div class="col-lg-2">
            <br>
            <button type="button" id="event`+eventsIndex+`Del" onclick="deleteRow('events',this.id)">Delete Row</button>
        </div>
        <div class="col-lg-12">
            <hr style="border-width : thin; border-color:grey;border-radius : 4px;">
        </div>
    </div>
    
    `);
    
    requiredFields['Avenue'].push(`event`+eventsIndex+`-0`,`event`+eventsIndex+`-1`,`event`+eventsIndex+`-2`,`event`+eventsIndex+`-3`,`event`+eventsIndex+`-4`,`event`+eventsIndex+`-5`,`event`+eventsIndex+`-6`,`event`+eventsIndex+`-7`);
    eventlist.push("event"+eventsIndex);
}

function fillDues(){
    owedMoney = (parseInt(countN)+parseInt(countn))*300;
    pending = owedMoney - parseInt(paid);
    $("#dues").html(`
    <div class="col-lg-6">
        <p class="label" id="duesLabel01">Total number of members at the <br>beginning of `+month+` (N)</p><br>
        <input autocomplete="off" onchange="updateProgress()"  type="text" name="dues01"  id="dues01" value="`+countN+`" readonly>
    </div>
    <div class="col-lg-6">
        <p class="label" id="duesLabel02">Number of members inducted <br>in `+month+` (n)</p><br>
        <input autocomplete="off" onchange="updateProgress()"  type="text" name="dues02"  id="dues02" value="`+countn+`" readonly>
    </div>
    <div class="col-lg-6">
    <p class="label">Dues paid upto the last month <br>@ INR 300
        Per member (P)<b style="color:red"></b>
        </p><br>
    <input autocomplete="off" onchange="updateProgress()"  type="text" name="dues00"  id="dues00" value="0" readonly>
    </div>
    <div class="col-lg-6">
        <p class="label" id="duesLabel03">District Dues paid in `+month+`<b style="color:red"> **</b><br>(p)</p><br>
        <input autocomplete="off" onchange="updateProgress()"  type="number" min=0 step=1 max=`+owedMoney+` oninput="validity.valid||(value='');" name="dues04" id="dues04" value="`+paid+`">
    </div>
    <div class="col-lg-6">
        <p class="label">The fees amount that the district<br>owes : (N + n) * 300</p><br>
        <input autocomplete="off" onchange="updateProgress()"  type="text" name="dues03"  id="dues03" value="`+owedMoney+`" readonly>
    </div>
    <div class="col-lg-6">
        <p class="label">Pending dues<br>(N + n) * 300 - (P + p)</p>

        <input autocomplete="off" onchange="updateProgress()"  type="text" name="dues05"  id="dues05" value="`+pending+`" readonly>
    </div>
    `);
}

function deleteRow(dataType, clicked) {
    let target = clicked.replace("Del", "");
    if(dataType=="member")
    {
        membersCount-=1;
    }
    else if(dataType=="gbm")
    {
        gbmsCount-=1;
        // remove from requiredFields
        let index = requiredFields['Admin'].indexOf(target+"-0");
        let n = 6;
        requiredFields['Admin'].splice(index,n);
        
        //remove from gbmlist
        index = gbmlist.indexOf(target);
        gbmlist.splice(index,1);
    }
    else if(dataType=="bod")
    {
        bodsCount-=1;
        let index = requiredFields['Admin'].indexOf(target+"-0");
        let n = 6;
        requiredFields['Admin'].splice(index,n);
        
        index = bodlist.indexOf(target);
        bodlist.splice(index,1);
        
    }
    else if(dataType=="events")
    {
        eventsCount-=1;
        let index = requiredFields['Avenue'].indexOf(target+"-0");
        let n = 8;
        requiredFields['Avenue'].splice(index,n);
        
        index = eventlist.indexOf(target);
        eventlist.splice(index,1);
        
    }
    else if(dataType=="futureEvents")
    {
        futureEventsCount-=1;
        let index = requiredFields['Others'].indexOf(target+"-0");
        let n = 4;
        requiredFields['Others'].splice(index,n);
        
        index = futureEventlist.indexOf(target);
        futureEventlist.splice(index,1);
        
    } 
    $('#'+target).html('');
}; 

function resetRow(dataType, clicked) {
    $('#'+clicked.replace("Res", "")+' :input').val('');
}
