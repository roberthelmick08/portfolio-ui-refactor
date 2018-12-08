import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/Project';
import { Job } from '../../model/Job';
import * as Typed from 'typed.js';
import { MatDialog } from '@angular/material';
import { ScreenshotDialogComponent } from './screenshot-dialog/screenshot-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  imgSrc = '../../../assets/';

  projects: Array<Project> = [
    {
      name: 'Dig-It', date: 'Ongoing',
      description: ['Single-page gardening reminder app. Users receive custom reminders based on local climate, plant type and age.', 'Track each plant in your garden from the seed phase to the harvest phase.', 'Search Dig-It\'s crowdsourced database to find detailed growing information.', 'Receive custom reminders based on your local climate, the plant\'s growth conditions, and maturity stage for when to sow, water, or otherwise care for your plants.'],
      media: [
        {path: this.imgSrc + 'Dig-It1.png', caption: 'Dig-It homepage'},
        {path: this.imgSrc + 'Dig-It2.png', caption: 'Login / Register'},
        {path: this.imgSrc + 'Dig-It3.png', caption: 'Search Dig-It\'s crowdsourced plant database'},
        {path: this.imgSrc + 'Dig-It4.png', caption: 'Filter plants by type, life cycle, and optimal sun requirements.'},
        {path: this.imgSrc + 'Dig-It5.png', caption: 'Add a new plant to Dig-It\'s database.'},
        {path: this.imgSrc + 'Dig-It6.png', caption: 'View all plants in your garden and active gardening reminders.'},
        {path: this.imgSrc + 'Dig-It7.png', caption: 'View basic plant info, upcoming reminders, and sowing and harvesting instructions.'},
      ], githubHref: 'https://github.com/roberthelmick08/Dig-It', liveHref: 'http://dig-it.rh-codes.com', techsUsed: ['Angular', 'MongoDB', 'Node.js', 'HTML', 'CSS']
    },
    {
      name: 'Toyota Inventory Pricing Engine', date: 'December 2018',
      description: ['Internal dealership pricing matrix tool.', 'Prototyping iterations with design team to improve UX.', 'Implementation of Vehicle Selection and Create Pricing Rule features.'],
      techsUsed: ['Angular', 'Node.js', 'HTML', 'SCSS']
    },
    {
      name: 'Toyota Real-Time Inventory UI Refactor', date: 'July 2018',
      description: ['Total UI overhaul of Toyota\'s Real-Time Inventory web app.', 'Major contributions include UI for inventory list, in-line status editing, vehicle details, vehicle history, and page filtering screens.', 'Critical Rendering Path optimization resulting in a 93% performance improvement on page load.',
      'Currently utilized by ~1500 dealerships in the USA.'],
      media: [
        {path: this.imgSrc + 'rti1.png', caption: ''},
        {path: this.imgSrc + 'rti2.png', caption: ''},
        {path: this.imgSrc + 'rti3.png', caption: ''},
      ], techsUsed: ['Angular', 'Node.js', 'HTML', 'SCSS']
    },
    {
      name: 'Data Refresh', date: 'January 2018',
      description: ['Lambda function that parses results from MSSQL => CSV file => FTP server => AWS S3 bucket.', 'Deployed using Serverless to refresh data at user-specified intervals.'],
      githubHref: 'https://github.com/roberthelmick08/Data-Refresh', techsUsed: ['Node.js', 'AWS S3', 'AWS Lambda', 'MSSQL', 'Serverless']
    },
  ];

  jobs: Array<Job> = [
    {
      name: 'Infosys Ltd', title: 'Associate Software Engineer', startDate: 'July 2017', endDate: 'Present', location: 'Plano, TX',
      description: ['Part of development team for Toyota\'s Real-Time Inventory application.',
      'Enhancing the quality of inventory application used by dealerships based on user-escalated defects.',
      'Translate wireframes into interactive, dynamic code.',
      'UI/UX overhaul and performance enhancement resulting in by 93% load time improvement.',
      'Technology stack: Angular, SCSS, Node.js, MS SQL, AWS']
    },
    {
      name: 'Amplexor International', title: 'Project Coordinator (Contract)', startDate: 'March 2016', endDate: 'September 2016', location: 'Broomfield, CO',
      description: ['Audit assessment on pharmaceutical documentation for global markets in 38 languages.', 'Liaising between project management, technical, translation and executive teams.']
    },
    {
      name: 'SDL International', title: 'Project Manager', startDate: 'November 2012', endDate: 'February 2016', location: 'Superior, CO',
      description: ['Led localization project management team for a major global IT client, including a remote team out of Mumbai, India.', 'Managed multi-million dollar financial accounts.', 'Scrum leader for daily status meetings.']
    },
  ];

  schools: Array<any> = [
    {
      name: 'Skill Distillery', degree: 'Full Stack Bootcamp', startDate: 'November 2016', endDate: 'March 2017', location: 'Denver, CO', details: 'Technologies used include: Java, Javascript, MySQL, Angular, Git and more'
    },
    {
      name: 'Christopher Newport University', degree: 'B.A. German Linguistics', startDate: '2008', endDate: '2012', location: 'Newport News, VA'
    },
    {
      name: 'Udacity', degree: 'Front End Nanodegree', endDate: 'August 2017', details: 'Received upon completion of Infosys training.'
    }
  ];

  i = 0;

  activeProject: Project = this.projects[0];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    const typed = new Typed('#typewriter', {
      strings: ['Associate Software Engineer<span style=\'color: #e64a19\'><br>at </span>^600Toyota^4000', 'Frt End Dev', 'Front End Dev^4000'],
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

  scrollScreenshot(direction: string) {
    switch (direction) {
      case ('left'): this.i--; break;
      case ('right'): this.i++; break;
    }
  }

  getEduLeftMargin(school, i) {
    return i * (100 / this.schools.length);
  }

  openScreenshotDialog(imgIndex: number) {
    this.dialog.open(ScreenshotDialogComponent, {
      data: {
        imageIndex: imgIndex,
        activeProject: this.activeProject
      },
      panelClass: ['screenshot-dialog']
    });
  }
}
