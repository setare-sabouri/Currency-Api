# Currency-Api

Hello and Welcome :)

🧷Api used : https://www.frankfurter.app/docs/

👇Live web👇
https://currencyconvertfrankfurter.netlify.app/

Datas Fetched from Open Source Api are All about diffrent Currencies of Available countries
including: exchane rate - base currency - considered currency - begining date - end date & ...

----------------------------------------Api.js-----------------------------------------------------------------------------

💰 Api.js fetchs data based on 3 diffrent end points.
1-Fetch all available currencies
2-Fetch lastest data of a convertion
3-Fetch latest convertion based on Date duration

--------------------------------------Display.js---------------------------------------------------------------------------

📆 Display.js has 3 functions exported to api.js , based on each end point we get a display function.

--------------------------------------Firebase.js--------------------------------------------------------------------------

🧲 Firebase.js defined firestore as my realtime databse.

in second functionality where i get a convertion, there is feature to watch on convertion which adds data to firestore collection (called currencies).
🔎 renderList() gets data from currencies collection in order to render.

--------------------------------------Updates for later--------------------------------------------------------------------------
+add feature for user to choose amount (by default amount is 1 now )
