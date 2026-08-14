[← Back to Main Portfolio](../../)

# Software Design and Engineering

**Artifact:** `trip-data.service.ts`

This artifact demonstrates software design and engineering improvements made to the Travlr Getaways application.

### Artifact Description
The artifact selected for this enhancement is the `TripDataService` (`trip-data.service.ts`) from my CS 465 Full Stack Development final project, Travlr Getaways. The project was originally developed as a full-stack travel booking application using the MEAN stack (MongoDB, Express, Angular, and Node.js). This file serves as the communication layer between the Angular client and the Express REST API, managing HTTP requests for trip retrieval, trip creation, trip updates, user login, and user registration.

I selected this artifact because it demonstrates my ability to design software that separates presentation from data access while centralizing communication with the backend. This design improves maintainability and supports future enhancements.

### Justification for Inclusion
I selected this artifact for my ePortfolio because it demonstrates important software engineering principles, including modular design, code reuse, maintainability, and secure communication with a RESTful API.

For this enhancement, I improved the original implementation by adding client-side validation before trip data is submitted, implementing centralized HTTP error handling with Angular's `catchError` operator, converting the API URL into a private read-only constant, improving code organization through helper methods, and adding meaningful comments to improve readability and maintainability. These changes reduce duplicated code, simplify debugging, and make the application more robust while preserving its original functionality.

After completing the enhancements, I tested the application by verifying user authentication, trip retrieval, trip creation, and trip updates. I also created a new user account through the registration endpoint to confirm that authentication continued to function correctly after the modifications.

### Course Outcomes
This enhancement demonstrates substantial progress toward several Computer Science program outcomes identified during Module One.

Most directly, it supports the outcome of using well-founded techniques, skills, and tools to implement computing solutions that accomplish industry-specific goals. The addition of centralized error handling, client-side validation, and improved software organization reflects professional software engineering practices.

The enhancement also supports the security outcome by validating user input before requests are sent to the server and by handling errors consistently. In addition, the improved organization and documentation strengthen the communication outcome by making the code easier to understand and maintain.

My overall outcome-coverage plan remains unchanged from Module One, with future milestones focusing on algorithm optimization and database enhancements.

### Reflection
Enhancing this artifact allowed me to revisit software that I created earlier in the Computer Science program and evaluate it using professional software engineering practices. Although the original implementation worked correctly, I identified opportunities to improve maintainability, validation, and error handling without changing the application's functionality.

One of the most valuable lessons I learned was that high-quality software is not defined only by working features. Organizing code, reducing duplication, validating input, and handling errors consistently improve long-term maintainability. The biggest challenge was ensuring that the enhancements did not introduce regressions. After implementing the changes, I thoroughly tested authentication and trip management to verify that the application continued to function correctly.

Overall, this milestone strengthened my understanding of professional software engineering practices and increased my confidence in enhancing and maintaining existing software rather than simply developing new features.

---

## Code Access

*  **Original Code:** [`original/trip-data.service.ts`](./original/trip-data.service.ts)
*  **Enhanced Code:** [`enhanced/trip-data.service.ts`](./enhanced/trip-data.service.ts)

---

[← Back to Main Portfolio](../../)
