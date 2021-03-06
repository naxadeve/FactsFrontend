import React, { Component } from "react";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Testimonials from "../components/Testimonials/Testimonials";
import Trusted from "../components/HomePage/Trusted/Trusted";
import Axios from "axios";

const TeamCard = ({img,name,designation}) => {
  return (
    <div className="col-md-4">
      <div className="col-wrap">
        <div className="figure">
          <img src={img} alt="" />
        </div>
        <div className="title">
          <h5 className="headline5">{name}</h5>
          <p className="body-para">{designation}</p>
        </div>
      </div>
    </div>
  );
};
class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teams: [],
    };
  }
  componentDidMount() {
    Promise.all([
      Axios({
        method: "GET",
        url: `${process.env.API_URL}api/teamapi`,
        headers: {
          "content-type": "application/json",
          Accept: "application/json",
        },
      }),
    ]).then((response) => {
      // console.log(response[0]);
      // const categoryfacts = response[0].data[0].home.data.map(fact => ({
      //   ...fact
      // }));

      // response[0].data[0].home.data = categoryfacts;

      this.setState({
        teams: response[0].data.ourteam,
      });
    });
  }
  render() {
    const {teams}=this.state;
    return (
      <React.Fragment>
        {/* <NavBar noBg={false} /> */}
        <section className="banner about-banner pdb-80">
          <div className="container">
            <div className="about-banner-wrap">
              <div className="row">
                <div className="order-2 order-sm-2 order-md-1 col-md-5">
                  <div className="col-wrap-center">
                    <div className="circle red-gradient about-sphere"></div>
                    <div className="col-wrap">
                      <span className="sec-caption">Our Story</span>
                      <h3 className="headline2">
                        We are FACTS Research & Analytics.
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="order-1 order-sm-1 order-md-2 col-md-7">
                  <div className="col-wrap">
                    <figure className="figure-case-img right-img-sphere">
                      <img
                        className="bg-case orange"
                        src="./img/IMAGE-shape2.svg"
                      />
                      <img
                        className="bg-case pink"
                        src="./img/IMAGE-shape4.svg"
                      />
                      <img
                        className="bg-case sm-pink"
                        src="./img/IMAGE-shape1.svg"
                      />
                      <img
                        className="bg-case sm-orange"
                        src="./img/IMAGE-shape3.svg"
                      />
                      {/* <img src="./img/our-team1.png" alt="" /> */}
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section story-section pdb-95">
          <div className="container">
            <div className="row">
             
              <div className="col-md-12">
                <div className="content-section">
                  <p className="body-para-second">
                    A lack of proper and timely availability of data in Nepal
                    has always remained a great challenge for all who believe in
                    the power of accurate and contextual data for informed
                    decision-making.
                  </p>
                  <p className="body-para">
                    In the past, a lot of data in Nepal was considered
                    unattainable, and the available data was often deemed dated,
                    misleading or incomplete, all of which contributed to the
                    escalation of a data-dark situation in Nepal.
                  </p>
                  <p className="body-para">
                    Back in 2012, a small group of young, enthusiastic and,
                    like-minded individuals got together with an idea to
                    contribute to address the situation by forming a research
                    company that collected and analysed data to provide
                    actionable and relevant information to cater to the
                    data-driven needs of the people and organisations, from both
                    in and out of the country. The team knew that accuracy,
                    reliability and trust-worthiness of the data needed to be
                    given special focus. Hence, they envisaged to not only work
                    for their clients, but also increase the awareness of the
                    general public regarding the use and importance of data.
                    This needed to be done in a concise, simple and
                    understandable manner, because they understood that data in
                    its raw form can become overwhelming.
                  </p>
                  <p className="body-para-second">
                    Amalgamating all these thoughts together, FACTS Research &
                    Analytics was born.
                  </p>
                  <p className="body-para">
                    FACTS Research & Analytics is a private independent research
                    company that prides itself on being precise and serving
                    reliable, contextual and actionable information based on
                    research and analysis that help clients and the general
                    public to take better decisions. We use a mix of modern
                    technology, demonstrated academics and a human touch, to
                    collect data that is accurate and appropriate.
                  </p>
                  <p className="body-para">
                    With our social initiatives, we strive to educate and inform
                    people-both the general mass as well as the decision makers
                    in the high ground of politics-believing that a person that
                    has reliable information and knowledge about an idea, will
                    be able to make sound decisions. We deal with data and
                    statistics, showcasing our cases in such a way that the
                    figures and the truth will influence the reader’s mind-set.
                  </p>
                  <p className="body-para">
                    Along with this, we provide research services to our
                    clients, building custom research methodologies based on our
                    clients’ requirements. With a customised approach, we gather
                    and analyze information that is relevant to the client and
                    that provides actionable findings to help them make informed
                    choices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section initiatives-section pdt-98 pdb-98">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="heading-section">
                  <h3 className="headline3">Our initaitives</h3>
                </div>
              </div>
              <div className="col-md-9">
                <div className="content-section">
                  <div className="content-list">
                    <div className="image">
                      <figure>
                        <img src="./img/Mask Group 12.svg" alt="appearance" />
                      </figure>
                    </div>
                    <div className="content">
                      <p className="body-para-second">Public Awareness</p>
                      <p className="body-para">
                        Through our social initiatives, we are committed to
                        educating and informing the public with reliable data
                        presented in a visually appealing way.
                      </p>
                    </div>
                  </div>

                  <div className="content-list">
                    <div className="image">
                      <figure>
                        <img src="./img/Mask Group 6.svg" alt="" />
                      </figure>
                    </div>
                    <div className="content">
                      <p className="body-para-second">
                        Knowledge and Research Partnership
                      </p>
                      <p className="body-para">
                        FACTS is dedicated in building an established and
                        reliable data culture in Nepal. In the course of this
                        initiative to promote a data-driven culture, we have
                        participated and partnered in a number of events,
                        conferences and symposiums.
                      </p>
                    </div>
                  </div>

                  <div className="content-list">
                    <div className="image">
                      <figure>
                        <img src="./img/Mask Group 11.svg" alt="" />
                      </figure>
                    </div>
                    <div className="content">
                      <p className="body-para-second">Publication</p>
                      <p className="body-para">
                        Through our social initiatives, we are committed to
                        educating and informing the public with reliable data
                        presented in a visually appealing way.
                      </p>
                    </div>
                  </div>

                  <div className="content-list">
                    <div className="image">
                      <figure>
                        <img src="./img/Mask Group 10.svg" alt="" />
                      </figure>
                    </div>
                    <div className="content">
                      <p className="body-para-second">Poll</p>
                      <p className="body-para">
                        Through our social initiatives, we are committed to
                        educating and informing the public with reliable data
                        presented in a visually appealing way.
                      </p>
                    </div>
                  </div>

                  <div className="content-list">
                    <div className="image">
                      <figure>
                        <img src="./img/Mask Group 9.svg" alt="" />
                      </figure>
                    </div>
                    <div className="content">
                      <p className="body-para-second">Contest</p>
                      <p className="body-para">
                        Through our social initiatives, we are committed to
                        educating and informing the public with reliable data
                        presented in a visually appealing way.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="about-section team-section pdt-95 pdb-119">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="heading-section">
                  <h3 className="headline3">Meet our team</h3>
                </div>
              </div>
              <div className="col-md-9">
                <div className="content-section">
                  <p className="body-para">
                    The FACTS team is a combination of experienced minds and
                    youthful vigour. Innovative ideas, enthusiasm and persistent
                    effort is the cornerstone of our team that does not hesitate
                    to go the extra mile to cater to the clients’ needs. We also
                    have our local associates in all districts across Nepal to
                    carry out research projects of any size and scale
                  </p>
                </div>
              </div>
            </div>

            <div className="team-members pdt-68 pdb-68">
              <div className="row">
               {teams && teams.map(data=><TeamCard name={data.title} img={data.image} designation={data.position}/>)}
               </div>
            </div>

            <div className="jumbotron info-jumbotron">
              <h5 className="headline5">Join our team</h5>
              <p className="body-para">
                As we’re growing, we’re always on the lookout for new talent to
                join our team. If you’re inspired by our story, then join us on
                the journey. We’d love to hear from you! Email us your resume at{" "}
                <a href="#" className="facts-link">
                  career@factsnepal.com
                </a>
                .
              </p>
            </div>

            <section className="slider-section about-slider no-bg pdt-117">
              <div className="slider-heading">
                <h3 className="headline3">Our partners</h3>
                <p className="body-para">
                  We are trusted by some of the most influential partners.
                </p>
              </div>
              <Trusted pink={false} />
            </section>
          </div>
        </section>
        <Testimonials />
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default About;
