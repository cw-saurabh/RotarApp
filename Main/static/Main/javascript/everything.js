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

let memberMatrix00 = 0, memberMatrix01 = 0, memberMatrix02 = 0, memberMatrix03 = 0, memberMatrix10 = 0, memberMatrix11 = 0, memberMatrix12 = 0, memberMatrix13 = 0, memberMatrix20 = 0, memberMatrix21 = 0, memberMatrix22 = 0, memberMatrix23 = 0, memberMatrix30 = 0, memberMatrix31 = 0, memberMatrix32 = 0, memberMatrix33 = 0, memberMatrix40 = 0, memberMatrix41 = 0, memberMatrix42 = 0, memberMatrix43 = 0, memberMatrix50 = 0, memberMatrix51 = 0, memberMatrix52 = 0, memberMatrix53 = 0;


let active="Admin";

let order = {
    'Admin' : 0,
    'Avenue' : 1,
    'Others' : 2,

}

let requiredFields = {
    'Admin' : ['memberMatrix00','memberMatrix01','memberMatrix02',
                'memberMatrix10','memberMatrix11','memberMatrix12',
                'memberMatrix20','memberMatrix21','memberMatrix22',
                'memberMatrix30','memberMatrix31','memberMatrix32',
                'memberMatrix40','memberMatrix41','memberMatrix42',
                'dues00','dues01','dues02','dues03'],
    'Avenue' : [],
    'Others' : ['bulletin00','bulletin01','bulletin02','bulletin03','bulletin04','bulletin05']
};

$(document).ready(function(){
    
    if($(window).width()>1000)
    {
        
        $("#memberMatrix03").val(memberMatrix03);
        $("#memberMatrix13").val(memberMatrix13);
        $("#memberMatrix23").val(memberMatrix23);
        $("#memberMatrix33").val(memberMatrix33);
        $("#memberMatrix43").val(memberMatrix43);
        $("#memberMatrix50").val(memberMatrix50);
        $("#memberMatrix51").val(memberMatrix51);
        $("#memberMatrix52").val(memberMatrix52);
        $("#memberMatrix53").val(memberMatrix53);

        $("#data01").html("<p class=\"text-center\">Male");
        $("#data02").html("<p class=\"text-center\">Female");
        $("#data03").html("<p class=\"text-center\">Other");
        $("#data04").html("<p class=\"text-center\">Total");
        $("#data10").html("<p>Members at the beginning of July<b style=\"color:red\"> *</b>");
        $("#data20").html("<p>Members Added<b style=\"color:red\"> *</b>");
        $("#data30").html("<p>Members Left<b style=\"color:red\"> *</b>");
        $("#data40").html("<p>Prospective<b style=\"color:red\"> *</b>");
        $("#data50").html("<p>Guests (RYE /NGSE /Family)<b style=\"color:red\"> *</b>");
        $("#data60").html("<p>Total");
    }
    appendMember();
    appendGeneralBodyMeeting();
    appendBoardOfDirectorsMeeting();
    appendFutureEvent();
    appendEvent();
    
    $("#reportButton00,#reportButton10,#reportButton20").html("Prev");
    $("#member1Del,#gbm1Del,#bod1Del,#futureEvent1Del,#event1Del").attr('disabled', true);
    $("#reportButton21").attr('disabled', true);

    $("#bar").css('width','0%');
    
});

