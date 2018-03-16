import { Component, OnInit } from '@angular/core';
import { Project } from '../../services/model/Project';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['/src/styles.scss']
})
export class HomeComponent implements OnInit {

  projects: Array<Project> = [
    {
      name: 'Toyota Real Time Inventory UI Refactor', date: 'March, 2018', description: "Vestibulum bibendum viverra odio, in faucibus massa vulputate eget. In non magna ipsum. Praesent gravida finibus euismod. Praesent consectetur at nunc et sodales. Vestibulum in mauris nec quam condimentum viverra vel ut nisl. Donec scelerisque   elit sit amet porta posuere. Donec velit diam, vulputate quis finibus quis, commodo vitae augue. In suscipit, lorem accumsan porta cursus, nisi augue maximus tellus, tempor vehicula eros nisl id urna. Vivamus tellus neque, sollicitudin", media: [], githubHref: '', liveHref: '', techsUsed: ['Node.js', 'Angular 4', 'HTML/CSS', 'Typescript']},
    { name: 'Data Refresh', date: 'January, 2018', description: "Automated data refresh that parses results from SQL query to CSV, then uploads to FTP server and AWS S3 bucket. Deployed using Serverless to refresh data at user-specified intervals.", media: [], githubHref: 'https://github.com/roberthelmick08/CSV-data-refresh', techsUsed: ['Node.js', 'AWS S3', 'AWS Lambda', 'Serverless'] },
    { name: 'Indiana Public Range Finder', date: 'August, 2017', description: "This single-page web app displays all publicly-owned shooting ranges in Indiana, integrating the Google Maps and Foursquare APIs. The interactive map displays user check-in information from Foursquare.", media: [], githubHref: 'https://github.com/roberthelmick08/Indiana-Public-Range-Finder---Maps-API', liveHref: 'https://roberthelmick08.github.io/maps-api-project/', techsUsed: ['Javascript', 'HTML/CSS', 'Knockout.js'] },
    { name: 'DigIt', date: 'March, 2017', description: "Final group project at Skill Distillery. This web application is designed for gardeners to keep track of each plant in their garden from the seed phase to the harvest phase. Users search DigIt's crowdsourced SQL database of plants to add plants to their personal Garden, which provides them with detailed information on optimal growth conditions for each plant, as well as the core of DigIt's functionality: the Reminders feature. The reminders algorithm utilizes the user's local climate data, and the specific plant's growth conditions and maturity stage to provide users with reminders for exactly when to plant each seed, water, and otherwise care for each plant. My project involvement included: design and build of relational SQL database, conversion of CSV to JSON, object relational mapping, CSS styling, implementation of keyword search, as well as “water” and “harvest” reminder functionality.", media: [], githubHref: 'https://github.com/roberthelmick08/DigIt', liveHref: 'http://roberthelmick.com:8080/DigIt/', techsUsed: ['Java', 'Javascript', 'HTML/CSS', 'AngularJS', 'MySQL'] },
    { name: 'BingeSync', date: 'February, 2017', description: "Week 10 group project at Skill Distillery to develop a web app that allows for users to keep track of their favorite TV shows. By connecting with their friends, users are able to see which episodes of a TV show members in their group have watched. My project involvement included setup of SQL databases, object relational mapping, and implementing front-end functionality in the JSPs. ", media: [], githubHref: 'https://github.com/roberthelmick08/Bingr', liveHref: 'http://roberthelmick.com:8080/BingeSync/', techsUsed: ['Java', 'Javascript', 'HTML/CSS', 'MySQL'] }
  ];

  activeProject: Project = this.projects[0];

  constructor() { }

  ngOnInit() {
  }

  setActive(project) {
    console.log(project === this.activeProject);
    this.activeProject = project;
    console.log(project === this.activeProject);
  }


}
