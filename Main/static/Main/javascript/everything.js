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
let active="Admin";

$(document).ready(function(){
    
    if($(window).width()>1000)
    {
        $("#data01").html("<p class=\"text-center\">Male");
        $("#data02").html("<p class=\"text-center\">Female");
        $("#data03").html("<p class=\"text-center\">Other");
        $("#data04").html("<p class=\"text-center\">Total");
        $("#data10").html("<p>Members at the beginning of July");
        $("#data20").html("<p>Members Added");
        $("#data30").html("<p>Members Left");
        $("#data40").html("<p>Prospective");
        $("#data50").html("<p>Guests (RYE /NGSE /Family)");
        $("#data60").html("<p>Total");
    }
    appendMember();
    appendGeneralBodyMeeting();
    appendBoardOfDirectorsMeeting();
    appendFutureEvent();
    appendEvent();
    $("#reportButton11,#reportButton21,#reportButton31").html("Prev");
    $("#member1Del,#gbm1Del,#bod1Del,#futureEvent1Del,#event1Del").attr('disabled', true);
    
});

function openSection(sectionName) {
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
            <input type="date">
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Member</p><br>
            <input type="text">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Type</p><br>
            <select name="type" id="type">
                <option>Inducted Member</option>
                <option>Prospective Member</option>
                <option>Guest Member</option>
                <option style="display:none" selected></option>
            </select>
        </div>   
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-user" aria-hidden="true"></i>&nbsp;&nbsp;Gender</p><br>
            <select name="gender" id="gender">
                <option>Female</option>
                <option>Male</option>
                <option>Other</option>
                <option>Prefer not to say</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-tint" aria-hidden="true"></i>&nbsp;&nbsp;Blood Group</p><br>
            <select name="Blood Grouup">
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
            <input type="text">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date of Birth</p><br>
            <input type="date">
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
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)</p><br>
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?</p><br>
            <select name="type" id="byLaws">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?</p><br>
            <select name="type" id="byLaws">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text">
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
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-calendar" aria-hidden="true"></i>&nbsp;&nbsp;Date</p><br>
            <input type="date">
        </div>   
        <div class="col-lg-8">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Agenda of the Meeting (brief)</p><br>
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label">ByLaws Passed?</p><br>
            <select name="type" id="byLaws">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label">Budget Passed?</p><br>
            <select name="type" id="byLaws">
                <option>Yes</option>
                <option selected>No</option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text">
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
            <input type="date">
        </div>
        <div class="col-lg-6">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Details of the Event</p><br>
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue</p><br>
            <select name="avenue" id="avenue">
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
            <input type="date">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-file-text" aria-hidden="true"></i>&nbsp;&nbsp;Name of the Event</p><br>
            <input type="text">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-hashtag" aria-hidden="true"></i>&nbsp;&nbsp;Avenue</p><br>
            <select name="avenue" id="avenue">
                <option>Community Service Director</option>
                <option>Club Service Director</option>
                <option>International Service Director</option>
                <option>Professional Development Director</option>
                <option style="display:none" selected></option>
            </select>
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-user-times" aria-hidden="true"></i>&nbsp;&nbsp;Attendees</p><br>
            <input type="text">
        </div>    
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-clock-o" aria-hidden="true"></i>&nbsp;Volunteer Hrs</p><br>
            <input type="text">
        </div>
        <div class="col-lg-2">
            <p class="label"><i class="fa fa-inr" aria-hidden="true"></i>&nbsp;&nbsp;Funds raised</p><br>
            <input type="text" value="Rs. ">
        </div>
        <div class="col-lg-5">
            <p class="label"><i class="fa fa-info-circle" aria-hidden="true"></i>&nbsp;&nbsp;Description</p><br>
            <input type="text">
        </div>
        <div class="col-lg-3">
            <p class="label"><i class="fa fa-link" aria-hidden="true"></i>&nbsp;&nbsp;Instagram Link</p><br>
            <input type="text">
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
    console.log(dataType+" deleted");
}; 

function resetRow(dataType, clicked) {
    $('#'+clicked.replace("Res", "")+' :input').val('');
    
}

