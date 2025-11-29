import { Collocation } from "../context/CollocationContext";

// Comprehensive collocation list combining existing entries with the Academic Collocation List.
export const collocations: Collocation[] = [
  // --- VERB + NOUN ---
  {
    id: "1",
    text: "make a decision",
    pattern: "verb+noun",
    topics: ["General", "Business"],
    definition: "To decide something after thinking about it.",
    example: "We need to make a decision regarding the budget by tomorrow.",
  },
  {
    id: "2",
    text: "take a risk",
    pattern: "verb+noun",
    topics: ["Business", "Life"],
    definition: "To do something that might result in loss or failure.",
    example: "Entrepreneurs often have to take a risk to succeed.",
  },
  {
    id: "3",
    text: "keep a promise",
    pattern: "verb+noun",
    topics: ["Relationships", "Ethics"],
    definition: "To do what you said you would do.",
    example:
      "It is important to keep a promise if you want people to trust you.",
  },
  {
    id: "4",
    text: "catch a cold",
    pattern: "verb+noun",
    topics: ["Health"],
    definition: "To become sick with a common cold.",
    example: "Wear a coat or you might catch a cold.",
  },
  {
    id: "5",
    text: "pay attention",
    pattern: "verb+noun",
    topics: ["Education", "General"],
    definition: "To listen or watch carefully.",
    example: "Please pay attention to the safety instructions.",
  },

  // --- ADJECTIVE + NOUN ---
  {
    id: "6",
    text: "heavy rain",
    pattern: "adj+noun",
    topics: ["Weather"],
    definition: "Rain that falls with great intensity.",
    example: "The heavy rain caused flooding in the streets.",
  },
  {
    id: "7",
    text: "strong coffee",
    pattern: "adj+noun",
    topics: ["Food & Drink"],
    definition: "Coffee that has a potent flavor or high caffeine content.",
    example: "I need a cup of strong coffee to wake up this morning.",
  },
  {
    id: "8",
    text: "valid reason",
    pattern: "adj+noun",
    topics: ["General", "Law"],
    definition: "A reason that is logical and acceptable.",
    example: "She had a valid reason for missing the meeting.",
  },
  {
    id: "9",
    text: "golden opportunity",
    pattern: "adj+noun",
    topics: ["Business", "Success"],
    definition: "An excellent chance to do something.",
    example: "This job offer is a golden opportunity for your career.",
  },
  {
    id: "10",
    text: "heavy traffic",
    pattern: "adj+noun",
    topics: ["Travel", "City Life"],
    definition: "A large number of vehicles on the road.",
    example: "We arrived late due to heavy traffic.",
  },

  // --- VERB + PREPOSITION ---
  {
    id: "11",
    text: "apologize for",
    pattern: "verb+prep",
    topics: ["Social", "Politeness"],
    definition: "To say sorry for something.",
    example: "He needed to apologize for his rude behavior.",
  },
  {
    id: "12",
    text: "believe in",
    pattern: "verb+prep",
    topics: ["Personal", "Religion"],
    definition: "To feel sure that someone or something exists or is good.",
    example: "Do you believe in ghosts?",
  },
  {
    id: "13",
    text: "depend on",
    pattern: "verb+prep",
    topics: ["General"],
    definition: "To be determined or decided by something.",
    example: "Our plans depend on the weather.",
  },
  {
    id: "14",
    text: "complain about",
    pattern: "verb+prep",
    topics: ["Service", "General"],
    definition: "To say that you are annoyed or unhappy about something.",
    example: "They called the manager to complain about the service.",
  },
  {
    id: "15",
    text: "insist on",
    pattern: "verb+prep",
    topics: ["Communication"],
    definition: "To demand that something happen.",
    example: "I insist on paying for dinner tonight.",
  },

  // --- ADVERB + ADJECTIVE ---
  {
    id: "16",
    text: "highly unlikely",
    pattern: "adv+adj",
    topics: ["Probability"],
    definition: "Very improbable.",
    example: "It is highly unlikely that the price will drop soon.",
  },
  {
    id: "17",
    text: "utterly ridiculous",
    pattern: "adv+adj",
    topics: ["Opinion"],
    definition: "Completely absurd or unreasonable.",
    example: "The suggestion he made was utterly ridiculous.",
  },
  {
    id: "18",
    text: "deeply concerned",
    pattern: "adv+adj", // Can also be adv+vpp depending on linguistic view
    topics: ["Emotions", "Formal"],
    definition: "Very worried about something.",
    example: "I am deeply concerned about the environmental impact.",
  },
  {
    id: "19",
    text: "fully aware",
    pattern: "adv+adj",
    topics: ["Knowledge"],
    definition: "Knowing something completely.",
    example: "He was fully aware of the risks involved.",
  },
  {
    id: "20",
    text: "virtually impossible",
    pattern: "adv+adj",
    topics: ["General"],
    definition: "Almost impossible.",
    example: "It is virtually impossible to memorize the entire dictionary.",
  },

  // --- ADVERB + VPP (Past Participle) ---
  {
    id: "21",
    text: "badly damaged",
    pattern: "adv+vpp",
    topics: ["Accidents"],
    definition: "Having sustained significant physical harm.",
    example: "The car was badly damaged in the accident.",
  },
  {
    id: "22",
    text: "well known",
    pattern: "adv+vpp",
    topics: ["Fame"],
    definition: "Known by many people.",
    example: "He is a well known author in the science fiction genre.",
  },
  {
    id: "23",
    text: "bitterly disappointed",
    pattern: "adv+vpp",
    topics: ["Emotions"],
    definition:
      "Extremely sad or displeased because expectations were not met.",
    example: "She was bitterly disappointed when she didn't get the job.",
  },
  {
    id: "24",
    text: "widely accepted",
    pattern: "adv+vpp",
    topics: ["Science", "Culture"],
    definition: "Agreed upon by many people.",
    example: "This theory is now widely accepted by scientists.",
  },
  {
    id: "25",
    text: "heavily involved",
    pattern: "adv+vpp",
    topics: ["Work", "Activities"],
    definition: "Playing a major role in an activity.",
    example: "She became heavily involved in local politics.",
  },

  // --- NOUN + NOUN ---
  {
    id: "26",
    text: "round of applause",
    pattern: "noun+noun",
    topics: ["Events"],
    definition: "A period of clapping from an audience.",
    example: "Let's give the performers a big round of applause.",
  },
  {
    id: "27",
    text: "bar of soap",
    pattern: "noun+noun",
    topics: ["Household"],
    definition: "A solid block of soap.",
    example: "Please buy a bar of soap from the store.",
  },
  {
    id: "28",
    text: "piece of advice",
    pattern: "noun+noun",
    topics: ["Communication"],
    definition: "A single suggestion given to someone.",
    example: "Let me give you a piece of advice: start early.",
  },
  {
    id: "29",
    text: "sense of humor",
    pattern: "noun+noun",
    topics: ["Personality"],
    definition: "The ability to find things funny.",
    example: "He has a dry sense of humor that not everyone understands.",
  },
  {
    id: "30",
    text: "waste of time",
    pattern: "noun+noun",
    topics: ["General"],
    definition: "A bad use of time.",
    example: "Arguing with him is a complete waste of time.",
  },

  // --- VERB + ADVERB ---
  {
    id: "31",
    text: "whisper softly",
    pattern: "verb+adv",
    topics: ["Communication"],
    definition: "To speak very quietly.",
    example: "She leaned in to whisper softly in his ear.",
  },
  {
    id: "32",
    text: "work hard",
    pattern: "verb+adv",
    topics: ["Work", "Effort"],
    definition: "To put a lot of effort into a task.",
    example: "You must work hard if you want to be promoted.",
  },
  {
    id: "33",
    text: "recover fully",
    pattern: "verb+adv",
    topics: ["Health"],
    definition: "To return to complete health.",
    example: "It took him months to recover fully from the surgery.",
  },
  {
    id: "34",
    text: "listen carefully",
    pattern: "verb+adv",
    topics: ["Education", "Communication"],
    definition: "To pay close attention to what is being heard.",
    example: "Listen carefully to the instructions before starting.",
  },
  {
    id: "35",
    text: "decline politely",
    pattern: "verb+adv",
    topics: ["Social"],
    definition: "To say no in a respectful way.",
    example: "I had to decline politely because I was already busy.",
  },

  // --- VERB + ADJECTIVE ---
  {
    id: "36",
    text: "go crazy",
    pattern: "verb+adj",
    topics: ["Emotions", "Mental State"],
    definition: "To become very excited or angry.",
    example: "The crowd will go crazy when the band walks out.",
  },
  {
    id: "37",
    text: "fall asleep",
    pattern: "verb+adj",
    topics: ["Health", "Daily Life"],
    definition: "To start sleeping.",
    example: "I usually fall asleep around 10 PM.",
  },
  {
    id: "38",
    text: "come true",
    pattern: "verb+adj",
    topics: ["Hopes"],
    definition: "To actually happen (usually regarding dreams/wishes).",
    example: "Her dream of becoming a doctor finally came true.",
  },
  {
    id: "39",
    text: "get ready",
    pattern: "verb+adj",
    topics: ["Daily Life"],
    definition: "To prepare oneself.",
    example: "We need to get ready for the party.",
  },
  {
    id: "40",
    text: "keep quiet",
    pattern: "verb+adj",
    topics: ["Behavior"],
    definition: "To remain silent.",
    example: "Please keep quiet while the exam is in progress.",
  },

  // --- ADVERB + VERB ---
  {
    id: "41",
    text: "strongly recommend",
    pattern: "adv+verb",
    topics: ["Opinion"],
    definition: "To advise something with great conviction.",
    example: "I strongly recommend that you read this book.",
  },
  {
    id: "42",
    text: "deeply regret",
    pattern: "adv+verb",
    topics: ["Emotions", "Formal"],
    definition: "To feel very sorry about something.",
    example: "I deeply regret causing you any trouble.",
  },
  {
    id: "43",
    text: "hardly know",
    pattern: "adv+verb",
    topics: ["Relationships"],
    definition: "To know someone very little.",
    example: "I hardly know my neighbors.",
  },
  {
    id: "44",
    text: "finally decide",
    pattern: "adv+verb",
    topics: ["Decision Making"],
    definition: "To make a choice after a long time.",
    example: "They finally decided to move to the countryside.",
  },
  {
    id: "45",
    text: "carefully consider",
    pattern: "adv+verb",
    topics: ["Thinking"],
    definition: "To think about something thoroughly.",
    example: "You should carefully consider all options.",
  },

  // --- MIXED BATCH FOR VARIETY ---
  {
    id: "46",
    text: "burst into tears",
    pattern: "verb+prep", // Phrase structure
    topics: ["Emotions"],
    definition: "To suddenly start crying.",
    example: "She burst into tears after hearing the bad news.",
  },
  {
    id: "47",
    text: "vicious circle",
    pattern: "adj+noun",
    topics: ["Logic", "Problems"],
    definition:
      "A situation in which one problem causes another, which then causes the first problem again.",
    example: "Borrowing money to pay debts creates a vicious circle.",
  },
  {
    id: "48",
    text: "drive carefully",
    pattern: "verb+adv",
    topics: ["Transport"],
    definition: "To operate a vehicle with caution.",
    example: "It is snowing, so please drive carefully.",
  },
  {
    id: "49",
    text: "strictly forbidden",
    pattern: "adv+vpp",
    topics: ["Rules"],
    definition: "Not allowed under any circumstances.",
    example: "Smoking is strictly forbidden in this area.",
  },
  {
    id: "50",
    text: "make a mess",
    pattern: "verb+noun",
    topics: ["Household"],
    definition: "To make things untidy or dirty.",
    example: "Try not to make a mess in the kitchen.",
  },
  {
    id: "51",
    text: "break a habit",
    pattern: "verb+noun",
    topics: ["Psychology", "Lifestyle"],
    definition: "To stop doing something that you do regularly.",
    example: "It takes about 21 days to break a habit.",
  },
  {
    id: "52",
    text: "catch a bus",
    pattern: "verb+noun",
    topics: ["Transport"],
    definition: "To get on a bus to travel somewhere.",
    example: "I have to run to catch a bus to work.",
  },
  {
    id: "53",
    text: "keep a secret",
    pattern: "verb+noun",
    topics: ["Social", "Trust"],
    definition: "To not tell anyone information that is meant to be hidden.",
    example: "Can you keep a secret if I tell you?",
  },
  {
    id: "54",
    text: "save money",
    pattern: "verb+noun",
    topics: ["Finance"],
    definition: "To keep money for future use rather than spending it.",
    example: "We are trying to save money for a new house.",
  },
  {
    id: "55",
    text: "change the subject",
    pattern: "verb+noun",
    topics: ["Communication"],
    definition: "To start talking about something different.",
    example: "He became uncomfortable and tried to change the subject.",
  },
  {
    id: "56",
    text: "do the dishes",
    pattern: "verb+noun",
    topics: ["Chores"],
    definition: "To wash the plates, cups, and cutlery.",
    example: "I will cook dinner if you do the dishes.",
  },
  {
    id: "57",
    text: "give advice",
    pattern: "verb+noun",
    topics: ["Communication"],
    definition: "To offer suggestions to someone about what to do.",
    example: "My father likes to give advice on financial matters.",
  },
  {
    id: "58",
    text: "have a good time",
    pattern: "verb+noun",
    topics: ["Social", "Leisure"],
    definition: "To enjoy oneself.",
    example: "Did you have a good time at the party?",
  },
  {
    id: "59",
    text: "make a mistake",
    pattern: "verb+noun",
    topics: ["General"],
    definition: "To do something incorrect.",
    example: "Don't worry if you make a mistake; just learn from it.",
  },
  {
    id: "60",
    text: "take a break",
    pattern: "verb+noun",
    topics: ["Work", "Health"],
    definition: "To stop working for a short time to rest.",
    example: "You have been studying for hours; you should take a break.",
  },

  // --- ADJECTIVE + NOUN ---
  {
    id: "61",
    text: "bright future",
    pattern: "adj+noun",
    topics: ["Life", "Career"],
    definition: "A future that is likely to be successful and happy.",
    example: "That young student has a bright future ahead of her.",
  },
  {
    id: "62",
    text: "common sense",
    pattern: "adj+noun",
    topics: ["Intelligence"],
    definition: "Good sense and sound judgment in practical matters.",
    example: "Using a seatbelt is just common sense.",
  },
  {
    id: "63",
    text: "early riser",
    pattern: "adj+noun",
    topics: ["Lifestyle"],
    definition: "Someone who usually wakes up early in the morning.",
    example: "I am not an early riser, so I hate morning meetings.",
  },
  {
    id: "64",
    text: "fresh air",
    pattern: "adj+noun",
    topics: ["Health", "Nature"],
    definition: "Air outside that is clean and cool.",
    example: "Let's go for a walk and get some fresh air.",
  },
  {
    id: "65",
    text: "high quality",
    pattern: "adj+noun",
    topics: ["Shopping", "Business"],
    definition: "Of a very good standard.",
    example: "They only sell high quality goods in that shop.",
  },
  {
    id: "66",
    text: "loud noise",
    pattern: "adj+noun",
    topics: ["Sensory"],
    definition: "A sound that has high volume.",
    example: "I heard a loud noise coming from the basement.",
  },
  {
    id: "67",
    text: "quick fix",
    pattern: "adj+noun",
    topics: ["Problem Solving"],
    definition: "A fast and easy solution that might not last long.",
    example: "Tape is just a quick fix; we need to repair it properly.",
  },
  {
    id: "68",
    text: "regular exercise",
    pattern: "adj+noun",
    topics: ["Health"],
    definition: "Physical activity done on a consistent basis.",
    example: "Regular exercise is key to a healthy heart.",
  },
  {
    id: "69",
    text: "rough idea",
    pattern: "adj+noun",
    topics: ["Planning"],
    definition: "A general understanding without details.",
    example: "I have a rough idea of what the project will cost.",
  },
  {
    id: "70",
    text: "social life",
    pattern: "adj+noun",
    topics: ["Lifestyle"],
    definition: "The time spent enjoying oneself with friends.",
    example: "Since starting his new job, his social life has suffered.",
  },

  // --- VERB + PREPOSITION ---
  {
    id: "71",
    text: "agree with",
    pattern: "verb+prep",
    topics: ["Communication"],
    definition: "To have the same opinion as someone.",
    example: "I totally agree with your assessment of the situation.",
  },
  {
    id: "72",
    text: "belong to",
    pattern: "verb+prep",
    topics: ["Ownership"],
    definition: "To be the property of.",
    example: "Does this bag belong to you?",
  },
  {
    id: "73",
    text: "care for",
    pattern: "verb+prep",
    topics: ["Relationships", "Health"],
    definition: "To look after someone or like something.",
    example: "She stayed home to care for her sick mother.",
  },
  {
    id: "74",
    text: "deal with",
    pattern: "verb+prep",
    topics: ["Business", "Problems"],
    definition: "To take action to solve a problem.",
    example: "I have to deal with a difficult client today.",
  },
  {
    id: "75",
    text: "focus on",
    pattern: "verb+prep",
    topics: ["Work", "Education"],
    definition: "To give all your attention to something.",
    example: "Please focus on your own work.",
  },
  {
    id: "76",
    text: "laugh at",
    pattern: "verb+prep",
    topics: ["Emotions"],
    definition: "To make sounds showing amusement regarding something.",
    example: "It is rude to laugh at someone when they fall.",
  },
  {
    id: "77",
    text: "prepare for",
    pattern: "verb+prep",
    topics: ["Planning"],
    definition: "To make oneself ready for an event.",
    example: "Students need time to prepare for the final exams.",
  },
  {
    id: "78",
    text: "rely on",
    pattern: "verb+prep",
    topics: ["Trust"],
    definition: "To trust someone to do something.",
    example: "You can rely on him to finish the job on time.",
  },
  {
    id: "79",
    text: "wait for",
    pattern: "verb+prep",
    topics: ["Time"],
    definition: "To stay in a place until something happens.",
    example: "I will wait for you at the station.",
  },
  {
    id: "80",
    text: "succeed in",
    pattern: "verb+prep",
    topics: ["Success"],
    definition: "To achieve a desired aim or result.",
    example: "He hopes to succeed in the technology industry.",
  },

  // --- ADVERB + ADJECTIVE ---
  {
    id: "81",
    text: "bitterly cold",
    pattern: "adv+adj",
    topics: ["Weather"],
    definition: "Extremely cold.",
    example: "It was bitterly cold outside, so we stayed indoors.",
  },
  {
    id: "82",
    text: "completely different",
    pattern: "adv+adj",
    topics: ["Comparison"],
    definition: "Not the same in any way.",
    example: "The two sisters are completely different in personality.",
  },
  {
    id: "83",
    text: "dangerously close",
    pattern: "adv+adj",
    topics: ["Risk"],
    definition: "Very near to a dangerous situation.",
    example: "The fire came dangerously close to the houses.",
  },
  {
    id: "84",
    text: "entirely clear",
    pattern: "adv+adj",
    topics: ["Understanding"],
    definition: "Completely easy to understand.",
    example: "It wasn't entirely clear what he meant by that.",
  },
  {
    id: "85",
    text: "happily married",
    pattern: "adv+adj",
    topics: ["Relationships"],
    definition: "Having a good marriage.",
    example: "They have been happily married for 20 years.",
  },
  {
    id: "86",
    text: "perfectly normal",
    pattern: "adv+adj",
    topics: ["General"],
    definition: "Completely standard or expected.",
    example: "It is perfectly normal to feel nervous before a speech.",
  },
  {
    id: "87",
    text: "readily available",
    pattern: "adv+adj",
    topics: ["Business", "Shopping"],
    definition: "Easy to get or use.",
    example: "Fresh fruit is readily available in the market.",
  },
  {
    id: "88",
    text: "reasonably priced",
    pattern: "adv+adj",
    topics: ["Shopping"],
    definition: "Not too expensive.",
    example: "The food at that restaurant is reasonably priced.",
  },
  {
    id: "89",
    text: "seriously ill",
    pattern: "adv+adj",
    topics: ["Health"],
    definition: "Very sick.",
    example: "He couldn't come to work because he is seriously ill.",
  },
  {
    id: "90",
    text: "totally unacceptable",
    pattern: "adv+adj",
    topics: ["Opinion", "Rules"],
    definition: "Not allowed or approved of at all.",
    example: "Being late every day is totally unacceptable.",
  },

  // --- ADVERB + VPP (Past Participle) ---
  {
    id: "91",
    text: "badly injured",
    pattern: "adv+vpp",
    topics: ["Health", "Accidents"],
    definition: "Having severe physical injuries.",
    example: "Fortunately, no one was badly injured in the crash.",
  },
  {
    id: "92",
    text: "brightly colored",
    pattern: "adv+vpp",
    topics: ["Visual"],
    definition: "Having strong, vivid colors.",
    example: "The bird has brightly colored feathers.",
  },
  {
    id: "93",
    text: "deeply rooted",
    pattern: "adv+vpp",
    topics: ["History", "Culture"],
    definition: "Firmly established over a long time.",
    example: "These traditions are deeply rooted in our culture.",
  },
  {
    id: "94",
    text: "highly recommended",
    pattern: "adv+vpp",
    topics: ["Opinion"],
    definition: "Suggesting that something is very good.",
    example: "This hotel is highly recommended by travelers.",
  },
  {
    id: "95",
    text: "poorly designed",
    pattern: "adv+vpp",
    topics: ["Technology", "Art"],
    definition: "Created without skill or thought.",
    example: "The website was poorly designed and hard to use.",
  },
  {
    id: "96",
    text: "strictly controlled",
    pattern: "adv+vpp",
    topics: ["Law", "Science"],
    definition: "Regulated with tight rules.",
    example: "Access to the laboratory is strictly controlled.",
  },
  {
    id: "97",
    text: "vastly improved",
    pattern: "adv+vpp",
    topics: ["Progress"],
    definition: "Much better than before.",
    example: "The software's performance is vastly improved in the new update.",
  },
  {
    id: "98",
    text: "widely known",
    pattern: "adv+vpp",
    topics: ["Fame"],
    definition: "Famous or recognized by many.",
    example: "It is a widely known fact that smoking is harmful.",
  },
  {
    id: "99",
    text: "densely populated",
    pattern: "adv+vpp",
    topics: ["Geography"],
    definition: "Having many people living in a small area.",
    example: "Tokyo is a densely populated city.",
  },
  {
    id: "100",
    text: "emotionally drained",
    pattern: "adv+vpp",
    topics: ["Psychology"],
    definition: "Feeling no mental energy.",
    example: "After the funeral, she felt emotionally drained.",
  },

  // --- NOUN + NOUN ---
  {
    id: "101",
    text: "bouquet of flowers",
    pattern: "noun+noun",
    topics: ["Gifts"],
    definition: "A bunch of flowers arranged attractively.",
    example: "He brought her a bouquet of flowers for her birthday.",
  },
  {
    id: "102",
    text: "bunch of keys",
    pattern: "noun+noun",
    topics: ["Household"],
    definition: "Several keys on a ring.",
    example: "I lost my bunch of keys somewhere in the park.",
  },
  {
    id: "103",
    text: "crime scene",
    pattern: "noun+noun",
    topics: ["Law"],
    definition: "The place where a crime happened.",
    example: "Police taped off the crime scene.",
  },
  {
    id: "104",
    text: "flash of lightning",
    pattern: "noun+noun",
    topics: ["Weather"],
    definition: "A sudden bright light in the sky during a storm.",
    example: "We saw a bright flash of lightning followed by thunder.",
  },
  {
    id: "105",
    text: "labor market",
    pattern: "noun+noun",
    topics: ["Economics"],
    definition: "The supply and demand for labor.",
    example: "The labor market is very competitive right now.",
  },
  {
    id: "106",
    text: "loaf of bread",
    pattern: "noun+noun",
    topics: ["Food"],
    definition: "Bread baked in a single large piece.",
    example: "We need to buy a loaf of bread for breakfast.",
  },
  {
    id: "107",
    text: "pack of lies",
    pattern: "noun+noun",
    topics: ["Conflict"],
    definition: "A story that is completely untrue.",
    example: "Everything he told you was a pack of lies.",
  },
  {
    id: "108",
    text: "peace of mind",
    pattern: "noun+noun",
    topics: ["Psychology"],
    definition: "A feeling of being safe or not worried.",
    example: "Insurance gives you peace of mind in case of accidents.",
  },
  {
    id: "109",
    text: "quality of life",
    pattern: "noun+noun",
    topics: ["Sociology", "Health"],
    definition: "The general well-being of individuals.",
    example: "Moving to the country improved his quality of life.",
  },
  {
    id: "110",
    text: "word of mouth",
    pattern: "noun+noun",
    topics: ["Marketing"],
    definition: "Information passed from person to person.",
    example: "The restaurant became famous purely through word of mouth.",
  },

  // --- VERB + ADVERB ---
  {
    id: "111",
    text: "breathe deeply",
    pattern: "verb+adv",
    topics: ["Health"],
    definition: "To take a large amount of air into the lungs.",
    example: "When you feel stressed, close your eyes and breathe deeply.",
  },
  {
    id: "112",
    text: "eat healthy",
    pattern: "verb+adv",
    topics: ["Diet"],
    definition: "To consume nutritious food.",
    example: "It is difficult to eat healthy when traveling.",
  },
  {
    id: "113",
    text: "fight hard",
    pattern: "verb+adv",
    topics: ["Sports", "Conflict"],
    definition: "To make a lot of effort to win or survive.",
    example: "The team had to fight hard to win the championship.",
  },
  {
    id: "114",
    text: "increase dramatically",
    pattern: "verb+adv",
    topics: ["Business", "Statistics"],
    definition: "To go up by a large amount.",
    example: "Sales tend to increase dramatically in December.",
  },
  {
    id: "115",
    text: "rain heavily",
    pattern: "verb+adv",
    topics: ["Weather"],
    definition: "To rain with great intensity.",
    example: "It began to rain heavily as soon as we left.",
  },
  {
    id: "116",
    text: "search frantically",
    pattern: "verb+adv",
    topics: ["Action"],
    definition: "To look for something in a panicked way.",
    example: "She searched frantically for her lost passport.",
  },
  {
    id: "117",
    text: "shine brightly",
    pattern: "verb+adv",
    topics: ["Nature"],
    definition: "To give out a lot of light.",
    example: "The stars shine brightly in the desert sky.",
  },
  {
    id: "118",
    text: "speak fluently",
    pattern: "verb+adv",
    topics: ["Language"],
    definition: "To speak a language easily and correctly.",
    example: "He can speak fluently in three languages.",
  },
  {
    id: "119",
    text: "travel light",
    pattern: "verb+adv",
    topics: ["Travel"],
    definition: "To travel with very little luggage.",
    example: "I prefer to travel light to avoid checking bags.",
  },
  {
    id: "120",
    text: "treat fairly",
    pattern: "verb+adv",
    topics: ["Justice"],
    definition: "To deal with someone in a just way.",
    example: "All employees should be treated fairly.",
  },

  // --- VERB + ADJECTIVE ---
  {
    id: "121",
    text: "appear calm",
    pattern: "verb+adj",
    topics: ["Behavior"],
    definition: "To look like one is not worried.",
    example: "He tried to appear calm despite the chaos.",
  },
  {
    id: "122",
    text: "become famous",
    pattern: "verb+adj",
    topics: ["Fame"],
    definition: "To get known by many people.",
    example: "She moved to Hollywood to become famous.",
  },
  {
    id: "123",
    text: "feel sick",
    pattern: "verb+adj",
    topics: ["Health"],
    definition: "To feel unwell.",
    example: "I started to feel sick after eating the seafood.",
  },
  {
    id: "124",
    text: "get married",
    pattern: "verb+adj",
    topics: ["Life Events"],
    definition: "To become husband or wife.",
    example: "They plan to get married next summer.",
  },
  {
    id: "125",
    text: "grow old",
    pattern: "verb+adj",
    topics: ["Life"],
    definition: "To age.",
    example: "I want to grow old with you.",
  },
  {
    id: "126",
    text: "look good",
    pattern: "verb+adj",
    topics: ["Appearance"],
    definition: "To have a pleasing appearance.",
    example: "That new haircut makes you look good.",
  },
  {
    id: "127",
    text: "remain silent",
    pattern: "verb+adj",
    topics: ["Behavior", "Law"],
    definition: "To not speak.",
    example: "You have the right to remain silent.",
  },
  {
    id: "128",
    text: "seem happy",
    pattern: "verb+adj",
    topics: ["Emotions"],
    definition: "To appear to be content.",
    example: "The children seem happy at their new school.",
  },
  {
    id: "129",
    text: "smell fresh",
    pattern: "verb+adj",
    topics: ["Sensory"],
    definition: "To have a clean scent.",
    example: "I love it when the laundry smells fresh.",
  },
  {
    id: "130",
    text: "stay awake",
    pattern: "verb+adj",
    topics: ["Health"],
    definition: "To not go to sleep.",
    example: "It was hard to stay awake during the boring movie.",
  },

  // --- ADVERB + VERB ---
  {
    id: "131",
    text: "clearly understand",
    pattern: "adv+verb",
    topics: ["Communication"],
    definition: "To comprehend without confusion.",
    example: "I clearly understand your instructions.",
  },
  {
    id: "132",
    text: "firmly believe",
    pattern: "adv+verb",
    topics: ["Opinion"],
    definition: "To believe something very strongly.",
    example: "I firmly believe that honesty is the best policy.",
  },
  {
    id: "133",
    text: "gently remind",
    pattern: "adv+verb",
    topics: ["Politeness"],
    definition: "To remind someone in a soft way.",
    example: "She gently reminded him about the appointment.",
  },
  {
    id: "134",
    text: "honestly think",
    pattern: "adv+verb",
    topics: ["Opinion"],
    definition: "To truly have a specific thought.",
    example: "I honestly think we should start over.",
  },
  {
    id: "135",
    text: "immediately regret",
    pattern: "adv+verb",
    topics: ["Emotions"],
    definition: "To feel sorry about something as soon as it is done.",
    example: "He sent the angry email and immediately regretted it.",
  },
  {
    id: "136",
    text: "kindly request",
    pattern: "adv+verb",
    topics: ["Formal"],
    definition: "To ask politely.",
    example: "Guests are kindly requested to leave their keys at the desk.",
  },
  {
    id: "137",
    text: "quickly forget",
    pattern: "adv+verb",
    topics: ["Memory"],
    definition: "To not remember something soon after learning it.",
    example: "Children often learn fast but quickly forget.",
  },
  {
    id: "138",
    text: "rarely go",
    pattern: "adv+verb",
    topics: ["Habits"],
    definition: "To not go somewhere often.",
    example: "I rarely go to the cinema these days.",
  },
  {
    id: "139",
    text: "thoroughly enjoy",
    pattern: "adv+verb",
    topics: ["Emotions"],
    definition: "To have a very good time doing something.",
    example: "We thoroughly enjoyed the performance.",
  },
  {
    id: "140",
    text: "usually arrive",
    pattern: "adv+verb",
    topics: ["Time"],
    definition: "To normally get to a destination.",
    example: "The train usually arrives on time.",
  },

  // --- MIXED BATCH (Noun+Noun, Verb+Noun, etc.) ---
  {
    id: "141",
    text: "bitter end",
    pattern: "adj+noun",
    topics: ["Conflict"],
    definition: "The final, often difficult, conclusion.",
    example: "He fought the lawsuit to the bitter end.",
  },
  {
    id: "142",
    text: "catch fire",
    pattern: "verb+noun",
    topics: ["Accidents"],
    definition: "To start burning.",
    example: "The dry grass can easily catch fire in summer.",
  },
  {
    id: "143",
    text: "dead end",
    pattern: "noun+noun", // or adj+noun
    topics: ["Travel", "Metaphor"],
    definition: "A street with no exit, or a situation with no future.",
    example: "This research led to a dead end.",
  },
  {
    id: "144",
    text: "fast food",
    pattern: "adj+noun",
    topics: ["Food"],
    definition: "Food that is prepared and served quickly.",
    example: "Eating too much fast food is bad for your health.",
  },
  {
    id: "145",
    text: "go bald",
    pattern: "verb+adj",
    topics: ["Appearance"],
    definition: "To lose one's hair.",
    example: "He started to go bald in his thirties.",
  },
  {
    id: "146",
    text: "keep in touch",
    pattern: "verb+prep", // Phrase structure
    topics: ["Relationships"],
    definition: "To maintain contact with someone.",
    example: "Let's keep in touch after graduation.",
  },
  {
    id: "147",
    text: "maiden voyage",
    pattern: "noun+noun",
    topics: ["Travel"],
    definition: "The first journey of a ship or aircraft.",
    example: "The Titanic sank on its maiden voyage.",
  },
  {
    id: "148",
    text: "run out of",
    pattern: "verb+prep",
    topics: ["Supply"],
    definition: "To have none left.",
    example: "We have run out of milk.",
  },
  {
    id: "149",
    text: "short memory",
    pattern: "adj+noun",
    topics: ["Memory"],
    definition: "The inability to remember things for long.",
    example: "The public has a short memory for political scandals.",
  },
  {
    id: "150",
    text: "take a seat",
    pattern: "verb+noun",
    topics: ["Politeness"],
    definition: "To sit down.",
    example: "Please come in and take a seat.",
  },
  // --- VERB + NOUN ---
  {
    id: '151',
    text: 'break the law',
    pattern: 'verb+noun',
    topics: ['Law', 'Crime'],
    definition: 'To do something illegal.',
    example: 'You will be arrested if you break the law.'
  },
  {
    id: '152',
    text: 'catch sight of',
    pattern: 'verb+noun',
    topics: ['Vision'],
    definition: 'To see something suddenly or briefly.',
    example: 'I managed to catch sight of the eagle before it flew away.'
  },
  {
    id: '153',
    text: 'keep a diary',
    pattern: 'verb+noun',
    topics: ['Habits', 'Writing'],
    definition: 'To write down your daily thoughts and experiences.',
    example: 'She likes to keep a diary of her travels.'
  },
  {
    id: '154',
    text: 'save time',
    pattern: 'verb+noun',
    topics: ['Efficiency'],
    definition: 'To use less time to do something.',
    example: 'Taking the highway will help us save time.'
  },
  {
    id: '155',
    text: 'take advantage',
    pattern: 'verb+noun',
    topics: ['General'],
    definition: 'To make good use of an opportunity (or exploit someone).',
    example: 'You should take advantage of the sunny weather and go out.'
  },
  {
    id: '156',
    text: 'pay a visit',
    pattern: 'verb+noun',
    topics: ['Social'],
    definition: 'To go to see someone.',
    example: 'We should pay a visit to your grandmother this weekend.'
  },
  {
    id: '157',
    text: 'make an effort',
    pattern: 'verb+noun',
    topics: ['Behavior'],
    definition: 'To try hard to do something.',
    example: 'Please make an effort to arrive on time.'
  },
  {
    id: '158',
    text: 'do homework',
    pattern: 'verb+noun',
    topics: ['Education'],
    definition: 'To complete school tasks at home.',
    example: 'I can\'t play until I do my homework.'
  },
  {
    id: '159',
    text: 'have a chat',
    pattern: 'verb+noun',
    topics: ['Communication'],
    definition: 'To talk informally.',
    example: 'Let\'s sit down and have a chat about your plans.'
  },
  {
    id: '160',
    text: 'give a speech',
    pattern: 'verb+noun',
    topics: ['Public Speaking'],
    definition: 'To speak formally to an audience.',
    example: 'The president will give a speech tonight.'
  },

  // --- ADJECTIVE + NOUN ---
  {
    id: '161',
    text: 'close friend',
    pattern: 'adj+noun',
    topics: ['Relationships'],
    definition: 'A friend you know very well and like very much.',
    example: 'He is a close friend from my college days.'
  },
  {
    id: '162',
    text: 'cold shower',
    pattern: 'adj+noun',
    topics: ['Daily Life'],
    definition: 'A shower with low temperature water.',
    example: 'A cold shower is refreshing in the summer.'
  },
  {
    id: '163',
    text: 'deep sleep',
    pattern: 'adj+noun',
    topics: ['Health'],
    definition: 'A heavy sleep from which it is hard to wake.',
    example: 'The baby was in a deep sleep.'
  },
  {
    id: '164',
    text: 'dry run',
    pattern: 'adj+noun',
    topics: ['Preparation'],
    definition: 'A practice or rehearsal.',
    example: 'Let\'s do a dry run of the presentation before the meeting.'
  },
  {
    id: '165',
    text: 'empty promise',
    pattern: 'adj+noun',
    topics: ['Communication'],
    definition: 'A promise that is not kept.',
    example: 'I am tired of his empty promises.'
  },
  {
    id: '166',
    text: 'false alarm',
    pattern: 'adj+noun',
    topics: ['Emergency'],
    definition: 'A warning given incorrectly.',
    example: 'The fire trucks arrived, but it was a false alarm.'
  },
  {
    id: '167',
    text: 'good cause',
    pattern: 'adj+noun',
    topics: ['Charity'],
    definition: 'A charitable organization or purpose.',
    example: 'The money raised will go to a good cause.'
  },
  {
    id: '168',
    text: 'hard work',
    pattern: 'adj+noun',
    topics: ['Effort'],
    definition: 'A great deal of effort.',
    example: 'Success is usually the result of hard work.'
  },
  {
    id: '169',
    text: 'inner circle',
    pattern: 'adj+noun',
    topics: ['Social'],
    definition: 'The exclusive group of friends or advisors close to someone.',
    example: 'Only the CEO\'s inner circle knew about the merger.'
  },
  {
    id: '170',
    text: 'key role',
    pattern: 'adj+noun',
    topics: ['Business', 'Drama'],
    definition: 'A very important part.',
    example: 'She played a key role in the negotiations.'
  },

  // --- VERB + PREPOSITION ---
  {
    id: '171',
    text: 'look at',
    pattern: 'verb+prep',
    topics: ['Vision'],
    definition: 'To direct your eyes towards something.',
    example: 'Look at the beautiful sunset!'
  },
  {
    id: '172',
    text: 'participate in',
    pattern: 'verb+prep',
    topics: ['Activities'],
    definition: 'To take part in an activity.',
    example: 'All students must participate in sports day.'
  },
  {
    id: '173',
    text: 'recover from',
    pattern: 'verb+prep',
    topics: ['Health'],
    definition: 'To get better after an illness or setback.',
    example: 'It took weeks to recover from the flu.'
  },
  {
    id: '174',
    text: 'result in',
    pattern: 'verb+prep',
    topics: ['Cause & Effect'],
    definition: 'To cause a particular outcome.',
    example: 'Carelessness can result in accidents.'
  },
  {
    id: '175',
    text: 'smell of',
    pattern: 'verb+prep',
    topics: ['Sensory'],
    definition: 'To have the scent of something.',
    example: 'Your clothes smell of smoke.'
  },
  {
    id: '176',
    text: 'stare at',
    pattern: 'verb+prep',
    topics: ['Vision', 'Behavior'],
    definition: 'To look at something for a long time.',
    example: 'Don\'t stare at people; it\'s impolite.'
  },
  {
    id: '177',
    text: 'suffer from',
    pattern: 'verb+prep',
    topics: ['Health'],
    definition: 'To have a particular illness or problem.',
    example: 'Many people suffer from allergies in the spring.'
  },
  {
    id: '178',
    text: 'think about',
    pattern: 'verb+prep',
    topics: ['Mental'],
    definition: 'To consider something.',
    example: 'I need to think about your offer.'
  },
  {
    id: '179',
    text: 'vote for',
    pattern: 'verb+prep',
    topics: ['Politics'],
    definition: 'To choose a candidate in an election.',
    example: 'Who are you going to vote for?'
  },
  {
    id: '180',
    text: 'argue with',
    pattern: 'verb+prep',
    topics: ['Conflict'],
    definition: 'To speak angrily to someone because you disagree.',
    example: 'I don\'t want to argue with you anymore.'
  },

  // --- ADVERB + ADJECTIVE ---
  {
    id: '181',
    text: 'dead easy',
    pattern: 'adv+adj',
    topics: ['Difficulty', 'Informal'],
    definition: 'Extremely simple.',
    example: 'The exam was dead easy.'
  },
  {
    id: '182',
    text: 'extremely difficult',
    pattern: 'adv+adj',
    topics: ['Difficulty'],
    definition: 'Very hard to do.',
    example: 'The puzzle was extremely difficult to solve.'
  },
  {
    id: '183',
    text: 'fairly common',
    pattern: 'adv+adj',
    topics: ['Statistics'],
    definition: 'Happening reasonably often.',
    example: 'This side effect is fairly common.'
  },
  {
    id: '184',
    text: 'heavily armed',
    pattern: 'adv+adj', // or adv+vpp
    topics: ['Military'],
    definition: 'Carrying many weapons.',
    example: 'The guards were heavily armed.'
  },
  {
    id: '185',
    text: 'incredibly lucky',
    pattern: 'adv+adj',
    topics: ['Luck'],
    definition: 'Having very good fortune.',
    example: 'He was incredibly lucky to win the lottery.'
  },
  {
    id: '186',
    text: 'mildly amusing',
    pattern: 'adv+adj',
    topics: ['Entertainment'],
    definition: 'Slightly funny.',
    example: 'The movie was only mildly amusing.'
  },
  {
    id: '187',
    text: 'painfully slow',
    pattern: 'adv+adj',
    topics: ['Speed'],
    definition: 'So slow that it is annoying.',
    example: 'The internet connection is painfully slow today.'
  },
  {
    id: '188',
    text: 'perfectly safe',
    pattern: 'adv+adj',
    topics: ['Safety'],
    definition: 'Completely free from danger.',
    example: 'Don\'t worry, this area is perfectly safe.'
  },
  {
    id: '189',
    text: 'relatively small',
    pattern: 'adv+adj',
    topics: ['Size'],
    definition: 'Small when compared to others.',
    example: 'The risks are relatively small.'
  },
  {
    id: '190',
    text: 'slightly different',
    pattern: 'adv+adj',
    topics: ['Comparison'],
    definition: 'Not exactly the same.',
    example: 'The new model is slightly different from the old one.'
  },

  // --- ADVERB + VPP (Past Participle) ---
  {
    id: '191',
    text: 'badly affected',
    pattern: 'adv+vpp',
    topics: ['Impact'],
    definition: 'Negatively impacted in a significant way.',
    example: 'The town was badly affected by the storm.'
  },
  {
    id: '192',
    text: 'deeply divided',
    pattern: 'adv+vpp',
    topics: ['Politics', 'Social'],
    definition: 'Having strong disagreements.',
    example: 'The committee was deeply divided on the issue.'
  },
  {
    id: '193',
    text: 'heavily guarded',
    pattern: 'adv+vpp',
    topics: ['Security'],
    definition: 'Protected by many people or devices.',
    example: 'The president\'s residence is heavily guarded.'
  },
  {
    id: '194',
    text: 'newly married',
    pattern: 'adv+vpp',
    topics: ['Relationships'],
    definition: 'Having married very recently.',
    example: 'The newly married couple went to Italy.'
  },
  {
    id: '195',
    text: 'poorly paid',
    pattern: 'adv+vpp',
    topics: ['Work'],
    definition: 'Receiving low wages.',
    example: 'Nursing can be a difficult and poorly paid profession.'
  },
  {
    id: '196',
    text: 'widely used',
    pattern: 'adv+vpp',
    topics: ['Technology', 'General'],
    definition: 'Utilized by many people.',
    example: 'English is a widely used language in business.'
  },
  {
    id: '197',
    text: 'brightly lit',
    pattern: 'adv+vpp',
    topics: ['Environment'],
    definition: 'Having a lot of light.',
    example: 'The room was brightly lit with neon signs.'
  },
  {
    id: '198',
    text: 'densely packed',
    pattern: 'adv+vpp',
    topics: ['Space'],
    definition: 'Filled tightly.',
    example: 'The suitcase was densely packed with clothes.'
  },
  {
    id: '199',
    text: 'well done',
    pattern: 'adv+vpp',
    topics: ['Food', 'Praise'],
    definition: 'Cooked thoroughly, or performed well.',
    example: 'I like my steak well done.'
  },
  {
    id: '200',
    text: 'critically acclaimed',
    pattern: 'adv+vpp',
    topics: ['Arts'],
    definition: 'Praised by professional critics.',
    example: 'It is a critically acclaimed movie.'
  },

  // --- NOUN + NOUN ---
  {
    id: '201',
    text: 'chain of events',
    pattern: 'noun+noun',
    topics: ['Cause & Effect'],
    definition: 'A series of things happening one after another.',
    example: 'An unfortunate chain of events led to the accident.'
  },
  {
    id: '202',
    text: 'cost of living',
    pattern: 'noun+noun',
    topics: ['Economics'],
    definition: 'The amount of money needed to maintain a standard of living.',
    example: 'The cost of living in New York is very high.'
  },
  {
    id: '203',
    text: 'frame of mind',
    pattern: 'noun+noun',
    topics: ['Psychology'],
    definition: 'Mental attitude or mood.',
    example: 'She was in a positive frame of mind.'
  },
  {
    id: '204',
    text: 'matter of time',
    pattern: 'noun+noun',
    topics: ['Time'],
    definition: 'Something that is inevitable.',
    example: 'It is only a matter of time before he finds out.'
  },
  {
    id: '205',
    text: 'point of view',
    pattern: 'noun+noun',
    topics: ['Opinion'],
    definition: 'A particular way of considering a matter.',
    example: 'From my point of view, this is a bad idea.'
  },
  {
    id: '206',
    text: 'ray of hope',
    pattern: 'noun+noun',
    topics: ['Emotions'],
    definition: 'A small amount of hope in a difficult situation.',
    example: 'The new medicine offered a ray of hope.'
  },
  {
    id: '207',
    text: 'train of thought',
    pattern: 'noun+noun',
    topics: ['Thinking'],
    definition: 'A sequence of connected ideas.',
    example: 'I lost my train of thought when the phone rang.'
  },
  {
    id: '208',
    text: 'way of life',
    pattern: 'noun+noun',
    topics: ['Culture'],
    definition: 'Typical habits and behaviors of a group.',
    example: 'Farming is a way of life in this village.'
  },
  {
    id: '209',
    text: 'breach of contract',
    pattern: 'noun+noun',
    topics: ['Law'],
    definition: 'Breaking the terms of a legal agreement.',
    example: 'They sued the company for breach of contract.'
  },
  {
    id: '210',
    text: 'conflict of interest',
    pattern: 'noun+noun',
    topics: ['Ethics'],
    definition: 'A situation where personal gain clashes with professional duty.',
    example: 'The judge withdrew due to a conflict of interest.'
  },

  // --- VERB + ADVERB ---
  {
    id: '211',
    text: 'drive fast',
    pattern: 'verb+adv',
    topics: ['Transport'],
    definition: 'To operate a vehicle at high speed.',
    example: 'He likes to drive fast on the highway.'
  },
  {
    id: '212',
    text: 'explain clearly',
    pattern: 'verb+adv',
    topics: ['Education'],
    definition: 'To describe something in a way that is easy to understand.',
    example: 'Please explain clearly what happened.'
  },
  {
    id: '213',
    text: 'hold tight',
    pattern: 'verb+adv',
    topics: ['Action'],
    definition: 'To grip something firmly.',
    example: 'Hold tight to the handrail.'
  },
  {
    id: '214',
    text: 'listen attentively',
    pattern: 'verb+adv',
    topics: ['Education', 'Politeness'],
    definition: 'To listen with great interest and focus.',
    example: 'The students listened attentively to the lecture.'
  },
  {
    id: '215',
    text: 'move slowly',
    pattern: 'verb+adv',
    topics: ['Movement'],
    definition: 'To change position without speed.',
    example: 'The traffic began to move slowly.'
  },
  {
    id: '216',
    text: 'rain lightly',
    pattern: 'verb+adv',
    topics: ['Weather'],
    definition: 'To drizzle; not rain hard.',
    example: 'It was only raining lightly, so we didn\'t need umbrellas.'
  },
  {
    id: '217',
    text: 'sleep soundly',
    pattern: 'verb+adv',
    topics: ['Health'],
    definition: 'To sleep deeply without waking.',
    example: 'After the hike, we all slept soundly.'
  },
  {
    id: '218',
    text: 'think twice',
    pattern: 'verb+adv',
    topics: ['Decision Making'],
    definition: 'To consider carefully before acting.',
    example: 'You should think twice before quitting your job.'
  },
  {
    id: '219',
    text: 'act quickly',
    pattern: 'verb+adv',
    topics: ['Emergency'],
    definition: 'To take action without delay.',
    example: 'The doctors had to act quickly to save him.'
  },
  {
    id: '220',
    text: 'discuss openly',
    pattern: 'verb+adv',
    topics: ['Communication'],
    definition: 'To talk about something without hiding anything.',
    example: 'We need to discuss openly our financial problems.'
  },

  // --- VERB + ADJECTIVE ---
  {
    id: '221',
    text: 'get drunk',
    pattern: 'verb+adj',
    topics: ['Social', 'Health'],
    definition: 'To consume too much alcohol.',
    example: 'They went out to get drunk on Friday night.'
  },
  {
    id: '222',
    text: 'grow tired',
    pattern: 'verb+adj',
    topics: ['State'],
    definition: 'To become fatigued.',
    example: 'I began to grow tired of the constant noise.'
  },
  {
    id: '223',
    text: 'look alike',
    pattern: 'verb+adj',
    topics: ['Appearance'],
    definition: 'To appear very similar.',
    example: 'The twins look alike.'
  },
  {
    id: '224',
    text: 'prove successful',
    pattern: 'verb+adj',
    topics: ['Success'],
    definition: 'To turn out to be effective.',
    example: 'The experiment proved successful.'
  },
  {
    id: '225',
    text: 'remain calm',
    pattern: 'verb+adj',
    topics: ['Behavior'],
    definition: 'To stay composed.',
    example: 'It is important to remain calm during a fire.'
  },
  {
    id: '226',
    text: 'seem interested',
    pattern: 'verb+adj',
    topics: ['Communication'],
    definition: 'To appear to care about the topic.',
    example: 'He didn\'t seem interested in what I was saying.'
  },
  {
    id: '227',
    text: 'sound interesting',
    pattern: 'verb+adj',
    topics: ['Perception'],
    definition: 'To appear interesting based on what is heard.',
    example: 'That movie sounds interesting.'
  },
  {
    id: '228',
    text: 'stay healthy',
    pattern: 'verb+adj',
    topics: ['Health'],
    definition: 'To maintain good health.',
    example: 'Eat vegetables to stay healthy.'
  },
  {
    id: '229',
    text: 'taste delicious',
    pattern: 'verb+adj',
    topics: ['Food'],
    definition: 'To have a very good flavor.',
    example: 'This cake tastes delicious.'
  },
  {
    id: '230',
    text: 'turn pale',
    pattern: 'verb+adj',
    topics: ['Appearance', 'Health'],
    definition: 'To lose color in the face (fear/illness).',
    example: 'She turned pale when she saw the blood.'
  },

  // --- ADVERB + VERB ---
  {
    id: '231',
    text: 'barely move',
    pattern: 'adv+verb',
    topics: ['Movement'],
    definition: 'To hardly change position.',
    example: 'The traffic was so bad we could barely move.'
  },
  {
    id: '232',
    text: 'certainly hope',
    pattern: 'adv+verb',
    topics: ['Hopes'],
    definition: 'To desire something strongly.',
    example: 'I certainly hope the weather improves.'
  },
  {
    id: '233',
    text: 'eventually find',
    pattern: 'adv+verb',
    topics: ['Time', 'Discovery'],
    definition: 'To find something after a long time.',
    example: 'We eventually found the keys under the sofa.'
  },
  {
    id: '234',
    text: 'gently push',
    pattern: 'adv+verb',
    topics: ['Action'],
    definition: 'To apply force softly.',
    example: 'Gently push the door to open it.'
  },
  {
    id: '235',
    text: 'hardly believe',
    pattern: 'adv+verb',
    topics: ['Opinion'],
    definition: 'To find something difficult to accept as true.',
    example: 'I can hardly believe she said that.'
  },
  {
    id: '236',
    text: 'just leave',
    pattern: 'adv+verb',
    topics: ['Action'],
    definition: 'To exit immediately or simply.',
    example: 'If you are unhappy, you can just leave.'
  },
  {
    id: '237',
    text: 'never know',
    pattern: 'adv+verb',
    topics: ['Uncertainty'],
    definition: 'To be unsure about the future.',
    example: 'You never know what might happen tomorrow.'
  },
  {
    id: '238',
    text: 'often wonder',
    pattern: 'adv+verb',
    topics: ['Thinking'],
    definition: 'To think about something frequently.',
    example: 'I often wonder what happened to my old friends.'
  },
  {
    id: '239',
    text: 'probably think',
    pattern: 'adv+verb',
    topics: ['Opinion'],
    definition: 'To likely have a specific thought.',
    example: 'They probably think we are lost.'
  },
  {
    id: '240',
    text: 'really appreciate',
    pattern: 'adv+verb',
    topics: ['Gratitude'],
    definition: 'To be very thankful.',
    example: 'I really appreciate your help.'
  },

  // --- MIXED BATCH ---
  {
    id: '241',
    text: 'pay cash',
    pattern: 'verb+noun',
    topics: ['Finance'],
    definition: 'To use physical money to buy something.',
    example: 'Do you want to pay cash or use a card?'
  },
  {
    id: '242',
    text: 'fast asleep',
    pattern: 'adv+adj', // Idiomatic
    topics: ['Sleep'],
    definition: 'Sleeping deeply.',
    example: 'The baby is fast asleep.'
  },
  {
    id: '243',
    text: 'wide awake',
    pattern: 'adv+adj',
    topics: ['Sleep'],
    definition: 'Completely awake.',
    example: 'I drank coffee too late and now I am wide awake.'
  },
  {
    id: '244',
    text: 'lose weight',
    pattern: 'verb+noun',
    topics: ['Health'],
    definition: 'To become lighter.',
    example: 'He started running to lose weight.'
  },
  {
    id: '245',
    text: 'gain weight',
    pattern: 'verb+noun',
    topics: ['Health'],
    definition: 'To become heavier.',
    example: 'I tend to gain weight during the holidays.'
  },
  {
    id: '246',
    text: 'harsh reality',
    pattern: 'adj+noun',
    topics: ['Life'],
    definition: 'The unpleasant truth of a situation.',
    example: 'He had to face the harsh reality of being unemployed.'
  },
  {
    id: '247',
    text: 'set fire to',
    pattern: 'verb+prep', // Phrase
    topics: ['Crime', 'Accidents'],
    definition: 'To ignite something.',
    example: 'Vandals set fire to the bin.'
  },
  {
    id: '248',
    text: 'take part',
    pattern: 'verb+noun',
    topics: ['Activities'],
    definition: 'To participate.',
    example: 'I want to take part in the competition.'
  },
  {
    id: '249',
    text: 'bear in mind',
    pattern: 'verb+prep', // Phrase
    topics: ['Thinking'],
    definition: 'To remember a fact while making a decision.',
    example: 'Please bear in mind that the deadline is tomorrow.'
  },
  {
    id: '250',
    text: 'painfully shy',
    pattern: 'adv+adj',
    topics: ['Personality'],
    definition: 'Extremely introverted or nervous socially.',
    example: 'As a child, he was painfully shy.'
  },
];
