const ใบแจ้งซ่อม = document.getElementById("ใบแจ้งซ่อม");
const fullnameInput = document.getElementById("fullName");
const DepartmentSelect = document.getElementById("Department");
const MachineSelect = document.getElementById("Machine");
const CauseSelect = document.getElementById("Cause");
const messageTextarea = document.getElementById("message");
const resultBox = document.getElementById("result");

function showResult(message, type) {
    resultBox.textContent = message;
    resultBox.classList.remove("success", "error");

    if (type === "success") {
        resultBox.classList.add("success");
    } else if (type === "error") {
        resultBox.classList.add("error");
    }
}

ใบแจ้งซ่อม.addEventListener("submit", function (event) {
    event.preventDefault();

    const fullName = fullnameInput.value.trim();
    const Department = DepartmentSelect.value;
    const Machine = MachineSelect.value;
    const Cause = CauseSelect.value;
    const message = messageTextarea.value.trim();

    console.log("ชื่อ: ", fullName, "แผนก: ", Department, "เครื่องจักร: ", Machine);
    console.log("อาการเสีย: ", Cause, "ข้อความเพิ่มเติม: ", message);

    if (fullName === "" || Department === "" || Machine === "" || Cause === "") {
        showResult("กรุณากรอกข้อมูลให้ครบถ้วน แล้วกดส่งข้อมูล", "error");
        return;
    }

    showResult(
        `สวัสดีครับคุณ ${fullName} แผนก: ${Department} คุณส่งข้อมูลมาดังนี้: เครื่องจักร ${Machine} อาการเสีย: ${Cause} ข้อความเพิ่มเติม: ${message}`,
        "success"
    );
});
