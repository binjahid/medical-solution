import React from 'react';
import { Col, Row } from 'react-bootstrap';

const AboutSection = (props) => {
    const customStyle=`align-items-center mb-5 ${props?.display}`;
    return (
        <div>
            <Row className={customStyle}>
                    <Col className='text-start'>
                    <h1 className='custom-color'>{props.children}</h1>
                    <p>Weddings and any opinions suitable smallest nay. My he houses or months settle remove ladies appear. Engrossed suffering supposing he recommend.</p>
                    <p>Uneasy barton seeing remark happen hi has. Am possible offering contempt mr distance stronger an. Attachment excellence announcing or reasonable am on if indulgence. Exeter talked in agreed spirit no he unable do. Betrayed shutters in vicinity it unpacked in.</p>
                    </Col>
                    <Col>
                    <img className='img-fluid' src={props.img} alt="" />
                    </Col>
                </Row>
        </div>
    );
};

export default AboutSection;