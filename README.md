# Weather Web App

This project is a weather web application that shows the current weather conditions of different cities based on real-time data fetched from the OpenWeather API. The app dynamically updates the display based on the city entered by the user.

## Key Features

- Fetches real-time weather data for any city using the **OpenWeather API**.
- Displays different weather conditions such as clear skies, rain, snow, fog, and more.
- User-friendly interface for entering city names and retrieving weather information.
  
## Prerequisites

Before running this project, ensure you have the following installed:

- **Python 3.x**
  
## Steps to Set Up and Run the Project

### 1. Clone or Download the Project

First, download or clone this repository to your local machine:

```bash
git clone https://github.com/amrit-lal/amrit-weather-web-app.git
cd amrit-weather-web-app
```

### 2. Install Dependencies

You need to install the required Python packages. It is recommended to create a virtual environment to isolate the project’s dependencies:

```bash
# Create a virtual environment (optional but recommended)
python3 -m venv venv

# Activate the virtual environment:
# For Windows:
venv\Scripts\activate
# For macOS/Linux:
source venv/bin/activate
```

Once the virtual environment is activated (or if you skip this step), install the necessary dependencies using the `requirements.txt` file:

```bash
pip install -r requirements.txt
```

### 3. Get an API Key for Weather Data

To fetch real-time weather data, you need to get an API key from [OpenWeather](https://openweathermap.org/). After creating an account, follow these steps:

- Copy your **API Key**.
- Create a `.env` file in the root directory of the project folder and add your API key like this:

```bash
API_KEY=your_openweather_api_key
```

This will securely store your API key for the project to use.

### 4. Run the Application

Now that the dependencies are installed and the API key is set up, you can run the Flask server to launch the app.

```bash
python app.py
```

This command will start the Flask development server. The app will be accessible at:

```
http://127.0.0.1:5000/
```

### 5. Open the App in Your Browser

Open your web browser and go to:

```
http://127.0.0.1:5000/
```

You can now enter any city name in the input field, and the current weather data for that city will be displayed.

### Project Structure

```
amrit-weather-web-app/
│
├── static/
│   ├── styles.css       # Contains CSS animations for weather conditions
│   └── script.js        # JavaScript to fetch weather data and trigger animations
│
├── templates/
│   └── index.html       # HTML file for UI
│
├── .env                 # API key for weather data (not included in repo)
├── app.py               # Main Flask backend server
├── requirements.txt     # Python dependencies
└── README.md            # Project documentation (this file)

```
