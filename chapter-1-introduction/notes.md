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
- Refer to page 8 because I'd just be copying it

