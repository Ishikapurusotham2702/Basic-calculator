# Basic-calculator
**1. Introduction**
This project is a web application for a basic calculator that was created with HTML, CSS, and JavaScript. The project's objective is to develop an easy-to-use calculator that can carry out fundamental mathematical operations in addition to a few other functions like memory storage, percentage calculations, and square root calculation.


**2. Project Features**

The calculator includes the following core functionalities:
Basic Arithmetic Operations
Addition (+)
Subtraction (-)
Multiplication (*)
Division (/)
Additional Functionalities
Clear Display (C)
Backspace/Delete Last Digit
Decimal Support (.)
Percentage Calculation (%)
Square Root Calculation (√)
Memory Functions:
M+: Add current value to memory
M-: Subtract current value from memory
MR: Recall value from memory
MC: Clear memory

**3. Technologies Used**
HTML (HyperText Markup Language)
Used to structure the calculator’s interface
<input>, <button>, and layout divs for display and keys
CSS (Cascading Style Sheets)
Used for styling and layout
Responsive and clean design using grid layout for buttons
Color differentiation for operation buttons, special buttons, and memory functions
JavaScript
Used for implementing all the logic and functionality
Functions include:
appendToDisplay()
clearDisplay()
deleteLast()
calculateResult()
Memory operations (memoryAdd, memorySubtract, etc.)
squareRoot() and calculatePercentage()

**4. User Interface Design**
The calculator is styled with a modern and clean layout.
Buttons are color-coded for better user experience.
Responsive design elements make it functional on different screen sizes.

**5. Working**
The input is displayed in the display area when a user clicks on an operator button or a number. By selecting =, JavaScript's eval() function is used to evaluate the expression. Temporary values can be stored, recalled, and cleared thanks to memory operations. Additional mathematical functions are available through the buttons for the square root and percentage.

**6. Improvements & Future Scope**
Input Validation: Currently uses eval (), which is not secure for user input. This can be replaced with a safer custom parser.
History Feature: Save and display the history of calculations.
Keyboard Support: Allow users to type numbers and operators using the keyboard.
Scientific Functions: Add more functions like sine, cosine, logarithms, etc.
Mobile Responsiveness: Optimize layout for mobile and tablet use.

**7. Conclusion**
The Basic Calculator project serves as an example of how HTML, CSS, and JavaScript can be used practically to create interactive web apps. It provides a straightforward but efficient interface for carrying out both simple and more complex mathematical calculations. This research provides a solid basis for future improvements and the creation of increasingly sophisticated calculators.

