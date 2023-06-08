import { ref, reactive } from "vue";

export const store = reactive({
    // DATA
    data: [

        {
            question: 'Ask me !',
            answer: 'Nah, YOU ask me.',
            img: ''
        },

        {
            question: 'Hello',
            answer: `Hello, welcome to Nicow's Portfolio. Please, click on the rocket.`,
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
        }
    ],
    // INPUTDATA TO CHECK PASSWORD
    inputData: ref(''),
    // LAUNCH APP ON TRUE, PASSWORD RECQUIERED
    launchApp: ref(false)
})