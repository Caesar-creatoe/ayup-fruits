/* ============================================
   BASE PATH HELPER — resolves asset URLs from subpages
   ============================================ */
const basePath = (function() {
  const depth = (window.location.pathname.match(/\//g) || []).length - 1;
  return depth > 0 ? '../'.repeat(depth) : '';
})();

/* ============================================
   PRODUCT DATA WITH B2B TECHNICAL SPECS & SEASONALITY
   ============================================ */
const products = [
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Cherry", 
    tag: "Seasonal · May–July", 
    category: "fruits", 
    video: "videos/cherry_user.mp4",
    img: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&q=80",
    caliber: "26mm – 30mm+",
    packaging: "5kg wooden boxes, single row laid",
    temp: "+2°C to +4°C (90% RH)",
    capacity: "20 tons per 40ft Reefer FCL",
    shelflife: "18 – 21 days",
    peakMonths: [6],
    availableMonths: [5, 7]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Apricot", 
    tag: "Seasonal · June–August", 
    category: "fruits", 
    video: "videos/apricot.mp4",
    img: "https://images.unsplash.com/photo-1592681814168-6df0fa93161b?w=600&q=80",
    caliber: "35mm – 45mm+",
    packaging: "4kg open-top cardboard cartons",
    temp: "+1°C to +3°C (90% RH)",
    capacity: "18 – 20 tons per Reefer truck",
    shelflife: "14 – 18 days",
    peakMonths: [6, 7],
    availableMonths: [8]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Grapes", 
    tag: "Seasonal · August–October", 
    category: "fruits", 
    video: "videos/grapes_new.mp4",
    img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80",
    caliber: "Large globe / seedless (18mm+)",
    packaging: "5kg cartons, individual carry bags",
    temp: "-1°C to +1°C (90-95% RH)",
    capacity: "21 tons per 40ft Reefer FCL",
    shelflife: "45 – 60 days",
    peakMonths: [9, 10],
    availableMonths: [8]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Melon", 
    tag: "Seasonal · July–September", 
    category: "fruits", 
    video: "videos/melon.mp4",
    img: "https://images.unsplash.com/photo-1571575173700-afb9492e6a50?w=600&q=80",
    caliber: "Torpedo / Mirza (3kg – 6kg per piece)",
    packaging: "Stacked in cushioned cardboard bulk bins",
    temp: "+10°C to +12°C (85% RH)",
    capacity: "20 tons per Reefer truck",
    shelflife: "30 – 40 days",
    peakMonths: [8, 9],
    availableMonths: [7]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Watermelon", 
    tag: "Seasonal · June–September", 
    category: "fruits", 
    video: "videos/watermelon.mp4",
    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&q=80",
    caliber: "6kg – 12kg average size",
    packaging: "Bulk bins (500kg) or loose padded load",
    temp: "+12°C to +14°C (85-90% RH)",
    capacity: "22 tons per Reefer truck",
    shelflife: "21 – 28 days",
    peakMonths: [7, 8],
    availableMonths: [6, 9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Pomegranate", 
    tag: "Seasonal · September–November", 
    category: "fruits", 
    video: "videos/pomegranate_new.mp4",
    img: "https://images.unsplash.com/photo-1574709755254-fcd942d09d5a?w=600&q=80",
    caliber: "75mm – 95mm (350g – 600g)",
    packaging: "5kg open cartons with plastic cell trays",
    temp: "+5°C to +6°C (90-95% RH)",
    capacity: "20 tons per 40ft Reefer FCL",
    shelflife: "2 – 3 months",
    peakMonths: [10, 11],
    availableMonths: [9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Peach", 
    tag: "Seasonal · June–August", 
    category: "fruits", 
    video: "videos/peach_user.mp4",
    img: "https://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=600&q=80",
    caliber: "60mm – 75mm average diameter",
    packaging: "4kg flat cartons, single layer trays",
    temp: "+0.5°C to +1.5°C (90% RH)",
    capacity: "19 tons per Reefer truck",
    shelflife: "14 – 21 days",
    peakMonths: [7, 8],
    availableMonths: [6]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Nectarine", 
    tag: "Seasonal · June–August", 
    category: "fruits", 
    img: "https://images.unsplash.com/photo-1597995463377-911fb3779867?w=600&q=80",
    caliber: "60mm – 75mm average diameter",
    packaging: "4kg flat cartons, single layer trays",
    temp: "+0.5°C to +1.5°C (90% RH)",
    capacity: "19 tons per Reefer truck",
    shelflife: "14 – 21 days",
    peakMonths: [7, 8],
    availableMonths: [6]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Plum", 
    tag: "Seasonal · July–September", 
    category: "fruits", 
    video: "videos/plum_final.mp4",
        img: "https://images.unsplash.com/photo-1564750497011-ead0ce4b9448?w=600&q=80",
    caliber: "40mm – 55mm average diameter",
    packaging: "5kg plastic crates or cartons",
    temp: "+0°C to +2°C (90% RH)",
    capacity: "20 tons per Reefer truck",
    shelflife: "21 – 30 days",
    peakMonths: [8],
    availableMonths: [7, 9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Pear", 
    tag: "Seasonal · August–October", 
    category: "fruits", 
        img: "https://images.unsplash.com/photo-1514756331096-242fdeb70d4a?w=600&q=80",
    caliber: "65mm – 80mm average",
    packaging: "10kg telescopic cardboard cartons",
    temp: "+0.5°C to +1.5°C (90% RH)",
    capacity: "21 tons per Reefer FCL",
    shelflife: "30 – 45 days",
    peakMonths: [9],
    availableMonths: [8, 10]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Apple", 
    tag: "Seasonal · August–November", 
    category: "fruits", 
    video: "videos/apple_compressed.mp4",
    img: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=600&q=80",
    caliber: "70mm – 85mm average diameter",
    packaging: "13kg – 18kg double-wall cartons",
    temp: "+1°C to +3°C (90% RH)",
    capacity: "22 tons per Reefer FCL",
    shelflife: "3 – 6 months",
    peakMonths: [9, 10],
    availableMonths: [8, 11]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Quince", 
    tag: "Seasonal · September–November", 
    category: "fruits", 
    img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?w=600&q=80",
    caliber: "80mm – 100g+ average weight",
    packaging: "8kg flat cartons, padded layers",
    temp: "+0.5°C to +1°C (90% RH)",
    capacity: "20 tons per Reefer FCL",
    shelflife: "2 – 3 months",
    peakMonths: [10],
    availableMonths: [9, 11]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Lemon", 
    tag: "Year-round", 
    category: "fruits", 
    video: "videos/lemon.mp4",
    img: "https://images.unsplash.com/photo-1590502593747-42a996133562?w=600&q=80",
    caliber: "55mm – 70mm average",
    packaging: "10kg wooden boxes or net carry-bags",
    temp: "+10°C to +12°C (85-90% RH)",
    capacity: "21 tons per Reefer FCL",
    shelflife: "4 – 6 weeks",
    peakMonths: [10, 11, 12, 1, 2],
    availableMonths: [3, 4, 5, 6, 7, 8, 9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Persimmon", 
    tag: "Seasonal · October–December", 
    category: "fruits", 
    img: "https://images.unsplash.com/photo-1576714047433-c5f32378a30b?w=600&q=80",
    caliber: "70mm – 85mm average diameter",
    packaging: "5kg single-layer cartons",
    temp: "+0°C to +1°C (90% RH)",
    capacity: "20 tons per Reefer FCL",
    shelflife: "30 – 45 days",
    peakMonths: [10, 11],
    availableMonths: [12]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Fig", 
    tag: "Seasonal · July–September", 
    category: "fruits", 
    img: "https://images.unsplash.com/photo-1635341814161-d696d538542c?w=600&q=80",
    caliber: "35mm – 50mm average diameter",
    packaging: "1.5kg cardboard trays, cell compartments",
    temp: "+0.5°C to +1.5°C (90% RH)",
    capacity: "Air cargo palletized load",
    shelflife: "7 – 10 days",
    peakMonths: [8],
    availableMonths: [7, 9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Onion", 
    tag: "Year-round", 
    category: "vegetables", 
    video: "videos/onion_user.mp4",
    img: "https://images.unsplash.com/photo-1518977956812-cd3dbadaaf31?w=600&q=80",
    caliber: "50mm – 80mm+ export grade",
    packaging: "25kg leno mesh bags on pallets",
    temp: "+2°C to +4°C (70-75% RH)",
    capacity: "24 tons per FCL",
    shelflife: "3 – 5 months",
    peakMonths: [8, 9, 10],
    availableMonths: [1, 2, 3, 4, 5, 6, 7, 11, 12]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Tomato", 
    tag: "Seasonal · June–October", 
    category: "vegetables", 
    video: "videos/tomato_new.mp4",
    img: "https://images.unsplash.com/photo-1558818498-28c1e002b655?w=600&q=80",
    caliber: "60mm – 80mm average",
    packaging: "6kg cartons or plastic boxes",
    temp: "+10°C to +12°C (85-90% RH)",
    capacity: "20 tons per Reefer FCL",
    shelflife: "14 – 18 days",
    peakMonths: [7, 8, 9],
    availableMonths: [6, 10]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Cucumber", 
    tag: "Seasonal · May–September", 
    category: "vegetables", 
    video: "videos/cucumber.mp4",
    img: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?w=600&q=80",
    caliber: "12cm – 18cm length grade",
    packaging: "8kg telescopic cardboard cartons",
    temp: "+10°C to +12°C (90% RH)",
    capacity: "19 tons per Reefer FCL",
    shelflife: "10 – 14 days",
    peakMonths: [6, 7, 8],
    availableMonths: [5, 9]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Bell Pepper", 
    tag: "Seasonal · June–October", 
    category: "vegetables", 
    video: "videos/bell_pepper_new.mp4",
    img: "https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?w=600&q=80",
    caliber: "70mm – 90mm average",
    packaging: "5kg cardboard cartons, loose packed",
    temp: "+7°C to +9°C (90% RH)",
    capacity: "18 tons per Reefer FCL",
    shelflife: "14 – 18 days",
    peakMonths: [7, 8, 9],
    availableMonths: [6, 10]
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Dried Apricots & Raisins", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1601368135477-472a330882a0?w=600&q=80",
    caliber: "Caliber Sizes 1 to 8 (Apricots)",
    packaging: "10kg cartons, inner blue plastic lining",
    temp: "+5°C to +15°C (ambient dry storage)",
    capacity: "22 tons per general purpose dry FCL",
    shelflife: "12 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Dried Figs", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1601493700631-2b16ec4b4716?w=600&q=80",
    caliber: "Grades: 5 – 12 pieces per 100g",
    packaging: "5kg / 10kg cartons with inner vacuum bag",
    temp: "+5°C to +15°C (ambient dry storage, <65% RH)",
    capacity: "20 tons per dry FCL",
    shelflife: "12 – 18 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Dried Mulberry", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1596591606975-97ee5cef3a1e?w=600&q=80",
    caliber: "White & Black Mulberry; whole dried",
    packaging: "5kg / 10kg craft bags or cartons",
    temp: "+5°C to +15°C (ambient dry storage, <60% RH)",
    capacity: "18 tons per dry FCL",
    shelflife: "12 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Walnuts", 
    tag: "Year-round", 
    category: "dried", 
    video: "videos/walnuts_final.mp4",
        img: "https://images.unsplash.com/photo-1563412580953-3e397f85c4bc?w=600&q=80",
    caliber: "In-shell: 28mm+ / Kernel: halves & quarters",
    packaging: "25kg jute sacks (in-shell) / 10kg vacuum cartons (kernel)",
    temp: "+5°C to +15°C (ambient dry, <60% RH)",
    capacity: "20 tons per dry FCL",
    shelflife: "18 – 24 months (in-shell)",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Dried Cherries", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1528821128474-27f963b062bf?w=600&q=80",
    caliber: "Pitted whole; moisture 18 – 22%",
    packaging: "10kg cartons with inner polyethylene liner",
    temp: "+5°C to +15°C (ambient dry storage)",
    capacity: "20 tons per dry FCL",
    shelflife: "12 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Pistachios", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1617454370414-b5b43af66832?w=600&q=80",
    caliber: "In-shell: 18 – 25mm / Kernels: 0.6g – 1.2g each",
    packaging: "25kg vacuum PP bags or 10kg export cartons",
    temp: "+5°C to +15°C (dry, <55% RH)",
    capacity: "18 tons per dry FCL",
    shelflife: "24 months (in-shell)",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Almonds", 
    tag: "Year-round", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1574570069877-04abf0116b63?w=600&q=80",
    caliber: "In-shell & Blanched Kernel; Grades: 27/30 – 34/36",
    packaging: "10kg cartons, double-layer PE bag",
    temp: "+5°C to +10°C (dry, <55% RH)",
    capacity: "20 tons per dry FCL",
    shelflife: "24 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
    type: "export",
    origin: "🇺🇿 Uzbekistan",
    name: "Dried Fruits Gift Set", 
    tag: "Year-round · Premium Mix", 
    category: "dried", 
        img: "https://images.unsplash.com/photo-1559181567-c3190ca9be23?w=600&q=80",
    caliber: "Assorted mix: apricots, raisins, figs, prunes, walnuts, almonds",
    packaging: "1kg / 2kg / 5kg branded gift boxes; custom labelling available",
    temp: "+5°C to +15°C (ambient dry storage)",
    capacity: "Custom retail pallet orders",
    shelflife: "12 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  }
];
/* ============================================
   IMPORT PRODUCTS DATA
   ============================================ */
const importProducts = [
  {
    type: "import",
    origin: "🇪🇨 Ecuador / Colombia",
    name: "Banana",
    tag: "Year-round",
    category: "tropical",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&q=80",
    caliber: "Grade A: 7-9 inch / Extra: 9+ inch",
    packaging: "18.14kg cartons (standard export)",
    temp: "+13°C to +14°C (90-95% RH)",
    capacity: "24 tons per Reefer FCL",
    shelflife: "21 – 28 days (green)",
    moq: "1 FCL (24 tons)",
    certifications: "GlobalG.A.P., HACCP, Rainforest Alliance"
  },
  {
    type: "import",
    origin: "🇮🇳 India / 🇵🇰 Pakistan",
    name: "Mango",
    tag: "Seasonal · March–September",
    category: "tropical",
    img: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=600&q=80",
    caliber: "Grade 1: 250–350g / Grade 2: 350–500g",
    packaging: "4kg / 5kg cardboard trays",
    temp: "+10°C to +13°C (90% RH)",
    capacity: "20 tons per Reefer FCL",
    shelflife: "14 – 21 days",
    moq: "1 ton",
    certifications: "Phytosanitary, APEDA Certified"
  },
  {
    type: "import",
    origin: "🇪🇬 Egypt / 🇪🇸 Spain",
    name: "Orange",
    tag: "Seasonal · November–April",
    category: "citrus",
    img: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=600&q=80",
    caliber: "48 / 56 / 64 / 72 count",
    packaging: "15kg mesh bags or 10kg cartons",
    temp: "+7°C to +10°C (90% RH)",
    capacity: "22 tons per Reefer FCL",
    shelflife: "45 – 60 days",
    moq: "500kg",
    certifications: "GlobalG.A.P., Phytosanitary"
  },
  {
    type: "import",
    origin: "🇨🇱 Chile / 🇿🇦 South Africa",
    name: "Table Grape (Import)",
    tag: "Seasonal · October–April",
    category: "berries",
    img: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=600&q=80",
    caliber: "Globe / Seedless 18mm+",
    packaging: "4.5kg cartons, individual punnets",
    temp: "-1°C to +1°C (92% RH)",
    capacity: "21 tons per Reefer FCL",
    shelflife: "45 – 60 days",
    moq: "1 ton",
    certifications: "GlobalG.A.P., HACCP, BRC"
  },
  {
    type: "import",
    origin: "🇵🇪 Peru / 🇰🇪 Kenya",
    name: "Avocado",
    tag: "Year-round",
    category: "tropical",
    img: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&q=80",
    caliber: "Size 12 / 14 / 16 / 18 / 20",
    packaging: "4kg cartons, single layer",
    temp: "+5°C to +7°C (90% RH)",
    capacity: "20 tons per Reefer FCL",
    shelflife: "28 – 35 days (firm)",
    moq: "500kg",
    certifications: "GlobalG.A.P., Rainforest Alliance, HACCP"
  },
  {
    type: "import",
    origin: "🇮🇹 Italy / 🇨🇱 Chile",
    name: "Kiwi",
    tag: "Seasonal · April–November",
    category: "berries",
    img: "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&q=80",
    caliber: "Hayward: size 27 / 33 / 39 / 42",
    packaging: "3.5kg / 4kg trays",
    temp: "-0.5°C to +0.5°C (95% RH)",
    capacity: "22 tons per Reefer FCL",
    shelflife: "3 – 6 months",
    moq: "500kg",
    certifications: "GlobalG.A.P., BRC"
  },
  {
    type: "import",
    origin: "🇪🇬 Egypt / 🇪🇸 Spain",
    name: "Strawberry",
    tag: "Seasonal · December–May",
    category: "berries",
    img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=600&q=80",
    caliber: "Grade A: 25–35mm / Extra: 35mm+",
    packaging: "250g / 500g punnets, 4-8kg flats",
    temp: "+0°C to +2°C (90-95% RH)",
    capacity: "Air freight or reefer truck",
    shelflife: "7 – 10 days",
    moq: "200kg",
    certifications: "GlobalG.A.P., HACCP"
  },
  {
    type: "import",
    origin: "🇸🇦 Saudi Arabia / 🇦🇪 UAE",
    name: "Dates (Medjool)",
    tag: "Year-round",
    category: "exotic",
    img: "https://images.unsplash.com/photo-1619623954949-1aca31a600a4?w=600&q=80",
    caliber: "Jumbo (30-40g) / Large (20-30g)",
    packaging: "5kg / 10kg premium gift boxes",
    temp: "+0°C to +5°C (ambient dry storage)",
    capacity: "20 tons per dry FCL",
    shelflife: "12 months",
    moq: "200kg",
    certifications: "HACCP, ISO 22000"
  },
  {
    type: "import",
    origin: "🇨🇳 China / 🇹🇭 Thailand",
    name: "Lychee",
    tag: "Seasonal · May–August",
    category: "exotic",
    img: "https://images.unsplash.com/photo-1629213568830-a6c0b36e3b3e?w=600&q=80",
    caliber: "Brewster / Mauritius: 20–30g each",
    packaging: "4kg / 5kg mesh bags or cartons",
    temp: "+2°C to +4°C (92% RH)",
    capacity: "18 tons per Reefer FCL",
    shelflife: "14 – 21 days",
    moq: "500kg",
    certifications: "Phytosanitary, HACCP"
  },
  {
    type: "import",
    origin: "🇹🇷 Turkey / 🇬🇷 Greece",
    name: "Fig (Import)",
    tag: "Seasonal · July–October",
    category: "exotic",
    img: "https://images.unsplash.com/photo-1635341814161-d696d538542c?w=600&q=80",
    caliber: "35mm – 55mm; Brown Turkey / Kadota",
    packaging: "1.5kg / 3kg trays",
    temp: "+0°C to +2°C (90% RH)",
    capacity: "Air cargo or reefer truck",
    shelflife: "7 – 12 days",
    moq: "200kg",
    certifications: "GlobalG.A.P., Phytosanitary"
  }
];



/* ============================================
   RENDER CATALOG GRID & MODAL TRIGGER
   ============================================ */
const grid = document.getElementById('productsGrid');
if (!grid) { /* Not on a page with products grid */ }

function renderProducts(filter = 'all') {
  if (!grid) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  grid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${i * 0.05}s`;
    const mediaHTML = p.video 
      ? `<video src="${basePath}${p.video}" autoplay muted loop playsinline preload="metadata"></video>`
      : `<img src="${p.img}" alt="${p.name} from Uzbekistan" loading="lazy">`;

    card.innerHTML = `
      <div class="product-card-img" onclick="openProductModal('${p.name}')">
        ${mediaHTML}
        <div class="product-card-overlay">
          <button class="inquire-btn" onclick="event.stopPropagation(); openProductModal('${p.name}')">View Specs</button>
        </div>
        <div class="import-origin-badge">🇺🇿 Uzbekistan</div>
      </div>
      <div class="product-card-info" onclick="openProductModal('${p.name}')">
        <h3 style="cursor: pointer;">${p.name}</h3>
        <span class="product-tag">${p.tag}</span>
      </div>
    `;
    grid.appendChild(card);
  });
  observeReveals();
}

if (grid) renderProducts();


/* Filter tabs — context aware (export vs import) */
document.querySelectorAll('#exportFilters .filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('#exportFilters .filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const currentView = document.getElementById('btnGridView')?.classList.contains('active') ? 'grid' : 'calendar';
    if (currentView === 'grid') {
      renderProducts(tab.dataset.filter);
    } else {
      renderSeasonalityCalendar(tab.dataset.filter);
    }
  });
});


/* ============================================
   B2B SEASONALITY CALENDAR MATRIX GENERATION
   ============================================ */
const monthsNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const calendarWrapper = document.getElementById('seasonalityWrapper');

function renderSeasonalityCalendar(filter = 'all') {
  if (!calendarWrapper) return;
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  
  let html = `
    <table class="seasonality-table">
      <thead>
        <tr>
          <th>Export Product</th>
          ${monthsNames.map(m => `<th>${m}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
  `;
  
  filtered.forEach(p => {
    html += `
      <tr>
        <td class="product-label-cell" onclick="openProductModal('${p.name}')">🍏 ${p.name}</td>
    `;
    
    for (let m = 1; m <= 12; m++) {
      let cellClass = 'none';
      if (p.peakMonths.includes(m)) {
        cellClass = 'peak';
      } else if (p.availableMonths.includes(m)) {
        cellClass = 'available';
      }
      
      html += `
        <td>
          <div class="season-bar ${cellClass}" title="${p.name} - ${monthsNames[m-1]}: ${cellClass === 'peak' ? 'Peak Season' : cellClass === 'available' ? 'Available' : 'Out of season'}"></div>
        </td>
      `;
    }
    
    html += `</tr>`;
  });
  
  html += `
      </tbody>
    </table>
    
    <div class="season-legend">
      <div class="legend-item">
        <div class="legend-color peak"></div>
        <span>Peak Season (Fresh Harvest)</span>
      </div>
      <div class="legend-item">
        <div class="legend-color available"></div>
        <span>Storage / Year-Round Export</span>
      </div>
      <div class="legend-item">
        <div class="legend-color none"></div>
        <span>Unavailable</span>
      </div>
    </div>
  `;
  
  calendarWrapper.innerHTML = html;
  observeReveals();
}

/* Toggle Views (Grid vs Seasonality) */
const btnGridView = document.getElementById('btnGridView');
const btnCalendarView = document.getElementById('btnCalendarView');

if (btnGridView) btnGridView.addEventListener('click', () => {
  btnGridView.classList.add('active');
  btnCalendarView.classList.remove('active');
  grid.style.display = 'grid';
  calendarWrapper.style.display = 'none';
  const activeFilter = document.querySelector('.filter-tab.active').dataset.filter;
  renderProducts(activeFilter);
});

if (btnCalendarView) btnCalendarView.addEventListener('click', () => {
  btnCalendarView.classList.add('active');
  btnGridView.classList.remove('active');
  grid.style.display = 'none';
  calendarWrapper.style.display = 'block';
  const activeFilter = document.querySelector('.filter-tab.active').dataset.filter;
  renderSeasonalityCalendar(activeFilter);
});

/* ============================================
   B2B SPECIFICATIONS MODAL CONTROLLER
   ============================================ */
const productModal = document.getElementById('productModal');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalCtaBtn = document.getElementById('modalCtaBtn');

function openProductModal(name) {
  const p = products.find(prod => prod.name === name);
  if (!p) return;
  
  const imgEl = document.getElementById('modalProductImg');
  const videoEl = document.getElementById('modalProductVideo');

  if (p.video) {
    imgEl.style.display = 'none';
    if (videoEl) {
      videoEl.style.display = 'block';
      videoEl.src = `${basePath}${p.video}`;
      videoEl.load();
      videoEl.play().catch(e => console.log("Autoplay blocked:", e));
    }
  } else {
    if (videoEl) {
      videoEl.style.display = 'none';
      videoEl.pause();
    }
    imgEl.style.display = 'block';
    imgEl.src = p.img;
  }

  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductSeason').textContent = p.tag;
  document.getElementById('modalSpecCaliber').textContent = p.caliber;
  document.getElementById('modalSpecPackaging').textContent = p.packaging;
  document.getElementById('modalSpecTemp').textContent = p.temp;
  document.getElementById('modalSpecCapacity').textContent = p.capacity;
  document.getElementById('modalSpecShelfLife').textContent = p.shelflife;
  document.getElementById('modalCtaProductName').textContent = p.name;
  
  if (productModal) {
    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeProductModal() {
  const videoEl = document.getElementById('modalProductVideo');
  if (videoEl) {
    videoEl.pause();
    videoEl.src = '';
  }
  
  if (productModal) {
    productModal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeProductModal);
if (productModal) productModal.addEventListener('click', (e) => {
  if (e.target === productModal) closeProductModal();
});

if (modalCtaBtn) modalCtaBtn.addEventListener('click', () => {
  const name = document.getElementById('modalProductName').textContent;
  const select = document.getElementById('productInterest');
  if (!select) return;
  
  // Set value in select option
  for (let option of select.options) {
    if (option.value.toLowerCase().includes(name.toLowerCase()) || name.toLowerCase().includes(option.value.toLowerCase())) {
      select.value = option.value;
      break;
    }
  }
  
  closeProductModal();
  
  // Smooth scroll
  const contactSec = document.getElementById('contact');
  if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
  
  // Flash form border
  const form = document.getElementById('inquiryForm');
  if (form) {
    form.classList.add('form-pulse-active');
    setTimeout(() => {
      form.classList.remove('form-pulse-active');
    }, 3600);
  }
});

/* ============================================
   CERTIFICATION INSPECTOR MODAL CONTROLLER
   ============================================ */
const certModal = document.getElementById('certModal');
const certModalCloseBtn = document.getElementById('certModalCloseBtn');

const certDataMap = {
  globalgap: {
    title: "GlobalG.A.P. Registration",
    badge: "🌱",
    id: "GGAP-UZ-2026-08711",
    issuer: "Euro-Cert Certification Bureau",
    valid: "31 December 2026",
    desc: "Verifies strict food safety practices, worker welfare, and absolute compliance with EU maximum chemical residue limits at the orchard growth stage."
  },
  haccp: {
    title: "HACCP Safety Certificate",
    badge: "🍎",
    id: "HACCP-UZ-2026-90432",
    issuer: "Central Asian Quality Assurance Bureau",
    valid: "15 September 2027",
    desc: "Hazard Analysis Critical Control Point standard verified for our central sorting, washing, sorting lines, and grading warehouses."
  },
  iso: {
    title: "ISO 22000 Compliance",
    badge: "🛡️",
    id: "ISO-22000-UZ-99084",
    issuer: "SGS inspection services",
    valid: "20 January 2028",
    desc: "International standard confirming our Food Safety Management system across all cold chain facilities, export packaging lines, and logistics fleets."
  },
  phyto: {
    title: "Phytosanitary clearance",
    badge: "📋",
    id: "PHYTO-UZ-2026-55610",
    issuer: "State Plant Quarantine Inspectorate",
    valid: "Per-Shipment Basis",
    desc: "Full lab analysis report and authenticated Country of Origin document verified for phytosanitary clearance across all EU, CIS, and Gulf ports."
  }
};

function openCertModal(type) {
  const d = certDataMap[type];
  if (!d || !certModal) return;
  
  document.getElementById('certModalTitle').textContent = d.title;
  document.getElementById('certVisualBadge').textContent = d.badge;
  document.getElementById('certSpecId').textContent = d.id;
  document.getElementById('certSpecIssuer').textContent = d.issuer;
  document.getElementById('certSpecValid').textContent = d.valid;
  document.getElementById('certModalDesc').textContent = d.desc;
  
  certModal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCertModal() {
  if (!certModal) return;
  certModal.classList.remove('open');
  document.body.style.overflow = '';
}

if (certModalCloseBtn) certModalCloseBtn.addEventListener('click', closeCertModal);
if (certModal) certModal.addEventListener('click', (e) => {
  if (e.target === certModal) closeCertModal();
});

/* ============================================
   INTERACTIVE LOGISTICS ROUTES CONTROLLER
   ============================================ */
function selectRoute(routeId) {
  // Update cards
  document.querySelectorAll('.route-card').forEach(card => {
    card.classList.remove('active');
  });
  const selectedCard = document.getElementById(`card-${routeId}`);
  if (selectedCard) selectedCard.classList.add('active');
  
  // Update lines
  document.querySelectorAll('.map-route-line').forEach(line => {
    line.classList.remove('active-route');
  });
  const selectedLine = document.getElementById(`route-${routeId}`);
  if (selectedLine) selectedLine.classList.add('active-route');
  
  // Update city nodes
  document.querySelectorAll('.map-city-node').forEach(node => {
    node.classList.remove('active-node');
  });
  const selectedNode = document.getElementById(`node-${routeId}`);
  if (selectedNode) selectedNode.classList.add('active-node');
}

/* ============================================
   NAVBAR SCROLL
   ============================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

/* ============================================
   MOBILE MENU
   ============================================ */
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerBtn.addEventListener('click', () => {
  hamburgerBtn.classList.toggle('active');
  mobileMenu.classList.toggle('open');
  document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
});

document.querySelectorAll('.mobile-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  });
});

/* ============================================
   SCROLL REVEAL (Intersection Observer)
   ============================================ */
function observeReveals() {
  const reveals = document.querySelectorAll('.reveal:not(.visible)');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  reveals.forEach(el => observer.observe(el));
}
observeReveals();

/* ============================================
   STATS COUNTER + CARD ANIMATIONS
   ============================================ */
let statsCounted = false;
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !statsCounted) {
      statsCounted = true;

      // Trigger card pop-in animations
      document.querySelectorAll('.stat-item').forEach((card, i) => {
        card.style.opacity = '0';
        setTimeout(() => {
          card.classList.add('visible');
        }, i * 100);
      });

      // Trigger number counters — animate from 0 as visual effect
      // (real values are already in HTML for SEO/no-JS fallback)
      document.querySelectorAll('.counter').forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2200;
        const step = target / (duration / 16);
        let current = 0;
        counter.textContent = '0'; // reset for animation
        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            counter.textContent = target.toLocaleString();
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString();
          }
        }, 16);
      });
    }
  });
}, { threshold: 0.25 });

const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
  // Set initial opacity to 0 so cards start hidden
  document.querySelectorAll('.stat-item').forEach(card => {
    card.style.opacity = '0';
  });
  statsObserver.observe(statsSection);
}

/* ============================================
   HOW WE WORK — Process Step Animations
   ============================================ */
const processSection = document.getElementById('how-we-work');
if (processSection) {
  const processObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate steps with stagger
        const steps = processSection.querySelectorAll('.process-step');
        steps.forEach((step, i) => {
          setTimeout(() => {
            step.classList.add('visible');
          }, i * 150);
        });

        // Animate timeline fill
        const fill = document.getElementById('timelineFill');
        if (fill) {
          setTimeout(() => {
            fill.style.width = '100%';
          }, 200);
        }

        processObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  processObserver.observe(processSection);
}

/* ============================================
   FORM SUBMIT
   ============================================ */
function handleFormSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const originalText = btn.textContent;
  btn.textContent = 'Sending...';
  btn.disabled = true;

  const formData = {
    Name: document.getElementById('fullName').value,
    Company: document.getElementById('companyName').value,
    Country: document.getElementById('country').value,
    Product: document.getElementById('productInterest').value,
    Message: document.getElementById('message').value
  };

  fetch("https://formsubmit.co/ajax/ayupfruits@gmail.com", {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      return response.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    btn.textContent = '✓ Inquiry Sent!';
    btn.style.background = '#25D366';
    btn.style.color = '#fff';
    e.target.reset();
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  })
  .catch(error => {
    console.error('Error:', error);
    btn.textContent = '❌ Failed to Send';
    btn.style.background = '#d9534f';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = originalText;
      btn.style.background = '';
      btn.style.color = '';
      btn.disabled = false;
    }, 3000);
  });
}

