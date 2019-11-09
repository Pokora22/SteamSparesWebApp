# BSc (Hons.) Level 8 - Assignment 1 - Single Page app.

Name: Przemyslaw Pokorski

## Overview.

This app allows users to create a personalized list of spare game keys acquired fom different sources, insert new games and track their state/details

USER FEATURES:

- Registration of new users and login facilities
- New list of games is created for each user
- New games can be added through a form in the app
- Existing games can have their details edited (name, store link, cost)
- Games in the list can have their status toggled betwen used and unused
- Game list can be filtered by any of their details and their used state
- The app tracks and displays the amount of games on the list (total and both used states)

## Setup.

- Node.js required (https://nodejs.org/en/download/)
- Download repo and run a terminal window inside the top directory
- Run npm install ; npm start to run a local server and view the app
- Additionally, demo of the app can be viewed at https://steamspares.firebaseapp.com/

## Data Model Design.

![][model]

Sample JSON data:
~~~
{
  "users" : {
    "TbFpiwKmIVNbqCt5R5KtSIDabFs2" : {
      "games" : {
        "0a7f2135-7c34-47ba-9ba1-3758ea7354d8" : {
          "code" : "m",
          "cost" : "2",
          "date" : "8.11.2019",
          "id" : "0a7f2135-7c34-47ba-9ba1-3758ea7354d8",
          "isPopoverOpen" : false,
          "link" : "power",
          "name" : "Test",
          "note" : "owke",
          "previousDetails" : {
            "code" : "m",
            "cost" : "233",
            "date" : "8.11.2019",
            "id" : "0a7f2135-7c34-47ba-9ba1-3758ea7354d8",
            "isPopoverOpen" : false,
            "link" : "power",
            "name" : "Test",
            "note" : "owke",
            "used" : false
          },
          "status" : "edit",
          "used" : false
        },
        "14382c8d-296f-46a8-bdb1-aff6f620aff1" : {
          "code" : "",
          "cost" : 0,
          "date" : "9.11.2019",
          "id" : "14382c8d-296f-46a8-bdb1-aff6f620aff1",
          "link" : "",
          "name" : "Test3",
          "note" : "",
          "used" : false
        },
        "32562c4c-d2ac-43a4-91ca-98019c95902f" : {
          "code" : "",
          "cost" : "5",
          "date" : "9.11.2019",
          "id" : "32562c4c-d2ac-43a4-91ca-98019c95902f",
          "isPopoverOpen" : false,
          "link" : "",
          "name" : "Test2",
          "note" : "",
          "used" : true
        }
      }
    },
    "YvtlpNIsdBQZ6t7rPU7tkvDryKY2" : {
      "games" : {
        "3f5c3761-7ebf-4048-9c94-718df90f3ad3" : {
          "code" : "",
          "cost" : 0,
          "date" : "8.11.2019",
          "id" : "3f5c3761-7ebf-4048-9c94-718df90f3ad3",
          "link" : "",
          "name" : "ACASDW",
          "note" : "",
          "used" : false
        }
      }
    },
    "uFB9HBVULUQQs9cq8cRdYuCJBf83" : {
      "games" : {
        "ea68794e-f68e-42f9-ad0e-1039b98cbdc2" : {
          "code" : "",
          "cost" : 0,
          "date" : "8.11.2019",
          "id" : "ea68794e-f68e-42f9-ad0e-1039b98cbdc2",
          "link" : "",
          "name" : "ADaDA",
          "note" : "",
          "used" : false
        }
      }
    }
  }
}
~~~
## UI Design.
![][complete]
>>Complete web app

![][login]

![][signup]

>> Log in and sign up pages allow users to respectively log in with existing e-mail/password accounts or create a new one.

![][main]

>> Main part is a list of cards for each game in the users list. The list can be filtered by any of the details that game includes, it's used state and can also be sorted by all the values in ascending and descending order. 
    The header shows numbers for unused, used games and their total.
    In this view games can be deleted or selected for editing. 

![][edit]

>> Edit view of a card includes fields to edit all of the details on a specific game except the date which is added automatically on creation.

![][form]
>> Sidebar consists of a form to add new games to the list

## Routing.

- /login (public)- log in form to allow users entry to the app
- /signup (public)- log in form to allow users entry to the app
- / (private) - Main app page. Requires authorization.
- /about - (private) Unfinished stub page intended to store info/stats on users public data and signed in users private statistics (Some day hopefuly).

## Storybook.

![][stories]


## Backend (Optional).

App uses Firebase realtime database to store and retrieve users and their game lists. Users are only authorized read and write access to their own database keys.

DB Rules used:
~~~
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
~~~
## Authentication (Optional).

Access to the web app requires registration by e-mail and password. Firebase Authentication is used to authenticate new users registration and log in attempts.

## Independent learning.

React context and higher order components were used to create context for firebase to provide user authentication.

[model]: ./img/DataModel.png
[complete]: ./img/complete.png
[main]: ./img/main.png
[edit]: ./img/edit.png
[login]: ./img/login.png
[signup]: ./img/signup.png
[form]: ./img/form.png
[stories]: ./img/stories.png
