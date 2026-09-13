/* =========================================================
   LG MEDICAL CENTRE — APPLICATION LOGIC
   Single source of truth: CONFIG object below.
   Update phone numbers, address, doctors, departments, services,
   testimonials, careers and timings here — nothing else needs editing.
   ========================================================= */
// ==========================================
// SUPABASE CONNECTION
// ==========================================

const SUPABASE_URL = "https://htxmvdbbfxbdhhasssxe.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_wncGUt1fs0WNmSRhJli4QA_VuZGx32O";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const CONFIG = {
  hospitalName: "LG Medical Centre",
  phone: "+91 96774 96666",              // Reception
  phoneDisplay: "+91 96774 96666",       // Reception
  ambulancePhone: "+91 97872 77666",     // Ambulance
  ambulancePhoneDisplay: "+91 97872 77666",
  whatsapp: "919600362866",              // WhatsApp number, digits only with country code
  whatsappDisplay: "+91 96003 62866",
  email: "lgmedicalcentre@gmail.com",
  address: "No 185/10, Vee Yem Gardens, Kangayam Main Road, Near Nallur Bus Stop, Nallur, Tiruppur - 641606, Tamil Nadu",
  googleMapsUrl: "https://maps.app.goo.gl/tut4f9TK5MPHqRcW7",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=LG%20Medical%20Centre%2C%20185%2F10%20Vee%20Yem%20Gardens%2C%20Kangayam%20Main%20Road%2C%20Nallur%2C%20Tiruppur%20641606&t=&z=16&ie=UTF8&iwloc=&output=embed", // TODO: swap for an embed URL generated from the exact Google Maps listing when available

  // Full week of opening hours — every day listed individually so
  // nothing is lumped into a vague "weekdays" bucket. Condensed views
  // (appointment section, chatbot) auto-group consecutive identical
  // days via formatWeekHoursCondensed(); the Contact section shows
  // every day on its own line via renderWeekHoursList().
  timings: {
    hours: {
      monday: "Open 24 Hours",
      tuesday: "Open 24 Hours",
      wednesday: "Open 24 Hours",
      thursday: "Open 24 Hours",
      friday: "Open 24 Hours",
      saturday: "Open 24 Hours",
      sunday: "Open 24 Hours"
    },
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

  // Department list derived from the department values present in the
  // doctors CSV supplied by the client (one entry per distinct department).
  departments: [
    { name: "Vascular Surgeon", icon: "hospital", desc: "Specialised surgical care for blood vessel and circulation disorders." },
    { name: "Plastic Surgeon", icon: "badge", desc: "Reconstructive and cosmetic surgical procedures." },
    { name: "Oncology Surgeon", icon: "hospital", desc: "Surgical cancer treatment, screening and diagnosis support." },
    { name: "Gastroenterologist", icon: "hospital", desc: "Diagnosis and treatment of digestive system conditions." },
    { name: "Dermatology", icon: "badge", desc: "Skin, hair and nail care from experienced dermatologists." },
    { name: "Paediatrics", icon: "doctor", desc: "Gentle, specialised healthcare for newborns, infants and children." },
    { name: "Pulmonologist", icon: "hospital", desc: "Care for asthma, infections and other lung and breathing conditions." },
    { name: "Gynaecology, Obstetrics", icon: "heart", desc: "Comprehensive women's health, pregnancy and childbirth care for mother and baby." },
    { name: "Neuro Surgeon", icon: "hospital", desc: "Surgical treatment for conditions of the brain, spine and nerves." },
    { name: "Cardiologist", icon: "heart", desc: "Complete heart care from screening to advanced cardiac treatment." },
    { name: "Anesthesiology", icon: "badge", desc: "Safe anaesthesia and perioperative care for surgical and diagnostic procedures." },
    { name: "Orthopedic", icon: "badge", desc: "Bone, joint and muscle care for all ages, from injury to recovery." },
    { name: "ENT", icon: "doctor", desc: "Ear, nose and throat care for both routine and complex cases." },
    { name: "General Medicine", icon: "hospital", desc: "Comprehensive care for everyday health concerns and chronic conditions." }
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

  // Doctor list sourced directly from the client-supplied doctors CSV.
  // "qualification" combines the CSV's designation and qualification columns;
  // "days" combines the CSV's op_days and op_time columns. Fields left blank
  // in the CSV are left blank here rather than invented.
  doctors: [
    { name: "Dr. A. Roychristo", qualification: "Consultant Vascular & Endovascular Surgeon, Assistant Professor (MS, MCh)", department: "Vascular Surgeon", experience: "10 yrs", days: "" },
    { name: "Dr. Ashwin Raja A", qualification: "Consultant Plastic Surgeon (MBBS, MS, MCh)", department: "Plastic Surgeon", experience: "8 yrs", days: "Mon, Wed, Fri • 1:00 PM - 3:00 PM" },
    { name: "Dr. Mohanaraj", qualification: "Consultant Onco Surgeon (MBBS, DNB(GS), MS(GS), DNB(Oncology), MCh(Surgical Oncology))", department: "Oncology Surgeon", experience: "", days: "" },
    { name: "Dr. R. Gopalakrishnan", qualification: "MBBS, MS", department: "Gastroenterologist", experience: "", days: "" },
    { name: "Dr. Ruben", qualification: "", department: "Dermatology", experience: "", days: "" },
    { name: "Dr. Venkatesan", qualification: "Consultant Paediatrician (MBBS, DCH)", department: "Paediatrics", experience: "", days: "10:30 AM - 4:30 PM" },
    { name: "Dr. Shivshanmugam", qualification: "", department: "Pulmonologist", experience: "", days: "" },
    { name: "Dr. Swathy", qualification: "Consultant Gynae Surgeon (MBBS, DNB(OG))", department: "Gynaecology, Obstetrics", experience: "", days: "1:00 PM - 3:00 PM" },
    { name: "Dr. I.G. Sam Victor", qualification: "Consultant Oncology Surgeon (MBBS, MS, DNB, MCh)", department: "Oncology Surgeon", experience: "", days: "" },
    { name: "Dr. Chandhraa Mohan", qualification: "MBBS, MCh", department: "Neuro Surgeon", experience: "", days: "" },
    { name: "Dr. Praanav Kumar", qualification: "Consultant Cardiology (MBBS, DM)", department: "Cardiologist", experience: "", days: "" },
    { name: "Dr. Rithanya Palanisamy", qualification: "MBBS, DNB (Anesthesia)", department: "Anesthesiology", experience: "1 yr", days: "" },
    { name: "Dr. Selvendran", qualification: "Consultant Orthopedic Surgeon (MBBS, MS Ortho)", department: "Orthopedic", experience: "1 yr", days: "10:00 AM - 5:00 PM" },
    { name: "Dr. Veeraraghavan", qualification: "Consultant ENT Surgeon (MBBS, MS (Oto-Rhino-Laryngology))", department: "ENT", experience: "", days: "Mon - Fri • 3:00 PM - 4:00 PM" },
    { name: "Dr. Kalaiselvi Baby", qualification: "Consultant (Obst. & Gynae) (MBBS, MS)", department: "Gynaecology, Obstetrics", experience: "", days: "Mon to Fri • 10:00 AM - 1:00 PM" },
    { name: "Dr. Mohanaraj", qualification: "Consultant General Medicine (MBBS, MD)", department: "General Medicine", experience: "", days: "Mon to Fri • 4:00 PM - 6:00 PM" }
  ],

  // Genuine reviews supplied by the client from the business's Google
  // listing — do not add invented names/quotes here. Attributed as
  // "Google Review" since no reviewer name was provided with the text.
  testimonials: [
    { name: "Google Review", location: "Verified Google Review", rating: 5, text: "Excellent service, caring nurses, affordable charges, and a clean environment." },
    { name: "Google Review", location: "Verified Google Review", rating: 5, text: "The staff is very kind and the facility is clean and well-maintained." }
  ],

  // Careers section currently shows only the Receptionist opening —
  // client asked to remove all other roles until further notice.
  careers: [
    {
      position: "Receptionist",
      department: "Front Office",
      location: "Nallur, Tiruppur",
      experience: "Freshers Welcome",
      type: "Full-time",
      desc: "First point of contact for patients — manage appointments, calls and front-desk coordination.",
      requirements: [
        "Minimum qualification: 12th Pass / Any Degree",
        "Basic computer knowledge",
        "Good communication skills",
        "Tamil and basic English communication preferred",
        "Freshers can apply",
        "Prior hospital/clinic reception experience will be an added advantage"
      ]
    }
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

/* ---------- Working hours helpers (Monday → Sunday) ---------- */
const WEEKDAY_ORDER = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const WEEKDAY_LABEL = { monday: "Mon", tuesday: "Tue", wednesday: "Wed", thursday: "Thu", friday: "Fri", saturday: "Sat", sunday: "Sun" };
const WEEKDAY_LABEL_FULL = { monday: "Monday", tuesday: "Tuesday", wednesday: "Wednesday", thursday: "Thursday", friday: "Friday", saturday: "Saturday", sunday: "Sunday" };

// Groups consecutive days that share identical hours, e.g.
// "Mon - Sat: 9:00 AM - 8:00 PM · Sun: 9:00 AM - 2:00 PM" — used
// anywhere space is limited (appointment section, chatbot replies).
function formatWeekHoursCondensed(){
  const groups = [];
  WEEKDAY_ORDER.forEach(day => {
    const hrs = CONFIG.timings.hours[day];
    const last = groups[groups.length - 1];
    if (last && last.hours === hrs) last.days.push(day);
    else groups.push({ hours: hrs, days: [day] });
  });
  return groups.map(g => {
    const label = g.days.length > 1 ? `${WEEKDAY_LABEL[g.days[0]]} - ${WEEKDAY_LABEL[g.days[g.days.length - 1]]}` : WEEKDAY_LABEL[g.days[0]];
    return `${label}: ${g.hours}`;
  }).join(" · ");
}

// Full Monday–Sunday breakdown, one line per day — used in the
// Contact section so every day's hours are visible and correctable.
function renderWeekHoursList(){
  return WEEKDAY_ORDER.map(day => `
    <li class="hours-row"><span>${WEEKDAY_LABEL_FULL[day]}</span><span>${escapeHtml(CONFIG.timings.hours[day])}</span></li>
  `).join("");
}

/* ---------- Apply central config to static elements ---------- */
function applyConfigToDom(){
  $$('[data-action="call"]').forEach(el => el.setAttribute("href", telLink()));
  const setText = (id, text) => { const el = document.getElementById(id); if (el) el.textContent = text; };

  setText("apptHoursWeekday", formatWeekHoursCondensed());
  setText("apptPhoneDisplay", CONFIG.phoneDisplay);
  setText("contactAddress", CONFIG.address);
  setText("contactPhone", CONFIG.phoneDisplay);
  setText("contactEmail", CONFIG.email);
  setText("contactWhatsApp", CONFIG.whatsappDisplay);
  const hoursList = document.getElementById("contactHoursList");
  if (hoursList) hoursList.innerHTML = renderWeekHoursList();
  setText("footerPhone", `Phone: ${CONFIG.phoneDisplay}`);
  setText("footerEmail", `Email: ${CONFIG.email}`);
  setText("footerWhatsApp", `WhatsApp: ${CONFIG.whatsappDisplay}`);
  setText("footerAddress", CONFIG.address);

  const mapFrame = document.getElementById("contactMapFrame");
  if (mapFrame) mapFrame.src = CONFIG.googleMapsEmbedUrl;

  const footerMaps = document.getElementById("footerMapsLink");
  if (footerMaps) footerMaps.href = CONFIG.googleMapsUrl;

  const reviewsLink = document.getElementById("googleReviewsLink");
  if (reviewsLink) reviewsLink.href = CONFIG.googleMapsUrl;

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
// ==========================================
/// ==========================================
// LOAD DOCTORS FROM SUPABASE
// ==========================================

async function loadDoctorsFromSupabase() {

    const { data, error } = await supabaseClient
        .from("lg_medical")
        .select("*")
        .order("name");

    if (error) {
        console.error("Doctors load error:", error);
        return;
    }

    if (!data) {
        return;
    }

    // Convert Supabase data to website format
    CONFIG.doctors = data.map(doctor => ({
        name: doctor.name || "",
        qualification: doctor.qualification || "",
        department: doctor.department || "",
        experience: doctor.experience_years || "",
        days: doctor.op_days || "",
        designation: doctor.designation || "",
        op_time: doctor.op_time || ""
    }));

    // Update departments from Supabase doctors
    const departments = [
        ...new Set(
            CONFIG.doctors
                .map(doctor => doctor.department)
                .filter(Boolean)
        )
    ];

    CONFIG.departments = departments;

    // Refresh doctor section
    renderDoctorFilters();
    renderDoctors();
    populateDoctorOptions();
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

  if (deptSelectEl) {

    deptSelectEl.addEventListener(
      "change",
      () => populateDoctorOptions(deptSelectEl.value)
    );

  }

  form.addEventListener("submit", async e => {

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

    // ==========================================
    // SAVE APPOINTMENT TO SUPABASE
    // ==========================================

    const { error } = await supabaseClient
      .from("appointments")
      .insert([
        {
          patient_name: data.fName,
          phone: data.fMobile,
          email: data.fEmail || "",
          doctor_name: data.fDoctor || "",
          department: data.fDepartment || "",
          appointment_date: data.fDate || null,
          appointment_time: "",
          message: data.fReason || ""
        }
      ]);

    if (error) {

      console.error(
        "Appointment save error:",
        error
      );

      alert(
        "Sorry, we could not save your appointment request. Please try again."
      );

      return;

    }

    // ==========================================
    // SUCCESS MESSAGE
    // ==========================================

    const successEl =
      document.getElementById("formSuccess");

    if (successEl){

      successEl.textContent =
        "Thank you! Your appointment request has been received. Our team will contact you shortly.";

      successEl.hidden = false;

      successEl.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });

    }

    form.reset();

    populateDoctorOptions();

  });

  // ==========================================
  // WHATSAPP BOOKING — OLD CODE UNCHANGED
  // ==========================================

  const waBtn =
    document.getElementById("apptWhatsAppBtn");

  if (waBtn){

    waBtn.addEventListener("click", () => {

      clearFormErrors(form);

      const data = getFormData(form);

      const errors =
        validateAppointmentForm(data);

      if (Object.keys(errors).length){

        showFormErrors(form, errors);

        const firstError =
          Object.keys(errors)[0];

        const el =
          document.getElementById(firstError);

        if (el) el.focus();

        return;

      }

      window.open(
        waLink(buildAppointmentMessage(data)),
        "_blank",
        "noopener"
      );

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
  grid.classList.toggle("is-single", CONFIG.careers.length === 1);
  grid.innerHTML = CONFIG.careers.map((job, i) => `
    <div class="job-card">
      <h3>${escapeHtml(job.position)}</h3>
      <div class="job-meta">
        <span class="job-tag">${escapeHtml(job.department)}</span>
        <span class="job-tag">${escapeHtml(job.type)}</span>
        <span class="job-tag">${escapeHtml(job.experience)}</span>
      </div>
      <p>${escapeHtml(job.desc)}</p>
      ${job.requirements && job.requirements.length ? `
      <ul class="job-requirements">
        ${job.requirements.map(r => `<li><i class="icon icon-check" aria-hidden="true"></i>${escapeHtml(r)}</li>`).join("")}
      </ul>` : ""}
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
    addBotMessage(`${formatWeekHoursCondensed()}\nEmergency: ${CONFIG.timings.emergency}`);
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

  safeRun("loadDoctorsFromSupabase", loadDoctorsFromSupabase);

  safeRun("initAppointmentForm", initAppointmentForm);

  safeRun("initTestimonials", initTestimonials);

  safeRun("initCareers", initCareers);

  safeRun("initEcgMotionPreference", initEcgMotionPreference);

  safeRun("ChatBot.init", ChatBot.init);

});