/* ============================================
   HERO VISUALS: BACKGROUND PARALLAX & DUST PARTICLES
   ============================================ */
const heroOrnament = document.querySelector('.hero-ornament');
const heroBg = document.getElementById('heroBg');
const duneBack = document.querySelector('.dune-back');
const duneMiddle = document.querySelector('.dune-middle');
const duneFront = document.querySelector('.dune-front');
const caravan = document.querySelector('.caravan');
const aboutSection = document.getElementById('about');

window.addEventListener('scroll', () => {
  const scrolled = window.scrollY;
  
  // Hero Section Parallax
  if (scrolled < window.innerHeight) {
    if (heroOrnament) heroOrnament.style.transform = `translateY(${scrolled * 0.18}px)`;
    if (heroBg) heroBg.style.transform = `translateY(${scrolled * 0.38}px) scale(1.15)`;
  }
  
  // About Section Dune Parallax & Caravan Movement
  if (aboutSection) {
    const aboutRect = aboutSection.getBoundingClientRect();
    if (aboutRect.top < window.innerHeight && aboutRect.bottom > 0) {
      const scrollOffset = window.innerHeight - aboutRect.top;
      
      // Move dunes vertically at different speeds to create 3D depth
      if (duneBack) duneBack.style.transform = `translateY(${scrollOffset * 0.04}px)`;
      if (duneMiddle) duneMiddle.style.transform = `translateY(${scrollOffset * 0.08}px)`;
      if (duneFront) duneFront.style.transform = `translateY(${scrollOffset * 0.12}px)`;
      
      // Caravan walking across the dunes horizontally
      if (caravan) {
        const walkingX = 800 - (scrollOffset * 0.35);
        const clampedX = Math.max(-100, walkingX);
        caravan.setAttribute('transform', `translate(${clampedX}, 145) scale(0.4)`);
      }
    }
  }
});

