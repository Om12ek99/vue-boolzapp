[]  step 1: creare due classi css per i messaggi inviati e ricevuti
    NB: dopo si dovranno assegnare dei valori booleani per distinguere i messaggi ricevuti da quelli inviati!
[] <ul>
                        <li v-for="(contactName, index) in contacts">
                           {{ contactName.name }}
                        </li>
                      </ul>