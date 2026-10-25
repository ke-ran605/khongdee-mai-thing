
const form = document.getElementById("item-form");
const itemGrid = document.querySelector(".item-grid");
const formMessage = document.getElementById("form-message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("item-name").value.trim();
    const category = document.getElementById("item-category").value;
    const description = document.getElementById("item-description").value.trim();
    const sellerName = document.getElementById("seller-name").value.trim();
    const sellerPhone = document.getElementById("seller-phone").value.trim();

    if (!name || !category || !description || !sellerName || !sellerPhone) {
        formMessage.textContent = "กรุณากรอกข้อมูลให้ครบทุกช่อง";
        return;
    }

    const card = document.createElement("article");
    card.className = "item-card";

    const icon = document.createElement("div");
    icon.className = "item-icon";
    icon.textContent = "🎁";

    const title = document.createElement("h3");
    title.textContent = name;

    const detail = document.createElement("p");
    detail.textContent = description;

    const categoryLabel = document.createElement("span");
    categoryLabel.className = "category";
    categoryLabel.textContent = category;

    const seller = document.createElement("p");
    seller.textContent = "ผู้ลงประกาศ: " + sellerName;

    const phone = document.createElement("p");
    phone.textContent = "เบอร์ติดต่อ: " + sellerPhone;

    card.append(icon, title, detail, categoryLabel, seller, phone);
    itemGrid.prepend(card);

    formMessage.textContent = "ลงประกาศตัวอย่างสำเร็จแล้ว!";
    form.reset();
});
