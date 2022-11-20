import React from 'react'


import {Container,Row,Col, Button} from 'react-bootstrap'
import {Card} from 'react-bootstrap'


function Place() {
  return (
    <div >
      <Container>
        <Row>
          <Col className='nft_headings'>
    <h6>Restaurant</h6>
    <h6>Cottage</h6>
    <h6>Castle</h6>
    <h6>Fantasy city</h6>
    <h6>Beach</h6>
    <h6>Cabins</h6>
    <h6>Offgrid</h6>
    <h6>Farm</h6>
    <img src={require('../images/loc.png')}  alt="vector" id="loc"/>
    </Col>
    </Row> 
    <section_group> 
<Row>
  <Col>
    
  <Card>
       <Card.Img variant="top" src={require('../images/frame9.png')}  alt="vector" id="frame9" />
        <Card.Body>
         <Card.Text> 
     <p> Desert king</p>
     <p> 1MBT per night</p>
     <p> 2345km away</p>
     <p> available for 2weeks </p>
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
        <Card.Img variant="top" src={require('../images/frame11.png')}  alt="vector" id="frame11" />
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
        <Card.Img variant="top" src={require('../images/frame12.png')}  alt="vector" id="frame12" />
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
        <Card.Img variant="top" src={require('../images/Frame5.png')}  alt="vector" id="frame5" />
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
        <Card.Img variant="top" src={require('../images/frame6.png')}  alt="vector" id="frame6" />
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
</Row>


<Row className="second_row">
  <Col>
    
  <Card>
       <Card.Img variant="top" src={require('../images/imgg.png')}  alt="vector" id="imgg" />
        <Card.Body>
         <Card.Text> 
     <p> Desert king</p>
     <p> 1MBT per night</p>
     <p> 2345km away</p>
     <p> available for 2weeks </p>
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
        <Card.Img variant="top" src={require('../images/frame24.png')}  alt="vector" id="frame24" />
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
        <Card.Img variant="top" src={require('../images/frame18.png')}  alt="vector" id="frame18" />
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
        <Card.Img variant="top" src={require('../images/frame19.png')}  alt="vector" id="frame19" />
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

<Row className="table_row" >
  <Col>
     <Card>
        <Card.Img variant="top" src={require('../images/frame20.png')}  alt="vector" id="frame20" />
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
        <Card.Img variant="top" src={require('../images/frame21.png')}  alt="vector" id="frame21" />
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
        <Card.Img variant="top" src={require('../images/frame22.png')}  alt="vector" id="frame22" />
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
        <Card.Img variant="top" src={require('../images/frame23.png')}  alt="vector" id="frame23" />
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
   
  );
}

export default Place



