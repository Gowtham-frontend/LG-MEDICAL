// ==========================================
// SUPABASE CONNECTION
// ==========================================

const SUPABASE_URL =
    "https://htxmvdbbfxbdhhasssxe.supabase.co";

const SUPABASE_KEY =
    "sb_publishable_wncGUt1fs0WNmSRhJli4QA_VuZGx32O";

const supabaseClient =
    supabase.createClient(
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

        console.error(
            "Session error:",
            error
        );

        return;
    }

    if (!session) {

        window.location.href =
            "admin.html";

        return;
    }

    loadDoctors();
}


// ==========================================
// LOAD DOCTORS
// ==========================================

async function loadDoctors() {

    const tableBody =
        document.getElementById(
            "doctorsTableBody"
        );

    if (!tableBody) {

        console.error(
            "doctorsTableBody not found"
        );

        return;
    }


    tableBody.innerHTML = `
        <tr>
            <td colspan="8">
                Loading doctors...
            </td>
        </tr>
    `;


    const {
        data,
        error
    } = await supabaseClient
        .from("lg_medical")
        .select("*")
        .order("name");


    if (error) {

        console.error(
            "Load doctors error:",
            error
        );

        tableBody.innerHTML = `
            <tr>
                <td colspan="8">
                    Error: ${escapeHtml(
                        error.message
                    )}
                </td>
            </tr>
        `;

        return;
    }


    const totalDoctorsElement =
        document.getElementById(
            "totalDoctors"
        );


    if (totalDoctorsElement) {

        totalDoctorsElement.textContent =
            data.length;

    }


    const departments = [
        ...new Set(
            data
                .map(
                    doctor =>
                        (
                            doctor.department ||
                            ""
                        ).trim()
                )
                .filter(Boolean)
        )
    ];


    const totalDepartmentsElement =
        document.getElementById(
            "totalDepartments"
        );


    if (totalDepartmentsElement) {

        totalDepartmentsElement.textContent =
            departments.length;

    }


    if (!data || data.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="8">
                    No doctors found.
                </td>
            </tr>
        `;

        return;
    }


    tableBody.innerHTML = "";


    // ==========================================
    // DISPLAY DOCTORS
    // ==========================================

    data.forEach(doctor => {

        const row =
            document.createElement("tr");


        row.innerHTML = `

            <td>
                ${escapeHtml(
                    doctor.name
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.designation
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.department
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.qualification
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.experience_years
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.op_days
                )}
            </td>

            <td>
                ${escapeHtml(
                    doctor.op_time
                )}
            </td>

            <td>

                <button
                    class="edit-btn"
                    data-id="${escapeHtml(
                        doctor.doctor_id
                    )}"
                >
                    Edit
                </button>

                <button
                    class="delete-btn"
                    data-id="${escapeHtml(
                        doctor.doctor_id
                    )}"
                >
                    Delete
                </button>

            </td>
        `;


        tableBody.appendChild(row);

    });


    // ==========================================
    // EDIT BUTTON
    // ==========================================

    document
        .querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const doctorId =
                        button.dataset.id;


                    const doctor =
                        data.find(
                            item =>
                                String(
                                    item.doctor_id
                                ) ===
                                String(
                                    doctorId
                                )
                        );


                    if (!doctor) {

                        alert(
                            "Doctor not found."
                        );

                        return;
                    }


                    openDoctorForm(
                        doctor
                    );

                }
            );

        });


    // ==========================================
    // DELETE BUTTON
    // ==========================================

    document
        .querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener(
                "click",
                async () => {

                    const doctorId =
                        button.dataset.id;


                    await deleteDoctor(
                        doctorId
                    );

                }
            );

        });

}


// ==========================================
// OPEN ADD / EDIT FORM
// ==========================================

function openDoctorForm(
    doctor = null
) {

    const isEdit =
        doctor !== null;


    const modal =
        document.createElement("div");


    modal.id =
        "doctorModal";


    modal.innerHTML = `

        <div class="doctor-modal-overlay">

            <div class="doctor-modal">

                <h2>
                    ${
                        isEdit
                            ? "Edit Doctor"
                            : "Add Doctor"
                    }
                </h2>


                <form id="doctorForm">


                    <label>
                        Name
                    </label>

                    <input
                        type="text"
                        id="doctorName"
                        value="${escapeHtml(
                            doctor?.name || ""
                        )}"
                        required
                    >


                    <label>
                        Designation
                    </label>

                    <input
                        type="text"
                        id="doctorDesignation"
                        value="${escapeHtml(
                            doctor?.designation || ""
                        )}"
                    >


                    <label>
                        Department
                    </label>

                    <input
                        type="text"
                        id="doctorDepartment"
                        value="${escapeHtml(
                            doctor?.department || ""
                        )}"
                        required
                    >


                    <label>
                        Qualification
                    </label>

                    <input
                        type="text"
                        id="doctorQualification"
                        value="${escapeHtml(
                            doctor?.qualification || ""
                        )}"
                    >


                    <label>
                        Experience
                    </label>

                    <input
                        type="text"
                        id="doctorExperience"
                        value="${escapeHtml(
                            doctor?.experience_years || ""
                        )}"
                    >


                    <label>
                        OP Days
                    </label>

                    <input
                        type="text"
                        id="doctorOpDays"
                        value="${escapeHtml(
                            doctor?.op_days || ""
                        )}"
                        placeholder="Example: Mon - Fri"
                    >


                    <label>
                        OP Time
                    </label>

                    <input
                        type="text"
                        id="doctorOpTime"
                        value="${escapeHtml(
                            doctor?.op_time || ""
                        )}"
                        placeholder="Example: 10:00 AM - 5:00 PM"
                    >


                    <label>
                        Notes
                    </label>

                    <textarea
                        id="doctorNotes"
                        rows="3"
                    >${escapeHtml(
                        doctor?.notes || ""
                    )}</textarea>


                    <div
                        class="doctor-form-buttons"
                    >

                        <button
                            type="button"
                            id="cancelDoctorBtn"
                        >
                            Cancel
                        </button>


                        <button
                            type="submit"
                            id="saveDoctorBtn"
                        >
                            ${
                                isEdit
                                    ? "Update Doctor"
                                    : "Add Doctor"
                            }
                        </button>

                    </div>

                </form>

            </div>

        </div>
    `;


    document.body.appendChild(
        modal
    );


    // ==========================================
    // CANCEL
    // ==========================================

    document
        .getElementById(
            "cancelDoctorBtn"
        )
        .addEventListener(
            "click",
            () => {

                modal.remove();

            }
        );


    // ==========================================
    // SUBMIT
    // ==========================================

    document
        .getElementById(
            "doctorForm"
        )
        .addEventListener(
            "submit",
            async event => {

                event.preventDefault();

                await saveDoctor(
                    doctor
                );

            }
        );

}


// ==========================================
// SAVE / UPDATE DOCTOR
// ==========================================

async function saveDoctor(
    oldDoctor
) {

    const name =
        document
            .getElementById(
                "doctorName"
            )
            .value
            .trim();


    const designation =
        document
            .getElementById(
                "doctorDesignation"
            )
            .value
            .trim();


    const department =
        document
            .getElementById(
                "doctorDepartment"
            )
            .value
            .trim();


    const qualification =
        document
            .getElementById(
                "doctorQualification"
            )
            .value
            .trim();


    const experience =
        document
            .getElementById(
                "doctorExperience"
            )
            .value
            .trim();


    const opDays =
        document
            .getElementById(
                "doctorOpDays"
            )
            .value
            .trim();


    const opTime =
        document
            .getElementById(
                "doctorOpTime"
            )
            .value
            .trim();


    const notes =
        document
            .getElementById(
                "doctorNotes"
            )
            .value
            .trim();


    // ==========================================
    // VALIDATION
    // ==========================================

    if (!name) {

        alert(
            "Please enter doctor name."
        );

        return;
    }


    if (!department) {

        alert(
            "Please enter department."
        );

        return;
    }


    // ==========================================
    // DATABASE DATA
    // ==========================================

    const doctorData = {

        name:
            name,

        designation:
            designation || "",

        department:
            department,

        qualification:
            qualification || "",

        education_details:
            qualification || "",

        experience_years:
            experience || "",

        op_days:
            opDays || "",

        op_time:
            opTime || "",

        notes:
            notes || ""

    };


    let result;


    // ==========================================
    // UPDATE EXISTING DOCTOR
    // ==========================================

    if (oldDoctor) {

        if (!oldDoctor.doctor_id) {

            alert(
                "Doctor ID is missing. Cannot update."
            );

            return;
        }


        result =
            await supabaseClient
                .from("lg_medical")
                .update(
                    doctorData
                )
                .eq(
                    "doctor_id",
                    oldDoctor.doctor_id
                );

    }


    // ==========================================
    // ADD NEW DOCTOR
    // ==========================================

    else {

        result =
            await supabaseClient
                .from("lg_medical")
                .insert([
                    doctorData
                ]);

    }


    // ==========================================
    // DATABASE ERROR
    // ==========================================

    if (result.error) {

        console.error(
            "Save doctor error:",
            result.error
        );


        alert(
            "Error:\n\n" +
            result.error.message
        );


        return;
    }


    // ==========================================
    // SUCCESS
    // ==========================================

    alert(
        oldDoctor
            ? "Doctor updated successfully!"
            : "Doctor added successfully!"
    );


    const modal =
        document.getElementById(
            "doctorModal"
        );


    if (modal) {

        modal.remove();

    }


    loadDoctors();

}


// ==========================================
// DELETE DOCTOR
// ==========================================

async function deleteDoctor(
    doctorId
) {

    if (!doctorId) {

        alert(
            "Doctor ID is missing."
        );

        return;
    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this doctor?"
        );


    if (!confirmDelete) {

        return;
    }


    const {
        error
    } =
        await supabaseClient
            .from("lg_medical")
            .delete()
            .eq(
                "doctor_id",
                doctorId
            );


    if (error) {

        console.error(
            "Delete error:",
            error
        );


        alert(
            "Delete failed:\n\n" +
            error.message
        );


        return;
    }


    alert(
        "Doctor deleted successfully!"
    );


    loadDoctors();

}


// ==========================================
// ADD DOCTOR BUTTON
// ==========================================

const addDoctorBtn =
    document.getElementById(
        "addDoctorBtn"
    );


if (addDoctorBtn) {

    addDoctorBtn.addEventListener(
        "click",
        () => {

            openDoctorForm();

        }
    );

}


// ==========================================
// LOGOUT
// ==========================================

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        async () => {

            await supabaseClient
                .auth
                .signOut();


            window.location.href =
                "admin.html";

        }
    );

}


// ==========================================
// DOCTOR SEARCH
// ==========================================

const doctorSearch =
    document.getElementById(
        "doctorSearch"
    );


if (doctorSearch) {

    doctorSearch.addEventListener(
        "input",
        function () {

            const searchText =
                this.value
                    .toLowerCase()
                    .trim();


            document
                .querySelectorAll(
                    "#doctorsTableBody tr"
                )
                .forEach(row => {

                    const rowText =
                        row.textContent
                            .toLowerCase();


                    row.style.display =
                        rowText.includes(
                            searchText
                        )
                            ? ""
                            : "none";

                });

        }
    );

}


// ==========================================
// LOAD APPOINTMENTS
// ==========================================

async function loadAppointments() {

    const tableBody =
        document.getElementById(
            "appointmentsTableBody"
        );


    if (!tableBody) {

        return;

    }


    tableBody.innerHTML = `
        <tr>
            <td colspan="10">
                Loading appointments...
            </td>
        </tr>
    `;


    const {
        data,
        error
    } =
        await supabaseClient
            .from("appointments")
            .select("*")
            .order(
                "appointment_date",
                {
                    ascending: true
                }
            );


    if (error) {

        console.error(
            "Load appointments error:",
            error
        );


        tableBody.innerHTML = `
            <tr>
                <td colspan="10">
                    Error loading appointments.
                </td>
            </tr>
        `;


        return;

    }


    if (
        !data ||
        data.length === 0
    ) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="10">
                    No appointments found.
                </td>
            </tr>
        `;


        return;

    }


    tableBody.innerHTML = "";


    // ==========================================
    // DISPLAY APPOINTMENTS
    // ==========================================

    data.forEach(
        appointment => {

            const row =
                document.createElement(
                    "tr"
                );


            row.innerHTML = `

                <td>
                    ${escapeHtml(
                        appointment.patient_name
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.phone
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.email
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.doctor_name
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.department
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.appointment_date
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.appointment_time
                    )}
                </td>

                <td>
                    ${escapeHtml(
                        appointment.message
                    )}
                </td>

                <td>
                    <strong>
                        ${escapeHtml(
                            appointment.status ||
                            "Pending"
                        )}
                    </strong>
                </td>

                <td>

                    <button
                        class="delete-appointment-btn"
                        data-id="${escapeHtml(
                            appointment.id
                        )}"
                    >
                        Delete
                    </button>

                </td>

            `;


            tableBody.appendChild(
                row
            );

        }
    );


    // ==========================================
    // APPOINTMENT DELETE BUTTON
    // ==========================================

    document
        .querySelectorAll(
            ".delete-appointment-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    async () => {

                        const appointmentId =
                            button.dataset.id;


                        await deleteAppointment(
                            appointmentId
                        );

                    }
                );

            }
        );

}