// Canvas-based glowing "Silk Road Dust" particles drifting slowly
const canvas = document.getElementById('particleCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particlesArray = [];

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.2 + 0.6; // fine gold dust size
      this.speedX = Math.random() * 0.4 + 0.1; // drift rightwards in sunbeams
      this.speedY = -(Math.random() * 0.5 + 0.15); // drift upwards
      this.opacity = Math.random() * 0.45 + 0.15;
      this.pulseDirection = Math.random() > 0.5 ? 1 : -1;
    }
    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Pulse particle opacity gently
      this.opacity += this.pulseDirection * 0.005;
      if (this.opacity > 0.6 || this.opacity < 0.1) {
        this.pulseDirection *= -1;
      }

      // Recycle particles reaching edges
      if (this.y < 0) {
        this.y = canvas.height;
        this.x = Math.random() * canvas.width;
      }
      if (this.x > canvas.width) {
        this.x = 0;
      }
    }
    draw() {
      ctx.fillStyle = `rgba(232, 160, 48, ${this.opacity})`; // gold color hex E8A030
      ctx.shadowBlur = this.size * 3;
      ctx.shadowColor = 'rgba(232, 160, 48, 0.8)';
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0; // reset
    }
  }

  function initParticles() {
    particlesArray = [];
    const count = Math.floor((canvas.width * canvas.height) / 18000);
    for (let i = 0; i < count; i++) {
      particlesArray.push(new Particle());
    }
  }

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particlesArray.forEach(p => {
      p.update();
      p.draw();
    });
    requestAnimationFrame(animateParticles);
  }

  initParticles();
  animateParticles();
}

