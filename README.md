# INTRODUCING AUTOPILOT

This repository's presentation is hosted at [https://auto-pi-lot.com/presentation](https://auto-pi-lot.com/presentation)

An overview of [Autopilot](https://git.io/auto-pi-lot), a system to distribute behavioral neuroscience experiments across one or many Raspberry Pis.

Still in pre-release, release anticipated spring 2019.

Docs are at [https://docs.auto-pi-lot.com/](https://docs.auto-pi-lot.com/) though they too are currently unfinished.


Built with [Spectacle.js](https://formidable.com/open-source/spectacle/) [(github)](https://github.com/FormidableLabs/spectacle)

# Building & Serving

* Clone this repo and cd into it
* If you don't have them already, [install npm](https://www.npmjs.com/get-npm) and [yarn](https://yarnpkg.com/lang/en/docs/install/#mac-stable)

 With homebrew
 `brew install npm yarn`

* Install dependencies

 `yarn install`

* Serve local copy at localhost:3000/

 `yarn start`

* Build production version for distribution into /docs/. There is a slightly modified version of index.html that has the correct paths for github pages, copy that to the build directory.

 ```
 yarn build
 cp ./index_docs.html ./docs/index.html
 ```

# Presentation

* To use presenter view with optional title, go to localhost:3000/#/0?presenter or localhost:3000/#/0?presenter&timer

## Controls


| Key Combination | Function                       |
| --------------- | ------------------------------ |
| Right Arrow     | Next Slide                     |
| Left Arrow      | Previous Slide                 |
| Space           | Next Slide                     |
| Shift+Space     | Previous Slide                 |
| Alt/Option + O  | Toggle Overview Mode           |
| Alt/Option + P  | Toggle Presenter Mode          |
| Alt/Option + T  | Toggle Timer in Presenter Mode |
| Alt/Option + A  | Toggle autoplay (if enabled)   |
| Alt/Option + F  | Toggle Fullscreen Mode         |

## URL Queries

| Query               | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| 0, 1, 2, 3... etc.  | Will take you to the corresponding slide, with `0` being the first slide in the presentation.                        |
| ?export             | Creates a single-page overview of your slides, that you can then print.                                              |
| ?export&notes       | Creates a single-page overview of your slides, including any [notes](#notes), that you can then print.               |
| ?export&print       | Creates a black & white single-page overview of your slides.                                                         |
| ?export&print&notes | Creates a black & white single-page overview of your slides, including any [notes](#notes), that you can then print. |
| ?presenter          | Takes you to presenter mode where you’ll see current slide, next slide, current time, and your notes.      |
| ?presenter&timer    | Takes you to presenter mode where you’ll see current slide, next slide, timer, and your notes.             |
| ?overview           | Take you to overview mode where you’ll see all your slides.                                                          |







