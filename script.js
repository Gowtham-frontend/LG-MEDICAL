/* =========================================================
   LG MEDICAL CENTRE — APPLICATION LOGIC
   Single source of truth: CONFIG object below.
   Update phone numbers, address, doctors, departments, services,
   testimonials, careers and timings here — nothing else needs editing.
   ========================================================= */

const CONFIG = {
  hospitalName: "LG Medical Centre",
  phone: "+91 96774 96666",              // Reception
  phoneDisplay: "+91 96774 96666",       // Reception
  ambulancePhone: "+91 97872 77666",     // Ambulance
  ambulancePhoneDisplay: "+91 97872 77666",
  whatsapp: "919600362866",              // WhatsApp number, digits only with country code
  whatsappDisplay: "+91 96003 62866",
  email: "info@lgmedicalcentre.example", // TODO: real email not provided yet
  address: "Nallur, Tiruppur, Tamil Nadu - [Pincode]", // TODO: full address/landmark/PIN not provided yet
  googleMapsUrl: "https://maps.google.com/?q=LG+Medical+Centre", // TODO: real maps link not provided yet
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=LG%20Medical%20Centre&t=&z=14&ie=UTF8&iwloc=&output=embed", // TODO

  timings: {
    weekday: "9:00 AM - 8:00 PM",   // TODO: exact OP hours not provided yet
    sunday: "9:00 AM - 2:00 PM",    // TODO
    emergency: "24/7 Emergency Services Available"
  },

  stats: {
    founded: 2009,           // "Serving Public since 2009" (history sheet lists 2008 as founding year — confirm with client)
    yearsOfExperience: 18,
    beds: 50,
    location: "Nallur, Tiruppur"
  },

  history: {
    foundedYear: 2008,
    founder: "Dr. R.K. Gopalakrishnan"
  },

  management: [
    { name: "Dr. R.K. Gopalakrishnan", role: "Chairman & Founder", qualification: "MBBS, MS (General Surgery), MNAMS, FMAS" },
    { name: "Mrs. Latha Maheswari", role: "Managing Director", qualification: "B.Sc." },
    { name: "Dr. G. Ashwin Prasanna", role: "Administrative Manager", qualification: "MBBS" }
  ],

  socialLinks: [
    { label: "FB", url: "#" },
    { label: "IG", url: "#" },
    { label: "YT", url: "#" }
  ],

  departments: [
    { name: "General Surgery", icon: "hospital", desc: "Surgical care for a wide range of conditions, from routine to complex procedures." },
    { name: "General Medicine", icon: "hospital", desc: "Comprehensive care for everyday health concerns and chronic conditions." },
    { name: "Orthopaedics", icon: "badge", desc: "Bone, joint and muscle care for all ages, from injury to recovery." },
    { name: "Obstetrics", icon: "heart", desc: "Complete pregnancy and childbirth care for mother and baby." },
    { name: "Gynaecology and Infertility", icon: "heart", desc: "Women's health services including fertility diagnosis and treatment." },
    { name: "Neuro Surgery", icon: "hospital", desc: "Surgical treatment for conditions of the brain, spine and nerves." },
    { name: "Urology", icon: "badge", desc: "Diagnosis and treatment of kidney, bladder and urinary tract conditions." },
    { name: "Vascular Surgery", icon: "hospital", desc: "Specialised surgical care for blood vessel and circulation disorders." },
    { name: "Plastic Surgery", icon: "badge", desc: "Reconstructive and cosmetic surgical procedures." },
    { name: "Spine Surgery", icon: "hospital", desc: "Advanced surgical and non-surgical care for spine-related conditions." },
    { name: "Cardiology", icon: "heart", desc: "Complete heart care from screening to advanced cardiac treatment." },
    { name: "Diabetology", icon: "heart", desc: "Specialised diagnosis and management of diabetes and related conditions." },
    { name: "Paediatrics & Neonatology", icon: "doctor", desc: "Gentle, specialised healthcare for newborns, infants and children." },
    { name: "ENT", icon: "doctor", desc: "Ear, nose and throat care for both routine and complex cases." },
    { name: "Oncology", icon: "hospital", desc: "Cancer screening, diagnosis and treatment support." },
    { name: "Gastroenterology", icon: "hospital", desc: "Diagnosis and treatment of digestive system conditions." },
    { name: "Respiratory", icon: "hospital", desc: "Care for asthma, infections and other lung and breathing conditions." },
    { name: "Dermatology", icon: "badge", desc: "Skin, hair and nail care from experienced dermatologists." }
  ],

  services: [
    { name: "24/7 Emergency & Trauma Care", icon: "hospital", desc: "Round-the-clock emergency medical support when it matters most." },
    { name: "Advanced Laboratory & Diagnostics", icon: "hospital", desc: "In-house lab testing with fast, reliable results." },
    { name: "Radiology & Imaging", icon: "hospital", desc: "CT scan, X-ray and ultrasound imaging under one roof." },
    { name: "Cashless Insurance", icon: "badge", desc: "Cashless insurance support to simplify your treatment and billing." },
    { name: "ICU & Critical Care", icon: "heart", desc: "Round-the-clock critical care with close monitoring and expert teams." },
    { name: "Day Care & Minor Procedures", icon: "doctor", desc: "Same-day care for minor surgical and medical procedures." },
    { name: "Wound Care & Diabetic Foot Care", icon: "badge", desc: "Specialised wound management and diabetic foot care." },
    { name: "Ambulance Services", icon: "hospital", desc: "Prompt ambulance response for emergencies, day or night." },
    { name: "Preventive Health Check-ups", icon: "heart", desc: "Full-body checkup packages to help you stay ahead of illness." }
  ],

  // PLACEHOLDER — client's "Doctor Department Template" sheet was submitted blank.
  // Replace with real names/qualifications/photos once the client fills it in.
  doctors: [
    { name: "Dr. Ganesan Ravi", qualification: "MBBS, MD (General Medicine)", department: "General Medicine", experience: "14 years", days: "Mon, Wed, Fri" },
    { name: "Dr. Priya Suresh", qualification: "MBBS, DM (Cardiology)", department: "Cardiology", experience: "11 years", days: "Tue, Thu, Sat" },
    { name: "Dr. Karthik Vel", qualification: "MBBS, MS (Orthopaedics)", department: "Orthopaedics", experience: "9 years", days: "Mon - Sat" },
    { name: "Dr. Meena Raj", qualification: "MBBS, MD (Paediatrics)", department: "Paediatrics & Neonatology", experience: "12 years", days: "Mon, Tue, Thu, Sat" },
    { name: "Dr. Lakshmi Narayanan", qualification: "MBBS, MS (OBG)", department: "Gynaecology and Infertility", experience: "16 years", days: "Wed, Fri, Sat" },
    { name: "Dr. Arjun Kumar", qualification: "MBBS, MD (Dermatology)", department: "Dermatology", experience: "8 years", days: "Tue, Thu, Sat" },
    { name: "Dr. Divya Shankar", qualification: "MBBS, MS (ENT)", department: "ENT", experience: "10 years", days: "Mon, Wed, Fri" },
    { name: "Dr. Senthil Kumar", qualification: "MBBS, DM (Neurology)", department: "Neuro Surgery", experience: "13 years", days: "Tue, Fri" }
  ],

  testimonials: [
    { name: "Rajesh Kumar", location: "Erode", rating: 5, text: "The doctors took time to explain everything clearly. Genuinely caring staff from reception to consultation." },
    { name: "Anitha Selvam", location: "Perundurai", rating: 5, text: "Booked my appointment on WhatsApp and was seen right on time. Very smooth experience." },
    { name: "Mohammed Yusuf", location: "Erode", rating: 4, text: "Clean facility, professional staff, and the pediatrician was wonderful with my daughter." },
    { name: "Kavitha R", location: "Gobichettipalayam", rating: 5, text: "Excellent cardiology consultation. Follow-up calls to check on my recovery meant a lot." },
    { name: "Suresh Babu", location: "Erode", rating: 5, text: "Quick diagnostics and honest advice, no unnecessary tests. Highly recommend LG Medical Centre." },
    { name: "Deepa Manoharan", location: "Bhavani", rating: 4, text: "Friendly front-desk team and a doctor who actually listens. Will be coming back for regular checkups." }
  ],

  careers: [
    { position: "Medical Officer", department: "General Medicine", location: "Nallur, Tiruppur", experience: "2+ years", type: "Full-time", desc: "Provide outpatient consultation and coordinate with specialist departments for patient referrals." },
    { position: "Staff Nurse", department: "Nursing", location: "Nallur, Tiruppur", experience: "1+ years", type: "Full-time", desc: "Support inpatient and outpatient care with compassion, precision and strong clinical fundamentals." },
    { position: "Receptionist", department: "Front Office", location: "Nallur, Tiruppur", experience: "0-2 years", type: "Full-time", desc: "First point of contact for patients — manage appointments, calls and front-desk coordination." },
    { position: "Lab Technician", department: "Diagnostics", location: "Nallur, Tiruppur", experience: "1+ years", type: "Full-time", desc: "Conduct sample collection and lab testing with accuracy and strict safety protocol." },
    { position: "Pharmacist", department: "Pharmacy", location: "Nallur, Tiruppur", experience: "2+ years", type: "Full-time", desc: "Manage dispensing, inventory and patient guidance on prescribed medication." },
    { position: "Hospital Administration", department: "Administration", location: "Nallur, Tiruppur", experience: "3+ years", type: "Full-time", desc: "Oversee daily hospital operations, staff coordination and administrative processes." }
  ],

  appointmentSettings: {
    minDate: null // set at runtime to today
  }
};

