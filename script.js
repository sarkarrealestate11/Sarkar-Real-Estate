/*
  Sarkar Real Estate static website
  ---------------------------------
  Update sample properties in the `sampleProperties` array below.
  This front-end version uses localStorage only for demonstration.
  Use a secure server/database for real accounts, permanent uploads and admin access.
*/

const AGENCY_PHONE = "917439632507";

const sampleProperties = [
  {
    id: "kly-apartment-01",
    title: "Green View Family Apartment",
    type: "Flat & Apartment",
    category: "flat",
    purpose: "sale",
    location: "Kalyani B-Block",
    price: 4200000,
    priceLabel: "₹42 Lakh",
    area: "1,180 sq. ft.",
    beds: 3,
    baths: 2,
    kitchen: 1,
    balconies: 1,
    parking: "Covered parking",
    furnishing: "Semi-furnished",
    floor: "2nd floor of 4",
    age: "5 years",
    owner: "Property Owner",
    phone: AGENCY_PHONE,
    description: "A bright, practical family home close to everyday services, with a well-planned living and dining area.",
    images: [
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1400&q=82"
    ]
  },
  {
    id: "kly-house-02",
    title: "Independent Corner House",
    type: "Independent House",
    category: "house",
    purpose: "sale",
    location: "Kalyani B-Block",
    price: 7600000,
    priceLabel: "₹76 Lakh",
    area: "1,650 sq. ft.",
    beds: 4,
    baths: 3,
    kitchen: 1,
    balconies: 2,
    parking: "Car parking",
    furnishing: "Unfurnished",
    floor: "Ground + 1",
    age: "8 years",
    owner: "Property Owner",
    phone: AGENCY_PHONE,
    description: "A spacious independent home with a calm neighbourhood setting, useful outdoor space and convenient road access.",
    images: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1400&q=82"
    ]
  },
  {
    id: "chakdaha-land-03",
    title: "Residential Plot Near Main Road",
    type: "Residential Land",
    category: "land",
    purpose: "sale",
    location: "Haringhata",
    price: 1800000,
    priceLabel: "₹18 Lakh",
    area: "3 katha",
    beds: 0,
    baths: 0,
    kitchen: 0,
    balconies: 0,
    parking: "Road access",
    furnishing: "Not applicable",
    floor: "Land",
    age: "Not applicable",
    owner: "Land Owner",
    phone: AGENCY_PHONE,
    description: "An example residential plot listing with convenient road access and scope for a future home.",
    images: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1400&q=82"
    ]
  },
  {
    id: "kly-office-04",
    title: "Central Market Retail Space",
    type: "Shop & Office",
    category: "commercial",
    purpose: "rent",
    location: "Kalyani Central Park",
    price: 28000,
    priceLabel: "₹28,000 / month",
    area: "620 sq. ft.",
    beds: 0,
    baths: 1,
    kitchen: 0,
    balconies: 0,
    parking: "Street parking",
    furnishing: "Unfurnished",
    floor: "1st floor",
    age: "Newly renovated",
    owner: "Property Owner",
    phone: AGENCY_PHONE,
    description: "A visible commercial space suited to retail or service use in a well-connected local market area.",
    images: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1400&q=82"
    ]
  },
  {
    id: "kly-rent-05",
    title: "Ready-to-Move Rental Flat",
    type: "Rental Property",
    category: "rental",
    purpose: "rent",
    location: "Kanchrapara",
    price: 12500,
    priceLabel: "₹12,500 / month",
    area: "920 sq. ft.",
    beds: 2,
    baths: 2,
    kitchen: 1,
    balconies: 1,
    parking: "Two-wheeler parking",
    furnishing: "Unfurnished",
    floor: "1st floor of 3",
    age: "4 years",
    owner: "Property Owner",
    phone: AGENCY_PHONE,
    description: "A comfortable rental option with practical room sizes and quick access to transport and shops.",
    images: [
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=82"
    ]
  },
  {
    id: "haringhata-land-06",
    title: "Productive Agricultural Land",
    type: "Agricultural Land",
    category: "agricultural",
    purpose: "sale",
    location: "Chakdaha",
    price: 0,
    priceLabel: "Price on request",
    area: "6 katha",
    beds: 0,
    baths: 0,
    kitchen: 0,
    balconies: 0,
    parking: "Approach road",
    furnishing: "Not applicable",
    floor: "Land",
    age: "Not applicable",
    owner: "Land Owner",
    phone: AGENCY_PHONE,
    description: "An example land opportunity in a green setting, subject to verification of records and intended use.",
    images: [
      "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=1400&q=82",
      "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1400&q=82"
    ]
  }
];

