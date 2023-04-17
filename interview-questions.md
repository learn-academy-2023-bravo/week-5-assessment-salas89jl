# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer:
Super allows each child class the ability to inherit attributes from the child class' parent. 

Researched answer: 
Super is a keyword in Ruby used inside of a class definition to call on a method from a parent class to a child class. Super permits the child class to inherit/take on the behavioral properties of its parent class(superclass). Superclasses allow the information to pass to their child(s) classes(subclass). This process is called inheritance, part of the four pillars of OOP, and is defined with the < syntax. 

2. What is a gem?

Your answer:
A gem is a library used to manage databases.

Researched answer: 
Gems are packages of libraries that are used in managing databases. Gems play a crucial role in Ruby applications because gems provide reusable code and functionality such as managing database interactions, incorporating authentication, and functioning with Application Programming Interfaces(API).

RubyGems is the software or package manager that manages gems. RubyGems gives developers an easy way to download, install, update, and manage the dependencies of gems. 

Because gems are modular and encapsulated, it allows developers to modify their functionality to fit the developers' independent needs easily. Gems use specific naming conventions and directory structure. 


3. What is a relational database? Are there other kinds of databases?

Your answer:
It is a type of database that is used to manage and store data in a relationship-based structure.

Researched answer:
Relational database refers to a type of database technology that stores information and organizes data/information using tables columns and rows to establish relationships between the data stored inside the table and/or with other tables

4. What are primary keys? Why are they important?

Your answer:
Primary keys are used in databases to add an id property to each row that contains information. This will allow the rows containing similar or duplicate information to have their own identifying attribute that distinguishes them. 

Researched answer:

The key features of primary keys are:
- It has to be a unique value and cannot be shared with other rows.
- It cannot hold null values
- And every row has to have its primary key value

The concept of primary key plays a crucial role in the efficiency of relational databases. This criticalness is demonstrated in tables containing thousands of rows of information since it allows each row to be distinguishable from the rest of the rows of data.

5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: 
- Create    =   post_request - used to create new resources on servers
- Read      =   get_request - used to retrieve resources from servers
- Update    =   push/patch - used to update resources on servers
- Delete    =   delete - used to delete resources from servers

Researched answer:
HTTP verbs are methods used in the Hypertext Transfer Protocol. These commands allow the user to perform different operations with the URL(Uniform Resource Locator). These commands are used in web services such as Representational State Transfer (REST) applications and Application Programming Interfaces to perform actions. 

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Model validations:
    When storing and retrieving data from a database, validations are used to check if each entry is correct and is in standard with the database's model standards.

2. RESTful routes:
    Stands for Representational State Transfer. REST is the pattern used when structuring different routes from the server to the client. RESTFull route attempts to merge CRUD operations that are used with an object into HTTP requests.


3. ERB:
    Embedded Ruby (ERB) is a type of file structure that gives us the ability to code in HTML. This is a templating language that is based on RUBY.

4. Params:
    Parameters give us the ability to insert more information into the program we are working on by passing a value into the controller. Passing parameters to the controller produces a more dynamic page. 

5. API:
    Application Programming Interfaces are applications that send data in JavaScript Object Notation (JSON) form.  