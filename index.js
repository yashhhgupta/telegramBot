const { Telegraf } = require("telegraf");
const { message } = require("telegraf/filters");
require("dotenv").config();

const bot = new Telegraf(process.env.BOT_TOKEN);

const links = {
  linkedin: "https://www.linkedin.com/in/yash-gupta-32b821200/",
  github: "https://github.com/yashhhgupta",
  leetcode: "https://leetcode.com/yashhhgupta/",
  resume: "https://tinyurl.com/yashguptaaaresume",
};
const workex =[
    {
        "company":"LAWAZIA TECH",
        "title" : "Web Developer Intern",
        "description" :"• Developed and implemented responsive and user-friendly frontend interfaces for Lawazia Tech’s web projects.\n• Collaborated with the development team to design and implement user experiences in React JS, CSS, HTML etc.\n• Integrated API services into the frontend to enable seamless communication between the server and the UI."
    },
    {
        "company":"Newton School",
        "title" : "Portal Doubt Solver(DSA)",
        "description" :"• Responsible for solving Data Structures and Algorithm related doubts on their portal.\n• Recorded video solutions for various DSA problems to help students learn and understand the concept better."
    }
]

const projects = [
  {
    name: "STALK IT",
    description:
      "• Developed using : HTML, CSS, React, MongoDB, Express, Node, Javascript\n• Online platform dedicated to provide the users the best analysis of all the stocks listed in NSE/BSE.",
    link: "https://stalwart-klepon-eafbeb.netlify.app/",
  },
  {
    name: "HOWTOBASIC",
    description:
      "• Developed using : HTML,React, Redux, Javascript, Css, Node, Mongodb, API, JSON server\n• A web-based online platform that allows users to browse, register and learn basic courses like : sudoku,guitar,etc",
    link: "https://howtobasic-frontend.onrender.com"

  },
];
const education = [
  {
    name: "B.Tech in Computer Science and Engineering",
    college: "Indian Institute of Information Technology, Sri City",
    year: "2020-2024",
    Grades: "8.16",
  },
  {
    name: "Class XII",
    college: "Boston Public School",
    year: "2020",
    Grades: "87.5%",
  },
  {
    name: "Class X",
    college: "Dr. MPS World School",
    year: "2018",
    Grades: "89%",
  },
];

bot.start((ctx) => ctx.reply("Welcome to Yash's personal bot!"));

//write a help which shows all the commands
bot.help((ctx) => ctx.reply(
    "Here are some commands you can use:\n"+
    "/help - Shows all the commands\n"+
    "/about - About me\n"+
    "/projects - My projects\n"+
    "/workex - My work experience\n"+
    "/education - My education\n"+
    "/resume - My resume\n"+
    "/links - Links to my social media profiles and resume\n"+
    "/contact - Contact me\n"
));

// bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.command("about", (ctx) =>
  ctx.reply(
    "Hi there I'm Yash👋\n" +
      "⚡ I love programming, problem solving, and poetry.\n" +
      "👨‍🎓 I’m a Btech student at Indian Institute of Information Technology,Sri City.\n" +
      "🔭 My area of interest includes software development and web development\n" +
      "🧠 Skills: C, C++, Java, Python, HTML, CSS, Javascript,SQL, React, Node, MongoDB, Express, Git\n"+
      "📶 I have a creative mindset, am always keen to learn something new\n"+
    "📫 How to reach me: /contact \n"
  )
);

//Education
bot.command("education", (ctx) => {
    ctx.reply("Here is my education");
    education.forEach((element) => {
        ctx.reply("Name: "+element.name
        +"\nCollege: "+element.college
        +"\nYear: "+element.year
        +"\nGrades: "+element.Grades
        );
    });
});

//Projects
bot.command("projects", (ctx) => {
    ctx.reply("Here are some of my projects");
    projects.forEach((element) => {
        ctx.reply("Name: "+element.name
        +"\nDescription: \n"+element.description
        +"\nLink: "+element.link
        );
    });
})

//workex
bot.command("workex", (ctx) => {
    ctx.reply("Here is my work experience");
    workex.forEach((element) => {
        ctx.reply("Company: "+element.company
        +"\nTitle: "+element.title
        +"\nDescription:\n "+element.description
        );
    });
});

//LINKS
bot.command("links", (ctx) => {
    ctx.reply(
        "Here are some links to my social media profiles and resume. Feel free to connect with me!"
    );
    ctx.reply("Linkedin: " + links.linkedin);
    ctx.reply("Github: " + links.github);
    ctx.reply("Leetcode: " + links.leetcode);
    ctx.reply("Resume: " + links.resume);
});

bot.command("resume",(ctx)=>{
    bot.telegram.sendDocument(
      ctx.chat.id,
      {source : "YashGupta.pdf"}
    );
    // console.log(ctx.chat.id);
})

//contact
bot.command("contact", (ctx) => {
    ctx.reply("You can contact me through:\n"+
    "/email - Sends me an email\n"+
    "/telegram - Sends me a message on telegram\n");
});
bot.command("telegram", (ctx) => {
    ctx.reply("You can message me on telegram @ t.me/Yog333");
})
bot.command("email", (ctx) => {
    ctx.reply("You can email me at yashguptaaa333.com")
})

bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.hears("linkedin", (ctx) =>
  ctx.reply(links.linkedin)
);
bot.hears("github", (ctx) => ctx.reply(links.github));
bot.hears("leetcode",(ctx)=>{
    ctx.reply(links.leetcode);
})
bot.hears("resume",(ctx)=>{
    ctx.reply(links.resume);
})
bot.on(message("text"), (ctx) => ctx.reply("Invalid Command\nType /help to see all commands"));

bot.launch();
