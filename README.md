# Ruina Main App Repo

[![Build status](https://build.appcenter.ms/v0.1/apps/ded08a0c-19ea-4bab-9520-b4ba359ab2eb/branches/release/badge)](https://appcenter.ms)

## Overview

Reliable crash data is essential to improving traffic safety. As part of a senior Capstone project at Olin College of Engineering, we have identified many holes in the current processes via user interviews and analysis of the crash data ecosystem. We chose a solution that we believed provided our team with the best opportunity for impact: improving crash data collection at the crash scene. Our solution, Ruina, is a mobile toolkit that provides police officers with an extensive set of tools allowing them to more accurately document a crash digitally and in a higher resolution manner. This toolkit manifested itself in a cross platform mobile application where officers could digitally document a crash using a tablet. Runia uses many technology features in mobile devices that aid officers in their ability to do their job such as the extensive sensor suite, camera, and internet connectivity. Ruina supports advanced camera and scanning features, aspects of location and scene diagramming, and full MMUCC compliance. The result of our semester of work is found in this repository as a proof of concept mobile application.

## Getting Started

### Installation Instructions

See [this guide](https://github.com/santosfamilyfoundation/RuinaMain/blob/fix/18chowdhary/installation-instructions/windowsInstallationGuide.md) for Windows installation instructions.

### Additional Installation Instructions

Additional installation instructions can be found [here](https://docs.google.com/document/d/1Jq3eBB1jNj5tPj4pSyWM1NAS5JwnqvRIsML5aK6KDPE/edit?usp=sharing).

## Running the app

1. Install node modules with `yarn`
2. Open a new terminal and run `yarn start`
3. Open a new tab or terminal and run `yarn react-native run-android`

## Testing

To run the jest tests for the first time, you need to add a few packages via
`yarn add sinon enzyme enzyme-adapter-react-16 --dev npm install -g jest-cli`
Run tests via `jest <input test filename>`

## Contributing

When contributing new changes to this repository, create a new branch with the following name scheme:

- new **features** should be under branches named `feat/{username}/{FEATURE-NAME}`.
- new **fixes** should be under branches named `fix/{username}/{FIX_NAME}`.

When your branch is ready to be merged, open up a pull request with the ticket name in the title like so: `[TICKET NUMBER]{One sentence ticket description}`. In the description, provide a more detailed description of the changes encompassed in the branch and include any information needed to test the changes. After your pull request is approved, your branch will be deleted.

## Build Error Troubleshooting

Some weird issues encountered from running `yarn react-native run-android`

1. ```
   Error: spawn ./gradlew EACCES
   at Process.ChildProcess._handle.onexit (internal/child_process.js:267:19)
   ```
   Solution: in root directory, run
   ```
   chmod 755 android/gradlew
   ```
   For more info, check this [post](https://stackoverflow.com/questions/54541734/spawnsync-gradlew-eacces-error-when-running-react-native-project-on-emulator-u).
2. ```
   Execution failed for task ':app:installDebug'.
   > java.util.concurrent.ExecutionException: com.android.builder.testing.api.DeviceException: com.android.ddmlib.InstallException: INSTALL_FAILED_VERSION_DOWNGRADE
   ```

   Solution: in root directory run

   ```
   adb uninstall com.ruina
   ```

   For more info, check this [post](https://github.com/ionic-team/ionic-cli/issues/278).