// Sand physics loop removed. Transition replaced by animated SVG wave.

/* ============================================
   GOOGLE TRANSLATE & LANGUAGE MODAL
   ============================================ */
// Function to get cookie
function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

// Function to set cookie
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    expires = "; expires=" + date.toUTCString();
  }
  const domain = window.location.hostname.replace(/^www\./, '');
  document.cookie = name + "=" + value + expires + "; path=/; domain=." + domain;
  document.cookie = name + "=" + value + expires + "; path=/; domain=" + window.location.hostname;
  document.cookie = name + "=" + value + expires + "; path=/";
}

// Set language translation using Google Translate cookie
function changeLang(langCode) {
  // Clear any existing Google Translate cookies
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
  document.cookie = 'googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.' + window.location.hostname.replace(/^www\./, '');
  
  if (langCode !== 'en') {
    setCookie('googtrans', `/en/${langCode}`, 30);
  }
  localStorage.setItem('user-lang', langCode);
  
  // Reload page to trigger translation
  location.reload();
}

function updateNavFlag(lang) {
  const flagMap = {
    'en': { flag: '🇬🇧', text: 'EN' },
    'ru': { flag: '🇷🇺', text: 'RU' },
    'uz': { flag: '🇺🇿', text: 'UZ' },
    'tr': { flag: '🇹🇷', text: 'TR' },
    'de': { flag: '🇩🇪', text: 'DE' },
    'zh-CN': { flag: '🇨🇳', text: 'ZH' }
  };
  
  const current = flagMap[lang] || flagMap['en'];
  document.querySelectorAll('.current-lang-flag').forEach(el => el.textContent = current.flag);
  document.querySelectorAll('.current-lang-text').forEach(el => el.textContent = current.text);
}

