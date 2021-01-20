import "./App.css";
import { Carousel } from "react-bootstrap";

function App() {
  let list = [
    "https://picsum.photos/300/301",
    "https://picsum.photos/300/302",
    "https://picsum.photos/300/303",
    "https://picsum.photos/300/304",
    "https://picsum.photos/300/305",
    "https://picsum.photos/300/306",
    "https://picsum.photos/300/307",
    "https://picsum.photos/300/308",
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="d-none d-md-block col-md-3 ">COL1</div>

        {/** Can I Add Children Here */}
        <div className="col-12 col-md-6 ">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/200/300"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis
                  interdum.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/200/301"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://picsum.photos/200/303"
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="d-none d-md-block col-md-3 ">COL3</div>
      </div>
    </div>
  );
}

export default App;


/*
##Notes
1.Use of imgaes
2.Resposive
  --col-       Extra smal
  --col-sm-    small
  --col-md-    computer
  --col-lg-    large
  --col-xl-    extra large
    d-none    --hide col
    d-block    --display col
*/