const reviews = [
  { name: "Arindam S.", place: "Kalyani", text: "The property options were explained clearly, and the site visit was coordinated without unnecessary delay." },
  { name: "Madhumita D.", place: "Nadia", text: "I received helpful local guidance and direct communication while searching for a suitable rental home." },
  { name: "Souvik R.", place: "Chakdaha", text: "The information was easy to understand, and the response over phone and WhatsApp was quick." }
];

const state = {
  properties: [...loadSavedListings(), ...sampleProperties],
  filter: "all",
  review: 0,
  modalProperty: null,
  galleryIndex: 0,
  touchStart: null
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[character]);
}

function loadSavedListings() {
  try {
    return JSON.parse(localStorage.getItem("sarkarRealEstateListings") || "[]");
  } catch {
    return [];
  }
}

function saveListing(property) {
  const saved = loadSavedListings();
  const portable = { ...property, images: [] };
  localStorage.setItem("sarkarRealEstateListings", JSON.stringify([portable, ...saved].slice(0, 30)));
}

function propertyCard(property) {
  const phone = String(property.phone || AGENCY_PHONE).replace(/\D/g, "");
  const cover = property.images?.[0] || "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=82";
  const purpose = property.purpose === "rent" ? "For Rent" : "For Sale";
  return `
    <article class="property-card reveal visible" data-id="${escapeHTML(property.id)}">
      <div class="property-image"><img src="${escapeHTML(cover)}" alt="${escapeHTML(property.type)} in ${escapeHTML(property.location)}" loading="lazy"><span class="property-badge">${purpose}</span></div>
      <div class="property-content">
        <small>${escapeHTML(property.type)}</small><h3>${escapeHTML(property.title)}</h3>
        <p class="property-location"><i class="fa-solid fa-location-dot"></i> ${escapeHTML(property.location)}</p>
        <div class="property-meta">${property.beds ? `<span><i class="fa-solid fa-bed"></i>${property.beds} Beds</span>` : ""}${property.baths ? `<span><i class="fa-solid fa-bath"></i>${property.baths} Baths</span>` : ""}<span><i class="fa-solid fa-ruler-combined"></i>${escapeHTML(property.area)}</span></div>
        <div class="property-bottom"><strong class="property-price">${escapeHTML(property.priceLabel)}</strong><button class="view-details" data-view-property="${escapeHTML(property.id)}">View details <i class="fa-solid fa-arrow-right"></i></button></div>
        <div class="owner-line"><span>Contact: <strong>${escapeHTML(property.owner)}</strong></span><a href="tel:+${phone}">+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}</a></div>
        <div class="property-actions"><a href="tel:+${phone}"><i class="fa-solid fa-phone"></i>Call</a><a href="https://wa.me/${phone}?text=${encodeURIComponent(`Hello, I am interested in ${property.title}.`)}" target="_blank" rel="noopener"><i class="fa-brands fa-whatsapp"></i>WhatsApp</a></div>
      </div>
    </article>`;
}

function filteredProperties() {
  const purpose = $("#searchPurpose").value;
  const type = $("#searchType").value;
  const location = $("#searchLocation").value;
  const budget = $("#searchBudget").value;
  return state.properties.filter(property => {
    const buttonFilter = state.filter === "all" || (state.filter === "rent" ? property.purpose === "rent" : property.category === state.filter);
    const purposeMatch = purpose === "all" || property.purpose === purpose;
    const typeMatch = type === "all" || property.category === type;
    const locationMatch = location === "all" || property.location.toLowerCase().includes(location.toLowerCase());
    const budgetMatch = budget === "all" || Number(property.price) <= Number(budget);
    return buttonFilter && purposeMatch && typeMatch && locationMatch && budgetMatch;
  });
}

function renderProperties() {
  const properties = filteredProperties();
  $("#propertyGrid").innerHTML = properties.map(propertyCard).join("");
  $("#emptyState").hidden = properties.length > 0;
}

