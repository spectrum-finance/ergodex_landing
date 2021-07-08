(function () {
  const win = window
  const doc = document.documentElement

  doc.classList.remove('no-js')
  doc.classList.add('js')

  // Reveal animations
  if (document.body.classList.contains('has-animations')) {
    /* global ScrollReveal */
    const sr = window.sr = ScrollReveal()

    sr.reveal('.hero-title, .hero-paragraph, .hero-form', {
      duration: 1000,
      distance: '40px',
      easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
      origin: 'bottom',
      interval: 150
    })
  }

  // Moving objects
  const movingObjects = document.querySelectorAll('.is-moving-object')

  // Throttling
  function throttle (func, milliseconds) {
    let lastEventTimestamp = null
    let limit = milliseconds

    return (...args) => {
      let now = Date.now()

      if (!lastEventTimestamp || now - lastEventTimestamp >= limit) {
        lastEventTimestamp = now
        func.apply(this, args)
      }
    }
  }

  // Init vars
  let mouseX = 0
  let mouseY = 0
  let scrollY = 0
  let coordinateX = 0
  let coordinateY = 0
  let winW = doc.clientWidth
  let winH = doc.clientHeight

  // Move Objects
  function moveObjects (e, object) {
    mouseX = e.pageX
    mouseY = e.pageY
    scrollY = win.scrollY
    coordinateX = (winW / 2) - mouseX
    coordinateY = (winH / 2) - (mouseY - scrollY)

    for (let i = 0; i < object.length; i++) {
      const translatingFactor = object[i].getAttribute('data-translating-factor') || 20
      const rotatingFactor = object[i].getAttribute('data-rotating-factor') || 20
      const perspective = object[i].getAttribute('data-perspective') || 500
      let tranformProperty = []

      if (object[i].classList.contains('is-translating')) {
        tranformProperty.push('translate(' + coordinateX / translatingFactor + 'px, ' + coordinateY / translatingFactor + 'px)')
      }

      if (object[i].classList.contains('is-rotating')) {
        tranformProperty.push('perspective(' + perspective + 'px) rotateY(' + -coordinateX / rotatingFactor + 'deg) rotateX(' + coordinateY / rotatingFactor + 'deg)')
      }

      if (object[i].classList.contains('is-translating') || object[i].classList.contains('is-rotating')) {
        tranformProperty = tranformProperty.join(' ')

        object[i].style.transform = tranformProperty
        object[i].style.transition = 'transform 1s ease-out'
        object[i].style.transformStyle = 'preserve-3d'
        object[i].style.backfaceVisibility = 'hidden'
      }
    }
  }

  // Call function with throttling
  if (movingObjects) {
    win.addEventListener('mousemove', throttle(
      function (e) {
        moveObjects(e, movingObjects)
      },
      150
    ))
  }

  const TEAM = [
    {
      name: 'Ilya Oskin',
      role: 'Lead Developer',
      profile: `
        Software Engineer, Core Developer of Ergo, Lead Developer at Mail.ru Group, Degree in Economics.
      `,
      photo: 'oskin',
      links: {
        linkedin: '',
        telegram: '',
        github: 'https://github.com/oskin1'
      }
    },
    {
      name: 'Dmitriy Usov',
      role: 'Lead UI Developer',
      profile: `
        Software Engineer, Developer of Ergo, ex. Frontend Team Lead at CityMobil, Degree in computer science.
      `,
      photo: 'usov',
      links: {
        linkedin: '',
        telegram: '',
        github: 'https://github.com/deadit'
      }
    },
    {
      name: 'Yasha Black',
      role: 'Product Manager',
      profile: `
        Product manager at Ergo, Frontend Developer at Mail.ru Group, Masters degree in management.
      `,
      photo: 'black',
      links: {
        linkedin: 'https://www.linkedin.com/in/yasha-black-25852018a/',
        telegram: 'https://t.me/yashablack',
        github: 'https://github.com/yasha-black'
      }
    },
    {
      name: 'Timofey Gusev',
      role: 'Core Developer',
      profile: `
        Software Engineer, Developer at Mail.ru Group, FP enthusiast, ex. Blockchain Core Dev., Degree in cyber security.
      `,
      photo: 'gusev',
      links: {
        linkedin: '',
        telegram: '',
        github: 'https://github.com/GusevTimofey'
      }
    },
    {
      name: 'Alexander Romanovskiy',
      role: 'Core developer',
      profile: `
        Software engineer. One of the creators of Encry blockchain and smart contract language Prism. FP enthusiast. Has expertise in cybersecurity. Ergo ecosystem developer.
      `,
      photo: 'romanovsky',
      links: {
        linkedin: '',
        telegram: '',
        github: 'https://github.com/Bromel777'
      }
    },
    {
      name: 'Vadim Safonov',
      role: 'Frontend Developer',
      profile: `
        Software Engineer, Team lead at Rbc.ru. Degree in computer science.
      `,
      photo: 'safonov',
      links: {
        linkedin: '',
        telegram: '',
        github: 'https://github.com/imamatory'
      }
    }
  ]

  const getTeamMemberTemplate = ({
    name,
    role,
    profile,
    photo,
    links
  }) => {
    const linksHTML = Object.keys(links).reduce((acc, key) => {
      const template = `
        <a class="team__link" href="${links[key]}" target="_blank">
            <img src="./src/assets/${key}.svg" alt="${key}">
        </a>`.trim()

      if (links[key]) return acc + template

      return acc
    }, '')

    return `
      <li class="team__member">
        <div class="team__title-container">
          <div class="team__img-container">
            <img src="./src/assets/img/${photo}.jpeg" alt="${name}">
          </div>
          <div class="team__name-container">
            <h4 class="team__name">${name}</h4>
            <sub class="team__role">${role}</sub>
            <div class="team__links">
                ${linksHTML}
            </div>
          </div>
        </div>

        <div class="team__member-profile">
            ${profile}
        </div>
      </li>
    `.trim()
  }

  const container = document.querySelector('.team__members')

  const teamTemplate = TEAM
    .reduce((acc, tm) => acc + getTeamMemberTemplate(tm), '')

  container.insertAdjacentHTML('afterbegin', teamTemplate)
}())
