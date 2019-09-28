import React, {Component} from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import axios from 'axios'

class CarouselAppCheckup extends Component { 
state = {
    dummyId: [],
    dummyInfo: [] 
}

getPicDescription() {
    axios.get( '/getTemplates',  {} )
    .then( response => {
        console.log(response.data)
        const id =[], pages=[];
        id[0] = "checkup"
        id[1] = "shots"
        id[2] = "appointment"
        pages[0] = response.data["checkup"]
        pages[1] = response.data["shots"]
        console.log(pages[0])
        this.setState({ dummyId: id, dummyInfo: pages[0] })
    } )
    .catch(error => {
        console.log(error);
    });

}

componentDidMount = () => {
    this.getPicDescription()
}


render () {

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={5}
        showControls={true}
        showIndicators={true}
        className="z-depth-1"
      >
        <MDBCarouselInner>
          <MDBCarouselItem itemId="1">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.state.dummyInfo[1]}
                alt="First slide"
              />
              <h3> {this.state.dummyInfo[0]} </h3>
              {() => console.log(this.state.dummyInfo[0])}
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.state.dummyInfo[3]}
                alt="Second slide"
              />
              <h3> {this.state.dummyInfo[2]} </h3>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.state.dummyInfo[5]}
                alt="Third slide"
              />
              <h3> {this.state.dummyInfo[4]} </h3>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.state.dummyInfo[7]}
                alt="Second slide"
              />
              <h3> {this.state.dummyInfo[6]} </h3>
            </MDBView>
          </MDBCarouselItem>
          <MDBCarouselItem itemId="5">
            <MDBView>
              <img
                className="d-block w-100"
                src={this.state.dummyInfo[9]}
                alt="Second slide"
              />
              <h3> {this.state.dummyInfo[8]} </h3>
            </MDBView>
          </MDBCarouselItem>
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
};
}

export default CarouselAppCheckup;
