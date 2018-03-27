import { Component, OnInit, HostListener } from '@angular/core';
import { Project } from '../../services/model/Project';
import * as Typed from 'typed.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: ['/src/styles.scss']
})
export class HomeComponent implements OnInit {

  imgSrc: string = "../../../assets/img/";

  projects: Array<Project> = [
    {
      name: 'Toyota Real-Time Inventory UI Refactor', date: 'March 2018',
      description: ["Total design overhaul of Toyota's Real-Time Inventory page UI.", "Critical Rendering Path optimization resulting in a 93% performance improvement on page load.",
      "Currently utilized by ~1500 dealerships in the USA."],
      media: [this.imgSrc + 'rti1.png', this.imgSrc + 'rti2.png', this.imgSrc + 'rti3.png', this.imgSrc + 'rti4.png'], techsUsed: ['Node.js', 'Angular', 'HTML', 'SCSS']
    },
    {
      name: 'Portfolio Site', date: 'March 2018',
      description: ["Personal portfolio site for www.roberthelmick.com", "Admin user given CRUD functionality for Projects, Work Experience and Education.", "Data persists to MySQL database."],
      media: [this.imgSrc + 'portfolio1.png'], githubHref: 'https://github.com/roberthelmick08/portfolio-ui-refactor', techsUsed: ['Node.js', 'Angular', 'MySQL', 'HTML', 'SCSS']
    },
    {
      name: 'Data Refresh', date: 'January 2018',
      description: ["Lambda function that parses results from MSSQL => CSV file => FTP server => AWS S3 bucket.", "Deployed using Serverless to refresh data at user-specified intervals."],
      media: [this.imgSrc + 'datarefresh1.png'], githubHref: 'https://github.com/roberthelmick08/CSV-data-refresh', techsUsed: ['Node.js', 'AWS S3', 'AWS Lambda', 'MSSQL', 'Serverless']
    },
    {
      name: 'Indiana Public Range Finder', date: 'August 2017',
      description: ["Displays all publicly-owned shooting ranges in Indiana using Google Maps API", "The interactive map displays user check-in information from Foursquare."],
      media: [this.imgSrc + 'rangefinder1.png', this.imgSrc + 'rangefinder2.png'], githubHref: 'https://roberthelmick08.github.io/Indiana-Public-Range-Finder---Maps-API/', liveHref: 'https://roberthelmick08.github.io/maps-api-project/', techsUsed: ['Javascript', 'Knockout.js', 'HTML', 'CSS']
    },
    {
      name: 'DigIt', date: 'March 2017',
      description: ["Track each plant in your garden from the seed phase to the harvest phase.", "Search DigIt's crowdsourced database to find detailed growing information.", "Receive custom reminders based on your local climate, the plant's growth conditions, and maturity stage for when to sow, water, or otherwise care for your plants."],
      media: [this.imgSrc + 'digit1.png', this.imgSrc + 'digit2.png', this.imgSrc + 'digit3.png'], githubHref: 'https://github.com/roberthelmick08/DigIt', liveHref: 'http://roberthelmick.com:8080/DigIt/', techsUsed: ['Java', 'Javascript', 'Angular', 'MySQL', 'HTML', 'CSS']
    },
    { 
      name: 'Applied', date: 'March 2017',
      description: ["Week 13 individual weekend project at Skill Distillery.", "Goal: To create a persistent back-end database connected to a dynamic front end.", "Applied is an organizational tool to keep track of the users' active job applications and job postings that the user is interested in."],
      media: [this.imgSrc + 'applied1.png', this.imgSrc + 'applied2.png'], githubHref: 'https://github.com/roberthelmick08/Applied', liveHref: 'http://roberthelmick.com:8080/Applied/', techsUsed: ['Java', 'Javascript', 'MySQL', 'HTML', 'CSS']
    },
    { 
      name: 'BingeSync', date: 'February 2017',
      description: ["BingeSync allows for users to keep track of their favorite TV shows.", "Connect with your friends to see which episodes of a TV show your friends have watched."],
      media: [this.imgSrc + 'bingesync1.png', this.imgSrc + 'bingesync2.png', this.imgSrc + 'bingesync3.png'], githubHref: 'https://github.com/roberthelmick08/Bingr', liveHref: 'http://roberthelmick.com:8080/BingeSync/', techsUsed: ['Java', 'Javascript', 'MySQL', 'HTML', 'CSS']
    },
    { 
      name: 'Visitr', date: 'February 2017',
      description: ["Week 8 individual project at Skill Distillery.", "Users track and rate their favorite cities that they've visited."],
      media: [this.imgSrc + 'visitr1.png'], githubHref: 'https://github.com/roberthelmick08/Visitr', liveHref: 'http://roberthelmick.com:8080/Visitr/', techsUsed: ['Java', 'HTML', 'CSS']
    },
    
  ];

