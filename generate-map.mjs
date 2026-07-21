// Generate city coordinates in Natural Earth projection
import { geoNaturalEarth1 } from 'd3-geo';

const projection = geoNaturalEarth1()
  .scale(158)
  .translate([500, 258]);

const cities = {
  'Tashkent': [69.28, 41.31],
  'Frankfurt': [8.68, 50.12],
  'Netherlands': [4.90, 52.37],
  'UK_London': [-0.13, 51.51],
  'Moscow': [37.62, 55.75],
  'Dubai': [55.30, 25.27],
  'Beijing': [116.40, 39.90],
  'Seoul': [126.98, 37.57],
  'Tokyo': [139.69, 35.69],
  'NewDelhi': [77.21, 28.61],
  'Singapore': [103.82, 1.35],
  'USA_NYC': [-74.01, 40.71],
  'Canada_Toronto': [-79.38, 43.65],
  'Brazil_SaoPaulo': [-46.63, -23.55],
  'SouthAfrica_Joburg': [28.05, -26.20],
  'Australia_Sydney': [151.21, -33.87],
  'Riyadh': [46.68, 24.63],
  'Doha': [51.53, 25.29],
  'Oman_Muscat': [58.41, 23.59],
  'Kuwait': [47.98, 29.37],
  'Bahrain': [50.58, 26.07],
  'Kazakhstan_Almaty': [76.95, 43.24],
  'Bishkek': [74.59, 42.87],
  'Dushanbe': [68.77, 38.56],
  'Minsk': [27.57, 53.90],
  'StPetersburg': [30.32, 59.93],
  'Germany_Munich': [11.58, 48.14],
  'Poland_Warsaw': [21.01, 52.23],
  'France_Paris': [2.35, 48.86],
  'Italy_Milan': [9.19, 45.46],
  'Spain_Madrid': [-3.70, 40.42],
  'Belgium_Brussels': [4.35, 50.85],
  'Austria_Vienna': [16.37, 48.21],
  'Switzerland_Zurich': [8.54, 47.38],
  'Malaysia_KL': [101.69, 3.14],
  'Thailand_Bangkok': [100.52, 13.76],
  'Vietnam_Hanoi': [105.85, 21.03],
  'Pakistan_Karachi': [67.01, 24.86],
  'Bangladesh_Dhaka': [90.41, 23.81],
  'China_Shanghai': [121.47, 31.23],
  'China_Urumqi': [87.62, 43.83],
};

console.log('=== CITY COORDINATES (Natural Earth projection, viewBox 0 0 1000 500) ===\n');
for (const [name, coords] of Object.entries(cities)) {
  const [x, y] = projection(coords);
  console.log(`${name.padEnd(25)} x="${Math.round(x)}" y="${Math.round(y)}"`);
}

// Print Tashkent specifically
const tashkent = projection([69.28, 41.31]);
console.log(`\n=== TASHKENT HQ: cx="${Math.round(tashkent[0])}" cy="${Math.round(tashkent[1])}" ===`);
