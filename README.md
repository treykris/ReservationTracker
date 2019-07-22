[![Build Status](https://travis-ci.com/treykris/ReservationTracker.svg?branch=master)](https://travis-ci.com/treykris/ReservationTracker)

# ReservationTracker

## Table of Contents

- [Introduction](#introduction)
- [Installation & Usage](#installation--usage)
  - [Required](#required)
  - [Getting Started](#getting-started)
    - [Notice](#notice)
- [Having Trouble Setting Up Twilio or Slack](#having-trouble-setting-up-twilio-or-slack)

## Introduction

ReservationTracker is an application that lets you make reservations at a restaurant through sending a text or through a Slack command.

## Installation & Usage

### Required
- [NodeJS](https://reactjs.org/)
- [Twilio Account](https://www.twilio.com/)
- [Slack Account](https://api.slack.com/)
- [ngrok](https://ngrok.com/)
- [mLab](https://docs.mlab.com/)

**You must have Node.js installed to run this application.**

### Getting Started

Clone, fork, or [download](https://github.com/treykris/ReservationTracker/archive/master.zip) the repository.

This repo has the server and the client split into their respective folders: `/server` and `/client`.
Be sure to run `npm install` in both of the folders.

To clone the repository and get started enter the following commands into your command line:

```
git clone https://github.com/treykris/ReservationTracker.git
cd ReservationTracker
cd server
npm install
cd ../client
npm install
```


To start your server, in the `/server` directory:
```
npm run start
``` 
or 
```
npm run start:nodemon
```

To start your client, in your `/client` directory run:
```
npm run start
```
Visit `localhost:3000`


In another prompt window run:
```
ngrok http 3001
```
This will handle the requests to Slack and Twilio end points on your server locally.

#### Notice
Client requests are being proxied to the server that is listening on port `3001`, if you'd like to change the server port number, be sure to change the port number in the `start` property found in `/server/package.json` and the `proxy` property in the `client/package.json` to your new port number.




## Having Trouble Setting Up Twilio or Slack?
Follow [Twilio Quick Start Node](https://www.twilio.com/docs/sms/quickstart/node) to help get started with getting a Twilio account and setting it up with Node.

This application uses Slash Commands from the Slack API. See [Slash Commands - Slack](https://api.slack.com/slash-commands) to help get you started.
