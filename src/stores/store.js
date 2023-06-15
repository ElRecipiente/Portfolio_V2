import { ref, reactive } from "vue";

export const store = reactive({
    // DATA, QUESTIONS & ANSWER ARE HERE
    data: [
        {
            question: 'App',
            answer: 'Welcome back Nicolas, enter your password to access data.',
            img: ''
        },

        {
            question: 'Hello',
            answer: `Hello, please enter your password.`,
            img: ''
        },

        {
            question: 'Hello World',
            answer: `Hello... enter your password to access to the World.`,
            img: ''
        },

        {
            question: 'password',
            answer: 'startApp'
        }
    ],
    // WHAT IS SHOWND ON PORTFOLIO
    projectData: [
        {
            description: '',
            url: '../src/assets/img/APA.png',
            alt: 'a picture of my project'

        },
        {
            description: '',
            url: '../src/assets/img/AbsoluteGames.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/P4.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/rpg.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/SpaceInvaders.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/StellaPong.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/BackOffice.png',
            alt: 'a picture of my project'
        },
        {
            description: '',
            url: '../src/assets/img/MyApp.png',
            alt: 'a picture of my project'
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