function updateProgress(id) {
    let filledCount = 0;
    let totalCount = 25;

    for(let x=0;x<requiredFields['Admin'].length;x++)
    {
        let input = document.getElementById(requiredFields['Admin'][x]);
        if(input.value.length != 0) {
            filledCount += 1;
        }
    }

    if(id.includes("memberMatrix00") && $("#memberMatrix00").val()!='')
    memberMatrix00 = parseInt($("#memberMatrix00").val());
    
    if(id.includes("memberMatrix01") &&  $("#memberMatrix01").val()!='')
    memberMatrix01 = parseInt($("#memberMatrix01").val());
    
    if(id.includes("memberMatrix02") &&  $("#memberMatrix02").val()!='')
    memberMatrix02 = parseInt($("#memberMatrix02").val());

    if(id.includes("memberMatrix10") && $("#memberMatrix10").val()!='')
    memberMatrix10 = parseInt($("#memberMatrix10").val());
    
    if(id.includes("memberMatrix11") &&  $("#memberMatrix11").val()!='')
    memberMatrix11 = parseInt($("#memberMatrix11").val());
    
    if(id.includes("memberMatrix12") &&  $("#memberMatrix12").val()!='')
    memberMatrix12 = parseInt($("#memberMatrix12").val());

    if(id.includes("memberMatrix20") && $("#memberMatrix20").val()!='')
    memberMatrix20 = parseInt($("#memberMatrix20").val());
    
    if(id.includes("memberMatrix21") &&  $("#memberMatrix21").val()!='')
    memberMatrix21 = parseInt($("#memberMatrix21").val());
    
    if(id.includes("memberMatrix22") &&  $("#memberMatrix22").val()!='')
    memberMatrix22 = parseInt($("#memberMatrix22").val());

    if(id.includes("memberMatrix30") && $("#memberMatrix30").val()!='')
    memberMatrix30 = parseInt($("#memberMatrix30").val());
    
    if(id.includes("memberMatrix31") &&  $("#memberMatrix31").val()!='')
    memberMatrix31 = parseInt($("#memberMatrix31").val());
    
    if(id.includes("memberMatrix32") &&  $("#memberMatrix32").val()!='')
    memberMatrix32 = parseInt($("#memberMatrix32").val());

    if(id.includes("memberMatrix40") && $("#memberMatrix40").val()!='')
    memberMatrix40 = parseInt($("#memberMatrix40").val());
    
    if(id.includes("memberMatrix41") &&  $("#memberMatrix41").val()!='')
    memberMatrix41 = parseInt($("#memberMatrix41").val());
    
    if(id.includes("memberMatrix42") &&  $("#memberMatrix42").val()!='')
    memberMatrix42 = parseInt($("#memberMatrix42").val());
    
    memberMatrix03 = memberMatrix00 + memberMatrix01 + memberMatrix02;
    memberMatrix13 = memberMatrix10 + memberMatrix11 + memberMatrix12;
    memberMatrix23 = memberMatrix20 + memberMatrix21 + memberMatrix22;
    memberMatrix33 = memberMatrix30 + memberMatrix31 + memberMatrix32;
    memberMatrix43 = memberMatrix40 + memberMatrix41 + memberMatrix42;
    
    memberMatrix50 = memberMatrix00 + memberMatrix10 + memberMatrix20 + memberMatrix30 + memberMatrix40 ;
    memberMatrix51 = memberMatrix01 + memberMatrix11 + memberMatrix21 + memberMatrix31 + memberMatrix41 ;
    memberMatrix52 = memberMatrix02 + memberMatrix12 + memberMatrix22 + memberMatrix32 + memberMatrix42 ;
    memberMatrix53 = memberMatrix03 + memberMatrix13 + memberMatrix23 + memberMatrix33 + memberMatrix43 ;
    
    $("#memberMatrix03").val(memberMatrix03);
    $("#memberMatrix13").val(memberMatrix13);
    $("#memberMatrix23").val(memberMatrix23);
    $("#memberMatrix33").val(memberMatrix33);
    $("#memberMatrix43").val(memberMatrix43);
    $("#memberMatrix50").val(memberMatrix50);
    $("#memberMatrix51").val(memberMatrix51);
    $("#memberMatrix52").val(memberMatrix52);
    $("#memberMatrix53").val(memberMatrix53);

    // for(let x=0;x<requiredFields['Avenue'].length;x++)
    // {
    //     let input = document.getElementById(requiredFields[currentSectionName][x]);
    //     if(input.value.length != 0) {
    //         filledCount += 1;
    //     }    
    // }
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
        console.log(progress);
        $("#reportButton21").attr('disabled', false);
    }
}

