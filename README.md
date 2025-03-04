

**Title:** Convert Figma UI to Responsive Web Page & Integrate APIs  

### **Overview**  
This Repo implements the technical phase requirements by converting the provided Figma UI design into a fully responsive web page and integrating API endpoints for authentication, product listing, and a contact form.  

### **Implemented Features**  

#### **1. Figma to Web UI**  
- Converted the Sign-Up, Login, and Landing pages from Figma into pixel-perfect, responsive components.  
- Ensured adaptability across different screen sizes (desktop, tablet, and mobile).  
- Maintained consistency with the provided design specifications.  

#### **2. API Integration**  
- **User Authentication:** Implemented Register/Login functionality.  
- **Product Listing:** Dynamically fetches and displays products from the API.  
- **Contact Form:** Integrated a form to send messages via API.  
- Applied appropriate state management and handled API loading/error states gracefully.  

### **3. Considerations & Omissions**  
- **Protected Routes:** Not implemented since the project only includes authentication and a landing page. In an eCommerce site, the landing page is typically accessible without authentication, and users are only required to log in when performing restricted actions like checkout. Hence, middleware was not set up.  
- **Testing:** Minimal unit tests were written, as there are limited reusable components aside from the landing page.  

### **How to Test**  
- Navigate to `/login` or `/signUp` to access authentication pages.  
- Interact with the landing page to verify responsiveness and API integrations.  

### **Next Steps & Enhancements**  
- Implement middleware for protected routes when additional authenticated features are added.  
- Improve test coverage as more reusable components are introduced.  

