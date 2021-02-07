import React from 'react';
import { Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import { StyledCardTitle } from "./StyleComponent";

export default function Kitap(props) {

 
    

    const { kitapId, kitapAd, kitapYazar } = props.kitap;
    return (
        <Row>
            <Col>
                <Card body>
                    <StyledCardTitle tag="h5">{kitapAd}</StyledCardTitle>
                    <CardText>{kitapYazar}</CardText>
                </Card>
            </Col>
        </Row>
    )
}
