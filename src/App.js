import './App.css';

function App() {
  return (
    <div className="App">

{/* <!-- Navbar Start --> */}
    <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
            <div className="navbar-nav ml-auto p-4">
              <a href="" className="nav-item nav-link active">Home</a>
              <a href="#about" className="nav-item nav-link">About</a>
              <a href="#roadmap" className="nav-item nav-link">Roadmap</a>
              <a href="#team" className="nav-item nav-link">Team</a>
            </div>
          </div>
        </nav>
      </div>
    {/* <!-- Navbar End --> */}

    {/* <!-- Carousel Start --> */}
    <div className="container-fluid p-0 mb-5">
        <div id="blog-carousel" className="carousel slide overlay-bottom" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/Banner_2.png" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h1 className="display-1 text-white m-0">ZKEVM PUNKS</h1>
                <h2 className="text-white m-0"></h2>
                {/* <a className="my-button" href="#"><span></span>CONNECT WALLET</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Carousel End --> */}


    {/* <!-- About Start --> */}
    <div id="about" className="container-fluid py-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{letterSpacing: "5px", fontSize: "70px"}}>About Us</h4>
            <h1 className="display-4"></h1>
          </div>
          <div className="row">
            <div>
              <p>
                Get ready to rock with the zkEVM Punks NFT collection! These punk rockers are here to revolutionize the blockchain space with their unique and edgy NFTs. But they are not just about art; they are also on a mission to create the biggest and most badass community in Polygon zkEVM.
                The zkEVM Punks NFT collection is the perfect example of the power of communities in the blockchain world. By joining this community, you'll have the opportunity to collaborate with other blockchain enthusiasts, share your ideas, and make a real impact within the network.
                But these punks are not just talk; they are determined to make things happen. They know that the future of Ethereum scaling is on L2, and they are here to make Polygon zkEVM the go-to network for all blockchain enthusiasts. They landed last month and are already making waves with their innovative approach to community building.
                If you're ready to rock the blockchain world and be a part of something truly special, then join the zkEVM Punks NFT collection today. The collection is set to be minted very soon, so don't miss your chance to join this revolution in Polygon zkEVM!
              </p>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- About End --> */}


    {/* <!-- Service Start --> */}
    <div id="roadmap" className="container-fluid pt-5" style={{ display: "none" }}>
        <div className="container">
          <div className="section-title">
            <h1 className="display-4">ROADMAP</h1>
          </div>
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-solid fa-calendar service-icon"></i>
                    Lorem ipsum dolor sit.
                  </h4>
                  <p className="m-0">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus repellendus iste aliquam provident voluptatum
                    reiciendis autem quibusdam, quam veritatis!
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-solid fa-calendar service-icon"></i>
                    Lorem ipsum dolor sit amet.
                  </h4>
                  <p className="m-0">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Corporis, ea?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-solid fa-calendar service-icon"></i>
                    Lorem, ipsum.
                  </h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure, rerum?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-5">
              <div className="row align-items-center">
                <div className="col-sm-7">
                  <h4>
                    <i className="fa fa-solid fa-calendar service-icon"></i>
                    Lorem, ipsum.
                  </h4>
                  <p className="m-0">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia, quae.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Service End --> */}


    {/* <!-- Offer Start --> */}
    <div className="offer container-fluid my-5 py-5 text-center position-relative overlay-top overlay-bottom">
        <div className="container py-5">
          <h1 className="text-white mb-3">Why Polygon zkEVM?</h1>
          <h4 className="text-white font-weight-normal mb-4 pb-3">
            As NFT enthusiasts and investors, we understand the importance of being
            early and staying ahead of the game. That's why we chose Polygon zkEVM
            to launch and mint our project - we believe it's the future of the
            industry and offers exciting possibilities for our community.{" "}
          </h4>
        </div>
      </div>
    {/* <!-- Offer End --> */}


    {/* <!-- team Start --> */}
    <div id="team" className="container-fluid pt-5">
        <div className="container">
          <div className="section-title">
            <h4 className="text-primary text-uppercase" style={{ letterSpacing: '5px', fontSize: '70px' }}>Team</h4>
            <h1 className="display-4"></h1>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/1.png" alt="" />
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Sid zkPunk</h4>
                  <p className="m-0">NFT PR founder, sparking buzz and connections.</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/3.png" alt="" />
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Pixel Police</h4>
                  <p className="m-0">Community caretaker, keeping Discord safe and positive.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/2.png" alt="" />
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Punker</h4>
                  <p className="m-0">Innovative NFT founder, shaping digital product evolution.</p>
                </div>
              </div>
              <div className="row align-items-center mb-5">
                <div className="col-4 col-sm-3">
                  <img className="w-100 rounded-circle mb-3 mb-sm-0" src="img/4.png" alt="" />
                </div>
                <div className="col-8 col-sm-9">
                  <h4>Pixel Vandal</h4>
                  <p className="m-0">NFT collab hunter, forging connections and creativity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Menu End --> */}

    {/* <!-- Footer Start --> */}
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
        <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
          <div className="col-lg-3 col-md-6 mb-5" id="logos">
            <h4 className="text-white text-uppercase mb-4" style={{ letterSpacing: '3px' }}>Follow Us</h4>
            <p></p>
            <div className="">
              <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="https://twitter.com/ZkEVMPunks_"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="http://discord.gg/xZpAWJkpq2"><i className="fab fa-discord"></i></a>
            </div>
          </div>
        </div>
      </div>
    {/* <!-- Footer End --> */}

    <a href="#" clasName="btn btn-lg btn-primary btn-lg-square back-to-top"><i clasName="fa fa-angle-double-up"></i></a>


    </div>
  );
}

export default App;
