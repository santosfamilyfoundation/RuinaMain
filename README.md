# Ruina Main App Repo

## Getting started
1. Clone repo
2. Navigate to branch or create new branch
    - New features should be on a new branch with the name `feat/{FEATURE_NAME}`
    - Fixes should be on a new branch with the name `fix/{FIX_NAME}`
3. `Cd` into repo
4. Install/update all `node_modules`
    ```
    $ rm -rf node_modules/ && npm install
    ```
5. Rebuild cocaopods
    ```
    $ cd ios/
    $ pod install
    $ cd ..
    ```
6. Start simulator
    ```
    $ npx react-native run-ios
    ```
    or to run on iPad
    ```
    $ npm run iPad
    ```
    You can also specify simulator device:
    ```
    $ npx react-native run-ios --simulator="{SIMULATOR_NAME}"
    ```
    You can list which ios devices you have available using this command:
    ```
    $ xcrun simctl list devices
    ```
