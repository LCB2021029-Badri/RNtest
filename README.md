REACT NATIVE PROJECT SETUP WITH YARN:
* `npx @react-native-community/cli init`
* `yarn install`
* `yarn start` in one terminal
* `yarn android` in other terminal

**SCREENSHOTS:**

<img src="https://github.com/user-attachments/assets/58f6b666-5f34-48b5-88a0-44f17caa3ae9" alt="lcb2021029-badri" width="300" />


**DEEP LINKS:**

- `rntest://open/app` → Opens the "App" screen  
- `rntest://open/app/{id}` → Opens the "App" screen with `id` as a route parameter
- `rntest://open/homescreen` → Opens "HomeScreen"  
- `rntest://open/myscreen` → Opens "MyScreen"  


**TEST ON A CONNECTED EMULATOR/DEVICE:**  

- **Android:** `npx uri-scheme open "<DEEP_LINK_URL>" --android`  
- **iOS:** `npx uri-scheme open "<DEEP_LINK_URL>" --ios`  
- **example**: `npx uri-scheme open "rntest://open/homescreen" --android` 
