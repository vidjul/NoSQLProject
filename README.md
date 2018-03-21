# NoSQLProject

<p align="center">
    <img width="200" height="80"
     title="Size Limit logo" src="./reuters.png"/>
</p>

This project is about creating an application on the [Reuters NoSQL database](reuters_elastic.json). We have chosen to create a web application with Node.js and React.js and to use Elasticsearch. 

This application has:
* Connection features;
* Dataset Importation;
* Minimum 3 different interactions in order to show the result of queries (preformatted queries)
* A form to try queries (maybe with params) on the dataset

## Summary
***

* [Usage](#usage)
* [Search Page](#search-page)
* [Analysis Page](#analysis-page)

## Usage 
***

First, clone the project:
```sh
$ git clone https://github.com/vidjul/NoSQLProject
``` 

Install packages into client and server folders:
```sh
cd client
$ npm install
``` 

```sh
cd server
$ npm install
``` 

Start the app:
```sh
cd server
$ node index.js
``` 

```sh
cd client
$ npm start
``` 

The app is now starting.

## Search page
***

Reuters NoSQL Database has the following parameters:
* Date
* Title 
* Body
* Places 
* Topics
* People

## Analysis page
***

This page contains graphs depending on the search that you have done. 
