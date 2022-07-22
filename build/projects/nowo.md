![The device](/build/projects/nowo.jpg)

*Originally published on [Devpost](https://devpost.com/software/nowos-ark)*

## Inspiration

While researching datasets, we noticed a particularly interesting one on flood data. We noticed there were many floods in the United States but relatively few deaths from them. In contrast, we noticed in many Southeast Asian countries that there were about the same number of floods but a much higher number of deaths and displacements. Through more thorough research, we found that a big reason why is because of the lack of accessible warning systems. Existing flood detectors are large; they incorporate a myriad of moving parts and cost in the range of tens of thousands of dollars. Also, we named it because of our obsession with owo and uwu.

## What it does

We built a simpler flood warning system using a pipe and a floating disk. During floods, the disk moves upward and contacts a button which sends a flood warning to local communities.

## How we built it

We bought a black ABS pipe at Lowes prior to the hackathon and sawed it in half. We then 3D printed the floating disk using PLA with a 20% fill setting which should allow the plate to float. What's great about this project is that all the electronics (minus the Dragonboard Linux board) used came from a single Elegoo Arduino kit! We prototyped the sensor with an Arduino and a breadboard. Using pyserial, we were able to communicate through Python to Arduino. When the button is pressed, we make an API request over to our serverless Cloudflare worker. This worker would then alert locals via SMS through Twilio. To subscribe to alerts, a community member could text subscribe to our Twilio number (which only supports Aaron's number since we're on the free account). We then used Omnisci to map flood data to determine which areas would be a great fit for nowo's ark. We marked down a few areas upstream which could help effectively warn communities downstream about impending floods. 

## Challenges we ran into

Buttons.

Also, half the Dragonboards we used ran Android instead of Debian. Then, every 96boards shield we borrowed had broken bootloaders. We decided to just plug in an Arduino Uno to use Arduino rather than using the built-in interface on the Dragonboard.

## Accomplishments that we're proud of

We're proud of building a super inexpensive flood sensor (< $15) excluding the Dragonboard. Comparatively, the large flood detectors used today would be hundreds or thousands of times more expensive than our solution with the Dragonboard. We're also proud of learning serverless architecture and plan to use it in future hackathons.

## What we learned

Serverless. How not to die. Again.

## What's next for nowo's ark

We're thinking about implementing an array of these devices along riverbanks with GPS sensors to effectively estimate the time when the flood will affect the community. We also want to use a cellular connection rather than WiFi to send flood data.

## Links 
* [Hackster](https://www.hackster.io/nowo/nowo-s-ark-774dd8)
* [Devpost](https://devpost.com/software/nowos-ark)
* [GitHub](https://github.com/DevinMui/nowos-ark)
* [YouTube](https://www.youtube.com/watch?v=ym6YZvN1P3U)
* [Hackster (LTE)](https://www.hackster.io/nowo/nowo-s-ark-lte-version-ca264a)