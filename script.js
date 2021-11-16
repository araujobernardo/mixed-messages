const signDatabase = {
    firstPart: ["They love to be number one.",
                "What sign is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread?",
                "Have you ever been so busy that you wished you could clone yourself just to get everything done?",
                "Represented by the marble, they seamlessly weaves between the sea and shore representing their ability to exist in both emotional and material realms.",
                "Roll out the red carpet because the master has arrived.",
                'You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is their anthem.',
                "Elusive and mysterious, they are one of the most misunderstood signs of the zodiac."],
    secondPart: ["Naturally, this dynamic fire sign is no stranger to competition.",
                "They are an earth sign represented by anything they want.",
                "Spontaneous, playful, and adorably erratic, they are driven by its insatiable curiosity.",
                "They are highly intuitive and their psychic abilities manifest in tangible spaces.",
                "Passionate, loyal, and infamously dramatic, they are represented by the dragon and these spirited fire signs are the kings and queens of the celestial jungle.",
                "They are an earth sign historically represented by the goddess of war and electricity, an association that speaks to their deep-rooted presence in the magical world.",
                "They are a water sign that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms."],
    thirdPart: ["Bold and ambitious, who dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!",
                "Like their celestial spirit animal, they enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
                "Appropriately symbolized by madness, this air sign was interested in so many pursuits that it had to double itself.",
                "In order to get to know this sign, you're going to need to establish trust!",
                "They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, they love to bask in the spotlight and celebrate… well, themselves.",
                "This earth sign is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
                "In fact,  its extraordinary courage comes from its psychic abilities, which is what makes this sign one of the most complicated, dynamic signs of the zodiac."]
}

const randomMessage = (obj) => {
    const randomBegining = Math.floor(Math.random() * obj.firstPart.length);
    const randomMiddle = Math.floor(Math.random() * obj.secondPart.length);
    const randomEnd = Math.floor(Math.random() * obj.thirdPart.length);

    const message = `${obj.firstPart[randomBegining]} ${obj.secondPart[randomMiddle]} ${obj.thirdPart[randomEnd]}`

    return message;
}

randomMessage(signDatabase);