# Medi.co

<img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/medical-logo.jpg" width=20%>



[![Standard Apache License](https://img.shields.io/apm/l/atomic-design-ui.svg?)]() 
[![PR's Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](https://github.com/vrushti-mody/Medi.co/pulls)
[![Issues](https://img.shields.io/github/issues-raw/vrushti-mody/Medi.co)](https://github.com/vrushti-mody/Medi.co/issues) 

Track: Healthcare

Problem statement: Medi.co aims to make the appointment booking process seamless and create a community to educate users with the help of health tips, first aid advice, fitness tips and much more

Team Name: WandaVision

Team Members: Vrushti Mody, Rohan Poojari, Palash Anjania

Team Code: d2ae01e30c

## Inspiration 
COVID-19 virus has wreaked havoc around the world, infecting millions and raising fears of uncertainty. As a consequence, Governments have imposed stringent social distancing and lockdown measures to control the spread and contain the pandemic. This has left, those with medical priorities for routine check-ups and other chronic diseases in a quandary. Amidst rising fears of disease infectivity from contaminated surfaces, people have turned their dependency on technology. Technology powered virtual consultation has stepped up into the spotlight aiding healthcare provider organizations, doctors, and patients with digital consultations aired at the safe environs of a hospital/clinic straight to a patient’s home.  

## How is this tool helpful?

- An online consultation with doctors is a major trend that has evolved during the COVID outbreak, after masks, sanitizers and social distancing have caught up with regular routine.
- While doctors are not available 24*7, home remedies can be used which the app provides
- Admist the COVID-19 pandemic it is necessary to build a renewed sense of community which is provided by the application.

## Key Features

- Makes the appointment booking process seamless
- Provides online consultation
- Creating a sense of community
- A bot that helps with basic health and fitness questions

## Technology Stack
![Languages](https://img.shields.io/github/languages/count/vrushti-mody/Productive.ly)
- Javascript
- Node.js
- MongoDB
- Socket.io
- GoogleDialog Flow
- Git/Github

## Getting Started

### File Structure

| Directory                                                                                         | Content                      |
| --------------------------------------------------------------------------------------------------| ---------------------------- |
| [models](https://github.com/vrushti-mody/Medi.co/tree/master/models) | contains database models |
| [routes](https://github.com/vrushti-mody/Medi.co/tree/master/routes)   | contains routing apis         |
| [views](https://github.com/vrushti-mody/Medi.co/tree/master/views)         | contains frontend components |

### Setup

- Fork and clone the repo

```
$ git clone https://github.com/vrushti-mody/Medi.co.git
$ cd Medi.co
```

- Install dependencies

```
$ npm install
```

- Add the .env file
```
MONGODB_URI = <YOUR MONGO URI>
GOOGLE_CLIENT_ID = <YOUR GOOGLE CLIENT ID>
GOOGLE_CLIENT_SECRET = <YOUR GOOGLE CLIENT SECRET>
CALLBACK_URL = <YOUR GOOGLE CALLBACK URL>

```

- Run the server 

```
$ npm start
```

## Challenges we ran into

- Implementing the chatroom with socket.io
- Integrating Zoom with the project since it requires a paid account. We gave doctors the option to enter the link of the meet link instead.
- Hosting the project was difficult, since two of the three members were relatively new to deploymnet
- We had problems with the google calander API and hence we had to create a manual POC for now

## What we learned

- We learned how to integrate mongodb and use its mongoose functionality for saving to the database.
- We learned the ins and outs of using express.js and how the MVC works in express.
- Using socket.io to create a real-time messaging feature was also something that we learned.
- Learnt how to create an AI bot!
- Project management with Github

## Accomplishments that we're proud of

- We had a working application by the specified time frame.
- The UI of the application looks amazing.
- Good team communication
- Maintained best-practices for our Github repository and code

## What's next for Medi.co

- Implementing the Google Calander notification system
- Adding payment support in the application
- Improving the accuracy of the bot


## Contribution Guidelines
[![PR's Welcome](https://img.shields.io/github/issues-pr-raw/vrushti-mody/Medi.co)]()
[![Contributors](https://img.shields.io/github/contributors/vrushti-mody/Medi.co)]()

If you have suggestions for how Medi.co could be improved, or want to report a bug, open an issue! Contributions of all kinds are welcomed!

For more, check out the [Contributing Guide](./CONTRIBUTING.md).

## License

[Apache](LICENSE) © 2020 WandaVision

Made with 💕 by [Vrushti Mody](https://github.com/vrushti-mody) and [Rohan Poojari](https://github.com/RoRogers7) for the HackData 5.0 Hackathon!

