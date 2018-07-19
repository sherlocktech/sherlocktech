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
        description: 'Project to help users',
        url: 'https://purpose-project.firebaseapp.com',
        githubURL: 'https://github.com/christinamcmahon/purpose-project',
        image: '../assets/img/purpose_project.PNG'
    },
    {
        name: 'Trip Calculator',
        description: 'Project to help users',
        url: 'https://trip-calculator-5.firebaseapp.com',
        githubURL: 'https://github.com/sherlocktech/trip-calculator',
        image: '../assets/img/trip_calculator.PNG'
    }
];
