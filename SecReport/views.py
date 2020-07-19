from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .models import Report
import secrets
from datetime import datetime

# Create your views here.

@login_required
def report(request):
    if(request.method == 'POST'):
        try :
            reportId = request.user.reportId+"-"+request.POST['month']
            print(reportId)
            report = Report(club = request.user,
                        month           = datetime.strptime(request.POST['month'], "%Y-%m").date() ,
                        reportId = reportId,
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
                        dues01          = request.POST['dues01'],
                        dues02          = request.POST['dues02'],
                        dues03          = request.POST['dues03'],
                        bulletin00      = request.POST['bulletin00'],
                        bulletin01      = request.POST['bulletin01'],
                        bulletin02      = request.POST['bulletin02'],
                        bulletin03      = request.POST['bulletin03'],
                        bulletin04      = request.POST['bulletin04'],
                        bulletin05      = request.POST['bulletin05'],
                        feedback00      = request.POST['feedback00'],
                        feedback01      = request.POST['feedback01'],
                        feedback02      = request.POST['feedback02'],
                        feedback03      = request.POST['feedback03'],
                        suggestion00    = request.POST['suggestion00']
                    ) 
            report.save()  
            print('Success')   
            return render(request, 'SecReport/paginatedReportResponse.html',{'title':'Reporting','tab':'report','success':'The report has been saved successfully','reportId':report.reportId})        
        except Exception as e:
            print(e)
            return render(request, 'SecReport/paginatedReport.html',{'title':'Reporting','tab':'report','error':'We are facing an issue. We will get back to you'})        
    else :
        print('Fresh')
        return render(request, 'SecReport/paginatedReport.html',{'title':'Reporting','tab':'report'})

