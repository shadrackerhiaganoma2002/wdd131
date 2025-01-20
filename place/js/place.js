
        const currentYear = new Date().getFullYear();
        document.getElementById('current-year').textContent = currentYear;
        document.getElementById('last-modified').textContent = document.lastModified;

        const temperature = 15; // Celsius
        const windSpeed = 10; // km/h

        function calculateWindChill(temp, speed) {
            return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
        }

        const windChillElement = document.getElementById('wind-chill');
        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed).toFixed(1);
            windChillElement.textContent = `${windChill}&#8451;`;
        } else {
            windChillElement.textContent = "N/A";
        }
