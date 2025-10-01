VEHICLE RENTAL SYSTEM
        
A full-stack web application for managing vehicle rentals.  
Built with **Django REST Framework (Backend)** and **React.js (Frontend)**.
----------------------------------------------------------------------------

** Completed Features (Admin Side)
-----------------------------------
- Admin login authentication
- Add vehicles with details:
  - Vehicle ID
  - Model
  - Type (SUV/Sedan/Hatchback)
  - Registration Number
  - Daily Rate
  - Availability Status
  - Fuel Type
- List vehicles with filters:
  - Filter by type
  - Filter by availability
  - Search by model
- Edit vehicle details and rental rates
- Delete vehicles from inventory
- Basic form validation in frontend

------------------------------------------------

** Tech Stack
- **Frontend:** React.js, Axios
- **Backend:** Django, Django REST Framework
- **Database:** SQLite (default)
- **Authentication:** JWT (djangorestframework-simplejwt)

---------------------------------------------------------

** TO RUN THIS PROJECT FOLLOW THESE STEPS

1. Clone the repository
```
git clone https://github.com/<your-username>/Vehicle-rental-system.git
cd Vehicle-rental-system
```
2. Backend Setup (Django)
```
cd backend
# Create virtual environment
python -m venv vehicle
vehicle\Scripts\activate   # On Windows
source vehicle/bin/activate # On Linux/Mac

# Install dependencies
pip install -r requirements.txt

# Run migrations
python manage.py migrate

# Start Django server
python manage.py runserver
```
3. Frontend Setup (React)
```
cd front
npm install
npm start
```


