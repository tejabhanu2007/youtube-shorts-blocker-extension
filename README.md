# YouTube Shorts Blocker

A simple browser extension that stops YouTube Shorts in their tracks and bounces you back to the home page before you get sucked in.

## Why I Built This

Like a lot of people, I kept losing chunks of my day to the Shorts feed. You click on one video out of curiosity, and twenty minutes later you're completely zoned out. 

Infinite scroll algorithms are designed to be addictive. This extension is just a small speed bump to break that loop. If you try to open a Short, it cuts it off and sends you back to the regular home page. No drama, no flashy block screens—just a nudge to get back on track.

## Features

- **Blocks Shorts entirely:** Intercepts Shorts links and player elements so they won't load.
- **Home page redirect:** Automatically bounces you back to `youtube.com` instead of leaving you on a dead page.
- **Lightweight:** No heavy frameworks, tracking, or bloated background scripts. 

## How It Works

The script watches for navigation or URL changes pointing to `/shorts/`. When it spots one, it stops the request and forces a redirect to the main feed. 

## Installation

1. Clone or download this repository as a ZIP.
2. Unzip the folder.
3. Open your browser's extensions page (`chrome://extensions` or `edge://extensions`).
4. Turn on **Developer mode** in the top right corner.
5. Click **Load unpacked** and select the unzipped folder.

## Contributing

Found a bug or want to suggest an improvement? Pull requests and issues are welcome.