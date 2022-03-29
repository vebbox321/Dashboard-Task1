import {
  BarChart,
  Bar,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";
import img1 from "./image/big.webp";
import "react-circular-progressbar/dist/styles.css";
import Navbar from "react-bootstrap/Navbar";
import { Component } from "react";
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  Button,
  NavDropdown,
  Nav,
  Form,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Task.css";
import { FaDesktop, FaRegPaperPlane, FaLaravel, FaUsers } from "react-icons/fa";
// import { Store } from "@material-ui/icons";
import {
  Side,
  Sidemenu,
  Graph,
  Store,
  SecondGraph,
  ProgressBar,
  Message,
  Task,
  Activity,
  Tablepart,
} from "./storage";
// npm install bootstrap
//   npm install recharts
// npm install @react-icons/all-files --save
// npm install react-icons --save
// npm install --save react-circular-progressbar
class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar bg="primary" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#" className="divfixed bg-succes">
              ANDORA
            </Navbar.Brand>
            <Navbar.Brand href="#" className=" makeleft12 bg-succes">
              ANDORA
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Container fluid>
          <Row className="wid">
            <Col lg={2} sm={2} md={2} className=" left-nav p-0 m-0 ">
              <Col
                lg={{ span: 11, offset: 0 }}
                className="left-nav-inner  p-0 "
              >
                <div className="divfixed">
                  <Side />
                  <Sidemenu
                    head="Dashboard"
                    innerHead="content1"
                    innerOptionOne="dsad"
                    innerOptionTwo="asd"
                    innerOptionThree="das"
                    optionOne="dsad"
                    optionTwo="Sd"
                    optionThree="asd"
                    evnt="0"
                  />
                  <Sidemenu
                    head="Widgets"
                    innerHead="1 Marks"
                    innerOptionOne="Choos It"
                    innerOptionTwo="Fill in the Blanks"
                    innerOptionThree="Match the following"
                    optionOne="2 Marks"
                    optionTwo="5 Marks"
                    optionThree="10 Marks"
                    evnt="1"
                  />
                  <Sidemenu
                    head="UI design"
                    innerHead="1 Marks"
                    innerOptionOne="Choos It"
                    innerOptionTwo="Fill in the Blanks"
                    innerOptionThree="Match the following"
                    optionOne="2 Marks"
                    optionTwo="5 Marks"
                    optionThree="10 Marks"
                    evnt="2"
                  />
                  <Sidemenu
                    head="Charts"
                    innerHead="1 Marks"
                    innerOptionOne="Choos It"
                    innerOptionTwo="Fill in the Blanks"
                    innerOptionThree="Match the following"
                    optionOne="2 Marks"
                    optionTwo="5 Marks"
                    optionThree="10 Marks"
                    evnt="3"
                  />
                  <Sidemenu
                    head="Message"
                    innerHead="1 Marks"
                    innerOptionOne="state guage's law"
                    innerOptionTwo="Fill in the Blanks"
                    innerOptionThree="Match the following"
                    optionOne="2 Marks"
                    optionTwo="5 Marks"
                    optionThree="10 Marks"
                    evnt="4"
                  />
                </div>
              </Col>
            </Col>
            <Col lg={10} md={10} sm={10} className=" p-0 m-0 ">
              {/* heading dashboard */}
              <Row>
                <Col lg={9} md={9} sm={9}>
                  <h3 className="txtL mt-3">Dashboard 01</h3>
                </Col>
                {/* side breadcrumb */}
                <Col lg={3} md={3} sm={3}>
                  <Breadcrumb className="mt-3 litedown">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                      Library
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>Data</Breadcrumb.Item>
                  </Breadcrumb>
                </Col>

                {/* 4 div */}

                <Col lg={3} md={3} sm={3} className="  h-10 mt-lg-2">
                  <Store
                    right="12"
                    right1="Projects"
                    classN=" MKEBIG   c1 makebox "
                    icon={<FaDesktop className="fcolor" />}
                    make="p2m1"
                  />
                </Col>
                <Col lg={3} md={3} sm={3} className="  h-10  mt-lg-2">
                  <Store
                    right="599"
                    right1="Instances"
                    classN="MKEBIG   c2 makebox"
                    icon={<FaRegPaperPlane className="fcolor" />}
                    make="p2m2"
                  />
                </Col>
                <Col lg={3} md={3} sm={3} className="  h-10  mt-lg-2">
                  <Store
                    right="6985"
                    right1="Data"
                    classN="MKEBIG   c3 makebox"
                    icon={<FaLaravel className="fcolor" />}
                    make="p2m3"
                  />
                </Col>
                <Col lg={3} md={3} sm={3} className=" h-10 mt-lg-2">
                  <Store
                    right="35"
                    right1="Users"
                    classN="MKEBIG   c4 makebox"
                    icon={<FaUsers className="fcolor" />}
                    make="p2m4"
                  />
                </Col>

                {/* graphhhh col 4 col 8 */}

                <Col lg={4} md={4} sm={4} className="h-auto   makelow ">
                  <Graph className="lshift" />
                </Col>
                <Col lg={8} md={8} sm={8} className="h-auto   makelow">
                  <SecondGraph />
                </Col>
                {/* 4 square */}

                <Col lg={3} className=" mt-lg-3 ">
                  <div className="square square12  makebox a1">
                    <h3 className="white">Growth Rate</h3>
                    <h2>8,975</h2>
                  </div>
                </Col>

                <Col lg={3} className=" mt-lg-3 a2">
                  <ProgressBar value="87" />
                </Col>
                <Col lg={3} className=" mt-lg-3 a3">
                  <ProgressBar value="52" />
                </Col>
                <Col lg={3} className=" mt-lg-3 a4">
                  <ProgressBar value="76" />
                </Col>

                {/* message task activity */}
                <Col lg={4} className="mt-lg-5 mt-md-5">
                  <Message
                    Message="Messages"
                    Cname="wrap p-2"
                    paragraph="Hey You it's me again...attached now"
                    span="15 mins ago"
                    heading1="Lisa Glover"
                    heading2="john Randall"
                    img={img1}
                  />
                </Col>
                <Col lg={4} className=" mt-lg-5 mt-md-5">
                  <Task
                    Message="Tasks"
                    Cname="wrap p-2"
                    img={img1}
                    heading1="New websites is Created"
                    time1="30 mins ago"
                  />
                </Col>
                <Col lg={4} className="mt-lg-5 mt-md-5">
                  <Activity
                    Message="Activity"
                    Cname="wrap p-2"
                    img={img1}
                    heading1="Adam Berry Add a new projects"
                    heading2="Angular Js Templates"
                    heading3="30 mins ago"
                  />
                </Col>
                {/* TABLE COL 12 */}
                <Col lg={12} className="mt-lg-4 ">
                  <Tablepart />
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Task1;
