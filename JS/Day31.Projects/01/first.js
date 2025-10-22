const quotes = ["“Success is not final, failure is not fatal: it is the courage to continue that counts.” — Winston Churchill",

"“Don’t watch the clock; do what it does. Keep going.” — Sam Levenson",

"“The future depends on what you do today.” — Mahatma Gandhi",

"“Dream big. Start small. Act now.” — Robin Sharma",

"“It always seems impossible until it’s done.” — Nelson Mandela",

"“In the middle of difficulty lies opportunity.” — Albert Einstein",

"“Your life does not get better by chance, it gets better by change.” — Jim Rohn",

"“Be the change that you wish to see in the world.” — Mahatma Gandhi",

"“Happiness is not something ready-made. It comes from your own actions.” — Dalai Lama",

"“The best way to predict your future is to create it.” — Peter Drucker",

"“Do what you can, with what you have, where you are.” — Theodore Roosevelt",

"“Courage doesn’t mean you don’t get afraid. Courage means you don’t let fear stop you.” — Bethany Hamilton",

"“Fall seven times, stand up eight.” — Japanese Proverb",

"“Tough times never last, but tough people do.” — Robert H. Schuller",

"“You are stronger than you think.” — Unknown",

"“What you think, you become. What you feel, you attract. What you imagine, you create.” — Buddha",

"“If you want to go fast, go alone. If you want to go far, go together.” — African Proverb",

"“Success is liking yourself, liking what you do, and liking how you do it.” — Maya Angelou",

"“Don’t let yesterday take up too much of today.” — Will Rogers",

"“Believe you can and you’re halfway there.” — Theodore Roosevelt"
];

const button = document.querySelector('button');
const quote = document.querySelector('h1');

button.addEventListener("click",()=>{
    const index = Math.floor(Math.random()*20);
    quote.textContent = quotes[index];
})