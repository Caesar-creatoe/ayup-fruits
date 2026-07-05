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
    name: "Cherry", 
    tag: "Seasonal · May–July", 
    category: "fruits", 
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
    name: "Apricot", 
    tag: "Seasonal · June–August", 
    category: "fruits", 
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
    name: "Grapes", 
    tag: "Seasonal · August–October", 
    category: "fruits", 
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
    name: "Melon", 
    tag: "Seasonal · July–September", 
    category: "fruits", 
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
    name: "Watermelon", 
    tag: "Seasonal · June–September", 
    category: "fruits", 
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
    name: "Pomegranate", 
    tag: "Seasonal · September–November", 
    category: "fruits", 
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
    name: "Peach", 
    tag: "Seasonal · June–August", 
    category: "fruits", 
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
    name: "Plum", 
    tag: "Seasonal · July–September", 
    category: "fruits", 
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
    name: "Apple", 
    tag: "Seasonal · August–November", 
    category: "fruits", 
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
    name: "Lemon", 
    tag: "Year-round", 
    category: "fruits", 
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
    name: "Onion", 
    tag: "Year-round", 
    category: "vegetables", 
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
    name: "Tomato", 
    tag: "Seasonal · June–October", 
    category: "vegetables", 
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
    name: "Cucumber", 
    tag: "Seasonal · May–September", 
    category: "vegetables", 
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
    name: "Bell Pepper", 
    tag: "Seasonal · June–October", 
    category: "vegetables", 
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
    name: "Prunes", 
    tag: "Year-round", 
    category: "dried", 
    img: "https://images.unsplash.com/photo-1591073113125-e46713c829ed?w=600&q=80",
    caliber: "Grades: 30/40 – 60/70 (pieces per 500g)",
    packaging: "10kg cartons, inner food-grade polyethylene bag",
    temp: "+5°C to +15°C (ambient dry storage)",
    capacity: "21 tons per dry FCL",
    shelflife: "12 months",
    peakMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    availableMonths: []
  },
  { 
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
    name: "Walnuts", 
    tag: "Year-round", 
    category: "dried", 
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
    card.innerHTML = `
      <div class="product-card-img" onclick="openProductModal('${p.name}')">
        <img src="${p.img}" alt="${p.name} from Uzbekistan" loading="lazy">
        <div class="product-card-overlay">
          <button class="inquire-btn" onclick="event.stopPropagation(); openProductModal('${p.name}')">View Specs</button>
        </div>
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

/* Filter tabs */
document.querySelectorAll('.filter-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    const currentView = document.getElementById('btnGridView').classList.contains('active') ? 'grid' : 'calendar';
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
  
  document.getElementById('modalProductImg').src = p.img;
  document.getElementById('modalProductName').textContent = p.name;
  document.getElementById('modalProductSeason').textContent = p.tag;
  document.getElementById('modalSpecCaliber').textContent = p.caliber;
  document.getElementById('modalSpecPackaging').textContent = p.packaging;
  document.getElementById('modalSpecTemp').textContent = p.temp;
  document.getElementById('modalSpecCapacity').textContent = p.capacity;
  document.getElementById('modalSpecShelfLife').textContent = p.shelflife;
  document.getElementById('modalCtaProductName').textContent = p.name;
  
  // Set video source using lookup table
  const videoMap = {
    'cherry': 'cherry',
    'apricot': 'apricot',
    'grapes': 'grapes',
    'melon': 'melon',
    'watermelon': 'watermelon',
    'pomegranate': 'pomegranate',
    'peach': 'peach',
    'nectarine': 'nectarine',
    'plum': 'plum',
    'pear': 'pear',
    'apple': 'apple',
    'quince': 'quince',
    'lemon': 'lemon',
    'persimmon': 'persimmon',
    'fig': 'fig',
    'onion': 'onion',
    'tomato': 'tomato',
    'cucumber': 'cucumber',
    'bell pepper': 'bell_pepper',
    'dried apricots & raisins': 'dried_apricots',
    'dried figs': 'dried_figs',
    'prunes': 'prunes',
    'dried mulberry': 'dried_mulberry',
    'walnuts': 'walnuts',
    'dried cherries': 'dried_cherries',
    'pistachios': 'pistachios',
    'almonds': 'almonds',
    'dried fruits gift set': 'dried_fruits_gift_set'
  };
  const videoKey = videoMap[p.name.toLowerCase()] || p.name.toLowerCase().replace(/[^a-z0-9]/g, '_').replace(/_+/g, '_');
  const videoEl = document.getElementById('modalProductVideo');
  if (videoEl) {
    videoEl.src = `${basePath}videos/${videoKey}.mp4`;
    videoEl.load();
    videoEl.play().catch(e => console.log("Autoplay blocked:", e));
  }
  
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
