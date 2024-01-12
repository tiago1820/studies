import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { auth, db } from "./app/firebase.js";
import { loginCheck } from "./app/loginCheck.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";
import { setupPosts } from "./app/postList.js";

import "./app/signupForm.js";
import "./app/signinForm.js";
import "./app/googleLogin.js";
import "./app/facebookLogin.js";
import "./app/githubLogin.js";
import "./app/logout.js";

onAuthStateChanged(auth, async (user) => {  
    if(user) {
        const querySnapshot = await getDocs(collection(db, "posts"));
        setupPosts(querySnapshot.docs);
    } else {
        setupPosts([]);
    }
    loginCheck(user);
})