  jobs: Array<any> = [
    {
      name: "Infosys Ltd", title: "Associate Software Engineer", startDate: "July 2017", endDate: "Present", location: "Plano, TX",
      description: ["Part of development team for Toyota's Real-Time Inventory application.", "Enhancing the quality of inventory application used by dealerships based on user-escalated defects.", "Refactored UI/UX in its entirety and enhanced loading performance by 93%.", "Technology stack: Node.js, Angular 4, MS SQL, AWS S3 & Lambda."]
    },

    {
      name: "Amplexor International", title: "Project Coordinator (Contract)", startDate: "March 2016", endDate: "September 2016", location: "Broomfield, CO",
      description: ["Audit assessment on pharmaceutical documentation for global markets in 38 languages.", "Liaising between project management, technical, translation and executive teams."]
    },

    {
      name: "SDL International", title: "Project Manager", startDate: "November 2012", endDate: "February 2016", location: "Superior, CO",
      description: ["Led localization project management team for a major global IT client, including a remote team out of Mumbai, India.", "Managed multi-million dollar financial accounts.", "Scrum leader for daily status meetings."]
    },
  ]

  schools: Array<any> = [
    {
      name: "Skill Distillery", degree: "Full Stack Bootcamp", startDate: "November 2016", endDate: "March 2017", location: "Denver, CO", details: "Technologies used include: Java, Javascript, MySQL, Angular, Git and more"
    },
    {
      name: "Christopher Newport University", degree: "B.A. German Linguistics", startDate: "2008", endDate: "2012", location: "Newport News, VA"
    },
    {
      name: "Udacity", degree: "Front End Nanodegree", details: "Received upon completion of Infosys training."
    }
  ]

  i: number = 0;

  schoolIdx: number = 0;

  date = new Date();

  activeProject: Project = this.projects[0];

  divisible: number = Math.ceil((100 / this.schools.length)/5)*5;;

  adjDivisible: number = 0;

  constructor() { }

  ngOnInit() {
    var typed = new Typed("#typewriter", {
      strings: ["Associate Software Engineer<span style='color: #e64a19'><br>at </span>^600Toyota^4000", "Frt End Dev", "Front End Dev^4000"],
      smartBackspace: true,
      loop: true,
      typeSpeed: 80,
      backDelay: 700,
      backSpeed: 60,
      cursorChar: '_'
    });
  }

  setActive(project) {
    this.i = 0;
    this.activeProject = project;
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    // console.log($event);
    // console.log("scrolling");
    // var bioHeader = document.getElementById("bio");
    // var projectsHeader = document.getElementById("projects");
    // var workHeader = document.getElementById("work");
    // var educationHeader = document.getElementById("education");
    // console.log(bioHeader);
    // console.log(projectsHeader);
    // console.log(workHeader);
    // console.log(educationHeader);
  }

  scrollScreenshot(direction: string) {
    switch (direction) {
      case ("left"): this.i--; break;
      case ("right"): this.i++; break;
    }
  }

  getEduLeftMargin(school, i){
    
    return i * (100 / this.schools.length);
  }
}