function isFilled(currentSectionName) {
    let flag = false;
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
    if (filledCount == requiredFields[currentSectionName].length) flag = true;
    if(flag) {
        $("#errorMessages").html("");
    }
    else {
        $("#errorMessages").html("<p><br>You must have missed some of the required fields. Fill them in order to proceed.</p>");
    }
    return flag;
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

function openNav() {
    let x = document.getElementById("mynavigation");
    if (x.className === "navigation sticky") 
    {
        x.className += " responsive";
    } 
    else 
    {
        x.className = "navigation sticky";
    }
    x = document.getElementById("mainWrapperContainer");
    if (x.className === "container") 
    {
        x.className += " blur";
    } 
    else 
    {
        x.className = "container";
    }

}

function appendMember() {
    membersCount+=1;
    membersIndex+=1;
    $("#membersData").append(`
    
    <div class="row" id="member`+membersIndex+`">
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date of joining</p><br>
            <input type="date" id="member`+membersIndex+`-0" name="member`+membersIndex+`-0">
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Member</p><br>
            <input type="text" id="member`+membersIndex+`-1" name="member`+membersIndex+`-1">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Type</p><br>
            <select name="type" id="member`+membersIndex+`-2" name="member`+membersIndex+`-2">
                <option>Inducted Member</option>
                <option>Prospective Member</option>
                <option>Guest Member</option>
                <option style="display:none" selected></option>
            </select>
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Gender</p><br>
            <select name="gender" id="member`+membersIndex+`-3" name="member`+membersIndex+`-3">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>Prefer not to say</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-tint" aria-hidden="true"></i>&nbsp;&nbsp;Blood Group</p><br>
            <select name="Blood Grouup" id="member`+membersIndex+`-4" name="member`+membersIndex+`-4">
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
            <input type="text" id="member`+membersIndex+`-5" name="member`+membersIndex+`-5">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date of Birth</p><br>
            <input type="date" id="member`+membersIndex+`-6" name="member`+membersIndex+`-6">
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
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Meeting No.</p><br>
            <input type="text" id="gbm`+gbmsIndex+`-0" name="gbm`+gbmsIndex+`-0">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date" id="gbm`+gbmsIndex+`-1" name="gbm`+gbmsIndex+`-1">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)</p><br>
            <input type="text" id="gbm`+gbmsIndex+`-2" name="gbm`+gbmsIndex+`-2">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?</p><br>
            <select name="type" id="gbm`+gbmsIndex+`-3" name="gbm`+gbmsIndex+`-3">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?</p><br>
            <select name="type" id="gbm`+gbmsIndex+`-4" name="gbm`+gbmsIndex+`-4">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text" id="gbm`+gbmsIndex+`-5" name="gbm`+gbmsIndex+`-5">
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
}

function appendBoardOfDirectorsMeeting() {
    bodsCount+=1;
    bodsIndex+=1;
    $("#boardOfDirectorsMeetings").append(`
    <div class="row" id="bod`+bodsIndex+`">
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Meeting No.</p><br>
            <input type="text" id="bod`+bodsIndex+`-0" name="bod`+bodsIndex+`-0">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date" id="bod`+bodsIndex+`-1" name="bod`+bodsIndex+`-1">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)</p><br>
            <input type="text" id="bod`+bodsIndex+`-2" name="bod`+bodsIndex+`-2">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?</p><br>
            <select name="type" id="bod`+bodsIndex+`-3" name="bod`+bodsIndex+`-3">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?</p><br>
            <select name="type" id="bod`+bodsIndex+`-4" name="bod`+bodsIndex+`-4">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text" id="bod`+bodsIndex+`-5" name="bod`+bodsIndex+`-5">
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
}

function appendFutureEvent() {
    futureEventsCount+=1;
    futureEventsIndex+=1;
    $("#futureEvents").append(`
    <div class="row" id="futureEvent`+futureEventsIndex+`" >
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date" id="futureEvent`+futureEventsIndex+`-0" name="futureEvent`+futureEventsIndex+`-0">
        </div>
        <div class="col-lg-6">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Details of the Event</p><br>
            <input type="text" id="futureEvent`+futureEventsIndex+`-1" name="futureEvent`+futureEventsIndex+`-1">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue</p><br>
            <select name="avenue" id="futureEvent`+futureEventsIndex+`-2" name="futureEvent`+futureEventsIndex+`-2">
                <option>Community Service Director</option>
                <option>Club Service Director</option>
                <option>International Service Director</option>
                <option>Professional Development Director</option>
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

}

function appendEvent() {
    eventsCount+=1;
    eventsIndex+=1;
    $("#events").append(`
    <div class="row" id="event`+eventsIndex+`" >
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date" id="event`+eventsIndex+`-0" name="event`+eventsIndex+`-0">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Event</p><br>
            <input type="text" id="event`+eventsIndex+`-1" name="event`+eventsIndex+`-1">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue</p><br>
            <select name="avenue" id="event`+eventsIndex+`-2" name="event`+eventsIndex+`-2">
                <option>Community Service Director</option>
                <option>Club Service Director</option>
                <option>International Service Director</option>
                <option>Professional Development Director</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text" id="event`+eventsIndex+`-3" name="event`+eventsIndex+`-3">
        </div>    
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;Volunteer Hrs</p><br>
            <input type="text" id="event`+eventsIndex+`-4" name="event`+eventsIndex+`-4">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;Funds raised</p><br>
            <input type="text" value="Rs. " id="event`+eventsIndex+`-5" name="event`+eventsIndex+`-5">
        </div>
        <div class="col-lg-5">
            <p class="label"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;Description</p><br>
            <input type="text" id="event`+eventsIndex+`-6" name="event`+eventsIndex+`-6">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;&nbsp;Instagram Link</p><br>
            <input type="text" id="event`+eventsIndex+`-7" name="event`+eventsIndex+`-7">
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
}

function deleteRow(dataType, clicked) {
    if(dataType=="member")
    {
        membersCount-=1;
    }
    else if(dataType=="gbm")
    {
        gbmsCount-=1;
    }
    else if(dataType=="bod")
    {
        bodsCount-=1;
    }else if(dataType=="event")
    {
        eventsCount-=1;
    }else if(dataType=="futureEvent")
    {
        futureEventsCount-=1;
    } 
    $('#'+clicked.replace("Del", "")).html("");
}; 

function resetRow(dataType, clicked) {
    $('#'+clicked.replace("Res", "")+' :input').val('');
}

