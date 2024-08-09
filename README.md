ProgramMe Platform - README

----

- Table of Contents
- Introduction
- Features
- Installation
- Configuration
- Usage
- API Documentation
- Technologies Used
- Challenges Faced
- Future Updates
- License
- Credits

----

Introduction


**ProgramMe Platform** is a comprehensive platform designed for programmers to sell their services, connect with customers, and showcase their skills. The platform allows programmers to create profiles, post services, and engage with potential clients. Customers can browse through programmer profiles, view posts, and reach out directly to hire services.

This project was developed to create a dedicated space for programmers to thrive as freelancers, with a focus on scalability, flexibility, and a seamless user experience for both programmers and customers.

---

**Features**
- **User Registration** and Authentication: Secure registration and login for both programmers and customers using JWT tokens.

- **Role-Based Profiles**: Separate profiles for programmers and customers, with custom fields tailored to each role.

- **Service Posting**: Programmers can create posts to showcase their services, skills, and experience.

- **Customer Interaction**: Customers can view programmer profiles, browse posts, and contact programmers directly.

- **Responsive Design**: A mobile-friendly design ensures a seamless experience across devices.

- **Security**: Role-based access control, secure password handling, and JWT authentication for API endpoints.

----

**Installation**

To install and run the ProgramMe Platform locally, follow these steps:

**1. Clone the Repository:**

```
git clone https://github.com/IsmailAbousalem/ProgramMeClient.git
cd programme
```
**2. Install Dependencies:**

```
npm install
```

**3. Configure Environment Variables:**

Set up your **.env** file with the necessary environment variables (e.g., database connection strings, JWT secret key).

**4. Run the Application:**

```
npm run dev
```
---

**Usage**

**Running the Application**

Once the application is set up and running, you can access it at http://localhost:3000 or http://localhost:5176  by default.

- Programmers can log in, create profiles, post services, and interact with customers.
- Customers can browse programmer profiles, view service posts, and contact programmers for services.

---

**Technologies Used**
- **Frontend**: React, HTML, CSS, JavaScript
- **Backend**: Spring Boot, Java
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Tokens) & Spring Security
- **Deployment**: Netlify (and backend deployment service coming soon)

---

**Challenges Faced**
- **Managing User Roles**: Implementing separate user roles for programmers and customers required careful handling of data, permissions, and profile management.

- **Security Considerations**: Ensuring secure authentication and authorization for both user roles was critical.

- **Handling Data**: Implementing robust error handling and validation to manage data updates and profile modifications without compromising security.

---

**Future Updates**

- Image Uploading

- Payment Gateway API

- Chat section so Customers can message Programmers for their services

- Search feature

- Better skills section

- Adding tags to posts for better search results

---

**Credits**

- **Project Developer**: Ismail Abousalem

- **Contributors**: Me

- **Presentation**: [My Presentation](https://docs.google.com/presentation/d/1SsvHARBj_2O6pduVYHRfDo9hZpGw-llpNYfBrnJC-tI/edit?usp=sharing)
- **Resources Used**:
  - **React Documentation**: [React](https://react.dev/)
  
  - **Spring Boot Documentation**: [Spring Boot](https://docs.spring.io/spring-boot/index.html)

  - **JWT Library**: [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)

---

Thank you for using ProgramMe Platform! We hope it serves as a valuable tool for both programmers and customers. If you have any questions, feedback, or contributions, feel free to reach out via our GitHub Repository or my email: ia.abousalem@gmail.com.