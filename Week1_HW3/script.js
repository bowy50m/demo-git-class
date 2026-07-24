const productList = document.getElementById("productList");

const products = [
    {
        name: "ถุงหูหิ้ว",
        type: "ถุงพลาสติก HDPE",
        size: "12 x 20 นิ้ว"
    },
    {
        name: "ถุงร้อน",
        type: "ถุงพลาสติก PP",
        size: "8 x 12 นิ้ว"
    },
    {
        name: "ถุงขยะ",
        type: "ถุงพลาสติกสีดำ",
        size: "30 x 40 นิ้ว"
    },
    {
        name: "ถุงใส",
        type: "ถุงบรรจุอาหาร",
        size: "6 x 10 นิ้ว"
    },
    {
        name: "ถุงขุ่น",
        type: "ถุงพลาสติก HDPE",
        size: "10 x 15 นิ้ว"
    },
    {
        name: "ถุงเจาะรู",
        type: "ถุงสำหรับบรรจุสินค้า",
        size: "ตามสั่ง"
    }
];

products.forEach(function(product) {
    // สร้างกล่อง <article></article> ขึ้นมา
    const productCard = document.createElement("article");

    // ใส่คลาส <article class="student-card"></article>
    productCard.classList.add("product-card");

    // ใส่ h2 ใน article
    // <article class="student-card">
    //     <h2>นาย วริศ</h2>
    // </article>
    productCard.innerHTML = `
        <h2>${product.name}</h2>
        <p><strong>ประเภท:</strong> ${product.type}</p>
        <p><strong>ขนาด:</strong> ${product.size}</p>
        <span class="badge">ดูรายละเอียด</span>
    `;

    // ใส่ <article></article> ใน studentList <div id="studentList" class="student-list">
    productList.appendChild(productCard);
});