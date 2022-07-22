![The device](/build/projects/blindsight.jpg)

*Originally published on [Devpost](https://devpost.com/software/blindsight-virtual-eyes-through-haptic-feedback)*

**Note: The attached video is a "theatrical" demonstration of our product. For a more technical demonstration, please watch this video: [Blindsight Technical Demo](https://www.youtube.com/watch?v=PFl5jZzM34k)**

## Inspiration
In today’s world, designers often create environments that fundamentally rely on their users being able to see. Accessibility to those without this crucial ability is an afterthought, if it is even considered at all. For the **285 million** visually impaired people around the world, tasks like finding one’s keys or walking along busy sidewalks become arduous or even impossible. Vision difficulties are often associated with aging, and with a growing population, the World Health Organization predicts that the number of visually impaired people will **triple by the year 2050**.

Despite the pace of medical improvement in recent years, a permanent cure for blindness remains elusive, and even the most promising current treatments are highly experimental and extremely expensive. Blind people today rely on sighted guides, seeing-eye dogs, and canes even a century after the introduction of these solutions, with obvious associated limitations of functionality. Even so-called "cutting-edge" vision technologies are only able to _describe_ a blind person's environment. Crucially, these devices fail absolutely when it comes to actually _interacting_ with the environment. Without a functional, cost-effective way to actively engage in the world around them, people with visual disabilities are relegated to spectator status in our society.

## What it does
Enter Blindsight: a wearable device that greatly increases the independence of the blind. Blindsight is an armband and smartphone app combination, designed to help the visually impaired by integrating machine learning with haptic feedback. After waking Blindsight from sleep with a wake word or button press, users can summon the smart assistant to help them by reading signs or identifying products in a grocery store. Blindsight can also find a misplaced object, using the integrated camera to locate it and then controlling 8 vibration motors to direct the user’s hand towards the target. Through facial recognition, Blindsight can even remember and identify faces to help the user recognize people he or she has met before. Blindsight is capable of sending and receiving payments through the VISA API integration. Leveraging the HERE Mobility API and SDK, Blindsight enables users to easily call a taxi or travel to their desired destination. After a full day of use, Blindsight can be recharged on any standard Qi wireless charging pad. With a large and continuously expanding set of functions, Blindsight seeks to be the ultimate wearable solution to many daily problems visually impaired individuals face.

## How we built it
The current iteration of Blindsight represents the progressive improvement of several prototypes. In our first prototype, MK1, we sought to establish the absolute basic functionality as a proof of concept. We used a Raspberry Pi Zero W powered by 4xAA batteries for the armband, and a barebones Android app for sending voice input to the Pi and for vocalizing the audio feedback. Using a custom armband with embedded cellphone vibration motors and an integrated camera, our first prototype could locate objects upon a user’s request, and then guide them to the actual object through directional haptic feedback (if the object is to the left of the user, the motors on the left side of the arm vibrate, etc.)

After establishing a proof-of-concept, our team continued with our MK2 iteration. This iteration sought to correct some of the issues of the previous version, while also dramatically increasing functionality. Using a new camera with wide-angle capabilities, we were able to scan an entire room without requiring the user to pan their arm around. We also switched to Lithium Polymer batteries for a more robust power source with a better power-to-weight ratio. Our software was also leaps and bounds better than our previous iteration, allowing for OCR, facial recognition, and a host of other uses specific to helping the blind.

You can view our MK2 functionality demo here: [Blindsight Technical Demo](https://www.youtube.com/watch?v=PFl5jZzM34k)

The device finally submitted here is our MK2.1, an incremental improvement over the MK2 iteration substantial enough to deserve its own moniker. The entire device is presented in a much smaller package than MK2, thanks to redone wiring and a new Raspberry Pi Zero W without headers taking up a lot of room. Bullet connectors and a redone armband also mean the entire device is much more modular, for faster reassembly and adjustment. In terms of software, the Android app has been entirely redesigned to be more responsive and accessible. “Christy”, the Blindsight smart assistant, can now help users handle payments and transportation. The VISA API allowed for finding ATMs and merchants that accept VISA, along with a credit card fraud prevention and mobile payment solution. The HERE Mobility API and SDK allowed for obtaining navigational directions and calling a taxi. Through these technologies, Blindsight is now more functional than ever.

## Challenges we ran into
Bringing Blindsight from concept to working prototype has been a challenging yet exciting journey. As a team of recent high school graduates, we had a limited skill set that led to several problems with the actual engineering of the device. Unfamiliarity with the specifications of various camera sensors led to the purchase of a nonfunctional camera. Minimal experience with 3D printing led to multiple print failures while designing the enclosure of the device. On the software side, processing images on our server was taking tens of seconds, negatively affecting the user experience.

However, after analyzing our failures and determining how to improve our engineering process, our team was able to successfully overcome these hurdles. We refactored our server code to keep our machine learning models continuously loaded in VRAM, dramatically cutting down on waiting time after a command. We were also able to find a local partner to review our 3D models and help us optimize them for printing. Finally, after searching through detailed product catalogs and contacting vendors directly, we found a compatible wide-angle camera that met our size constraints. With these major challenges solved, our team was able to produce a fully-functional Blindsight device.

## Accomplishments that we're proud of
As a result of our successful demonstration of the earlier MK1 and MK2 models, our team is proud to have been invited as one of the ten teams in the United States delegation to the 2018 China-US Young Makers event in Beijing, China. When we attend later this month, we hope to bring an international spotlight on the difficult challenge of improving the lives of people with disabilities, and to showcase Blindsight as an innovative step forward in addressing this problem.

However, the accomplishment we are most proud of is the public reception to our idea and product. Throughout our development process, we utilized social media and professional networks to share our progress with the world. As a result of this communication, our team was able to get in touch with multiple individuals with visual impairments who are eager to help us test and improve Blindsight. Having embarked on this project with the goal of making people’s lives better, knowing that our target audience is enthusiastic about our work is a truly amazing feeling.

## What we learned
Things we have learned include:
- How to calculate LiPO battery requirements for wearable devices
- How to avoid LiPO explosions
- How to stitch pieces of cloth together
- How to rip out old stitches and redo them
- How to modify CAD models for 3D printing
- How to ask nicely for help
- How to design apps and products with accessibility as a top priority
- How to stop being stupid (for the nth time)

## What's next for Blindsight - Virtual Eyes Through Haptic Feedback

Our team is excited to head to Beijing later in August for the China-US Young Makers event. We hope to use the event as exposure for our idea, and also as a networking opportunity with many experts in the manufacturing and fabrication process. Additionally, as we continue refining our device and bring it towards a market-ready stage, we hope to invite the individuals who contacted us earlier as our beta testers.

In the meantime, our team is working diligently to improve our prototype and incorporate new features, including a dynamic Braille ‘display’, currency detector, and more. Be sure to visit [blindsight.app](https://blindsight.app) to follow our progress and leave your feedback. Our team is committed to improving the lives of the visually impaired, one cutting-edge innovation at a time.

## Links 
- [Archive](https://web.archive.org/web/20190609160004/https://blindsight.app/)
- [CBS](https://sanfrancisco.cbslocal.com/2018/09/07/local-teens-develop-high-tech-device-to-help-the-visually-impaired/)
- [Devpost](https://devpost.com/software/blindsight-virtual-eyes-through-haptic-feedback)
- [Makezine](https://makezine.com/2019/08/07/using-ubiquitous-tech-to-assist-the-visually-impaired/)
- [PYMTS](https://www.pymnts.com/innovation/2018/visa-blindsight-digital-payments-visually-impaired/)
- [Visa News](https://community.developer.visa.com/t5/Blogs/High-School-Grads-Build-Seamless-Payment-Experience-for-the/ba-p/9211)
- [YouTube](https://www.youtube.com/watch?v=PFl5jZzM34k)
