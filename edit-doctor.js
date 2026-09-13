const SUPABASE_URL = "https://htxmvdbbfxbdhhasssxe.supabase.co";
const SUPABASE_KEY = "sb_publishable_wncGUt1fs0WNmSRhJli4QA_VuZGx32O";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);


// ==========================================
// CHECK LOGIN
// ==========================================

async function checkLogin() {

    const {
        data: { session },
        error
    } = await supabaseClient.auth.getSession();

    if (error) {
        console.error("Session error:", error);
        return;
    }

    if (!session) {
        window.location.href = "admin.html";
        return;
    }

    loadDoctor();
}


// ==========================================
// LOAD DOCTOR
// ==========================================

async function loadDoctor() {

    const params = new URLSearchParams(
        window.location.search
    );

    const doctorId = params.get("id");


    // ======================================
    // ADD DOCTOR MODE
    // ======================================

    if (!doctorId) {

        document.querySelector("h2").textContent =
            "Add Doctor";

        const saveButton =
            document.querySelector(
                "#editDoctorForm button[type='submit']"
            );

        if (saveButton) {
            saveButton.textContent = "Add Doctor";
        }

        return;
    }


    // ======================================
    // EDIT DOCTOR MODE
    // ======================================

    const { data, error } = await supabaseClient
        .from("lg_medical")
        .select("*")
        .eq("doctor_id", doctorId)
        .single();


    if (error) {

        console.error("Load doctor error:", error);

        document.getElementById("message").textContent =
            "Doctor load failed: " + error.message;

        return;
    }


    if (!data) {

        document.getElementById("message").textContent =
            "Doctor not found.";

        return;
    }


    // ======================================
    // FILL FORM
    // ======================================

    document.getElementById("doctorId").value =
        data.doctor_id || "";

    document.getElementById("name").value =
        data.name || "";

    document.getElementById("designation").value =
        data.designation || "";

    document.getElementById("department").value =
        data.department || "";

    document.getElementById("qualification").value =
        data.qualification || "";

    document.getElementById("experience_years").value =
        data.experience_years || "";

    document.getElementById("op_days").value =
        data.op_days || "";

    document.getElementById("op_time").value =
        data.op_time || "";

    document.getElementById("notes").value =
        data.notes || "";

}


// ==========================================
// SAVE FORM
// ==========================================

document
    .getElementById("editDoctorForm")
    .addEventListener("submit", async function (e) {

        e.preventDefault();


        const doctorId =
            document.getElementById("doctorId").value.trim();


        // ==================================
        // GET FORM VALUES
        // ==================================

        const name =
            document.getElementById("name").value.trim();

        const designation =
            document.getElementById("designation").value.trim();

        const department =
            document.getElementById("department").value.trim();

        const qualification =
            document.getElementById("qualification").value.trim();

        const experience =
            document.getElementById("experience_years").value.trim();

        const opDays =
            document.getElementById("op_days").value.trim();

        const opTime =
            document.getElementById("op_time").value.trim();

        const notes =
            document.getElementById("notes").value.trim();


        // ==================================
        // VALIDATION
        // ==================================

        if (!name) {

            document.getElementById("message").textContent =
                "Please enter doctor name.";

            return;
        }

        if (!department) {

            document.getElementById("message").textContent =
                "Please enter department.";

            return;
        }


        // ==================================
        // DATA TO SUPABASE
        // ==================================

        const doctorData = {

            name: name,

            designation: designation,

            department: department,

            qualification: qualification,

            education_details: qualification,

            experience_years: experience,

            op_days: opDays,

            op_time: opTime,

            notes: notes
        };


        // ==================================
        // UPDATE EXISTING DOCTOR
        // ==================================

        if (doctorId) {

            const { error } = await supabaseClient
                .from("lg_medical")
                .update(doctorData)
                .eq("doctor_id", doctorId);


            if (error) {

                console.error(
                    "Update error:",
                    error
                );

                document.getElementById("message").textContent =
                    "Update failed: " + error.message;

                return;
            }


            document.getElementById("message").textContent =
                "Doctor updated successfully!";


            setTimeout(function () {

                window.location.href =
                    "dashboard.html";

            }, 1000);

            return;
        }


        // ==================================
        // ADD NEW DOCTOR
        // ==================================

        const { data, error } = await supabaseClient
            .from("lg_medical")
            .insert([doctorData])
            .select();


        if (error) {

            console.error(
                "Add doctor error:",
                error
            );

            document.getElementById("message").textContent =
                "Add doctor failed: " + error.message;

            return;
        }


        console.log(
            "New doctor added:",
            data
        );


        document.getElementById("message").textContent =
            "Doctor added successfully!";


        setTimeout(function () {

            window.location.href =
                "dashboard.html";

        }, 1000);

    });


// ==========================================
// START
// ==========================================

checkLogin();