/* ---------- Utilities ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
const escapeHtml = (str = "") => String(str).replace(/[&<>"']/g, s => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[s]));

// Safe event-binding helper: never throws if the element is missing,
// and logs a clear warning instead so one missing/renamed id can't
// silently break every other listener registered after it.
function on(id, event, handler, ctx = document){
  const el = typeof id === "string" ? ctx.getElementById ? ctx.getElementById(id) : document.getElementById(id) : id;
  if (!el){
    console.warn(`LG Medical Centre: element "#${id}" not found — "${event}" listener not attached.`);
    return null;
  }
  el.addEventListener(event, handler);
  return el;
}

function waLink(message){
  const num = (CONFIG.whatsapp || "").replace(/\D/g, "");
  return `https://wa.me/${num}?text=${encodeURIComponent(message)}`;
}
function telLink(){
  return `tel:${(CONFIG.phone || "").replace(/\s+/g, "")}`;
}

/* ---------- Apply central config to static elements ---------- */
function applyConfigToDom(){
  $$('[data-action="call"]').forEach(el => el.setAttribute("href", telLink()));
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

  setText("apptHoursWeekday", `Mon - Sat: ${CONFIG.timings.weekday}`);
  setText("apptPhoneDisplay", CONFIG.phoneDisplay);
  setText("contactAddress", CONFIG.address);
  setText("contactPhone", CONFIG.phoneDisplay);
  setText("contactEmail", CONFIG.email);
  setText("contactWhatsApp", CONFIG.whatsappDisplay);
  setText("contactHours", `Mon - Sat: ${CONFIG.timings.weekday} · Sun: ${CONFIG.timings.sunday}`);
  setText("footerPhone", `Phone: ${CONFIG.phoneDisplay}`);
  setText("footerEmail", `Email: ${CONFIG.email}`);
  setText("footerWhatsApp", `WhatsApp: ${CONFIG.whatsappDisplay}`);
  setText("footerAddress", CONFIG.address);

  const mapFrame = document.getElementById("contactMapFrame");
  if (mapFrame) mapFrame.src = CONFIG.googleMapsEmbedUrl;

  const footerMaps = document.getElementById("footerMapsLink");
  if (footerMaps) footerMaps.href = CONFIG.googleMapsUrl;

  const contactWaBtn = document.getElementById("contactWhatsAppBtn");
  if (contactWaBtn) contactWaBtn.href = waLink(`Hello ${CONFIG.hospitalName}, I would like to book an appointment.`);

  const mabWa = document.getElementById("mabWhatsApp");
  if (mabWa) mabWa.href = waLink(`Hello ${CONFIG.hospitalName}, I would like to book an appointment.`);

  const socialWrap = document.getElementById("socialLinks");
  if (socialWrap) {
    socialWrap.innerHTML = CONFIG.socialLinks.map(s => `<a href="${escapeHtml(s.url)}" aria-label="${escapeHtml(s.label)}">${escapeHtml(s.label)}</a>`).join("");
  }

  const statDoctors = document.getElementById("statDoctors");
  if (statDoctors) statDoctors.textContent = CONFIG.doctors.length + "+";
}

