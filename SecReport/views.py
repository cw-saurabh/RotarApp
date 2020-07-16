from django.shortcuts import render

# Create your views here.
def report(request):
    return render(request, 'SecReport/paginatedReport.html',{'title':'Reporting','tab':'report'})

