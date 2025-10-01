from django.db import models

class Vehicle(models.Model):
    VEHICLE_TYPES = (
        ('SUV', 'SUV'),
        ('Sedan', 'Sedan'),
        ('Hatchback', 'Hatchback'),
    )
    FUEL_TYPES = (
        ('Petrol', 'Petrol'),
        ('Diesel', 'Diesel'),
        ('Electric', 'Electric'),
    )

    vehicle_id = models.CharField(max_length=30, unique=True)
    model = models.CharField(max_length=100)
    type = models.CharField(max_length=20, choices=VEHICLE_TYPES)
    registration_number = models.CharField(max_length=50)
    daily_rate = models.DecimalField(max_digits=8, decimal_places=2)
    available = models.BooleanField(default=True)
    fuel_type = models.CharField(max_length=20, choices=FUEL_TYPES)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"{self.vehicle_id} - {self.model}"