/* ---------- Header: sticky shadow, mobile menu ---------- */
function initHeader(){
  const header = document.getElementById("siteHeader");
  const hamburger = document.getElementById("hamburgerBtn");
  const nav = document.getElementById("mainNav");
  const overlay = document.getElementById("navOverlay");
  if (!header || !hamburger || !nav || !overlay) return;

  const closeMenu = () => {
    nav.classList.remove("open");
    overlay.classList.remove("active");
    hamburger.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const openMenu = () => {
    nav.classList.add("open");
    overlay.classList.add("active");
    hamburger.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };

  hamburger.addEventListener("click", () => {
    nav.classList.contains("open") ? closeMenu() : openMenu();
  });
  overlay.addEventListener("click", closeMenu);
  $$(".nav-link", nav).forEach(link => link.addEventListener("click", closeMenu));
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const y = window.scrollY;
    header.style.boxShadow = y > 8 ? "0 4px 20px rgba(10,42,67,0.08)" : "none";
    lastScroll = y;
  }, { passive: true });
}

/* ---------- Render: Departments ---------- */
function renderDepartments(){
  const grid = document.getElementById("departmentsGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.departments.map(d => `
    <div class="dept-card" data-dept="${escapeHtml(d.name)}" tabindex="0" role="button" aria-label="View details for ${escapeHtml(d.name)}">
      <div class="dept-icon"><i class="icon icon-${d.icon}" aria-hidden="true"></i></div>
      <h3>${escapeHtml(d.name)}</h3>
      <p>${escapeHtml(d.desc)}</p>
      <span class="dept-link">View Details <i class="icon icon-arrow" aria-hidden="true"></i></span>
    </div>
  `).join("");

  const goToDoctors = (deptName) => {
    const doctorsSection = document.getElementById("doctors");
    if (doctorsSection) doctorsSection.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => filterDoctors(deptName), 350);
  };
  $$(".dept-card", grid).forEach(card => {
    card.addEventListener("click", () => goToDoctors(card.dataset.dept));
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); goToDoctors(card.dataset.dept); } });
  });
}

/* ---------- Render: Services ---------- */
function renderServices(){
  const grid = document.getElementById("servicesGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.services.map(s => `
    <div class="service-card">
      <div class="service-icon"><i class="icon icon-${s.icon}" aria-hidden="true"></i></div>
      <h3>${escapeHtml(s.name)}</h3>
      <p>${escapeHtml(s.desc)}</p>
    </div>
  `).join("");
}

/* ---------- Render: Doctors (with department filter) ---------- */
let activeDeptFilter = "All";
function renderDoctorFilters(){
  const wrap = document.getElementById("doctorsFilter");
  if (!wrap) return;
  const depts = ["All", ...new Set(CONFIG.doctors.map(d => d.department))];
  wrap.innerHTML = depts.map(d => `<button class="filter-chip${d === "All" ? " active" : ""}" data-filter="${escapeHtml(d)}" role="tab" aria-selected="${d === "All"}">${escapeHtml(d)}</button>`).join("");
  $$(".filter-chip", wrap).forEach(btn => {
    btn.addEventListener("click", () => filterDoctors(btn.dataset.filter));
  });
}
function filterDoctors(dept){
  activeDeptFilter = dept || "All";
  $$(".filter-chip").forEach(btn => {
    const isActive = btn.dataset.filter === activeDeptFilter;
    btn.classList.toggle("active", isActive);
    btn.setAttribute("aria-selected", isActive);
  });
  renderDoctors();
}
function renderDoctors(){
  const grid = document.getElementById("doctorsGrid");
  if (!grid) return;
  const list = activeDeptFilter === "All" ? CONFIG.doctors : CONFIG.doctors.filter(d => d.department === activeDeptFilter);
  if (!list.length){
    grid.innerHTML = `<p style="grid-column:1/-1; text-align:center; color:var(--ink-mute);">No doctors found for this department yet. Please check back soon.</p>`;
    return;
  }
  grid.innerHTML = list.map(doc => `
    <div class="doctor-card">
      <div class="doctor-photo"><i class="icon icon-doctor" aria-hidden="true"></i></div>
      <div class="doctor-body">
        <h3>${escapeHtml(doc.name)}</h3>
        <p class="doctor-qual">${escapeHtml(doc.qualification)}</p>
        <span class="doctor-spec">${escapeHtml(doc.department)}</span>
        <div class="doctor-meta">
          <div><span>Experience</span><strong>${escapeHtml(doc.experience)}</strong></div>
          <div><span>Available</span><strong>${escapeHtml(doc.days)}</strong></div>
        </div>
        <button class="btn btn-primary book-doctor-btn" data-doctor="${escapeHtml(doc.name)}" data-department="${escapeHtml(doc.department)}">Book Appointment</button>
      </div>
    </div>
  `).join("");

  $$(".book-doctor-btn", grid).forEach(btn => {
    btn.addEventListener("click", () => {
      const apptSection = document.getElementById("appointment");
      if (apptSection) apptSection.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        const deptSelect = document.getElementById("fDepartment");
        const docSelect = document.getElementById("fDoctor");
        if (deptSelect) deptSelect.value = btn.dataset.department;
        populateDoctorOptions(btn.dataset.department);
        if (docSelect) docSelect.value = btn.dataset.doctor;
      }, 350);
    });
  });
}

/* ---------- Appointment form ---------- */
function populateDepartmentOptions(){
  const sel = document.getElementById("fDepartment");
  if (!sel) return;
  CONFIG.departments.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = d.name;
    sel.appendChild(opt);
  });
}
function populateDoctorOptions(departmentFilter){
  const sel = document.getElementById("fDoctor");
  if (!sel) return;
  sel.innerHTML = `<option value="">Any available doctor</option>`;
  const list = departmentFilter ? CONFIG.doctors.filter(d => d.department === departmentFilter) : CONFIG.doctors;
  list.forEach(d => {
    const opt = document.createElement("option");
    opt.value = d.name;
    opt.textContent = `${d.name} (${d.department})`;
    sel.appendChild(opt);
  });
}

function validateAppointmentForm(data){
  const errors = {};
  if (!data.fName || data.fName.trim().length < 2) errors.fName = "Please enter your full name.";
  if (!/^[6-9]\d{9}$/.test(data.fMobile.replace(/\D/g, ""))) errors.fMobile = "Enter a valid 10-digit mobile number.";
  if (data.fEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.fEmail)) errors.fEmail = "Enter a valid email address.";
  if (!data.fDepartment) errors.fDepartment = "Please select a department.";
  if (!data.fDate) errors.fDate = "Please select a preferred date.";
  else {
    const chosen = new Date(data.fDate);
    const today = new Date(); today.setHours(0,0,0,0);
    if (chosen < today) errors.fDate = "Please choose a future date.";
  }
  if (!data.fTime) errors.fTime = "Please select a preferred time.";
  return errors;
}

function clearFormErrors(form){
  $$(".form-error", form).forEach(el => el.textContent = "");
  $$(".form-field", form).forEach(el => el.classList.remove("has-error"));
}
function showFormErrors(form, errors){
  Object.keys(errors).forEach(key => {
    const errEl = document.getElementById(`err-${key}`);
    const field = document.getElementById(key);
    if (errEl) errEl.textContent = errors[key];
    if (field) field.closest(".form-field").classList.add("has-error");
  });
}

function buildAppointmentMessage(data){
  return [
    `Hello ${CONFIG.hospitalName}, I would like to book an appointment.`,
    `Patient Name: ${data.fName}`,
    `Mobile: ${data.fMobile}`,
    `Department: ${data.fDepartment}`,
    `Doctor: ${data.fDoctor || "Any available doctor"}`,
    `Date: ${data.fDate || "-"}`,
    `Time: ${data.fTime || "-"}`,
    `Reason: ${data.fReason || "-"}`
  ].join("\n");
}

function getFormData(form){
  return {
    fName: form.querySelector("#fName").value.trim(),
    fMobile: form.querySelector("#fMobile").value.trim(),
    fEmail: form.querySelector("#fEmail").value.trim(),
    fDepartment: form.querySelector("#fDepartment").value,
    fDoctor: form.querySelector("#fDoctor").value,
    fDate: form.querySelector("#fDate").value,
    fTime: form.querySelector("#fTime").value,
    fReason: form.querySelector("#fReason").value.trim()
  };
}

function initAppointmentForm(){
  const form = document.getElementById("appointmentForm");
  if (!form) return;

  populateDepartmentOptions();
  populateDoctorOptions();

  const dateInput = document.getElementById("fDate");
  if (dateInput) {
    const today = new Date().toISOString().split("T")[0];
    dateInput.setAttribute("min", today);
  }

  const deptSelectEl = form.querySelector("#fDepartment");
  if (deptSelectEl) deptSelectEl.addEventListener("change", () => populateDoctorOptions(deptSelectEl.value));

  form.addEventListener("submit", e => {
    e.preventDefault();
    clearFormErrors(form);
    const data = getFormData(form);
    const errors = validateAppointmentForm(data);
    if (Object.keys(errors).length){
      showFormErrors(form, errors);
      const firstError = Object.keys(errors)[0];
      const el = document.getElementById(firstError);
      if (el) el.focus();
      return;
    }
    const successEl = document.getElementById("formSuccess");
    if (successEl){
      successEl.textContent = "Thank you! Your appointment request has been received. Our team will contact you shortly.";
      successEl.hidden = false;
      successEl.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
    form.reset();
    populateDoctorOptions();
  });

  const waBtn = document.getElementById("apptWhatsAppBtn");
  if (waBtn){
    waBtn.addEventListener("click", () => {
      clearFormErrors(form);
      const data = getFormData(form);
      const errors = validateAppointmentForm(data);
      if (Object.keys(errors).length){
        showFormErrors(form, errors);
        const firstError = Object.keys(errors)[0];
        const el = document.getElementById(firstError);
        if (el) el.focus();
        return;
      }
      window.open(waLink(buildAppointmentMessage(data)), "_blank", "noopener");
    });
  }
}

/* ---------- Testimonials slider ---------- */
function initTestimonials(){
  const track = document.getElementById("testimonialsTrack");
  const dotsWrap = document.getElementById("testiDots");
  if (!track) return;

  track.innerHTML = CONFIG.testimonials.map(t => `
    <div class="testi-card">
      <div class="testi-card-inner">
        <div class="testi-stars" aria-label="${t.rating} out of 5 stars">${'<i class="icon icon-star" aria-hidden="true"></i>'.repeat(t.rating)}</div>
        <p class="testi-text">"${escapeHtml(t.text)}"</p>
        <div class="testi-person">
          <div class="testi-avatar">${escapeHtml(t.name.split(" ").map(n => n[0]).slice(0,2).join(""))}</div>
          <div>
            <strong>${escapeHtml(t.name)}</strong>
            <span>${escapeHtml(t.location || "")}</span>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  const cards = $$(".testi-card", track);
  let perView = 3;
  let index = 0;

  function calcPerView(){
    const w = window.innerWidth;
    if (w <= 768) return 1;
    if (w <= 1024) return 2;
    return 3;
  }
  function totalPages(){ return Math.max(1, Math.ceil(cards.length / perView)); }

  function renderDots(){
    if (!dotsWrap) return;
    dotsWrap.innerHTML = "";
    for (let i = 0; i < totalPages(); i++){
      const dot = document.createElement("button");
      dot.setAttribute("role", "tab");
      dot.setAttribute("aria-label", `Go to testimonial page ${i + 1}`);
      if (i === index) dot.classList.add("active");
      dot.addEventListener("click", () => goTo(i));
      dotsWrap.appendChild(dot);
    }
  }
  function update(){
    cards.forEach(c => c.style.flexBasis = `${100 / perView}%`);
    track.style.transform = `translateX(-${index * 100}%)`;
    $$(".slider-dots button").forEach((d, i) => d.classList.toggle("active", i === index));
  }
  function goTo(i){
    index = Math.max(0, Math.min(i, totalPages() - 1));
    update();
  }
  function next(){ index = (index + 1) % totalPages(); update(); }
  function prev(){ index = (index - 1 + totalPages()) % totalPages(); update(); }

  perView = calcPerView();
  renderDots();
  update();

  const nextBtn = document.getElementById("testiNext");
  const prevBtn = document.getElementById("testiPrev");
  if (nextBtn) nextBtn.addEventListener("click", next);
  if (prevBtn) prevBtn.addEventListener("click", prev);

  let touchStartX = null;
  const viewport = document.querySelector(".testimonials-viewport");
  if (viewport){
    viewport.addEventListener("touchstart", e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    viewport.addEventListener("touchend", e => {
      if (touchStartX === null) return;
      const diff = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(diff) > 40) diff > 0 ? prev() : next();
      touchStartX = null;
    }, { passive: true });
  }

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      const newPerView = calcPerView();
      if (newPerView !== perView){
        perView = newPerView;
        index = 0;
        renderDots();
        update();
      }
    }, 150);
  });
}

