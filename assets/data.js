
const { createApp } = Vue;

createApp({
    data() {
        return {
            count: 0,
            searchQuery: '', 
            contacts: [
                {
                    name: 'Michele',
                    avatar: '_1',
                    active: true,
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: '_2',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: '_3',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: '_4',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: '_5',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: '_6',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: '_7',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: '_8',
                    active: "",
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ]
        }
    },
 methods: {

    toggleActive(clickedContact, clickedIndex) {
        // Imposta la proprietà 'active' del contatto cliccato a 'true'
        clickedContact.active = true;

        // Imposta la proprietà 'active' del contatto corrente a ''
        this.contacts.forEach((contact, index) => {
            if (index !== clickedIndex) {
                contact.active = "";
            }
        });
    },
    addNewMessage(curContact) {
        // Ottieni il testo dall'input
        const newMessageText = document.querySelector('.new-message-inputs').value;

        // Aggiungi il nuovo messaggio all'array di messaggi del contatto corrente
        curContact.messages.push({
            date: new Date().toLocaleString(),
            message: newMessageText,
            status: 'sent'
        });

        // Pulisci la casella di input dopo l'aggiunta del messaggio
        document.querySelector('.new-message-inputs').value = '';
    },
        addNewMessage(curContact) {
            const newMessageText = document.querySelector('.new-message-inputs').value;
    
            // Aggiungi il nuovo messaggio inviato dall'utente
            curContact.messages.push({
                date: new Date().toLocaleString(),
                message: newMessageText,
                status: 'sent'
            });
    
            // Pulisci la casella di input
            document.querySelector('.new-message-inputs').value = '';
    
            // Aggiungi un messaggio di risposta ("ok") dopo 1 secondo
            setTimeout(() => {
                curContact.messages.push({
                    date: new Date().toLocaleString(),
                    message: 'Ok',
                    status: 'received' // Imposta lo stato come "received" per il messaggio di risposta
                });
            }, 1000);
        },
        filteredContacts() {
            this.contacts.forEach((curContact) => {
                const name = curContact.name.toLowerCase();
                if (name.includes(this.searchQuery.toLowerCase())){
                        curContact.visible = true;
                      } else {
                        curContact.visible = false;
                      }});
        },
        getLastMessage(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
                return lastMessage.message;
            } else {
                return "Nessun messaggio";
            }
        },
        getLastMessageTime(contact) {
            const lastMessage = contact.messages[contact.messages.length - 1];
            if (lastMessage) {
                return lastMessage.date;
            } else {
                return "";
            }
        },
        deleteMessage(contact, messageIndex) {
            // Rimuovi il messaggio dall'array di messaggi del contatto corrente
            contact.messages.splice(messageIndex, 1);
        }
    },
    }
    
    
    



).mount("#app");

