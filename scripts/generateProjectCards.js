 const projects = [
  {
    img: "./assets/img/projects/weather.png",
    title: "Weather App",
    link: "https://weather-app-eight-kappa-69.vercel.app/",
    description: `Web application for viewing weather forecasts by city`,
  //   technologies: [
  //     {
  //       icon: IconKeys.react,
  //     },
  //     {
  //       icon: IconKeys.css,
  //     },
  //     {
  //       icon: IconKeys.javaScript,
  //     },
  //     {
  //       icon: IconKeys.html,
  //     },
  //     {
  //       icon: IconKeys.git,
  //     },
  //   ],
  },
    {
      img: "./assets/img/projects/hall.png",
      title: "Hall of Fame",
      link: "https://champbook-pi.vercel.app/",
      description: `Collection of quotes from great people `,
    //   technologies: [
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.react,
    //     },
    //     {
    //       icon: IconKeys.redux,
    //     },
    //     {
    //       icon: IconKeys.github,
    //     },
    //     {
    //       icon: IconKeys.css,
    //     },
    //   ],
    },
    {
      img: "./assets/img/projects/gpt.png",
      title: "corporate website interface",
      link: "https://gpt-template-9py1.vercel.app/",
      description: `
corporate website interface. using the example of a site for gpt3`,
    //   technologies: [
    //     {
    //       icon: IconKeys.css,
    //     },
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.html,
    //     },
    //   ],
    },
    {
      img: "./assets/img/projects/kat.png",
      title: "Personal Website",
      link: "https://master--voluble-jelly-e32c4c.netlify.app/",
      description: `Portfolio website created for a manicurist`,
    //   technologies: [
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.react,
    //     },
    //     {
    //       icon: IconKeys.html,
    //     },
    //     {
    //       icon: IconKeys.css,
    //     },
  
    //   ],
    },
    {
      img: "./assets/img/projects/gym.png",
      title: "GymLanding",
      link: "https://anveraly-group-test.vercel.app/",
      description: `test task to start an internship at an IT company`,
    //   technologies: [
    //     {
    //       icon: IconKeys.html,
    //     },
    //     {
    //       icon: IconKeys.css,
    //     },
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //   ],
    },
  
    {
      img: "./assets/img/projects/gryz.png",
      title: "Freight Website",
      link: "https://gryzoperevozki-ahtubinsk.vercel.app/",
      description: `Website created for the purpose of advertising an entrepreneur`,
    //   technologies: [
    //     {
    //       icon: IconKeys.react,
    //     },
    //     {
    //       icon: IconKeys.css,
    //     },
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.html,
    //     },
    //   ],
    },
    {
      img: "./assets/img/projects/interno.png",
      title: "vue project",
      link: "https://my-vue-to-geekbrains.vercel.app/#/blog",
      description: `Online store website created as part of studying the Vue framework at geekBrains courses`,
    //   technologies: [
    //     {
    //       icon: IconKeys.vite,
    //     },
    //     {
    //       icon: IconKeys.vue,
    //     },
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.github,
    //     },
    //   ],
    },
  
    {
      img: "./assets/img/projects/store.png",
      title: "Web Store",
      link: "https://webstore-zeta.vercel.app/",
      description: `Web store website template using simple html + js `,
    //   technologies: [
    //     {
    //       icon: IconKeys.css,
    //     },
    //     {
    //       icon: IconKeys.javaScript,
    //     },
    //     {
    //       icon: IconKeys.html,
    //     },
    //     {
    //       icon: IconKeys.git,
    //     },
    //   ],
    },
    {
      img: "./assets/img/projects/sport.png",
      title: "sport-traker",
      link: "https://sport-traker.vercel.app/",
      description: `web application for tracking your progress in training (currently in development)`,
    //   technologies: [
    //     {
    //       icon: IconKeys.nextjs,
    //     },
    //     {
    //       icon: IconKeys.css,
    //     },
    //     {
    //       icon: IconKeys.reactQuery,
    //     },
    //     {
    //       icon: IconKeys.zustand,
    //     },
    //   ],
    },
  
  ];
const portfolioContainer = document.querySelector('.portfolio-container');

projects.map(item => {
    console.log(item);
    const portfolioCard = `
        <div class="portfolio-box">
            <img src="${item.img}" alt="">
            <div class="portfolio-layer">
                <h4>${item.title}</h4>
                <p>${item.description}</p>
                <a href=${item.link}  target="_blank" > <i class='bx bx-link-external'></i></a>
            </div>
        </div>
    `;
    portfolioContainer.insertAdjacentHTML('beforeend', portfolioCard);
}
);