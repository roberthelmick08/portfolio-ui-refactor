import { Component, OnInit } from '@angular/core';
import { Project } from '../../services/model/Project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['/src/styles.scss']
})
export class HomeComponent implements OnInit {

  projects: Array<Project> = [
    { name: 'Toyota Real-Time Inventory UI Refactor', date: 'March 2018', 
    description: "Total design overhaul of Toyota's Real-Time Inventory page UI. Optimized Critical Rendering Path for smoother site performance which resulted in a 93% performance improvement on page load. It is currently utilized by approximately 1500 dealerships in the USA.", media: [], techsUsed: ['Node.js', 'Angular 4', 'HTML/CSS', 'Typescript']},
    { name: 'Data Refresh', date: 'January 2018', 
    description: "Automated data refresh AWS Lambda that parses results from SQL query to CSV, then uploads to designated FTP server and AWS S3 bucket. Deployed using Serverless to refresh data at user-specified intervals.", media: [], githubHref: 'https://github.com/roberthelmick08/CSV-data-refresh', techsUsed: ['Node.js', 'AWS S3', 'AWS Lambda', 'Serverless'] },
    { name: 'Indiana Public Range Finder', date: 'August 2017', 
    description: "This single-page web app displays all publicly-owned shooting ranges in Indiana, integrating the Google Maps and Foursquare APIs. The interactive map displays user check-in information from Foursquare.", media: [], githubHref: 'https://github.com/roberthelmick08/Indiana-Public-Range-Finder---Maps-API', liveHref: 'https://roberthelmick08.github.io/maps-api-project/', techsUsed: ['Javascript', 'HTML/CSS', 'Knockout.js'] },
    { name: 'DigIt', date: 'March 2017', 
    description: "Final group project at Skill Distillery. This web application is designed for gardeners to keep track of each plant in their garden from the seed phase to the harvest phase. Users search DigIt's crowdsourced SQL database of plants to add plants to their personal Garden, which provides them with detailed information on optimal growth conditions for each plant, as well as the core of DigIt's functionality: the Reminders feature. The reminders algorithm utilizes the user's local climate data, and the specific plant's growth conditions and maturity stage to provide users with custom reminders for exactly when to plant each seed, water, and otherwise care for each plant.", media: [], githubHref: 'https://github.com/roberthelmick08/DigIt', liveHref: 'http://roberthelmick.com:8080/DigIt/', techsUsed: ['Java', 'Javascript', 'HTML/CSS', 'AngularJS', 'MySQL'] },
    { name: 'BingeSync', date: 'February 2017', 
    description: "Week 10 group project at Skill Distillery to develop a web app that allows for users to keep track of their favorite TV shows. By connecting with their friends, users are able to see which episodes of a TV show members in their group have watched. My project involvement included setup of SQL databases, object relational mapping, and implementing front-end functionality in the JSPs. ", media: [], githubHref: 'https://github.com/roberthelmick08/Bingr', liveHref: 'http://roberthelmick.com:8080/BingeSync/', techsUsed: ['Java', 'Javascript', 'HTML/CSS', 'MySQL'] }
  ];

  jobs: Array<any> = [
    { name: "Infosys Ltd", title: "Associate Software Engineer", startDate: "July 2017", endDate: "Present", location: "Plano, TX", 
    description: ["Part of development team for Toyota's Real-Time Inventory application.", "Enhancing the quality of inventory application used by dealerships based on user-escalated defects.", "Refactored UI/UX in its entirety and enhanced loading performance by 93%.", "Technology stack: Node.js, Angular 4, MS SQL, AWS S3 & Lambda."]},
    
    { name: "Amplexor International", title: "Project Coordinator (Contract)", startDate: "March 2016", endDate: "September 2016", location: "Broomfield, CO", 
    description: ["Audit assessment on pharmaceutical documentation for global markets in 38 languages.", "Liaising between project management, technical, translation and executive teams."]},
      
    { name: "SDL International", title: "Project Manager", startDate: "November 2012", endDate: "February 2016", location: "Superior, CO", 
    description: ["Led localization project management team for a major global IT client, including a remote team out of Mumbai, India.", "Managed multi-million dollar financial accounts.", "Scrum leader for daily status meetings."]},
  ]

  date = new Date();

  activeProject: Project = this.projects[0];

  constructor() { }

  ngOnInit() {

  }

  setActive(project) {
    this.activeProject = project;
  }

}