// ==========================================
// DELETE APPOINTMENT
// ==========================================

async function deleteAppointment(
    appointmentId
) {

    if (!appointmentId) {

        alert(
            "Appointment ID is missing."
        );

        return;

    }


    const confirmDelete =
        confirm(
            "Are you sure you want to delete this appointment?"
        );


    if (!confirmDelete) {

        return;

    }


    const {
        error
    } =
        await supabaseClient
            .from("appointments")
            .delete()
            .eq(
                "id",
                appointmentId
            );


    if (error) {

        console.error(
            "Delete appointment error:",
            error
        );


        alert(
            "Delete failed:\n\n" +
            error.message
        );


        return;

    }


    alert(
        "Appointment deleted successfully!"
    );


    loadAppointments();

}


// ==========================================
// APPOINTMENT SEARCH
// ==========================================

const appointmentSearch =
    document.getElementById(
        "appointmentSearch"
    );


if (appointmentSearch) {

    appointmentSearch.addEventListener(
        "input",
        function () {

            const searchText =
                this.value
                    .toLowerCase()
                    .trim();


            document
                .querySelectorAll(
                    "#appointmentsTableBody tr"
                )
                .forEach(
                    row => {

                        const rowText =
                            row.textContent
                                .toLowerCase();


                        row.style.display =
                            rowText.includes(
                                searchText
                            )
                                ? ""
                                : "none";

                    }
                );

        }
    );

}


// ==========================================
// HTML ESCAPE
// ==========================================

function escapeHtml(
    value
) {

    if (
        value === null ||
        value === undefined
    ) {

        return "";

    }


    return String(value)

        .replace(
            /&/g,
            "&amp;"
        )

        .replace(
            /</g,
            "&lt;"
        )

        .replace(
            />/g,
            "&gt;"
        )

        .replace(
            /"/g,
            "&quot;"
        )

        .replace(
            /'/g,
            "&#039;"
        );

}


// ==========================================
// START
// ==========================================

checkLogin();

loadAppointments();