/* ---------- Careers ---------- */
function initCareers(){
  const grid = document.getElementById("careersGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.careers.map((job, i) => `
    <div class="job-card">
      <h3>${escapeHtml(job.position)}</h3>
      <div class="job-meta">
        <span class="job-tag">${escapeHtml(job.department)}</span>
        <span class="job-tag">${escapeHtml(job.type)}</span>
        <span class="job-tag">${escapeHtml(job.experience)}</span>
      </div>
      <p>${escapeHtml(job.desc)}</p>
      <button class="btn btn-outline apply-btn" data-index="${i}">Apply Now</button>
    </div>
  `).join("");

  const overlay = document.createElement("div");
  overlay.className = "careers-modal-overlay";
  overlay.innerHTML = `
    <div class="careers-modal" role="dialog" aria-modal="true" aria-labelledby="careersModalTitle">
      <button class="careers-modal-close" aria-label="Close application form">
        <i class="icon icon-close" aria-hidden="true"></i>
      </button>
      <h3 id="careersModalTitle">Apply</h3>
      <form id="careersForm" novalidate>
        <div class="form-field"><label for="cFullName">Full Name</label><input type="text" id="cFullName" placeholder="Enter your full name"><span class="form-error" id="cerr-cFullName"></span></div>
        <div class="form-field"><label for="cMobile">Mobile</label><input type="tel" id="cMobile" placeholder="10-digit mobile number"><span class="form-error" id="cerr-cMobile"></span></div>
        <div class="form-field"><label for="cEmail">Email</label><input type="email" id="cEmail" placeholder="you@example.com"><span class="form-error" id="cerr-cEmail"></span></div>
        <div class="form-field"><label for="cPosition">Position</label><input type="text" id="cPosition" readonly></div>
        <div class="form-field"><label for="cQualification">Qualification</label><input type="text" id="cQualification" placeholder="Your highest qualification"><span class="form-error" id="cerr-cQualification"></span></div>
        <div class="form-field"><label for="cExperience">Experience</label><input type="text" id="cExperience" placeholder="e.g. 3 years"></div>
        <div class="form-field"><label for="cResume">Resume <span class="optional">(optional)</span></label><input type="file" id="cResume" accept=".pdf,.doc,.docx"></div>
        <div class="form-field"><label for="cMessage">Message <span class="optional">(optional)</span></label><input type="text" id="cMessage" placeholder="Anything you'd like us to know"></div>
        <button type="submit" class="btn btn-primary btn-block">Submit Application</button>
        <p class="form-success" id="careersSuccess" role="status" aria-live="polite" hidden></p>
      </form>
    </div>
  `;
  document.body.appendChild(overlay);

  const closeModal = () => { overlay.classList.remove("active"); document.body.style.overflow = ""; };
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  const modalCloseBtn = $(".careers-modal-close", overlay);
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);
  window.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });

  $$(".apply-btn", grid).forEach(btn => {
    btn.addEventListener("click", () => {
      const job = CONFIG.careers[btn.dataset.index];
      document.getElementById("careersModalTitle").textContent = `Apply — ${job.position}`;
      document.getElementById("cPosition").value = job.position;
      document.getElementById("careersSuccess").hidden = true;
      overlay.classList.add("active");
      document.body.style.overflow = "hidden";
    });
  });

  const careersForm = document.getElementById("careersForm");
  careersForm.addEventListener("submit", e => {
    e.preventDefault();
    $$(".form-error", careersForm).forEach(el => el.textContent = "");
    const name = document.getElementById("cFullName").value.trim();
    const mobile = document.getElementById("cMobile").value.trim();
    const email = document.getElementById("cEmail").value.trim();
    const qualification = document.getElementById("cQualification").value.trim();
    let hasError = false;
    if (name.length < 2){ document.getElementById("cerr-cFullName").textContent = "Please enter your full name."; hasError = true; }
    if (!/^[6-9]\d{9}$/.test(mobile.replace(/\D/g, ""))){ document.getElementById("cerr-cMobile").textContent = "Enter a valid 10-digit mobile number."; hasError = true; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)){ document.getElementById("cerr-cEmail").textContent = "Enter a valid email address."; hasError = true; }
    if (!qualification){ document.getElementById("cerr-cQualification").textContent = "Please enter your qualification."; hasError = true; }
    if (hasError) return;

    const successEl = document.getElementById("careersSuccess");
    successEl.textContent = "Thank you for your interest in joining LG Medical Centre. Our HR team will review your application and contact you if your profile is shortlisted.";
    successEl.hidden = false;
    careersForm.reset();
  });
}

/* ---------- ECG reduced motion note ---------- */
function initEcgMotionPreference(){
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  const toggle = () => {
    document.querySelectorAll(".ecg-line").forEach(el => {
      el.style.animationPlayState = mq.matches ? "paused" : "running";
    });
  };
  toggle();
  if (mq.addEventListener) mq.addEventListener("change", toggle);
}

/* =========================================================
   CHATBOT
   ========================================================= */
const ChatBot = (() => {
  let bodyEl, windowEl, toggleEl, isOpen = false;

  // Forces the widget open/closed regardless of how the site's CSS
  // happens to style #chatbotWindow (some layouts set `display` on
  // the element directly, which overrides the [hidden] attribute on
  // its own — so we set both the attribute AND inline style here).
  function setWindowVisible(visible){
    if (!windowEl) return;
    windowEl.hidden = !visible;
    windowEl.style.display = visible ? "flex" : "none";
    if (toggleEl) toggleEl.setAttribute("aria-expanded", String(visible));
  }

  function open(){
    if (!windowEl) return;
    setWindowVisible(true);
    isOpen = true;
    if (bodyEl && !bodyEl.dataset.started){
      bodyEl.dataset.started = "1";
      showWelcome();
    }
    const input = document.getElementById("chatbotInput");
    if (input) input.focus();
  }
  function close(){
    if (!windowEl) return;
    setWindowVisible(false);
    isOpen = false;
  }
  function toggle(){ isOpen ? close() : open(); }

  function addBotMessage(text){
    if (!bodyEl) return;
    const msg = document.createElement("div");
    msg.className = "chat-msg chat-msg-bot";
    msg.textContent = text;
    bodyEl.appendChild(msg);
    scrollToEnd();
  }
  function addUserMessage(text){
    if (!bodyEl) return;
    const msg = document.createElement("div");
    msg.className = "chat-msg chat-msg-user";
    msg.textContent = text;
    bodyEl.appendChild(msg);
    scrollToEnd();
  }
  function addOptions(options){
    if (!bodyEl) return;
    const wrap = document.createElement("div");
    wrap.className = "chat-options";
    options.forEach(opt => {
      const btn = document.createElement("button");
      btn.className = "chat-option-btn";
      btn.type = "button";
      btn.textContent = opt.label;
      btn.addEventListener("click", () => {
        addUserMessage(opt.label);
        wrap.remove();
        opt.action();
      });
      wrap.appendChild(btn);
    });
    bodyEl.appendChild(wrap);
    scrollToEnd();
  }
  function scrollToEnd(){ if (bodyEl) bodyEl.scrollTop = bodyEl.scrollHeight; }

  function showWelcome(){
    addBotMessage(`Hello! Welcome to ${CONFIG.hospitalName}. How can we help you today?`);
    addOptions([
      { label: "📅 Book Appointment", action: flowAppointment },
      { label: "👨‍⚕️ Find a Doctor", action: flowFindDoctor },
      { label: "🏥 Medical Services", action: flowServices },
      { label: "📍 Hospital Location", action: flowLocation },
      { label: "🕐 Hospital Timings", action: flowTimings },
      { label: "📞 Contact Us", action: flowContact },
      { label: "💬 WhatsApp Support", action: () => window.open(waLink(`Hello ${CONFIG.hospitalName}, I need some help.`), "_blank", "noopener") }
    ]);
  }

  function flowAppointment(){
    addBotMessage("Sure! I can help you with your appointment. Please select a department.");
    addOptions(CONFIG.departments.map(d => ({
      label: d.name,
      action: () => flowAppointmentDoctor(d.name)
    })));
  }
  function flowAppointmentDoctor(deptName){
    const doctors = CONFIG.doctors.filter(d => d.department === deptName);
    if (!doctors.length){
      addBotMessage(`We don't have a doctor listed for ${deptName} right now — our team can still help. Please contact us directly.`);
      addOptions([
        { label: "💬 WhatsApp Support", action: () => window.open(waLink(`Hello ${CONFIG.hospitalName}, I would like an appointment for ${deptName}.`), "_blank", "noopener") },
        { label: "Back to menu", action: showWelcome }
      ]);
      return;
    }
    addBotMessage(`Great choice. Here are the doctors available in ${deptName}:`);
    doctors.forEach(doc => {
      const card = document.createElement("div");
      card.className = "chat-doctor-mini";
      card.innerHTML = `<strong>${escapeHtml(doc.name)}</strong><p>${escapeHtml(doc.qualification)} · ${escapeHtml(doc.experience)} · Available: ${escapeHtml(doc.days)}</p>`;
      const btn = document.createElement("button");
      btn.className = "btn btn-primary";
      btn.textContent = "Book Appointment";
      btn.addEventListener("click", () => {
        addUserMessage(`Book with ${doc.name}`);
        finalizeChatAppointment(deptName, doc.name);
      });
      card.appendChild(btn);
      if (bodyEl) bodyEl.appendChild(card);
    });
    scrollToEnd();
    addOptions([{ label: "Book without choosing a doctor", action: () => finalizeChatAppointment(deptName, "Any available doctor") }]);
  }
  function finalizeChatAppointment(dept, doctorName){
    addBotMessage("Thank you! Your appointment request has been prepared. Our team will contact you shortly.");
    const message = `Hello ${CONFIG.hospitalName}, I would like to book an appointment.\nDepartment: ${dept}\nDoctor: ${doctorName}`;
    addOptions([
      { label: "💬 Send via WhatsApp", action: () => window.open(waLink(message), "_blank", "noopener") },
      { label: "Fill full appointment form", action: () => { close(); const el = document.getElementById("appointment"); if (el) el.scrollIntoView({ behavior: "smooth" }); } },
      { label: "Back to menu", action: showWelcome }
    ]);
  }

  function flowFindDoctor(){
    addBotMessage("What type of specialist are you looking for?");
    addOptions(CONFIG.departments.map(d => ({
      label: d.name,
      action: () => flowAppointmentDoctor(d.name)
    })));
  }

  function flowServices(){
    addBotMessage("What service are you looking for?");
    addOptions(CONFIG.services.map(s => ({
      label: s.name,
      action: () => {
        addBotMessage(s.desc);
        addOptions([{ label: "Back to menu", action: showWelcome }]);
      }
    })));
  }

  function flowLocation(){
    addBotMessage(`LG Medical Centre\n${CONFIG.address}`);
    addOptions([
      { label: "Open Google Maps", action: () => window.open(CONFIG.googleMapsUrl, "_blank", "noopener") },
      { label: "Back to menu", action: showWelcome }
    ]);
  }

  function flowTimings(){
    addBotMessage(`Monday - Saturday: ${CONFIG.timings.weekday}\nSunday: ${CONFIG.timings.sunday}\nEmergency: ${CONFIG.timings.emergency}`);
    addOptions([{ label: "Back to menu", action: showWelcome }]);
  }

  function flowContact(){
    addBotMessage(`You can reach us at ${CONFIG.phoneDisplay} or ${CONFIG.email}.`);
    addOptions([
      { label: "📞 Call", action: () => { window.location.href = telLink(); } },
      { label: "💬 WhatsApp", action: () => window.open(waLink(`Hello ${CONFIG.hospitalName}, I have a question.`), "_blank", "noopener") },
      { label: "📧 Email", action: () => { window.location.href = `mailto:${CONFIG.email}`; } },
      { label: "📍 Location", action: flowLocation }
    ]);
  }

  function fallback(){
    addBotMessage("I'm sorry, I couldn't understand that. Please choose one of the options below or contact our hospital team.");
    addOptions([
      { label: "Book Appointment", action: flowAppointment },
      { label: "WhatsApp Support", action: () => window.open(waLink(`Hello ${CONFIG.hospitalName}, I need some help.`), "_blank", "noopener") },
      { label: "Call Us", action: () => { window.location.href = telLink(); } }
    ]);
  }

  const medicalAdviceTriggers = ["what medicine", "which tablet", "diagnose", "prescription", "prescribe", "what disease do i have", "symptoms of", "is it cancer", "self medicate"];
  const emergencyTriggers = ["emergency", "chest pain", "accident", "bleeding heavily", "not breathing", "unconscious", "heart attack", "stroke"];

  function handleFreeText(text){
    const t = text.toLowerCase();

    if (emergencyTriggers.some(k => t.includes(k))){
      addBotMessage(`This sounds urgent. Please call our emergency line at ${CONFIG.phoneDisplay} immediately or contact your nearest emergency service without delay.`);
      addOptions([
        { label: "📞 Call Now", action: () => { window.location.href = telLink(); } },
        { label: "Back to menu", action: showWelcome }
      ]);
      return;
    }
    if (medicalAdviceTriggers.some(k => t.includes(k))){
      addBotMessage("I'm not able to diagnose conditions or recommend medication. For any medical question, please consult one of our qualified doctors directly.");
      addOptions([
        { label: "Book Appointment", action: flowAppointment },
        { label: "Find a Doctor", action: flowFindDoctor }
      ]);
      return;
    }
    if (t.includes("appointment") || t.includes("book")){
      addBotMessage("You can book an appointment using our online appointment form or contact us through WhatsApp.");
      addOptions([
        { label: "Book Appointment", action: flowAppointment },
        { label: "💬 WhatsApp Support", action: () => window.open(waLink(`Hello ${CONFIG.hospitalName}, I would like to book an appointment.`), "_blank", "noopener") }
      ]);
      return;
    }
    if (t.includes("where") || t.includes("location") || t.includes("address") || t.includes("direction")){
      addBotMessage(`${CONFIG.hospitalName} is located at ${CONFIG.address}. You can use the Google Maps button below for directions.`);
      addOptions([{ label: "Open Google Maps", action: () => window.open(CONFIG.googleMapsUrl, "_blank", "noopener") }]);
      return;
    }
    if (t.includes("timing") || t.includes("hours") || t.includes("open") || t.includes("close")){
      flowTimings();
      return;
    }
    if (t.includes("service")){
      addBotMessage("Here are our available healthcare services.");
      flowServices();
      return;
    }
    const matchedDept = CONFIG.departments.find(d => t.includes(d.name.toLowerCase()) || (d.name === "Cardiology" && t.includes("cardiologist")) || (d.name === "Orthopedics" && t.includes("bone")) || (d.name === "Pediatrics" && t.includes("child")) || (d.name === "Dermatology" && t.includes("skin")));
    if (matchedDept){
      addBotMessage(`Sure. Please select ${matchedDept.name} to see available doctors.`);
      addOptions([{ label: `View ${matchedDept.name} Doctors`, action: () => flowAppointmentDoctor(matchedDept.name) }]);
      return;
    }
    if (t.includes("contact") || t.includes("phone") || t.includes("call") || t.includes("email")){
      flowContact();
      return;
    }
    fallback();
  }

  function init(){
    bodyEl = document.getElementById("chatbotBody");
    windowEl = document.getElementById("chatbotWindow");
    toggleEl = document.getElementById("chatbotToggle");

    if (!windowEl){
      console.warn('LG Medical Centre: "#chatbotWindow" not found — chatbot cannot initialise.');
      return;
    }

    // Start hidden and in sync with isOpen, no matter what the
    // markup/CSS shipped with (belt-and-braces against the exact
    // "close button does nothing" bug).
    setWindowVisible(false);

    // Each binding below is independent: if one target element is
    // missing, the rest still get wired up correctly.
    on("chatbotToggle", "click", toggle);
    on("chatbotClose", "click", (e) => { e.preventDefault(); close(); });

    window.addEventListener("keydown", e => { if (e.key === "Escape" && isOpen) close(); });

    const form = document.getElementById("chatbotForm");
    if (form){
      form.addEventListener("submit", e => {
        e.preventDefault();
        const input = document.getElementById("chatbotInput");
        if (!input) return;
        const val = input.value.trim();
        if (!val) return;
        addUserMessage(val);
        input.value = "";
        setTimeout(() => handleFreeText(val), 250);
      });
    }
  }

  return { init, open, close, toggle };
})();

/* ---------- Init ---------- */
function safeRun(name, fn){
  try {
    fn();
  } catch (err) {
    console.error(`LG Medical Centre: "${name}" failed to initialise.`, err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  safeRun("applyConfigToDom", applyConfigToDom);
  safeRun("initHeader", initHeader);
  safeRun("renderDepartments", renderDepartments);
  safeRun("renderServices", renderServices);
  safeRun("renderDoctorFilters", renderDoctorFilters);
  safeRun("renderDoctors", renderDoctors);
  safeRun("initAppointmentForm", initAppointmentForm);
  safeRun("initTestimonials", initTestimonials);
  safeRun("initCareers", initCareers);
  safeRun("initEcgMotionPreference", initEcgMotionPreference);
  safeRun("ChatBot.init", ChatBot.init);
});
