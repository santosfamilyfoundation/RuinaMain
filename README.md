# Ruina Main App Repo

[![Build status](https://build.appcenter.ms/v0.1/apps/ded08a0c-19ea-4bab-9520-b4ba359ab2eb/branches/release/badge)](https://appcenter.ms)

## Overview

Reliable crash data is essential to improving traffic safety. As part of a senior Capstone project at Olin College of Engineering, we have identified many holes in the current processes via user interviews and analysis of the crash data ecosystem. We chose a solution that we believed provided our team with the best opportunity for impact: improving crash data collection at the crash scene. Our solution, Ruina, is a mobile toolkit that provides police officers with an extensive set of tools allowing them to more accurately document a crash digitally and in a higher resolution manner. This toolkit manifested itself in a cross platform mobile application where officers could digitally document a crash using a tablet. Runia uses many technology features in mobile devices that aid officers in their ability to do their job such as the extensive sensor suite, camera, and internet connectivity. Ruina supports advanced camera and scanning features, aspects of location and scene diagramming, and full MMUCC compliance. The result of our semester of work is found in this repository as a proof of concept mobile application.

## Getting started
1. Clone repo
2. Navigate to branch or create new branch
    - New features should be on a new branch with the name `feat/{FEATURE_NAME}`
    - Fixes should be on a new branch with the name `fix/{FIX_NAME}`
3. `Cd` into repo
4. Install/update all `node_modules` (if `yarn` is not recognized as a command then run `npm install -g yarn` or `brew install yarn` on a Mac)
    ```
    $ rm -rf node_modules/ && yarn install
    ```
5. Rebuild cocaopods
    ```
    $ cd ios/
    $ pod install
    $ cd ..
    ```
6. Start simulator
    * For Android: either start an emulator from Android Studio or connect a device through usb, then run
    ```
    $ npx react-native run-android
    ```
    * For ios:
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
7. To launch Metro server CLI tool if it does not show up (Mac)
    ```
    $ /path-to-this-repo/RuinaMain/node_modules/react-native/scripts/launchPackager.command
    ```
8. Additional documentation can be found at [Installation Instructions](https://docs.google.com/document/d/1Jq3eBB1jNj5tPj4pSyWM1NAS5JwnqvRIsML5aK6KDPE/edit?usp=sharing)
9. To run the jest tests for the first time, you need to add a few packages via
    ```
    yarn add sinon enzyme enzyme-adapter-react-16 --dev
    npm install -g jest-cli
    ```
    Run tests via `jest <input test filename>` 
