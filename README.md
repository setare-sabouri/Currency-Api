# Currency-Api

Hello and Welcome :)  Find Webapp by clicking [THIS](https://currencyconvertfrankfurter.netlify.app/).

## API
Find the API used [here](https://www.frankfurter.app/docs/)


Datas Fetched from Open Source frankfurt Api are All about diffrent Currencies of Available countries that API provides.

### Datas
* exchange rate
+ base currency
- destination currency
+ begining date
* end date

## Site Flow 

![image](https://user-images.githubusercontent.com/100029656/205537848-bf470742-220c-43e7-8818-02cbe2490550.png)

## files functionality description

+ ### Api.js

fetchs data based on 3 diffrent end points.

1. Fetch all available currencies

2. Fetch lastest data of a convertion

3. Fetch latest convertion based on Date duration

![image](https://user-images.githubusercontent.com/100029656/205539294-6b73a11d-cea1-4c33-9792-c5e65fecd5b5.png)


* ### Display.js

3 display functions are exported to api.js , based on each end point we get a display function.

- ### Firebase.js

Firebase.js defined firestore as my realtime databse.

in second functionality where i get a convertion, there is feature to watch on convertion which adds data to firestore collection (called currencies).

 renderList() gets data from currencies collection in order to render.


## Updates 
+ add feature for user to choose amount (by default amount is 1 now )
* remove from watch list (now is in firebase)
