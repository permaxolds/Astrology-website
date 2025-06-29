function getZodiac() {
    const date = new Date(document.getElementById("dob").value);
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const zodiacs = [
        ["Capricorn", 19], ["Aquarius", 18], ["Pisces", 20], ["Aries", 19],
        ["Taurus", 20], ["Gemini", 20], ["Cancer", 22], ["Leo", 22],
        ["Virgo", 22], ["Libra", 22], ["Scorpio", 21], ["Sagittarius", 21], ["Capricorn", 31]
    ];

    const sign = day > zodiacs[month - 1][1] ? zodiacs[month][0] : zodiacs[month - 1][0];
    const prediction = {
        Aries: "Energy is high today! Take a bold step.",
        Taurus: "Patience will reward you today.",
        Gemini: "A new opportunity is around the corner.",
        Cancer: "Emotions may guide your decisions today.",
        Leo: "Show your leadership but stay humble.",
        Virgo: "Focus on details — success is near.",
        Libra: "Balance your choices wisely today.",
        Scorpio: "Something deep will reveal itself.",
        Sagittarius: "Adventure is calling — explore!",
        Capricorn: "Hard work pays off — keep going.",
        Aquarius: "Innovate and inspire others today.",
        Pisces: "Creativity will flow — express it."
    };

    document.getElementById("result").innerText =
        `Your Zodiac Sign is: ${sign}\nToday's Tip: ${prediction[sign] || 'Stay positive!'}`;
}