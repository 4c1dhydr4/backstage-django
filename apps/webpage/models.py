from django.db import models

def upload_gallery(instance, filename):
	filebase, extension = filename.split(".")
	return "%s.%s" %(instance.name, extension)

class Photo(models.Model):

	name = models.CharField(max_length=60, blank=False, null=False,help_text="Nombre de la foto (con el que se guardará en el sistema")
	pic = models.ImageField(upload_to=upload_gallery,null=False, blank=False, 
							help_text="Ingresar una fotografía de dimensiones no mayor a 1 megapíxel con el nombre sin puntos a excepción de la extensión (Ejemplo: anfitrionas.jpg)")
	desc = models.CharField(max_length=60, blank=False, null=False,
							help_text="Descripción de la fotografía (Ejemplo: Activación UPN 20/04/2018)")

	def __str__(self):
		
		return '{}'.format(self.name)


class Gallery(models.Model):
	photos = models.ManyToManyField(Photo, blank=True)