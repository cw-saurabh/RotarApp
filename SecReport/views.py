from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Report, GBM, BOD, Event, FutureEvent
from Auth.models import Club, Account
import secrets
from datetime import datetime
from django.db import transaction
from django.http import HttpResponseForbidden
import xlwt
from django.http import HttpResponse

# Create your views here.

def month(string) :
    monthNo = string[5,7]
    if(monthNo == "01") :
        month="January"
    elif(monthNo == "02") :
        month="February"
    elif(monthNo == "03") :
        month="March"
    elif(monthNo == "04") :
        month="April"
    elif(monthNo == "05") :
        month="May"
    elif(monthNo == "06") :
        month="June"
    elif(monthNo == "07") :
        month="July"
    elif(monthNo == "08") :
        month="August"
    elif(monthNo == "09") :
        month="September"
    elif(monthNo == "10") :
        month="October"
    elif(monthNo == "11") :
        month="November"
    elif(monthNo == "12") :
        month="December"
    return month+string[2,4]

@login_required

def report(request):
    
    if request.user.is_club :

        profile = Club.objects.filter(account=request.user).first()
        
        if(request.method == 'POST'):
        
            try :
                reportId = str(request.user.rotaryId)+"-"+request.POST['month']
                context=dict()
                contextList = []
                context['profile']=profile
                
                for x in request.POST :
        
                    context[x] = request.POST[x]
                    contextList.append(x)
        
                # Actual loading
                with transaction.atomic():

                    report = Report(club = request.user,
                                month           = (request.POST['month']),
                                reportId        = reportId,
                                memberMatrix00  = request.POST['memberMatrix00'],
                                memberMatrix01  = request.POST['memberMatrix01'],
                                memberMatrix02  = request.POST['memberMatrix02'],
                                memberMatrix10  = request.POST['memberMatrix10'],
                                memberMatrix11  = request.POST['memberMatrix11'],
                                memberMatrix12  = request.POST['memberMatrix12'],
                                memberMatrix20  = request.POST['memberMatrix20'],
                                memberMatrix21  = request.POST['memberMatrix21'],
                                memberMatrix22  = request.POST['memberMatrix22'],
                                memberMatrix30  = request.POST['memberMatrix30'],
                                memberMatrix31  = request.POST['memberMatrix31'],
                                memberMatrix32  = request.POST['memberMatrix32'],
                                memberMatrix40  = request.POST['memberMatrix40'],
                                memberMatrix41  = request.POST['memberMatrix41'],
                                memberMatrix42  = request.POST['memberMatrix42'],
                                dues00          = request.POST['dues00'],
                                dues04          = request.POST['dues04'],
                                bulletin00      = request.POST['bulletin00'],
                                bulletin01      = request.POST['bulletin01'],
                                bulletin02      = request.POST['bulletin02'],
                                bulletin03      = request.POST['bulletin03'] if request.POST['bulletin03'] else None,
                                bulletin04      = request.POST['bulletin04'] if request.POST['bulletin04'] else None,
                                bulletin05      = request.POST['bulletin05'],
                                feedback00      = request.POST['feedback00'],
                                feedback01      = request.POST['feedback01'],
                                feedback02      = request.POST['feedback02'],
                                feedback03      = request.POST['feedback03'],
                                suggestion00    = request.POST['suggestion00']
                            ) 
                    report.save()  

                    gbmlist = request.POST['gbmlist'].split(',')
                    for x in gbmlist :
                        gbm = GBM.objects.create(
                            club = request.user,
                            reportId = report,
                            gbm0 = request.POST[x+"-0"],
                            gbm1 = request.POST[x+"-1"],
                            gbm2 = request.POST[x+"-2"],
                            gbm3 = request.POST[x+"-3"],
                            gbm4 = request.POST[x+"-4"],
                            gbm5 = request.POST[x+"-5"]
                        )
                    
                    bodlist = request.POST['bodlist'].split(',')
                    for x in bodlist :
                        bod = BOD.objects.create(
                            club = request.user,
                            reportId = report,
                            bod0 = request.POST[x+"-0"],
                            bod1 = request.POST[x+"-1"],
                            bod2 = request.POST[x+"-2"],
                            bod3 = request.POST[x+"-3"],
                            bod4 = request.POST[x+"-4"],
                            bod5 = request.POST[x+"-5"]
                        )
                    
                    eventlist = request.POST['eventlist'].split(',')
                    for x in eventlist :
                        event = Event.objects.create(
                            club = request.user,
                            reportId = report,
                            event0 = request.POST[x+"-0"],
                            event1 = request.POST[x+"-1"],
                            event2 = request.POST[x+"-2"],
                            event3 = request.POST[x+"-3"],
                            event4 = request.POST[x+"-4"],
                            event5 = request.POST[x+"-5"],
                            event6 = request.POST[x+"-6"],
                            event7 = request.POST[x+"-7"]
                        )
                    
                    futureEventlist = request.POST['futureEventlist'].split(',')
                    for x in futureEventlist :
                        futureEvent = FutureEvent.objects.create(
                        club = request.user,
                        reportId = report,
                        futureEvent0 = request.POST[x+"-0"],
                        futureEvent1 = request.POST[x+"-1"],
                        futureEvent2 = request.POST[x+"-2"],
                        futureEvent3 = request.POST[x+"-3"],
                    )
        
                return render(request, 'SecReport/paginatedReportResponse.html',{'title':'Reporting','tab':'report','success':'The report has been saved successfully','reportId':report.reportId,'profile':profile})        
        
            except Exception as e:
                print(e)
                return render(request, 'SecReport/paginatedReport.html',{'contextDict':context,'title':'Reporting','tab':'report','profile':profile, 'error':e})        
        else :
            return render(request, 'SecReport/paginatedReport.html',{'title':'Reporting','tab':'report','profile':profile})
    elif request.user == Account.objects.filter(username='admin').first() :
        Clubs = Account.objects.filter(is_club = True).all()
        Reports = Report.objects.all()
        return render(request, 'SecReport/reportList.html',{'title':'Reporting','tab':'report','Clubs':Clubs,'Reports':Reports})

