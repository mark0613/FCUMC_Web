import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue} from "firebase/database";

import { firebaseConfig } from "../Config";

export class Firebase {
    constructor(){
        const app = initializeApp(firebaseConfig);
        this.db = getDatabase(app)
    }
    
    getData(type, callback){
        const starCountRef = ref(this.db, type);
        onValue(starCountRef, (snapshot) => {
            callback(snapshot.val());
        });
    }

}
