import React from 'react'
import { Card } from 'antd';
import {Row,Col} from 'antd'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
const Features = () => {
    return (
        <section style={{marginBottom:'60px'}}>
            <article style={{ textAlign: 'center' }}>
                <h1 style={{ fontSize: '36px' }}> Some Features that Made us Unique</h1>
                <p style={{ fontSize: '15px', color: '#777777' }}>Who are in extremely love with eco friendly system.</p>
            </article>

            <Row style={{display:'flex', justifyContent:'center', width:'80%', rowGap:'60px', margin:'0 auto'}}>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>

                <Col className="gutter-row" span={8}>
                    <Card
                        title="Expert Technicians"
                        
                        bordered={false}
                        style={{
                            width: 300,
                        }}
                    >
                        <p>
                          Usage of the Internet is becoming more common due to  
                          rapid advancement of technology and power.</p>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default Features