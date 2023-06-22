import { ref, reactive } from "vue";
import APA1Mod from '@/assets/img/APA1Mod.png';
import APA1 from '@/assets/img/APA1.png';
import APA2 from '@/assets/img/APA2.png';
import APA3 from '@/assets/img/APA3.png';
import APA4 from '@/assets/img/APA4.png';
import TheWatchesMod from '@/assets/img/TheWatchesMod.png';
import TheWatches from '@/assets/img/TheWatches.png';
import TheWatches2 from '@/assets/img/TheWatches2.png';
import TheWatches3 from '@/assets/img/TheWatches3.png';
import P4Mod from '@/assets/img/P4Mod.png';
import P4 from '@/assets/img/P4.png';
import rpgMod from '@/assets/img/rpgMod.png';
import rpg from '@/assets/img/rpg.png';
import SpaceInvadersMod from '@/assets/img/SpaceInvadersMod.png';
import SpaceInvaders from '@/assets/img/SpaceInvaders.png';
import StellaPongMod from '@/assets/img/StellaPongMod.png';
import StellaPong from '@/assets/img/StellaPong.png';
import BackOfficeMod from '@/assets/img/BackOfficeMod.png';
import BackOffice from '@/assets/img/BackOffice.png';
import BackOffice1 from '@/assets/img/BackOffice1.png';
import BackOffice2 from '@/assets/img/BackOffice2.png';
import BackOffice3 from '@/assets/img/BackOffice3.png';
import BackOffice4 from '@/assets/img/BackOffice4.png';
import MyAppMod from '@/assets/img/MyAppMod.png';
import MyApp from '@/assets/img/MyApp.png';
import MyApp1 from '@/assets/img/MyApp1.png';
import MyApp2 from '@/assets/img/MyApp2.png';
import MyApp3 from '@/assets/img/MyApp3.png';
import AbsoluteGames from '@/assets/img/AbsoluteGames.png'

