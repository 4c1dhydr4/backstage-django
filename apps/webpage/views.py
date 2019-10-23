from django.shortcuts import render
from apps.webpage.models import Gallery
# Create your views here.
def index(request):
	context = {
		'gallery': Gallery.objects.first(),
	}
	return render(request, 'index.html',context)