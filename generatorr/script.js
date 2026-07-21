
const texts = [
  "Success comes from consistency, discipline, and continuous learning every single day.",
  "Practice makes you better than yesterday, so never stop improving your skills.",
  "Every great developer started by fixing small bugs and learning from mistakes.",
  "Hard work and patience always create opportunities for those who never give up.",
  "Believe in yourself because confidence grows with every project you complete.",
  "Learning JavaScript becomes easier when you build real-world projects consistently.",
  "Coding is not about memorizing syntax, it's about solving real problems creatively.",
  "Stay focused on your goals and let your progress speak louder than your words.",
  "Small improvements every day lead to massive success in the long run.",
  "Never compare your beginning with someone else's years of experience.",
  "Debugging is an essential skill that makes every programmer stronger.",
  "Keep building projects because experience matters more than watching tutorials.",
  "A clean and readable codebase is always easier to maintain and improve.",
  "Success in programming comes from practice, curiosity, and persistence.",
  "Every challenge you solve today becomes your strength for tomorrow.",
  "Consistency beats motivation when it comes to learning programming.",
  "Great applications are built one feature and one bug fix at a time.",
  "The more projects you build, the stronger your programming logic becomes.",
  "Mistakes are proof that you are learning something new every day.",
  "Keep coding, keep learning, and never stop creating amazing projects."
];

const quote = document.querySelector("h1")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    const index = Math.floor(Math.random()*20)
    quote.textContent = texts[index]
})