// Initialize Language selection on load
document.addEventListener("DOMContentLoaded", function() {
  const userLang = localStorage.getItem('user-lang');
  const modal = document.getElementById('langModalOverlay');
  
  if (!userLang) {
    // Show modal if it's first visit
    if (modal) {
      setTimeout(() => {
        modal.classList.add('active');
      }, 800); // short elegant delay
    }
  } else {
    // Update navbar indicators
    updateNavFlag(userLang);
  }
});

function googleTranslateElementInit() {
  new google.translate.TranslateElement({
    pageLanguage: 'en',
    includedLanguages: 'en,ru,uz,tr,de,zh-CN',
    layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    autoDisplay: false
  }, 'google_translate_element');
}

// Toggle custom language dropdown menu visibility
function toggleLangDropdown(event) {
  event.stopPropagation();
  const dropdowns = document.querySelectorAll('.lang-dropdown-content');
  const targetDropdown = event.currentTarget.nextElementSibling;
  
  // Close other dropdowns
  dropdowns.forEach(drop => {
    if (drop !== targetDropdown) {
      drop.classList.remove('show');
    }
  });
  
  // Toggle the target one
  targetDropdown.classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function(event) {
  if (!event.target.matches('.lang-dropbtn') && !event.target.closest('.lang-dropdown')) {
    const dropdowns = document.querySelectorAll(".lang-dropdown-content");
    dropdowns.forEach(drop => {
      drop.classList.remove('show');
    });
  }
});

/* ============================================
   GA4 CONVERSION TRACKING
   ============================================ */

// Safe gtag wrapper — silently skips if GA4 not loaded
function trackEvent(eventName, params) {
  if (typeof gtag === 'function') {
    gtag('event', eventName, params);
  }
}