function openProperty(id) {
  const property = state.properties.find(item => item.id === id);
  if (!property) return;
  state.modalProperty = property;
  state.galleryIndex = 0;
  $("#modalLocation").textContent = `${property.location} · ${property.type}`;
  $("#modalTitle").textContent = property.title;
  $("#modalDescription").textContent = property.description;
  $("#modalFacts").innerHTML = [
    ["Area", property.area], ["Bedrooms", property.beds || "Not applicable"], ["Washrooms", property.baths || "Not applicable"],
    ["Kitchen", property.kitchen || "Not specified"], ["Balconies", property.balconies || "Not specified"], ["Furnishing", property.furnishing || "Not specified"],
    ["Parking", property.parking || "Not specified"], ["Floor", property.floor || "Not specified"], ["Property age", property.age || "Not specified"]
  ].map(([label, value]) => `<span><small>${escapeHTML(label)}</small><strong>${escapeHTML(value)}</strong></span>`).join("");
  const phone = String(property.phone || AGENCY_PHONE).replace(/\D/g, "");
  $("#modalOwner").innerHTML = `<span>Contact owner: <strong>${escapeHTML(property.owner)}</strong></span><a href="tel:+${phone}">+${phone.slice(0, 2)} ${phone.slice(2, 7)} ${phone.slice(7)}</a>`;
  $("#modalCall").href = `tel:+${phone}`;
  $("#modalWhatsapp").href = `https://wa.me/${phone}?text=${encodeURIComponent(`Hello, I am interested in ${property.title}.`)}`;
  renderGallery();
  $("#propertyModal").hidden = false;
  document.body.classList.add("modal-open");
  $(".modal-close").focus();
}

function closeProperty() {
  $("#propertyModal").hidden = true;
  document.body.classList.remove("modal-open");
  state.modalProperty = null;
}

function galleryImages() {
  return state.modalProperty?.images?.length ? state.modalProperty.images.slice(0, 12) : ["https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1400&q=82"];
}

function renderGallery() {
  const images = galleryImages();
  state.galleryIndex = (state.galleryIndex + images.length) % images.length;
  $("#galleryImage").src = images[state.galleryIndex];
  $("#galleryImage").alt = `${state.modalProperty.title} property photo ${state.galleryIndex + 1}`;
  $("#galleryCount").textContent = `${state.galleryIndex + 1} / ${images.length}`;
  $("#galleryPrev").hidden = images.length < 2;
  $("#galleryNext").hidden = images.length < 2;
  $("#galleryThumbs").innerHTML = images.map((image, index) => `<button class="${index === state.galleryIndex ? "active" : ""}" data-gallery-index="${index}" aria-label="Show property photo ${index + 1}" aria-pressed="${index === state.galleryIndex}"><img src="${escapeHTML(image)}" alt="" loading="lazy"></button>`).join("");
}

function changeGallery(direction) {
  state.galleryIndex += direction;
  renderGallery();
}

function renderReview() {
  if (!$("#reviewCard")) return;
  const review = reviews[state.review];
  $("#reviewCard").innerHTML = `<div class="review-stars" aria-label="5 out of 5 stars">★★★★★</div><blockquote>“${escapeHTML(review.text)}”</blockquote><div class="review-author"><span class="review-avatar">${escapeHTML(review.name.charAt(0))}</span><span><strong>${escapeHTML(review.name)}</strong><small>${escapeHTML(review.place)}</small></span></div>`;
}

function filesToURLs(fileList) {
  return [...fileList].slice(0, 12).map(file => URL.createObjectURL(file));
}

window.addEventListener("load", () => {
  window.setTimeout(() => $("#loader")?.classList.add("hidden"), 450);
});

window.addEventListener("scroll", () => {
  $("#siteHeader")?.classList.toggle("scrolled", window.scrollY > 40);
  $("#scrollTop")?.classList.toggle("visible", window.scrollY > 650);
});

$("#menuButton")?.addEventListener("click", () => {
  const open = $("#mobileNav").classList.toggle("open");
  $("#menuButton").setAttribute("aria-expanded", String(open));
  $("#menuButton i").className = open ? "fa-solid fa-xmark" : "fa-solid fa-bars";
});

$$("#mobileNav a").forEach(link => link.addEventListener("click", () => {
  $("#mobileNav").classList.remove("open");
  $("#menuButton").setAttribute("aria-expanded", "false");
  $("#menuButton i").className = "fa-solid fa-bars";
}));

$("#searchToggle")?.addEventListener("click", () => {
  $("#searchSection").scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => $("#searchPurpose").focus(), 550);
});

$("#scrollTop")?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

$("#propertySearch")?.addEventListener("submit", event => {
  event.preventDefault();
  renderProperties();
  $("#properties").scrollIntoView({ behavior: "smooth" });
});

$("#filterRow")?.addEventListener("click", event => {
  const button = event.target.closest("button[data-filter]");
  if (!button) return;
  state.filter = button.dataset.filter;
  $$("#filterRow button").forEach(item => item.classList.toggle("active", item === button));
  renderProperties();
});

