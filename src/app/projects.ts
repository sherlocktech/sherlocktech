export interface Project {
    name: string;
    description: string;
    url: string;
    githubURL: string;
    image: string;
}

export const PROJECTS: Project[] = [
    {
        name: 'Purpose Project',
        description: `Angular application that enables users to live a purpose driven life
         by offering a platform to explore their goals and values. Encompasses a blog
         that offers advice and insight into other's prupose projects.`,
        url: 'https://purpose-project.firebaseapp.com',
        githubURL: 'https://github.com/christinamcmahon/purpose-project',
        image: '../assets/img/purpose_project.PNG'
    },
    {
        name: 'Trip Calculator',
        description: `Angular application that helps those with travelling budgets to plan
         trips that are within their means.`,
        url: 'https://trip-calculator-5.firebaseapp.com',
        githubURL: 'https://github.com/sherlocktech/trip-calculator',
        image: '../assets/img/trip_calculator.PNG'
    }
];
