// ! controllo il corretto collegamento
console.log('js Ok');

/*Descrizione:
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
Bonus
Far comparire gli indirizzi email solamente quando sono stati tutti generati.*/

const { createApp } = Vue;

createApp({
    data() {
        return {
            email:'',
            apiUrl: 'https://flynn.boolean.careers/exercises/api/random/mail'
        }
    },
    methods:{
        getRandomEmails(){
            axios.get(this.apiUrl)
            .then( function (response){
                console.log(response.data.response);
                }
            );
        },
    },
    created(){
        this.getRandomEmails();
    }
}).mount('#app')
