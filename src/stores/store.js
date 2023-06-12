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
            question: 'Hello',
            answer: `Hello again, please enter your password.`,
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

    // STOCK ROTATE STATUS
    isRotate: ref(false),

    // CHECK INPUTDATA AND INJECT ANSWER
    checkInputData() {
        if (this.inputData != '') {
            this.isAwswered = false
            this.data.forEach(item => {
                if (item.question == this.inputData && item.answer == 'startApp') {
                    this.isAwswered = true;
                    this.launchApp = true
                    console.log('startApp')
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
        this.inputData = '';
    }
})