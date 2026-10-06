# 📄 **README — Landscape Engineer Portfolio (Custom Rebuild)**

```markdown
# Landscape Engineer — Ahmad Abusleem  
A fully rebuilt and customized portfolio template designed for landscape engineering projects, modular planning, and professional documentation.

This project is a complete reconstruction of an existing HTML5UP-style template, rebuilt from scratch with a new grid system, new components, new layout logic, and a unified background system.  
All pages, sections, and UI elements have been redesigned to match a clean, modern, and professional identity.

---

## 🚀 Features

### ✔ Custom Grid System  
A fully rebuilt 12‑column grid with flexible classes (`col-12`, `col-8`, `col-6`, `col-4`, `col-3`) and responsive behavior.

### ✔ Unified Background System  
A global background image applied through CSS, ensuring visual consistency across all pages.

### ✔ Modular Page Structure  
Each page is built as an independent module:
- Home  
- About  
- Blog 
- Projects  
- Contact  

### ✔ Rebuilt Components  
Buttons, cards, project boxes, blog boxes, and layout sections redesigned for clarity and consistency.

### ✔ Mobile‑Friendly Sidebar  
A responsive sidebar with a mobile toggle system.

### ✔ Image Fit System  
Unified image sizes using `object-fit: cover` for clean project and blog grids.

### ✔ Ready for Animations  
The structure supports future page transitions (slide‑in, fade‑in, GSAP animations).

---

## 📁 Project Structure

```
root/
│
├── index.html
├── about.html
├── blog.html
├── projects.html
├── contact.html
│
├── assets/
│   ├── css/
│   │   ├── layout.css
│   │   ├── components.css
│   │   ├── mobile.css
│   │   └── fontawesome-all.min.css
│   │
│   ├── images/
│   │   ├── profile.png
│   │   ├── third_bg.jpg
│   │   ├── projects/
│   │   └── blog/
│   │
│   └── fonts/
│
└── README.md
```

---

## 🎨 Styling

### Global Background  
Applied once in `layout.css`:

```css
body {
    background-image: url('../images/third_bg.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
}
```

### Unified Image Sizes

```css
.image img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}
```

---

## 📱 Responsive Design

The layout adapts to all screen sizes using:
- Flexible grid classes  
- Mobile sidebar toggle  
- Dedicated `mobile.css` overrides  

---

## 🛠 Technologies Used

- HTML5  
- CSS3  
- Custom Grid System  
- Font Awesome Icons  
- Vanilla JavaScript (for toggles and future animations)

---

## 📬 Contact

**Landscape Engineer — Ahmad Abusleem**  
Professional outdoor design, irrigation networks, and climate‑adaptive landscaping.

---

## 📌 Notes

This template is a **full custom rebuild** and does not represent the original structure of any external template.  
All layout logic, components, and styling have been redesigned manually.

---