def listReports(request,username):
    user = Account.objects.filter(username=username).first()
    Reports = Report.objects.filter(club=user).all()
    if request.user == user or request.user == Account.objects.filter(username='admin').first():
        return render(request, 'SecReport/reportList2.html',{'title':'Reporting','tab':'report','Reports':Reports, 'Club':user})
    else :
        return HttpResponseForbidden()

def viewReports(request,reportid):
    Report1 = Report.objects.filter(reportId=reportid).first()
    GBMs = GBM.objects.filter(reportId=reportid).all()
    BODs = BOD.objects.filter(reportId=reportid).all()
    Events = Event.objects.filter(reportId=reportid).all()
    FutureEvents = FutureEvent.objects.filter(reportId=reportid).all()
    user = Report1.club
    profile = Club.objects.filter(account=user).first()
    if request.user == user or request.user == Account.objects.filter(username='admin').first():
        return render(request, 'SecReport/reportRendered.html',{'title':'Reporting','tab':'report','Report':Report1, 'Club':user, 'Profile':profile, 'GBMs':GBMs, 'BODs':BODs, 'Events':Events, 'FutureEvents':FutureEvents })
    else :
        return HttpResponseForbidden()

def exportReport(request,reportid):
    response = HttpResponse(content_type='application/ms-excel')
    Report1 = Report.objects.filter(reportId=reportid).all().first()
    Club = Report1.club.username
    Month = Report1.month
    response['Content-Disposition'] = 'attachment; filename="'+str(Club)+"-"+str(Month)+'.xls"'
    wb = xlwt.Workbook(encoding='utf-8')
    colwidth = int(13*260)

    #Reports
    ws = wb.add_sheet('Reports')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    font_style.alignment.wrap = 1
    columns = ['Month','Date','M - at the beginning','F - at the beginning','O - at the beginning','M - Inducted','F - Inducted','O - Inducted','M - left','F - left','O - left','M - Prospective','F - Prospective','O - Prospective', 'M - Guests', 'F - Guests', 'O - Guests','Dues paid upto the last month','Dues paid in this month','Bulletin Name','Bulletin Type','Bulletin Link','Bulletin Issued on','Bulletin last issued on','Bulletin Frequency','Feedback Q1','Feedback Q2','Feedback Q3','Feedback Q4','Suggestions']
    for i in range(len(columns)):
        ws.col(i).width = colwidth
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
    font_style = xlwt.XFStyle()
    font_style.alignment.wrap = 1
    rows = Report.objects.filter(reportId=reportid).all().values_list('month','date','memberMatrix00','memberMatrix01','memberMatrix02','memberMatrix10','memberMatrix11','memberMatrix12','memberMatrix20','memberMatrix21','memberMatrix22','memberMatrix30','memberMatrix31','memberMatrix32','memberMatrix40','memberMatrix41','memberMatrix42','dues00','dues04','bulletin00','bulletin01','bulletin02','bulletin03','bulletin04','bulletin05','feedback00','feedback01','feedback02','feedback03','suggestion00')
    for row in rows:
        row_num += 1
        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)

    #GBM
    ws = wb.add_sheet('GBM')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    columns = ['Meeting No.','Date','Agenda','Bylaws passed?','Budget passed?','Attendance']
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
    font_style = xlwt.XFStyle()
    rows = GBM.objects.filter(reportId=reportid).all().values_list('gbm0','gbm1','gbm2','gbm3','gbm4','gbm5')
    for row in rows:
        row_num += 1
        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)

    #BOD
    ws = wb.add_sheet('BOD')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    columns = ['Meeting No.','Date','Agenda','Bylaws passed?','Budget passed?','Attendance']
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
    font_style = xlwt.XFStyle()
    rows = BOD.objects.filter(reportId=reportid).all().values_list('bod0','bod1','bod2','bod3','bod4','bod5')
    for row in rows:
        row_num += 1
        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)
    
    #Event
    ws = wb.add_sheet('Event')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    columns = ['Date','Name','Avenue','Attendance','Hours','Funds raised','Description','Instagram Link']
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
    font_style = xlwt.XFStyle()
    rows = Event.objects.filter(reportId=reportid).all().values_list('event0','event1','event2','event3','event4','event5','event6','event7')
    for row in rows:
        row_num += 1
        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)

    # FutureEvent    
    ws = wb.add_sheet('FutureEvent')
    row_num = 0
    font_style = xlwt.XFStyle()
    font_style.font.bold = True
    columns = ['Date','Name','Description','Avenue']
    for col_num in range(len(columns)):
        ws.write(row_num, col_num, columns[col_num], font_style)
    font_style = xlwt.XFStyle()
    rows = FutureEvent.objects.filter(reportId=reportid).all().values_list('futureEvent0','futureEvent1','futureEvent2','futureEvent3')
    for row in rows:
        row_num += 1
        for col_num in range(len(row)):
            ws.write(row_num, col_num, str(row[col_num]), font_style)

    wb.save(response)
    return response
