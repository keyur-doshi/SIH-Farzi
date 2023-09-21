import React, { Component } from "react";
import "./map.css";
import { Helmet } from "react-helmet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.map = null;
        this.mapInitialized = false;
    }

    componentDidMount() {
        if (!this.mapInitialized) {
            this.initMap();
            this.mapInitialized = true;
        }
        this.animateListItems();
        this.showPopup();
    }

    initMap() {
        if (document.getElementById("map")) {
            this.map = L.map("map").setView([10.8505, 76.2711], 10);

            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);

            const cityCoordinates = [
                // Your city coordinates here
                [8.5241, 76.9366], // Thiruvananthapuram
                [10.8505, 76.2711], // Kochi
                [9.9616, 76.2519], // Kozhikode
                [11.2588, 75.7804], // Thrissur
                [11.8745, 75.3704], // Kollam
                [10.7722, 76.6548], // Alappuzha
                [9.5014, 76.6108], // Kottayam
                [10.211, 76.434], // Palakkad
                [11.6562, 76.8806], // Malappuram
                [9.9327, 76.2673], // Kannur
                [12.9716, 77.5946], // Bangalore (Not in Kerala, but nearby)
                [9.7319, 76.2949], // Pathanamthitta
                [10.2332, 76.3438], // Thrissur
                [11.5815, 76.1857], // Malappuram
                [9.5905, 76.5222], // Kottayam
                [10.5369, 76.2144], // Ernakulam
                [10.805, 76.4068], // Thrissur
                [9.9845, 76.2946], // Aluva
                [10.1563, 76.6394], // Angamaly
                [11.2188, 76.202], // Palakkad
                [9.2532, 76.5245], // Kollam
                [11.7042, 76.1136], // Nilambur
                [10.0737, 76.6409], // Perumbavoor
                [8.7212, 76.7157], // Neyyattinkara
                [9.5916, 76.5222], // Kottayam
                [9.9392, 76.2599], // Kannur
                [11.8768, 75.3737], // Kollam
                [11.2717, 75.9334], // Palakkad
                [10.0182, 76.3088], // Ernakulam
                [10.7987, 76.6533], // Thrissur
                [9.0837, 76.4907], // Kollam
            ];

            const markers = [];

            for (let i = 0; i < 35; i++) {
                const randomIndex = Math.floor(Math.random() * cityCoordinates.length);
                const randomColor = this.getRandomColor();

                const icon = L.icon({
                    iconUrl: `src\map\${getRandomColor()}.png`,
                    iconSize: [32, 32],
                    iconAnchor: [16, 32],
                });

                const marker = L.marker(cityCoordinates[randomIndex], { icon });
                markers.push(marker);
            }

            L.layerGroup(markers).addTo(this.map);
        }
    }

    getRandomColor() {
        const iconColors = ["red1", "blue1", "green1", "yellow1"];
        const randomIndex = Math.floor(Math.random() * iconColors.length);
        return iconColors[randomIndex];
    }

    animateListItems() {
        const cityItems = document.querySelectorAll(".city-item");
        cityItems.forEach((item, index) => {
            item.style.animationDelay = `${index * 0.1}s`;
            item.classList.add("animate-list-item");
        });
    }

    showPopup() {
        const popupContent = this.getRandomCityWithBadAQI();

        const overlay = document.getElementById("overlay");
        const popup = document.getElementById("popup");

        popup.innerHTML = popupContent;

        overlay.style.display = "flex";
        setTimeout(() => {
            overlay.style.display = "none";
        }, 2000);
    }

    getRandomCity() {
        const keralaCities = [
            // Your list of Kerala cities here
            "Thiruvananthapuram",
            "Kochi",
            "Kozhikode",
            "Thrissur",
            "Kollam",
            "Alappuzha",
            "Palakkad",
            "Malappuram",
            "Kannur",
            "Kottayam",
            "Pathanamthitta",
            "Idukki",
            "Ernakulam",
            "Kasaragod",
            "Wayanad",
            "Munnar",
            "Aluva",
            "Changanassery",
            "Kottarakkara",
            "Adoor",
            "Neyyattinkara",
            "Kunnamkulam",
            "Perinthalmanna",
            "Manjeri",
            "Payyanur",
            "Thalassery",
            "Mattannur",
            "Kalpetta",
            "Kanjirappally",
            "Pala",
            "Thodupuzha",
            "Cherthala",
            "Kayamkulam",
            "Mavelikara",
            "Cherthala",
            "Kottakkal",
            "Muvattupuzha",
            "Piravom",
            "Chalakudy",
            "Guruvayur",
            "Iratti",
            "Koothattukulam",
            "Varkala",
            "Attingal",
            "Nedumangad",
            "Paravur",
            "Vatakara",
            "Koyilandy",
            "Perambra",
        ];
        const randomIndex = Math.floor(Math.random() * keralaCities.length);
        return keralaCities[randomIndex];
    }

    getRandomCityWithBadAQI() {
        const randomCity = this.getRandomCity();
        return `WARNING!: ${randomCity} is having highly bad AQI, protect yourself!`;
    }

    render() {
        return (
            <div id="mbody">
                <div id="overlay" className="overlay">
                    <div id="popup" className="popup"></div>
                </div>
                <div id="map-container">
                    <div id="map"></div>
                    <div id="rankings">
                        <div>
                            <h2 id="heading">Top 3 Cities</h2>
                            <ol class="city-list" id="top-cities">
                                <li class="city-item" id="top-city-1">City 1<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                                <li class="city-item" id="top-city-2">City 2<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                                <li class="city-item" id="top-city-3">City 3<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                            </ol>
                        </div>
                        <div>
                            <h2 id="heading1">Worst 3 Cities</h2>
                            <ol class="city-list" id="worst-cities">
                                <li class="city-item" id="worst-city-1">City 1<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                                <li class="city-item" id="worst-city-2">City 2<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                                <li class="city-item" id="worst-city-3">City 3<br/><br/>
                                <span className="extra-text">AQI: 56<br/>WQI: 78</span>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
                <Helmet>
                    <script
                        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
                        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
                        crossOrigin=""
                    ></script>
                </Helmet>
            </div>
        );
    }
}

export default Map;
