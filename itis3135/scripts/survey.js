document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("introForm").addEventListener("submit", handleSubmit);
    document.getElementById("introForm").addEventListener("reset", () => {
        document.getElementById("resultContainer").innerHTML = "";
        const courseDiv = document.getElementById("courses");
        courseDiv.querySelectorAll(".courseRow").forEach(e => e.remove());
    });
});

function addCourse() {
    const courseDiv = document.getElementById("courses");
    const row = document.createElement("div");
    row.className = "courseRow";
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter course";
    input.required = true;

    const delBtn = document.createElement("button");
    delBtn.type = "button";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => row.remove();

    row.appendChild(input);
    row.appendChild(delBtn);
    courseDiv.appendChild(row);
}

function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const name = data.get("name");
    const mascot = data.get("mascot");
    const caption = data.get("caption");
    const personal = data.get("personal");
    const professional = data.get("professional");
    const academic = data.get("academic");
    const webdev = data.get("webdev");
    const platform = data.get("platform");
    const funny = data.get("funny");
    const other = data.get("other");

    const courseInputs = document.querySelectorAll(".courseRow input");
    const courses = Array.from(courseInputs).map(input => input.value.trim()).filter(Boolean);

    const reader = new FileReader();
    const imageFile = data.get("image");

    reader.onload = function () {
        const resultHTML = `
            <section>
                <h2>${name}'s Introduction Page</h2>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Mascot:</strong> ${mascot}</li>
                    <li><strong><img src="${reader.result}" alt="Uploaded Image" style="max-width: 200px;"></strong></li>
                    <li><strong>Image Caption:</strong> ${caption}</li>
                    <li><strong>Personal Background:</strong> ${personal}</li>
                    <li><strong>Professional Background:</strong> ${professional}</li>
                    <li><strong>Academic Background:</strong> ${academic}</li>
                    <li><strong>Background in Web Development:</strong> ${webdev}</li>
                    <li><strong>Primary Computer Platform:</strong> ${platform}</li>
                    <li><strong>Courses Currently Taking:</strong>
                        <ul>${courses.map(course => `<li><strong>${course}</strong></li>`).join("")}</ul>
                    </li>
                    <li><strong>Funny Thing:</strong> ${funny}</li>
                    <li><strong>Anything Else:</strong> ${other}</li>
                </ul>
                <br>
                <button onclick="location.reload()">Reset Form</button>
            </section>
        `;
        document.getElementById("introForm").style.display = "none";
        document.getElementById("resultContainer").innerHTML = resultHTML;
    };

    if (imageFile && (imageFile.type === "image/png" || imageFile.type === "image/jpeg")) {
        reader.readAsDataURL(imageFile);
    } else {
        alert("Please upload a PNG or JPG image.");
    }
}