// ── 1. WhatsApp Click Tracking ─────────────────────────────────────
// Covers: navbar btn, mobile menu btn, contact section cards, footer
document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
    link.addEventListener('click', function() {
      const href = this.href || '';
      // Detect which number/department
      let department = 'unknown';
      if (href.includes('998946500421')) {
        department = 'EU Sales (+49)';
        if (href.includes('importing%20fruits') || href.includes('interested')) {
          department = 'Export Division';
        } else if (href.includes('%D0%B8%D0%BC%D0%BF%D0%BE%D1%80%D1%82') || href.includes('%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5') || href.includes('Здравствуйте') || href.includes('интересует')) {
          department = 'CIS Russian Sales';
        } else if (href.includes('customs') || href.includes('logistics')) {
          department = 'Logistics Desk';
        }
      }

      trackEvent('whatsapp_click', {
        event_category: 'Contact',
        event_label: department,
        value: 1
      });
    });
  });

  // ── 2. Request a Quote Button (Hero + Product Modal CTA) ───────────
  document.querySelectorAll(
    'a[href*="contact"], a[href*="#contact"], #modalCtaBtn, .btn-primary'
  ).forEach(function(btn) {
    btn.addEventListener('click', function() {
      const label = this.textContent.trim().substring(0, 60);
      trackEvent('request_quote_click', {
        event_category: 'Lead',
        event_label: label,
        value: 5
      });
    });
  });

  // ── 3. Contact Form Submission ─────────────────────────────────────
  const inquiryForm = document.getElementById('inquiryForm');
  if (inquiryForm) {
    inquiryForm.addEventListener('submit', function() {
      const product = (document.getElementById('productInterest') || {}).value || 'unknown';
      trackEvent('form_submit', {
        event_category: 'Lead',
        event_label: 'Inquiry Form — ' + product,
        value: 10
      });
    });
  }

  // ── 4. Product Modal View (B2B Specs) ──────────────────────────────
  const _origOpenModal = window.openProductModal;
  if (typeof _origOpenModal === 'function') {
    window.openProductModal = function(name) {
      _origOpenModal(name);
      trackEvent('product_modal_view', {
        event_category: 'Engagement',
        event_label: name,
        value: 1
      });
    };
  }

  // ── 5. Language Switch ─────────────────────────────────────────────
  const _origChangeLang = window.changeLang;
  if (typeof _origChangeLang === 'function') {
    window.changeLang = function(langCode) {
      trackEvent('language_switch', {
        event_category: 'UI',
        event_label: langCode
      });
      _origChangeLang(langCode);
    };
  }

  // ── 6. Telegram Click ─────────────────────────────────────────────
  document.querySelectorAll('a[href*="t.me"]').forEach(function(link) {
    link.addEventListener('click', function() {
      trackEvent('telegram_click', {
        event_category: 'Contact',
        event_label: 'Telegram @ayupfruits',
        value: 1
      });
    });
  });

});


/* ============================================
   EXPORT / IMPORT PRODUCT TAB SWITCHING
   ============================================ */
let currentProductSection = 'export';

function renderImportProducts(filter = 'all') {
  const importGrid = document.getElementById('importGrid');
  if (!importGrid) return;
  const filtered = filter === 'all' ? importProducts : importProducts.filter(p => p.category === filter);
  importGrid.innerHTML = '';
  filtered.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'product-card reveal import-product-card';
    card.style.transitionDelay = `${i * 0.05}s`;
    card.innerHTML = `
      <div class="product-card-img" onclick="openImportModal('${p.name}')">
        <img src="${p.img}" alt="${p.name}" loading="lazy">
        <div class="product-card-overlay">
          <button class="inquire-btn" onclick="event.stopPropagation(); openImportModal('${p.name}')">View Specs</button>
        </div>
        <div class="import-origin-badge">${p.origin}</div>
      </div>
      <div class="product-card-info" onclick="openImportModal('${p.name}')">
        <h3 style="cursor:pointer;">${p.name}</h3>
        <span class="product-tag">${p.tag}</span>
      </div>
    `;
    importGrid.appendChild(card);
  });
  observeReveals();
}

function openImportModal(name) {
  const p = importProducts.find(prod => prod.name === name);
  if (!p) return;
  const imgEl = document.getElementById('modalProductImg');
  const videoEl = document.getElementById('modalProductVideo');
  if (videoEl) { videoEl.style.display = 'none'; videoEl.pause(); videoEl.src = ''; }
  imgEl.style.display = 'block';
  imgEl.src = p.img;
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductSeason').textContent = p.tag + ' · ' + p.origin;
  document.getElementById('modalSpecCaliber').textContent = p.caliber;
  document.getElementById('modalSpecPackaging').textContent = p.packaging;
  document.getElementById('modalSpecTemp').textContent = p.temp;
  document.getElementById('modalSpecCapacity').textContent = p.capacity;
  document.getElementById('modalSpecShelfLife').textContent = p.shelflife;
  document.getElementById('modalCtaProductName').textContent = p.name;
  const productModal = document.getElementById('productModal');
  if (productModal) {
    productModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function switchProductSection(section) {
  currentProductSection = section;
  const exportGrid = document.getElementById('productsGrid');
  const importGrid = document.getElementById('importGrid');
  const exportFilters = document.getElementById('exportFilters');
  const importFilters = document.getElementById('importFilters');
  const tabExport = document.getElementById('tabExport');
  const tabImport = document.getElementById('tabImport');
  const viewToggle = document.querySelector('.view-toggle-container');

  if (section === 'export') {
    if (exportGrid) exportGrid.style.display = '';
    if (importGrid) importGrid.style.display = 'none';
    if (exportFilters) exportFilters.style.display = '';
    if (importFilters) importFilters.style.display = 'none';
    if (tabExport) tabExport.classList.add('active');
    if (tabImport) tabImport.classList.remove('active');
    if (viewToggle) viewToggle.style.display = '';
  } else {
    if (exportGrid) exportGrid.style.display = 'none';
    if (importGrid) importGrid.style.display = '';
    if (exportFilters) exportFilters.style.display = 'none';
    if (importFilters) importFilters.style.display = '';
    if (tabExport) tabExport.classList.remove('active');
    if (tabImport) tabImport.classList.add('active');
    if (viewToggle) viewToggle.style.display = 'none';
    renderImportProducts();
  }
}

// Set up section tab listeners
document.addEventListener('DOMContentLoaded', () => {
  const tabExport = document.getElementById('tabExport');
  const tabImport = document.getElementById('tabImport');
  if (tabExport) tabExport.addEventListener('click', () => switchProductSection('export'));
  if (tabImport) tabImport.addEventListener('click', () => switchProductSection('import'));

  // Import filter tabs
  const importFilters = document.getElementById('importFilters');
  if (importFilters) {
    importFilters.querySelectorAll('.filter-tab').forEach(tab => {
      tab.addEventListener('click', () => {
        importFilters.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        renderImportProducts(tab.dataset.filter);
      });
    });
  }

  // Hero import button
  const heroImportBtn = document.getElementById('heroImportBtn');
  if (heroImportBtn) {
    heroImportBtn.addEventListener('click', (e) => {
      e.preventDefault();
      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => switchProductSection('import'), 600);
    });
  }
});

/* ============================================
   HOW WE TRADE TAB SWITCHING
   ============================================ */
function switchTradeTab(type) {
  const exportWorkflow = document.getElementById('exportWorkflow');
  const importWorkflow = document.getElementById('importWorkflow');
  const exportTab = document.getElementById('tradeExportTab');
  const importTab = document.getElementById('tradeImportTab');
  if (type === 'export') {
    if (exportWorkflow) exportWorkflow.style.display = '';
    if (importWorkflow) importWorkflow.style.display = 'none';
    if (exportTab) exportTab.classList.add('active');
    if (importTab) importTab.classList.remove('active');
  } else {
    if (exportWorkflow) exportWorkflow.style.display = 'none';
    if (importWorkflow) importWorkflow.style.display = '';
    if (exportTab) exportTab.classList.remove('active');
    if (importTab) importTab.classList.add('active');
    observeReveals();
  }
}

/* ============================================
   FAQ ACCORDION
   ============================================ */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-answer');
  const isOpen = item.classList.contains('open');
  // Close all open items in same group
  btn.closest('.faq-list').querySelectorAll('.faq-item.open').forEach(el => {
    el.classList.remove('open');
    el.querySelector('.faq-answer').style.maxHeight = '0';
    el.querySelector('.faq-question').classList.remove('active');
  });
  if (!isOpen) {
    item.classList.add('open');
    answer.style.maxHeight = answer.scrollHeight + 'px';
    btn.classList.add('active');
  }
}

