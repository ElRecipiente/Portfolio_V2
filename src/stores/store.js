import { ref, reactive } from "vue";

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
            description: '',
            url: '../../src/assets/img/APA1Mod.png',
            alt: 'a picture of my project',
            display: false

        },
        {
            titre: 'Projet The Watches',
            description: '',
            url: '../../src/assets/img/TheWatchesMod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Puissance 4',
            description: '',
            url: '../../src/assets/img/P4Mod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet RPG : C4m1ll3 Adventures',
            description: '',
            url: '../../src/assets/img/rpgMod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Space Invaders',
            description: '',
            url: '../../src/assets/img/SpaceInvadersMod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet StellaPong',
            description: '',
            url: '../../src/assets/img/StellaPongMod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Projet BackOffice',
            description: '',
            url: '../../src/assets/img/BackOfficeMod.png',
            alt: 'a picture of my project',
            display: false
        },
        {
            titre: 'Projet Application API',
            description: '',
            url: '../../src/assets/img/MyAppMod.png',
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