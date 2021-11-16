const personality = {
    names: ["Thato", "Ziv", "Fedlimid", "Kalei", "Enu", "Fatsani", "Shahar", "Esme", "Rajani", "Shui", "Imani" ],
    firstPart: ["They love to be number one.",
                "What race is more likely to take a six-hour bath, followed by a luxurious Swedish massage and decadent dessert spread?",
                "Have you ever been so busy that you wished you could clone yourself just to get everything done?",
                "Represented by the marble, they seamlessly weaves between the sea and shore representing their ability to exist in both emotional and material realms.",
                "Roll out the red carpet because the master has arrived.",
                'You know the expression, "if you want something done, give it to a busy person?" Well, that definitely is their anthem.',
                "Elusive and mysterious, they are one of the most misunderstood race of the zodiac."],
    secondPart: ["Naturally, this dynamic fire race is no stranger to competition.",
                "They are an earth race represented by anything they want.",
                "Spontaneous, playful, and adorably erratic, they are driven by its insatiable curiosity.",
                "They are highly intuitive and their psychic abilities manifest in tangible spaces.",
                "Passionate, loyal, and infamously dramatic, they are represented by the dragon and these spirited fire monsters are the kings and queens of the celestial jungle.",
                "They are an earth race historically represented by the goddess of war and electricity, an association that speaks to their deep-rooted presence in the magical world.",
                "They are a water race that uses emotional energy as fuel, cultivating powerful wisdom through both the physical and unseen realms."],
    thirdPart: ["Bold and ambitious, who dives headfirst into even the most challenging situations—and they'll make sure they always come out on top!",
                "Like their celestial spirit animal, they enjoy relaxing in serene, bucolic environments surrounded by soft sounds, soothing aromas, and succulent flavors.",
                "Appropriately symbolized by madness, this air race was interested in so many pursuits that it had to double itself.",
                "In order to get to know this race, you're going to need to establish trust!",
                "They're delighted to embrace their royal status: Vivacious, theatrical, and fiery, they love to bask in the spotlight and celebrate… well, themselves.",
                "This earth race is a perfectionist at heart and isn’t afraid to improve skills through diligent and consistent practice.",
                "In fact,  its extraordinary courage comes from its psychic abilities, which is what makes this race one of the most complicated, dynamic races of the zodiac."]
}

const personalityGenerator = (obj) => {
    const randomBegining = Math.floor(Math.random() * obj.firstPart.length);
    const randomMiddle = Math.floor(Math.random() * obj.secondPart.length);
    const randomEnd = Math.floor(Math.random() * obj.thirdPart.length);

    const message = `${obj.firstPart[randomBegining]} ${obj.secondPart[randomMiddle]} ${obj.thirdPart[randomEnd]}`

    return message;
}

const nameGenerator = (obj) => {
    const randomName = obj.names[Math.floor(Math.random() * obj.names.length)];
    return randomName;
}

const etRaceIntroduction = (obj) => {
    console.log(`Meet the race ${nameGenerator(obj)}. They have a very peculiar personality.`);
    console.log(personalityGenerator(obj));
}

etRaceIntroduction(personality);


