const SUPABASE_URL = "https://htxmvdbbfxbdhhasssxe.supabase.co";
const SUPABASE_KEY = "sb_publishable_wncGUt1fs0WNmSRhJli4QA_VuZGx32O";

const supabaseClient = supabase.createClient(
    SUPABASE_URL,
    SUPABASE_KEY
);
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    loginMessage.textContent = "Logging in...";

    const { data, error } = await supabaseClient.auth.signInWithPassword({
        email: email,
        password: password
    });

    if (error) {
        loginMessage.textContent = error.message;
        return;
    }

    loginMessage.textContent = "Login successful!";

    console.log("Logged in:", data.user);

    window.location.href = "dashboard.html";

    // Dashboard will be added next
});
