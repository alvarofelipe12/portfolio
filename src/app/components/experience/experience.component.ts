import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  active = 0
  jobs = [
    {
      tab: "Torre Labs",
      title: "Software Engineering Intern",
      date: "May 2023 - December 2023",
      description: [
        "Developed scalable web apps, fast-response, cross-browser, and cross-device using micro-frontends in Nuxt, Vue, Flutter and microservices in Scala, Node, and Spring Boot resulting in the resolution of 65 bugs and the creation of 9 new features.",
        "Debugged and troubleshooted, conducting system testing, writing automated tests, and ensuring quality deliverables through the Jest and Cypress as Test Driven Design requires.",
        "Transformed the development process by proactively suggesting and implementing improvements to the existing code base, consistently applying OOP, KISS, DRY, TDD, and Clean Code principles to enhance software scalability and performance."
      ],
      url: "https://torre.ai"
    },
    {
      tab: "Amadeus",
      title: "Senior Software Engineer (Contractor)",
      date: "January 2021 - August 2022",
      description: [
        "Developed and integrated Angular reusable components, demonstrating extensive experience in Typescript, NgRx & RxJs Concepts, including Behavior subjects, Auth guards, and resolvers.",
        "Wrote unit tests using Karma and Jasmine to ensure high-quality software.",
        "Proposed and evaluated application layouts using the Bootstrap framework, ensuring visual consistency in the Hospitality applications environment, while following business requirements.",
        "Collaborated with a team using Azure and Git, actively engaging in peer code reviews, sprint estimations, daily status updates and reporting tasks according to SAFe (Azure Boards) to ensure efficient project management, code quality, and timely delivery of high-quality software solutions."
      ],
      url: "https://www.amadeus-hospitality.com"
    },
    {
      tab: "Fyffes",
      title: "Support and Development Engineer (Contractor)",
      date: "December 2019 - January 2021",
      description: [
        "Created responsive stock monitoring web portal for multiple warehouses using Angular, RxJS, and Java Spring Boot, adhering to the Software Development Life Cycle(SDLC).",
        "Ensured secure access, boosted efficiency, and seamlessly integrated RESTful APIs for enhanced data interaction and real-time updates.",
        "Documented code using Microsoft Word, maintained code and assisted in developing logical and physical specifications for product reliability and scalability while reporting according to Scrum.",
        "Collaborated in a team environment using git-flow on GitHub, actively contributing to project planning and concurrently supported deployment with AWS DevOps tools to minimize downtime and streamline deployment complexity."
      ],
      url: "https://www.fyffes.com"
    },
    {
      tab: "Open My Tab by UVA3 S.A.S (formerly KIJHO Technologies)",
      title: "Software Developer",
      date: "March 2018 - October 2019",
      description: [
        "Developed, integrated, and tested Angular and Ionic (iOS and Android) applications with Symfony back-end for restaurant food ordering, ensuring performance optimization and adherence to client coding standards.",
        "Improved the performance of the Angular and Ionic projects, 4 and 2 seconds respectively, using native capabilities, webpack, service workers, Gulp, and framework upgrades.",
        "Developed comprehensive software documentation, rigorously enforced TypeScript best practices, and crafted recruitment tests for new developers, demonstrating a commitment to discipline, production deployment procedures, and impactful career development in a dynamic technical environment."
      ],
      url: "https://openmytab.com"
    },
  ];
}
