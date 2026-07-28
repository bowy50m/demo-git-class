//1. เงื่อนไข: จะต้องมีอายุอย่างน้อย 16 ปี และผ่านการอบรมหลักสูตรขับขี่เรียบร้อยแล้ว
//2. หากผ่านเงื่อนไขทั้งหมด ให้แสดงข้อความ “You can get your license!”
//3. หากอายุไม่ถึง 16 ปี ให้แสดงข้อความ “You must be at least 16”
//4. หากอายุถึงแต่ยังไม่อบรมหลักสูตรขับขี่ ให้แสดงข้อความ “You need to complete driver's education”

if (age >= 16) {
    if (driverLicense) {
        console.log("You can get your license!");
    } else {
        console.log("You need to complete driver's education");
    }
} else {
    console.log("You must be at least 16");
}
