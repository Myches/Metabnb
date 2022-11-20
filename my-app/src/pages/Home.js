import React from "react";
import {Container,Row,Col} from 'react-bootstrap'
import {Card} from 'react-bootstrap'


function Home() {


    return (
      <div className="home" >
        <Container>
        <Row className="hero_page">
        <Col  className="hero_text">
      <h1>Rent a <span>Place</span> away from 
      <span> Home</span> in the <span>Metaverse</span></h1>
      <p>we provide you access to luxury and affordable houses
      in the metaverse ,get a chance to turn your
       imagination to reality at your comfort zone</p>
       <input type="search" id="input_search"  placeholder="search location" />
       <span><button type="search" id="search"> Search </button> </span>
        </Col>

<Col  className='nft_imgs ' >

  <img src={require('../images/frame1.png')}  alt="vector" id="frame1" className="img-fluid"/>
<img src={require('../images/Frame2.png')}  alt="vector" id="frame3"className="img-fluid"/>
<img src={require('../images/frame3.png')}  alt="vector" id="frame2"className="img-fluid"/>
<img src={require('../images/frame4.png')}  alt="vector"id="frame4" className="img-fluid"/>
</Col>
</Row>


<img src={require('../images/bar_frame.png')}  alt="vector"id="bar_frame" />


<section>
<h1>inspiration for your next adventure</h1>
<section_group> 
<Row>
  <Col> 
  
      <Card>
       <Card.Img variant="top" src={require('../images/frame(5).png')}  alt="vector" id="frame(5)" />
        <Card.Body>
         <Card.Text> 
     <p> Desert king</p>
     <p> 1MBT per night</p>
     <p> 2345km away</p>
     <p> available for 2weeks</p>
     <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
  </Col> 


   <Col> 
      <Card>
        <Card.Img variant="top" src={require('../images/frame6.png')}  alt="vector" id="frame6" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks </p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
   </Col> 

    <Col>
    <Card>
        <Card.Img variant="top" src={require('../images/frame7.png')}  alt="vector" id="frame7" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
    </Col>

      <Col>
       <Card>
        <Card.Img variant="top" src={require('../images/frame8.png')}  alt="vector" id="frame8" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
      </Col>
</Row>

<Row className="second_row" >
  <Col>
     <Card>
        <Card.Img variant="top" src={require('../images/frame9.png')}  alt="vector" id="frame9" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
  </Col> 

   <Col>
       <Card>
        <Card.Img variant="top" src={require('../images/frame10.png')}  alt="vector" id="frame10" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
   </Col> 

    <Col> 
    <Card>
        <Card.Img variant="top" src={require('../images/frame11.png')}  alt="vector" id="frame12" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
          </Card.Text>
        </Card.Body>
        </Card>
    </Col>

      <Col>
      <Card>
        <Card.Img variant="top" src={require('../images/frame7.png')}  alt="vector" id="frame12" />
        <Card.Body>
         <Card.Text>
      <p>Desert king</p>
      <p>1MBT per night</p>
      <p>2345km away</p>
      <p>available for 2weeks</p>
      <div className="Star">
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     <img src={require('../images/Star.png')}  alt="vector" id="star"/>
     </div>
 </Card.Text>
        </Card.Body>
        </Card> 
  </Col>
</Row>
</section_group>
</section>

<div className="community">
<Row className="com_section">
<Col className="meta_text" col-4>
<h1>Metabnb NFTs</h1>
<p>Discover our NFT gift card collection.Loyal customers <br />
get an amazing giftcards as NFTs. These NFTs<br />
 gives our customers
   access to loads of exclusive services.</p>
 <button type="submit" id="submit"> Learn more </button>
   </Col>

 <Col className=" meta" col-8>
 <img src={require('../images/image9.png')}  alt="vector" id="image9" className="img-fluid"/>
 <img src={require('../images/image7.png')}  alt="vector" id="image7"className="img-fluid"/>
 <img src={require('../images/image8.png')}  alt="vector" id="image8"className="img-fluid"/>
 </Col>
   </Row>
   </div>

<div className="footer">
<Row className="footer_row">
<Col className=" id" ><img src={require('../images/logo.png')}  alt="vector" id="house"/><span><img src={require('../images/Vector4.png')}  alt="vector" id="Vector4"/></span><br />
<div className="logos">
<img src={require('../images/facebook.png')}  alt="vector" id="facebook"/>
<span><img src={require('../images/in.png')}  alt="vector" id="Instagram"/></span>
<span><img src={require('../images/twitter.png')}  alt="vector" id="twitter"/></span><br />
© 2022 Metabnb
</div>
</Col>



<Col className="com "><h6>Community</h6>
<p>NFT</p>
<p>Tokens</p>
<p>Landlords</p>
<p>Discord</p></Col>

<Col className="places "><h6>Places</h6>
<p>Castle</p>
<p>Farms</p>
<p>Beach</p>
<p>Learn more</p></Col>
<Col className="about "><h6>About us</h6>
<p>Road Maps</p>
<p>Creators</p>
<p>Career</p>
<p>Contact us</p></Col>
</Row>
</div>


        </Container>

      
 </div>
 ) }
  
  export default Home;
 