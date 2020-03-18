# Yukihira

Live Site hosted on AWS: [Yikihira](http://resturant-yukihira.s3-website-us-east-1.amazonaws.com/home)

![](/docs/screenshots/Yuki01.png)

Yukihira is a single-pageweb application for an imaginary restaurant named Yukihira built with Angular.

1. [Implementation](#implementation)
2. [Features](#features)
   - [Authentication](#authentication)
   - [Rxjs Form](#rxjs-form)
   - [Menu](#menu)
   - [Dish Detail and Commenting](#dish-detail-and-commenting)
   - [Responsive Design](#responsive-design)
3. [Testing](#testing)
   - [Running Unit Tests](#running-unit-tests)
   - [Running End-To-End Tests](#running-end-to-end-tests)
4. [Future Implementation](#future-Implementation)

# Implementation

Yukihira's Core Packages:

- angular Http
- angular flex-layout
- angular animations
- angular material
- angular router
- hammerjs
- font-awsome
- RxJS
- Protractor
- Karma
- Jasmine

# Features

## Authentication

Login Modal/Form created using angular

![](/docs/screenshots/Yuki05.png)

## Rxjs Form

A reactive 'contact-us' form implemented using RxJS

![](/docs/screenshots/Yuki04.png)

## Menu

Menu page complete with 24 dishes
![](/docs/screenshots/Yuki02.png)

## Dish Detail and Commenting

Each Dish on the menu page can individually clicked to view detials abput the dish. Visitors can leave a review with a rating for each dish.

![](/docs/screenshots/Yuki03.png)

## Responsive Design

Dishes are fetched from a server and thus loading indicators along with other animations/directives are utilized to let the users know  
![](/docs/screenshots/Yuki07.png)

# Testing

## Running Unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running End-To-End Tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

# Future Implementation

1. Add a backend server
   - add user regiatration
   - add MongoDB database
2. Better Dish Infomation
   - add nutrition info
   - better catagorize dishes such as vegetarian/meat
   - add more dishes
3. Add ordering functionality
