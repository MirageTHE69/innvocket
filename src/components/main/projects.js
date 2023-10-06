import React, { useEffect, useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "/src/styles/tailwind.css"
import First from "../../images/1.png"
import Second from "../../images/2.png"
import Third from "../../images/3.png"
import { Link } from "gatsby"

gsap.registerPlugin(ScrollTrigger)

function Projects() {
  const comp = useRef(null)
  const galleryRef = useRef(null)

  useLayoutEffect(() => {
    const details = gsap.utils.toArray(
      ".desktopContentSection:not(:first-child)"
    )
    const photos = gsap.utils.toArray(".desktopPhoto:not(:first-child)")
    gsap.set(photos, { yPercent: 101 })

    const allPhotos = gsap.utils.toArray(".desktopPhoto")

    let mm = gsap.matchMedia(comp)
    // create

    // add a media query. When it matches, the associated function will run
    mm.add("(min-width: 600px)", () => {
      // this setup code only runs when viewport is at least 600px wide
      console.log("desktop")

      ScrollTrigger.create({
        trigger: galleryRef.current,
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
      })

      //create scroll trigger for each details section
      //trigger photo animation when headline of each details section
      //reaches 80% of window height
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1")

        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 })

        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          animation: animation,
          scrub: true,
          markers: false,
        })
      })

      return () => {
        // optional
        // custom cleanup code here (runs when it STOPS matching)
        console.log("mobile")
      }
    })

    return () => {
      mm.revert()
    }
  }, [])

  return (
    <div className="bg-black" ref={comp}>
      <div></div>

      <div ref={galleryRef} className=" w-full h-full gallery">
        <div className="left">
          <div className="desktopContent">
            <div className="desktopContentSection">
              <h1 className=" text-5xl text-white">Estate App </h1>
              <p className=" text-2xl text-white">
                In this Project we Worked with on small firm and do project for
                thier client we used flutter and MongoDB in this project we with
                our full team
              </p>

              <div className=" border border-white  rounded-full h-[6%] w-1/4 bg-transparent flex justify-center items-center mt-4">
                <button className="text-white ">view more</button>
              </div>
            </div>
            <div className="desktopContentSection">
              <h1 className=" text-5xl text-white">Stock Market App</h1>
              <p className=" text-2xl text-white">
                We Worked in this project as a only UI/UX designer we have full
                and Expirenced team Ui/Ux designer
              </p>
              <div className=" border border-white  rounded-full h-[6%] w-1/4 bg-transparent flex justify-center items-center mt-4">
                <button className="text-white ">view more</button>
              </div>
            </div>
            <div className="desktopContentSection">
              <h1 className=" text-5xl text-white">Cypto Market App</h1>
              <p className=" text-2xl text-white">
                Pink is a color that is often associated with femininity,
                romance, and sweetness. It is a softer and more delicate shade
                of red that can evoke feelings of warmth, love, and nurturing.
              </p>
              <p className=" text-2xl text-white">
                In the world of branding and marketing, pink is often used to
                target a female audience or to promote products that are
                associated with beauty, love, or romance.
              </p>
              <p className=" text-2xl text-white">
                Pink is also used in the food industry, as it is associated with
                sweetness and desserts. Pink is often used in breast cancer
                awareness campaigns, as it has become the signature color of the
                movement.{" "}
              </p>
              <p className=" text-2xl text-white">
                Pink is also commonly used in baby showers and weddings, as it
                symbolizes love, innocence, and new beginnings.
              </p>
              <div className=" border border-white  rounded-full h-[6%] w-1/4 bg-transparent flex justify-center items-center mt-4">
                <button className="text-white ">view more</button>
              </div>
            </div>
            <div className="desktopContentSection">
              <h1 className=" text-5xl text-white">View More Project</h1>
              <p className=" text-2xl text-white ">
                View More Project which we have done in our past time
              </p>
              <div className=" border border-white  rounded-full h-[6%] w-1/4 bg-transparent flex justify-center items-center mt-4">
                <Link to="/portfolio" className="text-white">
                  view more
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="right">
          <div className="mobileContent">
            <div className="mobilePhoto red"></div>
            <h1 className=" text-lg">Red</h1>
            <p className=" text-xs ">
              Red is a color often associated with strong emotions such as
              passion, love, and anger. It is a bold and attention-grabbing
              color that can evoke feelings of excitement, warmth, and energy.
            </p>

            <div className="mobilePhoto green"></div>
            <h1 className=" text-lg">Green</h1>
            <p className=" text-xs">
              Green is a color that is often associated with nature, growth, and
              harmony. It is a calming and relaxing color that can evoke
              feelings of balance, stability, and freshness. In color
              psychology, green is said to represent balance and stability,
              making it a popular choice for branding and marketing in the
              health and wellness industry.{" "}
            </p>

            <div className="mobilePhoto pink"></div>
            <h1 className=" text-lg">Pink</h1>
            <p className=" text-xs">
              Pink is a color that is often associated with femininity, romance,
              and sweetness. It is a softer and more delicate shade of red that
              can evoke feelings of warmth, love, and nurturing. In the world of
              branding and marketing, pink is often used to target a female
              audience or to promote products that are associated with beauty,
              love, or romance.
            </p>

            <div className="mobilePhoto blue"></div>
            <h1 className=" text-lg">Blue</h1>
            <p className=" text-xs">
              Blue is a color that is often associated with calmness, trust, and
              reliability. It is a peaceful and serene color that can evoke
              feelings of stability, security, and professionalism. In color
              psychology, blue is said to represent loyalty and trust, making it
              a popular choice for branding and marketing in the finance and
              technology industries.
            </p>
          </div>

          <div className="desktopPhotos">
            <div className="desktopPhoto red">
              <img
                src={First}
                alt="Image"
                className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300"
              />
            </div>
            <div className="desktopPhoto green">
              <img
                src={Second}
                alt="Image"
                className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300"
              />
            </div>
            <div className="desktopPhoto pink">
              <img
                src={Third}
                alt="Image"
                className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300"
              />
            </div>
            <div className="desktopPhoto blue">
              <img
                src={First}
                alt="Image"
                className="object-cover w-full h-full absolute top-0 left-0 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