export const store = reactive({
    // DATA, QUESTIONS & ANSWER ARE HERE
    data: [
        {
            question: 'App',
            answer: "Hey ! I'm Nicolas Droux, and this is my Portfolio. If you want to see my projects, please enter password. Otherwise, click on the rocket.",
        },

        {
            question: 'TheRedButton',
            answer: `showTheRedButton`,
            img: ''
        },

        {
            question: 'Hello World',
            answer: `Hello ! Please, enter your password.`,
        },

        {
            question: 'password',
            answer: 'startApp'
        }
    ],
    // WHAT IS SHOWND ON PORTFOLIO
    projectData: [
        {
            titre: 'Project APA : Agence de Production Audiovisuelle',
            details: {
                start: '12/12/2022',
                duration: '2 weeks',
                type: 'Team Project (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'True',
                github: 'https://github.com/ElRecipiente/APA',
                link: 'https://elrecipiente.github.io/APA/',
                description: "One of my first project, done in pairs. The chosen theme was the creation of an audiovisual production website. We train a lot HTML & CSS, and start to discover Javascript."
            },
            projectURL: APA1Mod,
            url: {
                url1: APA1,
                url2: APA2,
                url3: APA3,
                url4: APA4
            },
            alt: 'a picture of my project',
            display: false

        },
        {
            titre: 'Project The Watches',
            details: {
                start: '24/01/2023',
                duration: '2 weeks',
                type: 'Team Project (3)',
                technologies: 'HTML / CSS / JS',
                responsive: 'True',
                github: 'https://github.com/ElRecipiente/The-Watches-Project',
                link: 'https://elrecipiente.github.io/The-Watches-Project/',
                description: 'Was trying to make a look like E-commerce website here, done with 2 others members of my training. '
            },
            projectURL: TheWatchesMod,
            url: {
                url1: TheWatches,
                url2: TheWatches2,
                url3: TheWatches3
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Project Puissance 4',
            details: {
                start: '16/01/2023',
                duration: '1 week',
                type: 'Solo Project',
                technologies: 'HTML / CSS / JS',
                responsive: 'False',
                github: 'https://github.com/ElRecipiente/TicTacToe-Puissance-4',
                link: 'https://elrecipiente.github.io/TicTacToe-Puissance-4/',
                description: 'A TicTacToe to train Javascript, but gone wrong. Was really fun to do indeed, but careful with the sound. Maybe I overdid it. Part of my Absolute Games project.'
            },
            projectURL: P4Mod,
            url: {
                url1: P4,
                url2: AbsoluteGames
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Project RPG : C4m1ll3 Adventures',
            details: {
                start: '09/01/2023',
                duration: '1 week',
                type: 'Solo Project',
                technologies: 'HTML / CSS / JS',
                responsive: 'False',
                github: 'https://github.com/ElRecipiente/C4m1ll3-Adventures',
                link: 'https://elrecipiente.github.io/C4m1ll3-Adventures/',
                description: 'A nice and (very) short mini game, and my first Javascript project. Part of my Absolute Games project.'
            },
            projectURL: rpgMod,
            url: {
                url1: rpg,
                url2: AbsoluteGames
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Project Space Invaders',
            details: {
                start: '13/02/2023',
                duration: '1 week',
                type: 'Solo Project',
                technologies: 'HTML / CSS / JS',
                responsive: 'False',
                github: 'https://github.com/ElRecipiente/SpaceInvaders',
                link: 'https://elrecipiente.github.io/SpaceInvaders/',
                description: 'An other mini game in Javascript. Trying to do something like the old game here too. Part of my Absolute Games project.'
            },
            projectURL: SpaceInvadersMod,
            url: {
                url1: SpaceInvaders,
                url2: AbsoluteGames
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Project StellaPong',
            details: {
                start: '07/02/2023',
                duration: '1 week',
                type: 'Solo Project',
                technologies: 'HTML / CSS / JS',
                responsive: 'False',
                github: 'https://github.com/ElRecipiente/StellaPong',
                link: 'https://elrecipiente.github.io/StellaPong/',
                description: 'A pretty and less complex version of the old pong game, with Javascript. Part of my Absolute Games project.'
            },
            projectURL: StellaPongMod,
            url: {
                url1: StellaPong,
                url2: AbsoluteGames
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Project BackOffice',
            details: {
                start: '02/05/2023',
                duration: '2-3 weeks',
                type: 'Solo Project',
                technologies: 'HTML / SCSS / PHP / Twig',
                responsive: 'False',
                github: 'https://github.com/ElRecipiente/BackOffice-Project',
                link: 'Not available for now',
                description: 'A backoffice project to train PHP with the MVC model.'
            },
            projectURL: BackOfficeMod,
            url: {
                url1: BackOffice1,
                url2: BackOffice,
                url3: BackOffice2,
                url4: BackOffice3,
                url5: BackOffice4
            },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Application API (using BackOffice project)',
            details: {
                start: '23/05/2023',
                duration: '2-3 weeks',
                type: 'Solo Project',
                technologies: 'HTML / SCSS / Vue3 JS',
                responsive: 'True',
                github: 'https://github.com/ElRecipiente/Application-API',
                link: 'Not available for now',
                description: 'A project to use API made in the previous project, BackOffice, and designed mobile first.'
            },
            projectURL: MyAppMod,
            url: {
                url1: MyApp1,
                url2: MyApp,
                url3: MyApp2,
                url4: MyApp3
            },
            alt: 'a picture of my project',
            display: false
        }

    ],
    error: 'Error, try again or click on the rocket.',

    // WELCOME MSG 
    welcome: ref(''),

    // INPUTDATA TO CHECK PASSWORD, 'App' BY DEFAULT
    inputData: ref('App'),

    // LAUNCH APP ON TRUE, PASSWORD RECQUIERED
    launchApp: ref(false),

    // STOCK IF USER GOT AN ANSWER OR NOT, FALSE BY DEFAULT
    isAwswered: ref(false),

    // STOCK ROTATE STATUS, FALSE BY DEFAULT
    isRotate: ref(false),

    // IMG SHOWND ON APP LAUNCH, FALSE BY DEFAULT
    showImg: ref(false),

    // CHECK INPUTDATA AND INJECT ANSWER
    checkInputData() {
        if (this.inputData != '') {
            this.isAwswered = false
            this.data.forEach(item => {
                if (item.question == this.inputData && item.answer == 'startApp') {
                    this.isAwswered = true;
                    this.launchApp = true;
                    console.log(this.launchApp)
                } else if (item.question == this.inputData) {
                    this.isAwswered = true;
                    this.welcome = ''
                    for (let i = 0; i < item.answer.length; i++) {
                        setTimeout(() => this.welcome += item.answer.charAt(i), 50 * i)
                    }
                }
            })
            if (!this.isAwswered) {
                this.welcome = ''
                for (let i = 0; i < this.error.length; i++) {
                    setTimeout(() => this.welcome += this.error.charAt(i), 50 * i)
                }
            }
        } else {
            this.isRotate = !this.isRotate
        }
        // INPUTDATA RESET
        this.inputData = '';
    }
})