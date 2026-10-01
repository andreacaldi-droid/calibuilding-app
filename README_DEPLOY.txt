CALI POWER — SYNC RELEASE

DEPLOY
1. Replace these files in the GitHub Pages repo:
   index.html
   manifest.webmanifest
   sw.js
   icon-192.png
   icon-512.png
2. Wait for GitHub Pages to finish deployment.
3. On the PC FIRST, open Cali Power, go to PROFILO and sign in/create the Firebase account.
   The PC currently has the authoritative local state, so it must sync first.
4. Wait until the top badge says SYNC.
5. Then open/update Cali Power on the phone and sign in with the same account.
6. Verify STORICO on phone contains the newest PC session.

DAILY UX
Open -> current CHECK -> DECIDI -> session -> POST -> end.
The next day it returns to a fresh current-day CHECK.

WORKOUT
- Total workout clock retained.
- Rest timer retained.
- Final 10-second visual countdown: 10 ... 1, then 0.
- TEMPO CAMBIATO / IMPREVISTO can trim future work without deleting completed work.
- Finish-now records a partial real session; it does not invent missing volume.

SYNC MODEL
- Completed sessions are stored in Firestore as separate documents keyed by session ID.
- Device state is synchronized separately.
- Remote sessions are merged by ID instead of replacing the entire history with the last device copy.
- localStorage remains the offline/local safety copy.

UI
Technical scores such as overlap/regional/angle are no longer shown during the workout.
Each exercise shows a plain-language 'Perché oggi', a technical focus, and an expandable scientific rationale.
