/* ===== 2. LIVE GITHUB STATS (Fetch Real Stats) ===== */
async function initGitHubStats() {
    const el = document.getElementById('hero-stats');
    if (!el) return;

    // 1. Default Stats (Resilient)
    let repos = 6;
    let followers = "2,100";
    let following = "109";

    // 2. Fetch GitHub Data (Optional)
    try {
        const res = await fetch('https://api.github.com/users/yashkumaryk066-netizen');
        if (res.ok) {
            const data = await res.json();
            if (data.public_repos) repos = data.public_repos;
        }
    } catch (e) {
        console.log("GitHub API fetch failed, using fallback repos.");
    }

    // 3. Render Stats HTML immediately
    const statsHtml = `
        <div class="github-stats-container reveal">
            <div class="stat-pill"><i class="fab fa-github"></i><div>${repos}</div><span>Repos</span></div>
            <div class="stat-pill"><i class="fas fa-users"></i><div id="follower-count-display">${followers}</div><span>Followers</span></div>
            <div class="stat-pill"><i class="fas fa-code-branch"></i><div>${following}</div><span>Following</span></div>
            <div class="stat-pill" id="follow-trigger-pill" style="margin-left: 10px; border-left: 1px solid rgba(255,255,255,0.1); padding-left: 15px;">
                <span style="color: #8b5cf6; font-weight:bold;">Follow +</span>
            </div>
        </div>
    `;
    el.insertAdjacentHTML('afterend', statsHtml);

    // 4. Firebase Social Setup
    const firebaseConfig = {
        apiKey: "AIzaSyB3ASP-dHS0OryBlWdl3CaPvtEkB_i-ZXs",
        authDomain: "splitbalance-b552b.firebaseapp.com",
        projectId: "splitbalance-b552b",
        storageBucket: "splitbalance-b552b.firebasestorage.app",
        messagingSenderId: "40872959188",
        appId: "1:40872959188:web:0bb467c35685a44ac5ef41",
        measurementId: "G-ZCPR6WVZN3"
    };

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const auth = firebase.auth();
    const db = firebase.firestore();

    // 5. Fetch Global Count from Firestore
    db.collection('stats').doc('followers').get().then(doc => {
        if (doc.exists) {
            const rawCount = doc.data().count || 2100;
            const display = rawCount >= 100000 ? (rawCount / 1000).toFixed(1) + 'k' : rawCount.toLocaleString();
            const displayEl = document.getElementById('follower-count-display');
            if (displayEl) displayEl.innerText = display;
        }
    }).catch(err => console.log("Firestore count fetch failed."));

    // 6. Follow Action Logic
    const updateFollowUI = (isFollowing) => {
        const followText = document.querySelector('#follow-trigger-pill span');
        if (followText && isFollowing) {
            const parent = followText.closest('.stat-pill');
            parent.innerHTML = '<span style="color: #4ade80; font-weight:bold;">Following <i class="fas fa-check"></i></span>';
            parent.style.pointerEvents = 'none';
            localStorage.setItem('yash_followed', 'true');
        }
    };

    auth.onAuthStateChanged(async (user) => {
        if (user) {
            const doc = await db.collection('followers').doc(user.uid).get();
            if (doc.exists) updateFollowUI(true);
        } else if (localStorage.getItem('yash_followed') === 'true') {
            updateFollowUI(true);
        }
    });

    const followPill = document.getElementById('follow-trigger-pill');
    if (followPill) {
        followPill.addEventListener('click', async (e) => {
            e.preventDefault();
            try {
                const provider = new firebase.auth.GoogleAuthProvider();
                const result = await auth.signInWithPopup(provider);
                const user = result.user;
                if (!user) return;

                const followerRef = db.collection('followers').doc(user.uid);
                const doc = await followerRef.get();

                if (doc.exists) {
                    alert("You are already following Yash! 🚀");
                    updateFollowUI(true);
                } else {
                    await followerRef.set({
                        email: user.email,
                        displayName: user.displayName,
                        followedAt: firebase.firestore.FieldValue.serverTimestamp()
                    });
                    await db.collection('stats').doc('followers').update({
                        count: firebase.firestore.FieldValue.increment(1)
                    });
                    updateFollowUI(true);
                    alert("Thank you for following Yash! ✨");
                }
            } catch (err) {
                if (err.code !== 'auth/popup-closed-by-user') alert("Follow failed. Please try again.");
            }
        });
    }
}
