import { ref, reactive } from "vue";

export const store = reactive({
    // DATA
    data: [
        {
            question: 'App',
            answer: 'Welcome back Nicolas, enter your password to access data.',
            img: ''
        },
        {
            question: 'Ask me !',
            answer: 'Nah, YOU ask me.',
            img: ''
        },

        {
            question: 'Hello',
            answer: `Hello again, please enter your password.`,
            img: ''
        },

        {
            question: 'Projects',
            answer: 'You can see my projects here : ',
            img: '',
            link: ''
        },

        {
            question: 'CV',
            answer: 'You can see my CV here : ',
            img: '<img src="./assets/images/CV test.png" alt="">',
            link: ''
        },

        {
            question: 'Contact',
            answer: 'You can contact me here : ',
            img: ''
        },

        {
            question: 'Fullsize',
            answer: 'Okay, here we go... FULLSIZE !',
            img: ''
        },
        {
            question: 'password',
            answer: 'startApp'
        }
    ],
    error: 'Error, try again or click on the rocket.',

    // WELCOME MSG 
    welcome: ref(''),

    // INPUTDATA TO CHECK PASSWORD
    inputData: ref('App'),

    // LAUNCH APP ON TRUE, PASSWORD RECQUIERED
    launchApp: ref(false),

    // STOCK IF ANSWERED OR NOT
    isAwswered: ref(false),

    // CHECK INPUTDATA AND INJECT ANSWER
    checkInputData() {
        if (this.inputData != '') {
            this.isAwswered = false
            this.data.forEach(item => {
                if (item.question == this.inputData && item.answer == 'startApp') {
                    this.launchApp = true
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
        }
        this.inputData = '';
    }
})