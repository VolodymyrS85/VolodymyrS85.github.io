[← Back to Main Portfolio](../../index.html)

# Algorithms and Data Structures

Artifact: trips.js

This artifact demonstrates algorithmic improvements to the Travlr Getaways application, including filtering, sorting, and pagination.

The artifact selected for this enhancement is the trips.js controller from the Travlr Getaways full-stack web application that I originally developed in CS 465: Full Stack Development. This file contains the backend REST API controller responsible for retrieving, adding, and updating trip information stored in a MongoDB database. I selected this artifact because it contains the application's primary data-processing logic, making it an appropriate choice for demonstrating algorithmic thinking and data structure improvements.
I included this artifact in my ePortfolio because it demonstrates my ability to design and improve algorithms that efficiently process data while maintaining readable and maintainable code. The original implementation retrieved all trip records or a single trip by its code but offered no additional processing capabilities. To enhance the artifact, I redesigned the trip retrieval algorithm to support multiple operations within a single request. The updated implementation allows users to filter trips by destination and maximum price, sort results by price, name, or trip length, and paginate the results returned to the client. I also created reusable helper functions to convert formatted price and trip length values into numeric values before comparisons, improving the modularity and readability of the code. In addition, I implemented structured error handling using a try/catch block to improve reliability and prevent unexpected application failures.
This enhancement met the course outcomes I identified in Module One, particularly the outcome focused on designing and evaluating computing solutions using algorithmic principles while managing design trade-offs. The filtering, sorting, and pagination logic demonstrates how multiple algorithms can be combined to improve application performance and usability while keeping the implementation organized and maintainable. The modular helper functions also support software engineering best practices by reducing code duplication and making future enhancements easier to implement. At this time, I do not have any significant updates to my outcome coverage plan. The remaining course outcomes will continue to be demonstrated through the database enhancement and the completion of my final ePortfolio.
Enhancing this artifact strengthened my understanding of how backend algorithms directly influence application performance and user experience. Rather than simply retrieving records from the database, I learned how to organize data processing into sequential operations that improve the usefulness of the returned results. One challenge was that the application stores price values as formatted strings instead of numeric values, requiring additional logic to perform accurate comparisons and sorting. I addressed this by creating helper functions that convert formatted strings into numeric values before processing. Testing each enhancement with Postman also reinforced the importance of validating functionality after every modification. Overall, this enhancement improved both the efficiency of the application's data-processing logic and my confidence in designing modular, maintainable algorithms for real-world software applications.

## Code Access

*  **Original Algorithm Implementation:** [`original/trips.js`](./original/trips.js)
*  **Enhanced Algorithm Implementation:** [`enhanced/trips.js`](./enhanced/trips.js)

[← Back to Main Portfolio](../../index.html)
