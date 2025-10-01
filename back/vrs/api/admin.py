from django.contrib import admin
from .models import Vehicle

@admin.register(Vehicle)
class VehicleAdmin(admin.ModelAdmin):
    list_display = ("vehicle_id", "model", "type", "registration_number", "daily_rate", "available", "fuel_type")
    search_fields = ("model", "registration_number")
    list_filter = ("type", "available", "fuel_type")
