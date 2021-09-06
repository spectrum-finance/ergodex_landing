import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{__html: `
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
            
              let isInterval = true
            
              const interval = setInterval(() => {
                // Moving objects
                const movingObjects = document.querySelectorAll('.is-moving-object')
            
                if (movingObjects.length > 0) {
            
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
            
                  isInterval = false
                }
            
                if (!isInterval) {
                  clearInterval(interval)
                }
              }, 500)
            }())

          `}}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