/* ============================================
   CONTACT INQUIRY TYPE SELECTOR
   ============================================ */
function selectInquiryType(type) {
  document.querySelectorAll('.inquiry-type-btn').forEach(btn => btn.classList.remove('active'));
  const btn = document.getElementById(type === 'export' ? 'inquiryExport' : 'inquiryImport');
  if (btn) btn.classList.add('active');
  // Update the product select if it exists
  const productSelect = document.getElementById('productInterest');
  if (productSelect) {
    // Re-filter options based on type (optional UX enhancement)
    const hiddenInput = document.getElementById('inquiryTypeField');
    if (hiddenInput) hiddenInput.value = type;
  }
}

/* ============================================
   WORLD TRADE MAP — REAL CANVAS RENDERER
   ============================================ */

// Import sourcing countries (for Verified Growers Worldwide map)
const SOURCING_COUNTRIES = {
  792: { name:'Turkey',       flag:'🇹🇷', lng:35.2,  lat:39.0, products:'Citrus, Figs, Cherries' },
  818: { name:'Egypt',        flag:'🇪🇬', lng:30.8,  lat:26.8, products:'Citrus, Strawberries, Grapes' },
  724: { name:'Spain',        flag:'🇪🇸', lng:-3.7,  lat:40.4, products:'Orange, Lemon, Strawberry' },
  380: { name:'Italy',        flag:'🇮🇹', lng:12.5,  lat:41.9, products:'Kiwi, Apple, Pear' },
  710: { name:'S. Africa',    flag:'🇿🇦', lng:25.1,  lat:-29.0,products:'Grapes, Citrus, Avocado' },
  152: { name:'Chile',        flag:'🇨🇱', lng:-71.0, lat:-35.7,products:'Grapes, Kiwi, Berries' },
  604: { name:'Peru',         flag:'🇵🇪', lng:-75.0, lat:-9.2, products:'Avocado, Blueberries' },
  356: { name:'India',        flag:'🇮🇳', lng:78.9,  lat:22.0, products:'Mango, Pomegranate' },
  156: { name:'China',        flag:'🇨🇳', lng:104.0, lat:35.5, products:'Pear, Apple, Mandarin' },
  586: { name:'Pakistan',     flag:'🇵🇰', lng:67.0,  lat:30.4, products:'Mango, Kinnow, Dates' },
};

// Export destination countries (for Logistics map — Connecting Uzbek Orchards to 32+ Markets)
const EXPORT_COUNTRIES = {
  276: { name:'Germany',      flag:'🇩🇪', lng:10.4,  lat:51.2, products:'EU — Wholesale Hub' },
  528: { name:'Netherlands',  flag:'🇳🇱', lng:5.3,   lat:52.1, products:'EU — Rotterdam Port' },
  616: { name:'Poland',       flag:'🇵🇱', lng:19.0,  lat:52.2, products:'EU — Eastern Europe' },
  826: { name:'UK',           flag:'🇬🇧', lng:-2.0,  lat:53.0, products:'Cherries, Apricots, Melons' },
  643: { name:'Russia',       flag:'🇷🇺', lng:37.6,  lat:55.8, products:'CIS — Main Market' },
  398: { name:'Kazakhstan',   flag:'🇰🇿', lng:71.4,  lat:51.2, products:'CIS — Rail Route' },
  417: { name:'Kyrgyzstan',   flag:'🇰🇬', lng:74.7,  lat:42.9, products:'CIS — Daily Shipments' },
  784: { name:'UAE',          flag:'🇦🇪', lng:54.4,  lat:24.0, products:'Middle East — Hub' },
  682: { name:'Saudi Arabia', flag:'🇸🇦', lng:45.1,  lat:24.7, products:'Cherries, Figs, Melons' },
  634: { name:'Qatar',        flag:'🇶🇦', lng:51.5,  lat:25.3, products:'Air Cargo — Premium' },
  156: { name:'China',        flag:'🇨🇳', lng:104.0, lat:35.5, products:'East Asia — Rail Freight' },
  410: { name:'South Korea',  flag:'🇰🇷', lng:127.0, lat:37.5, products:'East Asia — Air/Rail' },
  392: { name:'Japan',        flag:'🇯🇵', lng:139.7, lat:35.7, products:'East Asia — Premium' },
};

