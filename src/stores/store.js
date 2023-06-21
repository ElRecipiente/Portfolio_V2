import { ref, reactive } from "vue";
import APA1Mod from '@/assets/img/APA1Mod.png';
import APA1 from '@/assets/img/APA1.png';
import APA2 from '@/assets/img/APA2.png';
import APA3 from '@/assets/img/APA3.png';
import APA4 from '@/assets/img/APA4.png';
import TheWatchesMod from '@/assets/img/TheWatchesMod.png';
import P4Mod from '@/assets/img/P4Mod.png';
import rpgMod from '@/assets/img/rpgMod.png';
import SpaceInvadersMod from '@/assets/img/SpaceInvadersMod.png';
import StellaPongMod from '@/assets/img/StellaPongMod.png';
import BackOfficeMod from '@/assets/img/BackOfficeMod.png';
import MyAppMod from '@/assets/img/MyAppMod.png';

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
            titre: 'Projet APA : Agence de Production Audiovisuelle',
            details: {
                start: '12/12/2022',
                duration: '2 weeks',
                type: 'Team Project (2)',
                technologies: 'HTML / CSS / JS / Figma',
                responsive: 'Responsive',
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
            titre: 'Projet The Watches',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Team Project (3)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'A '
            },
            projectURL: TheWatchesMod,
            url: { url1: TheWatchesMod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Puissance 4',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: P4Mod,
            url: { url1: P4Mod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet RPG : C4m1ll3 Adventures',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: rpgMod,
            url: { url1: rpgMod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Space Invaders',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: SpaceInvadersMod,
            url: { url1: SpaceInvadersMod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet StellaPong',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: StellaPongMod,
            url: { url1: StellaPongMod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Projet BackOffice',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: BackOfficeMod,
            url: { url1: BackOfficeMod },
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Application API',
            details: {
                start: '00/00/0000',
                duration: '2 semaines',
                type: 'Projet en groupe (2)',
                technologies: 'HTML / CSS / JS',
                responsive: 'Oui',
                github: '',
                link: '',
                description: 'Un de mes premiers projets, fait en binôme. Le thème choisi était la création d'
            },
            projectURL: MyAppMod,
            url: { url1: MyAppMod },
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