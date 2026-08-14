[← Back to Main Portfolio](../../index.html)

# Databases

Artifact: travlr.js

This artifact demonstrates database improvements to the Travlr Getaways application, including validation, uniqueness constraints, and indexing.

The artifact selected for this enhancement is travlr.js, the Mongoose schema used by the Travlr Getaways application to define the structure of trip documents stored in MongoDB. This artifact was originally created during the CS 465 Full Stack Development course as part of building a MEAN stack travel application. The schema defines the fields, data types, and requirements for each trip record stored in the database.
I selected this artifact because it demonstrates an important aspect of database design that extends beyond simply storing data. A well-designed schema is responsible for maintaining data integrity, enforcing validation rules, improving query performance, and supporting application security. For this enhancement, I expanded the original schema by adding stronger validation requirements, including minimum and maximum field lengths, required field validation, trimming of string values, and a unique constraint on trip codes. I also added a compound index on the code and perPerson fields to support more efficient queries involving those properties. These enhancements demonstrate my ability to design database structures that improve reliability while supporting efficient data retrieval.
This enhancement successfully met the course outcomes that I identified in Module One. The revised schema demonstrates the ability to implement computing solutions using modern database management techniques while reinforcing a security mindset through stronger validation and integrity constraints. By moving validation rules into the database model, the application becomes less dependent on client-side validation and better protected against invalid data. I also tested the enhanced application to confirm that the existing four trips continued to load correctly and that the GET /api/trips endpoint remained functional. Additional testing confirmed that invalid records were rejected and that the unique trip-code constraint prevented duplicate codes from being inserted. I did not need to make significant changes to my original outcome-coverage plan because the completed enhancement closely followed the proposal developed during the code review.
Working on this enhancement reinforced the importance of designing databases that protect the application rather than simply storing information. I learned that schema validation, indexing, and uniqueness constraints work together to improve data integrity, performance, and security. One challenge was balancing stronger validation with compatibility, since the existing application expects certain fields, such as perPerson, to remain strings rather than numeric values. Rather than redesigning the entire application, I implemented validation that preserved compatibility while improving data quality. Testing the application after the changes also showed me the importance of verifying that database-level improvements do not interfere with existing functionality. This experience strengthened my understanding of database design principles and demonstrated how thoughtful schema design contributes to building secure, maintainable, and efficient software systems.

## Code Access

* 📄 **Original Database Schema:** [`original/travlr.js`](./original/travlr.js)
* 🚀 **Enhanced Database Schema:** [`enhanced/travlr.js`](./enhanced/travlr.js)

[← Back to Main Portfolio](../../index.html)
