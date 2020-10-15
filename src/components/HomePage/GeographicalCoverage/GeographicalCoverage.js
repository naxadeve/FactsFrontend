import React, { Component } from "react";
import  MapComponent from "../../MapComponent/MapComponent";
import 'leaflet/dist/leaflet.css'
class GeographicalCoverage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="geographical-coverage-details">
        <div className="container">
          <div className="geographical-details-wrap">
            <div class="sphere"></div>
            <div className="row">
              <div className="col-md-10">
                <div className="details-right">
                  <div className="details-right-content">
                    <img src="../../../../img/FACTS-Geographical-Map.png"></img>
                    {/* <MapComponent/> */}
                    {/* <button className="btn-case">Explore Map</button> */}
                  </div>
                </div>
              </div>
                <div className="details-left">
                  <h3 className="headline2">Geographical coverage</h3>
                  <div className="para-center">
                    <p className="body-para">
                      We have carried out research projects in over 68 districts
                      (out of 77) across Nepal.
                    </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GeographicalCoverage;