function createWorldTradeMap(canvasId, customCountries) {
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;

  // Sizing
  const wrapper = canvas.parentElement;
  const DPR = window.devicePixelRatio || 1;
  const W = wrapper.offsetWidth || 700;
  const H = Math.round(W * 0.417);
  canvas.width  = W * DPR;
  canvas.height = H * DPR;
  canvas.style.width  = W + 'px';
  canvas.style.height = H + 'px';
  const ctx = canvas.getContext('2d');
  ctx.scale(DPR, DPR);

  // Use provided countries or default to sourcing
  const SOURCING = customCountries || SOURCING_COUNTRIES;
  const HUB_ID  = 860; // Uzbekistan
  const HUB_LNG = 63.0, HUB_LAT = 41.5;

  // Mercator projection fitted to canvas
  const SCALE = W / (2 * Math.PI) * 0.95;
  const OFFSET_X = W / 2;
  const OFFSET_Y = H / 2 + H * 0.08;

  function project(lng, lat) {
    const x = SCALE * (lng * Math.PI / 180) + OFFSET_X;
    const latR = lat * Math.PI / 180;
    const y = -SCALE * Math.log(Math.tan(Math.PI / 4 + latR / 2)) + OFFSET_Y;
    return [x, y];
  }

  // GeoJSON path renderer
  function pathFeature(feature) {
    if (!feature || !feature.geometry) return;
    const geom = feature.geometry;
    const drawRing = (ring) => {
      if (!ring.length) return;
      let moved = false;
      for (let i = 0; i < ring.length; i++) {
        const [px, py] = project(ring[i][0], ring[i][1]);
        if (px < -W || px > W * 2 || py < -H || py > H * 2) { moved = false; continue; }
        if (!moved) { ctx.moveTo(px, py); moved = true; }
        else ctx.lineTo(px, py);
      }
      ctx.closePath();
    };
    ctx.beginPath();
    if (geom.type === 'Polygon') {
      geom.coordinates.forEach(drawRing);
    } else if (geom.type === 'MultiPolygon') {
      geom.coordinates.forEach(poly => poly.forEach(drawRing));
    }
  }

  let tick = 0;
  let worldData = null;
  let hovered = null;

  // Per-canvas tooltip (unique element)
  let tooltip = document.createElement('div');
  tooltip.className = 'map-tooltip';
  tooltip.style.display = 'none';
  tooltip.style.position = 'absolute';
  wrapper.style.position = 'relative';
  wrapper.appendChild(tooltip);

  function drawFrame() {
    tick++;

    // Pick up world data the moment any canvas loads it globally
    if (!worldData && window._worldMapData) {
      worldData = window._worldMapData;
    }

    ctx.clearRect(0, 0, W, H);

    // --- Ocean ---
    const oceanGrad = ctx.createLinearGradient(0, 0, 0, H);
    oceanGrad.addColorStop(0, '#0a1a10');
    oceanGrad.addColorStop(1, '#0d2218');
    ctx.fillStyle = oceanGrad;
    ctx.fillRect(0, 0, W, H);

    // --- Graticule ---
    ctx.save();
    ctx.strokeStyle = 'rgba(232,160,48,0.06)';
    ctx.lineWidth = 0.5;
    for (let lat = -80; lat <= 80; lat += 20) {
      ctx.beginPath();
      for (let lng = -180; lng <= 180; lng += 2) {
        const [px, py] = project(lng, lat);
        lng === -180 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    for (let lng = -180; lng <= 180; lng += 30) {
      ctx.beginPath();
      for (let lat = -85; lat <= 85; lat += 2) {
        const [px, py] = project(lng, lat);
        lat === -85 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
      }
      ctx.stroke();
    }
    ctx.restore();

    if (!worldData) {
      ctx.fillStyle = 'rgba(232,160,48,0.5)';
      ctx.font = '14px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('Loading map…', W / 2, H / 2);
      requestAnimationFrame(drawFrame);
      return;
    }

    // --- Countries ---
    worldData.features.forEach(f => {
      const id = parseInt(f.id);
      const isSrc  = !!SOURCING[id];
      const isHub  = id === HUB_ID;
      const isHov  = hovered && hovered.id === id;

      pathFeature(f);
      if (isHub) {
        ctx.fillStyle = 'rgba(232,160,48,0.55)';
      } else if (isSrc) {
        ctx.fillStyle = isHov ? 'rgba(232,160,48,0.55)' : 'rgba(232,160,48,0.28)';
      } else {
        ctx.fillStyle = isHov ? 'rgba(45,100,70,0.9)' : '#1a3c2e';
      }
      ctx.fill();

      ctx.strokeStyle = 'rgba(232,160,48,0.12)';
      ctx.lineWidth = 0.4;
      pathFeature(f);
      ctx.stroke();
    });

    const [hx, hy] = project(HUB_LNG, HUB_LAT);

    // --- Animated trade routes ---
    Object.values(SOURCING).forEach((src, i) => {
      const [sx, sy] = project(src.lng, src.lat);
      const speed = 0.8 + i * 0.07;
      const dashOff = -(tick * speed) % 16;
      const cpx = (hx + sx) / 2 + (sy - hy) * 0.15;
      const cpy = (hy + sy) / 2 - Math.abs(hx - sx) * 0.18;
      ctx.beginPath();
      ctx.setLineDash([5, 4]);
      ctx.lineDashOffset = dashOff;
      ctx.strokeStyle = 'rgba(232,160,48,0.45)';
      ctx.lineWidth = 1.2;
      ctx.moveTo(hx, hy);
      ctx.quadraticCurveTo(cpx, cpy, sx, sy);
      ctx.stroke();
      ctx.setLineDash([]);
    });

    // --- Source dots ---
    Object.values(SOURCING).forEach((src, i) => {
      const [sx, sy] = project(src.lng, src.lat);
      const pulse = (Math.sin(tick * 0.04 + i) * 0.5 + 0.5);
      const grad = ctx.createRadialGradient(sx, sy, 2, sx, sy, 10 + pulse * 6);
      grad.addColorStop(0, 'rgba(255,234,176,0.6)');
      grad.addColorStop(1, 'rgba(232,160,48,0)');
      ctx.beginPath();
      ctx.arc(sx, sy, 10 + pulse * 6, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(sx, sy, 4.5, 0, Math.PI * 2);
      ctx.fillStyle = '#FFEAB0';
      ctx.fill();
      ctx.strokeStyle = '#E8A030';
      ctx.lineWidth = 1;
      ctx.stroke();
    });

    // --- Hub dot ---
    const pulse2 = Math.sin(tick * 0.06) * 0.5 + 0.5;
    ctx.beginPath();
    ctx.arc(hx, hy, 12 + pulse2 * 8, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(232,160,48,${0.12 * pulse2})`;
    ctx.fill();
    ctx.beginPath();
    ctx.arc(hx, hy, 8, 0, Math.PI * 2);
    ctx.fillStyle = '#E8A030';
    ctx.fill();
    ctx.beginPath();
    ctx.arc(hx, hy, 4, 0, Math.PI * 2);
    ctx.fillStyle = '#FFF8E7';
    ctx.fill();
    ctx.font = 'bold 10px Inter, sans-serif';
    ctx.fillStyle = '#E8A030';
    ctx.textAlign = 'center';
    ctx.fillText('🇺🇿 Uzbekistan', hx, hy + 22);

    // --- Legend ---
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'left';
    ctx.beginPath(); ctx.arc(16, H - 16, 5, 0, Math.PI * 2);
    ctx.fillStyle = '#E8A030'; ctx.fill();
    ctx.fillStyle = 'rgba(255,234,176,0.7)';
    ctx.fillText('Hub (Uzbekistan)', 26, H - 12);
    ctx.beginPath(); ctx.arc(16, H - 34, 4.5, 0, Math.PI * 2);
    ctx.fillStyle = '#FFEAB0'; ctx.fill();
    ctx.fillStyle = 'rgba(255,234,176,0.7)';
    ctx.fillText('Sourcing Region', 26, H - 30);

    requestAnimationFrame(drawFrame);
  }

  // Hover detection
  canvas.addEventListener('mousemove', e => {
    if (!worldData) return;
    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left);
    const my = (e.clientY - rect.top);
    let found = null;
    for (const [id, src] of Object.entries(SOURCING)) {
      const [sx, sy] = project(src.lng, src.lat);
      if (Math.sqrt((mx-sx)**2 + (my-sy)**2) < 12) { found = { id: parseInt(id), src }; break; }
    }
    const [hx, hy] = project(HUB_LNG, HUB_LAT);
    if (Math.sqrt((mx-hx)**2 + (my-hy)**2) < 14)
      found = { id: HUB_ID, src: { name:'Uzbekistan', flag:'🇺🇿', products:'Export Hub' } };
    hovered = found;
    if (found && tooltip) {
      tooltip.style.display = 'block';
      tooltip.style.left = (mx + 14) + 'px';
      tooltip.style.top  = (my - 10) + 'px';
      tooltip.innerHTML = `<strong>${found.src.flag} ${found.src.name}</strong><br><span>${found.src.products || ''}</span>`;
    } else if (tooltip) { tooltip.style.display = 'none'; }
    canvas.style.cursor = found ? 'pointer' : 'default';
  });
  canvas.addEventListener('mouseleave', () => {
    hovered = null;
    if (tooltip) tooltip.style.display = 'none';
  });

  // Load TopoJSON + world data (shared between all instances)
  if (window._worldMapData) {
    worldData = window._worldMapData;
    drawFrame();
  } else {
    function loadScript(src, cb) {
      if (document.querySelector(`script[src="${src}"]`)) { cb(); return; }
      const s = document.createElement('script');
      s.src = src; s.onload = cb;
      document.head.appendChild(s);
    }
    loadScript('https://cdn.jsdelivr.net/npm/topojson-client@3.1.0/dist/topojson-client.min.js', () => {
      fetch('https://cdn.jsdelivr.net/npm/world-atlas@2.0.2/countries-110m.json')
        .then(r => r.json())
        .then(topo => {
          window._worldMapData = topojson.feature(topo, topo.objects.countries);
          worldData = window._worldMapData;
          // Other canvases pick up _worldMapData automatically via their drawFrame loop
        })
        .catch(err => console.warn('Map data failed:', err));
    });
    drawFrame();
  }
}

// Legacy alias
function initWorldTradeMap() { createWorldTradeMap('worldTradeMap'); }

// Init when DOM ready — each canvas gets the right country dataset
function initAllTradeMaps() {
  // Export destination maps (Logistics section + Quality page)
  const EXPORT_CANVAS_IDS = ['worldTradeMapLogistics', 'worldTradeMapQuality'];

  document.querySelectorAll('canvas.trade-map-canvas').forEach(c => {
    if (EXPORT_CANVAS_IDS.includes(c.id)) {
      // Logistics / Quality maps → show EXPORT destination countries
      createWorldTradeMap(c.id, EXPORT_COUNTRIES);
    } else {
      // Verified Growers Worldwide → show IMPORT sourcing countries (default)
      createWorldTradeMap(c.id, SOURCING_COUNTRIES);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAllTradeMaps);
} else {
  setTimeout(initAllTradeMaps, 100);
}
