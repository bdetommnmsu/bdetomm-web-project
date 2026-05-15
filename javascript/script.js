// =============================================
//  Brad's Travel Quiz - script.js
//  File: project4/script.js
// =============================================

// Destination data: each destination has a description and tips
const destinations = {
   alaska: {
      name: "Alaska, USA",
      emoji: "🏔️",
      description:
         "You're a wilderness adventurer at heart! Alaska is your perfect match. " +
         "With its jaw-dropping national parks, towering glaciers, and incredible wildlife, " +
         "Alaska offers a scale of nature that simply can't be found anywhere else. " +
         "I've been there myself - standing in Denali National Park with mountains " +
         "stretching endlessly in every direction is something you'll never forget.",
      tips: [
         "Visit between June and August for the best weather and longest daylight hours",
         "Book national park tours and cruises well in advance - they sell out fast",
         "Pack layers - temperatures can shift dramatically throughout the day",
         "Don't miss Kenai Fjords for glacier and wildlife boat tours"
      ]
   },
   caribbean: {
      name: "The Caribbean",
      emoji: "🏖️",
      description:
         "You're a beach lover who needs to recharge in paradise! The Caribbean is calling " +
         "your name. Turquoise water, powdery white sand, fresh seafood, and a laid-back island " +
         "vibe - the Caribbean is pure bliss. Whether you pick Jamaica, the Bahamas, or the " +
         "Virgin Islands, you're in for an unforgettable escape.",
      tips: [
         "Visit December through April to avoid hurricane season",
         "Try the local cuisine - jerk chicken, conch fritters, and fresh fish are must-haves",
         "Book a snorkeling or diving excursion to explore the reefs",
         "Look for all-inclusive resorts to keep costs predictable"
      ]
   },
   hongkong: {
      name: "Hong Kong",
      emoji: "🌆",
      description:
         "You're an urban explorer who thrives on energy, incredible food, and nonstop discovery! " +
         "Hong Kong is an unforgettable city - one of the most dynamic on the planet. " +
         "I spent time there and was blown away by the skyline, the dim sum, the night markets, " +
         "and how seamlessly East meets West around every corner. Every neighborhood " +
         "has something completely different to offer.",
      tips: [
         "Visit October through December for cooler, comfortable weather",
         "Take the Peak Tram up to Victoria Peak for the iconic skyline view",
         "Use the Octopus Card for easy public transit across the whole city",
         "Don't leave without trying dim sum at a traditional tea house"
      ]
   },
   italy: {
      name: "Italy",
      emoji: "🏛️",
      description:
         "You're a culture lover with a passion for history, art, and world-class food! " +
         "Italy is your dream destination - and mine too. From the ancient Colosseum in Rome " +
         "to the canals of Venice and the rolling hills of Tuscany, Italy feels like an " +
         "open-air museum. And the food? Authentic pasta, wood-fired pizza, and fresh gelato " +
         "make every meal an event.",
      tips: [
         "Visit April through June for pleasant weather before the summer crowds arrive",
         "Book major attractions (Colosseum, Vatican) online in advance to skip lines",
         "Rent a car to explore the Tuscan countryside and small hilltop villages",
         "Learn a few basic Italian phrases - locals genuinely appreciate the effort"
      ]
   },
   japan: {
      name: "Japan",
      emoji: "⛩️",
      description:
         "You're a curious, open-minded traveler drawn to the extraordinary contrast of " +
         "ancient and modern! Japan is absolutely your destination. The neon-lit streets of " +
         "Tokyo, the serene temples of Kyoto, the food culture, the precision, the beauty - " +
         "Japan is unlike anywhere else on Earth. I've dreamed of visiting during cherry " +
         "blossom season, and after this quiz, you should too.",
      tips: [
         "Visit late March through early April for the iconic cherry blossoms",
         "Get a Japan Rail Pass before you leave home - it saves a ton on bullet trains",
         "Download Google Translate with Japanese offline - it's a lifesaver",
         "Try convenience store food (7-Eleven, Lawson) - it's surprisingly amazing"
      ]
   }
};

// Scoring map: each answer value maps to a destination key
const scoreMap = {
   // Q1 - scenery
   nature:   "alaska",
   city:     "hongkong",
   beach:    "caribbean",
   culture:  "italy",

   // Q2 - pace
   active:   "alaska",
   relaxed:  "caribbean",
   mixed:    "japan",

   // Q3 - food
   seafood:  "caribbean",
   street:   "hongkong",
   italian:  "italy",
   ramen:    "japan",

   // Q4 - activity
   hiking:     "alaska",
   snorkeling: "caribbean",
   museums:    "italy",
   temples:    "japan"
};

// Event listener on the form submit button
document.getElementById("quizForm").addEventListener("submit", function(event) {
   event.preventDefault();
   runQuiz();
});

// Reset button hides the result section
document.getElementById("resetBtn").addEventListener("click", function() {
   document.getElementById("resultSection").classList.add("hidden");
});

function runQuiz() {
   // Get traveler name
   const name = document.getElementById("travelerName").value.trim();
   if (!name) {
      alert("Please enter your name before submitting!");
      return;
   }

   // Collect selected radio answers
   const answers = [];
   const questions = ["q1", "q2", "q3", "q4"];

   for (let i = 0; i < questions.length; i++) {
      const selected = document.querySelector('input[name="' + questions[i] + '"]:checked');
      if (!selected) {
         alert("Please answer all questions before submitting!");
         return;
      }
      answers.push(selected.value);
   }

   // Tally scores for each destination
   const tally = {
      alaska: 0,
      caribbean: 0,
      hongkong: 0,
      italy: 0,
      japan: 0
   };

   for (let i = 0; i < answers.length; i++) {
      const dest = scoreMap[answers[i]];
      if (dest) {
         tally[dest]++;
      }
   }

   // Find the destination with the highest score
   let topDest = "japan";
   let topScore = -1;

   for (const dest in tally) {
      if (tally[dest] > topScore) {
         topScore = tally[dest];
         topDest = dest;
      }
   }

   // Display the result
   displayResult(name, destinations[topDest]);
}

function displayResult(name, dest) {
   const resultSection = document.getElementById("resultSection");
   const resultGreeting = document.getElementById("resultGreeting");
   const resultContent = document.getElementById("resultContent");

   // Build greeting
   resultGreeting.textContent = "Hey " + name + "! Your perfect destination is...";

   // Build result content
   resultContent.innerHTML =
      '<span class="result-emoji">' + dest.emoji + '</span>' +
      '<p class="result-destination">' + dest.name + '</p>' +
      '<p>' + dest.description + '</p>' +
      '<h3>Top Tips for ' + dest.name + '</h3>' +
      '<ul>' +
         dest.tips.map(function(tip) { return '<li>' + tip + '</li>'; }).join('') +
      '</ul>';

   // Show the result section
   resultSection.classList.remove("hidden");

   // Smoothly scroll to result
   resultSection.scrollIntoView({ behavior: "smooth", block: "start" });
}
