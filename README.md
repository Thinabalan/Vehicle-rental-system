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
---------------
Sample outputs:
---------------
** LOGIN PAGE

<img width="1363" height="726" alt="Screenshot 2025-10-04 071648" src="https://github.com/user-attachments/assets/b4993578-4fea-4733-b31f-35c77ad491ad" />

** VEHICLE LIST PAGE

<img width="1365" height="726" alt="Screenshot 2025-10-04 071618" src="https://github.com/user-attachments/assets/4e268216-430b-47ca-b541-2e1a3fda1b1e" />

** ADD VEHICLE

<img width="1359" height="727" alt="Screenshot 2025-10-04 071814" src="https://github.com/user-attachments/assets/b72e5c73-03b0-4515-9030-8cf29f407e6c" />

** DATABASE (SQLite)

<img width="1359" height="731" alt="Screenshot 2025-10-04 071558" src="https://github.com/user-attachments/assets/64220789-b2cd-4a37-a9dc-327dc89e74f8" />

