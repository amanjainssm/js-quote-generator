const btn = document.querySelector('#new-quote');
const quote = document.querySelector('.quote');
const person = document.querySelector('.person');

const quotes = [
    { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
    { quote: "In three words I can sum up everything I've learned about life: it goes on.", person: "Robert Frost" },
    { quote: "The only way to achieve the impossible is to believe it is possible.", person: "Charles Kingsleigh" },
    { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
    { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
    { quote: "The best time to plant a tree was 20 years ago. The second best time is now.", person: "Chinese Proverb" },
    { quote: "You can't use up creativity. The more you use, the more you have.", person: "Maya Angelou" },
    { quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.", person: "Albert Einstein" },
    { quote: "Don't count the days, make the days count.", person: "Muhammad Ali" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "The journey of a thousand miles begins with a single step.", person: "Lao Tzu" },
    { quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.", person: "Albert Schweitzer" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
    { quote: "Life is really simple, but we insist on making it complicated.", person: "Confucius" },
    { quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates" },
    { quote: "The biggest risk is not taking any risk. In a world that is changing quickly, the only strategy that is guaranteed to fail is not taking risks.", person: "Mark Zuckerberg" },
    { quote: "Your time is limited, don't waste it living someone else's life.", person: "Steve Jobs" },
    { quote: "I have not failed. I've just found 10,000 ways that won't work.", person: "Thomas A. Edison" },
    { quote: "The best preparation for tomorrow is doing your best today.", person: "H. Jackson Brown Jr." },
    { quote: "The only person you are destined to become is the person you decide to be.", person: "Ralph Waldo Emerson" },
    { quote: "We can complain because rose bushes have thorns, or rejoice because thorns have roses.", person: "Alphonse Karr" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", person: "Confucius" },
    { quote: "The only thing necessary for the triumph of evil is for good men to do nothing.", person: "Edmund Burke" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Eleanor Roosevelt" },
    { quote: "The only limit to our realization of tomorrow will be our doubts of today.", person: "Franklin D. Roosevelt" },
    { quote: "Don't watch the clock; do what it does. Keep going.", person: "Sam Levenson" },
    { quote: "The best way to predict the future is to create it.", person: "Peter Drucker" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
    { quote: "The best way to find yourself is to lose yourself in the service of others.", person: "Mahatma Gandhi" },
    { quote: "Don't be afraid to stand for what you believe in, even if that means standing alone.", person: "Savitribai Phule" },
    { quote: "Education is the most powerful weapon which you can use to change the world.", person: "Dr. A.P.J. Abdul Kalam" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", person: "Jawaharlal Nehru" },
    { quote: "Arise, awake, and stop not until the goal is reached.", person: "Swami Vivekananda" },
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);
    quote.innerText = `"${quotes[random].quote}"`;
    person.innerText = quotes[random].person;
})