$("#propertyGrid")?.addEventListener("click", event => {
  const button = event.target.closest("[data-view-property]");
  if (button) openProperty(button.dataset.viewProperty);
});

$("#propertyModal")?.addEventListener("click", event => {
  if (event.target.closest("[data-close-modal]")) closeProperty();
  const thumbnail = event.target.closest("[data-gallery-index]");
  if (thumbnail) { state.galleryIndex = Number(thumbnail.dataset.galleryIndex); renderGallery(); }
});

$("#galleryPrev")?.addEventListener("click", () => changeGallery(-1));
$("#galleryNext")?.addEventListener("click", () => changeGallery(1));
$("#galleryStage")?.addEventListener("touchstart", event => { state.touchStart = event.touches[0]?.clientX ?? null; }, { passive: true });
$("#galleryStage")?.addEventListener("touchend", event => {
  if (state.touchStart === null) return;
  const distance = (event.changedTouches[0]?.clientX ?? state.touchStart) - state.touchStart;
  if (Math.abs(distance) > 45) changeGallery(distance > 0 ? -1 : 1);
  state.touchStart = null;
}, { passive: true });

document.addEventListener("keydown", event => {
  if (!state.modalProperty) return;
  if (event.key === "Escape") closeProperty();
  if (event.key === "ArrowLeft") changeGallery(-1);
  if (event.key === "ArrowRight") changeGallery(1);
});

$("#listingForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const phone = String(data.get("phone")).replace(/\D/g, "");
  const rawPrice = Number(String(data.get("price")).replace(/[^0-9]/g, "")) || 0;
  const purpose = data.get("purpose");
  const typeValue = data.get("type");
  const property = {
    id: `owner-${Date.now()}`,
    title: String(data.get("title")),
    type: ({ flat: "Flat & Apartment", house: "Independent House", land: "Residential Land", commercial: "Commercial Property", rental: "Rental Property", agricultural: "Agricultural Land" })[typeValue] || "Property",
    category: typeValue,
    purpose,
    location: String(data.get("location")),
    price: rawPrice,
    priceLabel: purpose === "rent" ? `₹${rawPrice.toLocaleString("en-IN")} / month` : `₹${rawPrice.toLocaleString("en-IN")}`,
    area: `${data.get("area")} ${data.get("areaUnit")}`,
    beds: Number(data.get("beds")) || 0,
    baths: Number(data.get("baths")) || 0,
    kitchen: Number(data.get("kitchens")) || 0,
    balconies: Number(data.get("balconies")) || 0,
    parking: String(data.get("parking") || "Not specified"),
    furnishing: String(data.get("furnishing") || "Not specified"),
    floor: String(data.get("floor") || "Not specified"),
    age: String(data.get("age") || "Not specified"),
    owner: String(data.get("ownerName")),
    phone: phone || AGENCY_PHONE,
    description: String(data.get("description")),
    images: filesToURLs(data.getAll("photos").filter(file => file instanceof File && file.size > 0))
  };
  state.properties.unshift(property);
  saveListing(property);
  renderProperties();
  form.reset();
  $("#listingSuccess").hidden = false;
  window.setTimeout(() => { $("#listingSuccess").hidden = true; }, 6000);
});

$("#contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form));
  const enquiries = JSON.parse(localStorage.getItem("sarkarRealEstateEnquiries") || "[]");
  enquiries.unshift({ ...data, createdAt: new Date().toISOString() });
  localStorage.setItem("sarkarRealEstateEnquiries", JSON.stringify(enquiries.slice(0, 50)));
  form.reset();
  $("#contactSuccess").hidden = false;
  window.setTimeout(() => { $("#contactSuccess").hidden = true; }, 6000);
});

$("#reviewPrev")?.addEventListener("click", () => { state.review = (state.review - 1 + reviews.length) % reviews.length; renderReview(); });
$("#reviewNext")?.addEventListener("click", () => { state.review = (state.review + 1) % reviews.length; renderReview(); });

$$("#faqList article button").forEach(button => button.addEventListener("click", () => {
  const item = button.closest("article");
  $$("#faqList article").forEach(article => { if (article !== item) article.classList.remove("open"); });
  item.classList.toggle("open");
}));

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add("visible"); });
}, { threshold: .12 });
$$('.reveal').forEach(element => observer.observe(element));

if ($("#propertyGrid")) renderProperties();
renderReview();

// Automatically move to the next property photo while the details window is open.
window.setInterval(() => {
  if (state.modalProperty && galleryImages().length > 1) changeGallery(1);
}, 5000);
