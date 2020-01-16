# Chapter One: Introduction

## Intro
- Reuse solutions that have worked in the past

## Design Patterns in Smalltalk MVC
- Used to build UI
- Three kinds of objects
  - Model
    - Application object
  - View
    - Presentation
  - Controller
    - Determines reaction to user input
- Decouples to increase reusa and flexibility
  - Subscribe/notify protocol
  - View ensures reflection of state
    - Model data changes -> notify view dependent on that data
    - View communicates with model to get data
    - Model communicates with view to send data
- CompositeViews are like Views but contain nested Views
  - A complex group of buttons built from primitive buttons
- Main relationships
  - Observer
  - Composite
  - Strategy

## Describing Design Patterns
- Template
  - Pattern name and classification
    - Conveys the essence of the pattern
  - Intent  
    - What does the pattern do? What problem does it address?
  - Also known as
  - Motivation
    - Scenario to help understand the abstract description
  - Applicability
    - Situations to apply? How to recognize these situations?
  - Structure
    - Graphical representation based on Object Modeling Technique
  - Participants
    - Classes/objects and their responsibilities
  - Collaborations
    - How to collaborate to carry out responsibilities
  - Consequences
    - How to support objectives? Trade-offs and results?
  - Implementation
    - Pitfalls? Hints? Techniques? Language-specific issues?
  - Sample code
    - Illustration in C++ or Smalltalk
  - Known uses
    - Real system examples
  - Related patterns
    - Important differences? Similar patterns. Other patterns this one uses.

## The Catalog of Design Patterns
- **Refer to page 8 because I'd just be copying it**

## Organizing the Catalog
- Helps learn the patterns
- Classifications
  - **Table 1.1 Design Pattern pace (pg 10)**
  - Purpose
    - What it does
    - Creational
      - Object creation
    - Structural
      - Class/object composition
    - Behavioral
      - Class/object interation and responsibility distribution
  - Scope
    - Application to class or objects 
      - Class
        - Relationships between classes and subclasses
        - Inheritance
        - Static; fixed at compile time
      - Objects
        - Object relationships (duh!)
        - Dynamic; can be changed at runtime
  - Many patterns use inheritance so those that are labeled as "class patterns" are focused on class relationships
  - Most patterns are in the object scope
    - Ex. Creational class patterns defer some part of object creation to subclasses
    - Ex. Creational object patterns defer it to another object
    - Ex. Structural class patterns use inheritance to compose classes
    - Ex. Structural object patterns describe ways to assemble objects
    - Ex. Behavior class patterns use inheritance to describe algorithms and flow of control
    - Ex. Behavior object patterns describe how a group of object cooperate to perform a task that no single object can perform

## How Design Patterns Solve Design Problems
  
### Finding Appropriate Objects
- **Figure 1.1 Design Pattern Relationships (pg 12)**
- Object
  - Packages data and procedures that operate on that data (**methods or operations**)
  - Performs that operation when it receives a **request** or a **message** from the **client**
- Requests
  - Only way to get an object to execute an operation
- Operations/Methods
  - Only way to change object's internal data
    - Due to this, the object's internal state is said to be **encapsulated**
- Encapsulation
  - Cannot be accessed directly and representation is invisible outside of object
- Hardest part about object-oriented design is decomposing a system into objects
  - Many factors that can conflict
    - Encapsulation
    - Granularity
      - How small something can be broken up into
    - Dependency
    - Flexibility
    - Performance
    - Evolution
    - Reusability
    - etc...

### Determining Object Granularity

### Specifying Object Interfaces
- Operations signature
  - Name
  - Parameters
  - Return value
- Set of signatures is called an **interface**
  - Complete set of requests that can be sent to the object
- **Type** denotes a particular interface
  - Type "Window" if it accepts all requests for the operations defined in the interface named "Window"
  - Objects can have many types
  - Objects can share widely different types
  - Interfaces can contain other interfaces as subsets; 
  - Type is a **subtype** if its interface contains the interface of its **supertype**
    - *"Subtype inheriting the interface of its supertype"*
- Objects are known only through interfaces
- Operation performed depends on both the request and receiving object
  - Run-time association of a request to an object and one of its operations is known as **dynamic binding**
    - Ex. Overriding a method in a class
    - No commitment to an implementation until run-time
    - Allows substitution of objects that have identifical interfaces for each other at run-time
      - aka **polymorphism**