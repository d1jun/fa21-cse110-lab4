1. 3 will be outputted since “i” is declared as a var. “i”’s scope exceeds that of the for-loop.
2. 150 will be outputted since discountedPrice is declared as a var.
3. 150 will be outputted since finalPrice is declared as a var. It is not bound by the for-loop.
4. [50,100,150]. “discounted” is declared as a var. The loop goes through all the prices, decreases the price by 50%, and pushes the price into “discounted”.

5. Error: “i” is not defined since it is declared with let in the for loop.
6. Error: “discountedPrices” is not defined outside the loop since it is declared with let.
7. 150 is outputted. “finalPrice” is declared with let outside of the for-loop. This allows the code inside the loop to update the variable.
8. [50, 100, 150]. “discounted” and “finaPrice” are available everywhere in the function. “discountedPrice” is only used within the loop, so an error does not occur. Also within the for-loop, the final price is pushed onto “discounted”.

9. Error: “i” is not defined since it is declared with let in the for loop.
10. 3 will be outputted. “length” is not altered throughout the function. “discountedPrices” does not cause an error because it is not reassigned, but it is recreated for every iteration of the loop.
11. [50, 100, 150]. Although “discounted” is a const, it is never reassigned throughout the function.

12A. student.name

12B. student["Grad Year"]

12C. student.greeting();

12D. student["Favorite Teacher"].name

12E. student.courseLoad[0]

13A. integer 2 is converted to a string 

13B. 1. 3 is converted to integer

13C. 3. null maps to 0

13D. 3null. null becomes a string

13E. 4. true maps to 1

13F. 0. false maps to 0 and null maps to 0

13G. 3undefined. undefined becomes a string

13H. NaN. '3' is converted to 3 and undefined maps to NaN

14A. true. '2' becomes the number 2

14B. false. this is a string comparison so it compares each letter in lexicographical order

14C. true. '2' is converted to 2.

14D. false. this is a comparison of a string and a number.

14E. false. true becomes 1

14F. true. Boolean(2) is true. This is not a conversion.

15. "===" is the equality operator that does not convert the types of its arguments. "==" is the equality operator that may convert the types of its arguments. This is exemplified in 14C and 14D.


17 . [2, 4, 6]. modifyArray has doSomething as one of its parameters, allowing doSomething to be called within modifyArray with its own parameter. We go through the for loop. The callback function doubles the array value and then pushes onto newArr. 

19. 

1

4

3


2
