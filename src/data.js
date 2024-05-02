import Icon from "./components/icons/icon";

export const social = [
    {
        id: 1,
        icon: <Icon name='Github' />,
        name: 'Github',
        linkTo: ''
    },
    {
        id: 2,
        icon: <Icon name='Instagram' />,
        name: 'Instagram',
        linkTo: ''
    },
    {
        id: 3,
        icon: <Icon name='Facebook' />,
        name: 'Facebook',
        linkTo: ''
    },
    {
        id: 4,
        icon: <Icon name='Phone' />,
        name: 'Phone',
        linkTo: 'tel:0338192469'
    }
];

export const name = 'Brittany Chiang';

export const email = 'example@gmail.com';

export const desc = 'I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at';

export const listCompany = [
    {
        name: 'Upstatement',
        link: 'https://upstatement.com/'
    },
    {
        name: 'an advertising agency',
        link: 'https://us.mullenlowe.com/'
    },
    {
        name: 'a start-up',
        link: 'https://starry.com/'
    },
    {
        name: 'a huge corporation',
        link: 'https://www.apple.com/'
    },
    {
        name: 'a student-led design studio',
        link: 'https://scout.camd.northeastern.edu/'
    },
];

export const linkApp = 'https://www.newline.co/courses/build-a-spotify-connected-app';

export const listTechnologies = [
    {
        id: 1,
        name: 'HTML, CSS'
    },
    {
        id: 2,
        name: 'SASS, Tailwind, MUI'
    },
    {
        id: 3,
        name: 'JavaScript (ES6+)'
    },
    {
        id: 4,
        name: 'TypeScript'
    },
    {
        id: 5,
        name: 'React'
    },
    {
        id: 6,
        name: 'Java'
    }
];

export const tabContent = [
    {
        id: 1,
        company: "Upstatement",
        detail: {
            position: 'Lead Engineer',
            linkCompany: 'https://upstatement.com/',
            time: 'May 2018 - Present',
            desc: [
                'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
                'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
                'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
                'Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship'
            ]
        }
    },
    {
        id: 2,
        company: "Apple",
        detail: {
            position: 'UI Engineer Co-op',
            linkCompany: 'https://www.apple.com/',
            time: 'July - December 2017',
            desc: [
                'Developed and styled interactive web applications for Apple Music using Ember and SCSS',
                'Built and shipped the Apple Music Extension for Facebook Messenger leveraging third-party and internal API integrations',
                `Architected and implemented the user interface of Apple Music's embeddable web player widget for in-browser user authorization and full song playback`,
                'Contributed extensively to the creation of MusicKit JS, a public-facing JavaScript SDK for embedding Apple Music players into web applications'
            ]
        }
    },
    {
        id: 3,
        company: "Scout Studio",
        detail: {
            position: 'Developer',
            linkCompany: 'https://scout.camd.northeastern.edu/',
            time: 'Spring 2016 & 2017',
            desc: [
                'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community',
                'Built and delivered technical solutions according to stakeholder business requirements'
            ]
        }
    },
    {
        id: 4,
        company: "Starry",
        detail: {
            position: 'Software Engineer Co-op',
            linkCompany: 'https://starry.com/',
            time: 'July - December 2016',
            desc: [
                `Engineered and improved major features of Starry's customer-facing Android web app using ES6, Handlebars, Backbone, Marionette, and CSS`,
                'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with the Starry Station internet router',
                'Collaborated with designers and other developers to ensure thoughtful and consistent user experiences across Starry’s iOS and Android mobile apps'
            ]
        }
    },
    {
        id: 5,
        company: "MullenLowe",
        detail: {
            position: 'Creative Technologist Co-op',
            linkCompany: 'https://us.mullenlowe.com/',
            time: 'July - December 2015',
            desc: [
                `Developed, maintained, and shipped production code for client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery`,
                'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness',
                'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
            ]
        }
    },
];

export const projects = [
    {
        id: 1,
        overline: 'Featured Project',
        link: '#',
        demo: '#',
        title: 'Halcyon Theme',
        techList: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project.avif',
        desc: ['A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.'],
    },
    {
        id: 2,
        overline: 'Featured Project',
        link: '#',
        demo: '#',
        title: 'Spotify Profile',
        techList: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project.avif',
        desc: ['A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information about each track. Create and save new playlists of recommended tracks based on your existing playlists and more.'],
    },
    {
        id: 3,
        overline: 'Featured Project',
        link: '#',
        demo: '#',
        title: 'Build a Spotify Connected App',
        techList: ['React', 'Express', 'Spotify API', 'Styled Components'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project.avif',
        desc: [`Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had`,

            `Unlike tutorials that only cover a few concepts and leave you with half-baked GitHub repositories, this course covers everything from explaining the principles of REST APIs to implementing Spotify's OAuth flow and fetching API data in a React app. By the end of the course, you'll have an app deployed to the internet you can add to your portfolio.`],
    },
    {
        id: 4,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Integrating Algolia Search with WordPress Multisite',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'Building a custom multisite compatible WordPress plugin to build global search with Algolia',
    },
    {
        id: 5,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS',
    },
    {
        id: 6,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 7,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 8,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 9,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 10,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 11,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 12,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 13,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 14,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 15,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 16,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
    {
        id: 17,
        overline: 'Project',
        link: '#',
        demo: '#',
        title: 'Time to Have More Fun',
        techList: ['Algolia', 'WordPress', 'PHP'],
        iconGithub: <Icon name='Github' />,
        iconDemo: <Icon name='External' />,
        image: 'project1.png',
        desc: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
    },
]