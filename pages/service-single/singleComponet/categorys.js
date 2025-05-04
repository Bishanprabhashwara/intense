import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import Image from 'next/image';

import cimg1 from '/public/images/featured/gourmet-kitchen2.jpg';
import cimg2 from '/public/images/featured/gourmet-kitchen3.jpg';
import cimg3 from '/public/images/service-single/img-4.jpg';
import cimg4 from '/public/images/service-single/img-5.jpg';
import cimg5 from '/public/images/service-single/img-6.jpg';
import cimg6 from '/public/images/service-single/img-7.jpg';
import cimg7 from '/public/images/featured/bath1.jpg';
import cimg8 from '/public/images/featured/bath2.jpg';

const Categorys = () => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    const Ctegory = [
        {
            Id: '1',
            dse1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamc...',
            dse2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
            dse3: 'There are many variations of passages of Lorem Ipsum...',
            dse4: 'It uses a dictionary of over 200 Latin words...',
            dImg1: cimg1,
            dImg2: cimg2,
        },
        {
            Id: '2',
            dse1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamc...',
            dse2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
            dse3: 'There are many variations of passages of Lorem Ipsum...',
            dse4: 'It uses a dictionary of over 200 Latin words...',
            dImg1: cimg3,
            dImg2: cimg4,
        },
        {
            Id: '3',
            dse1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamc...',
            dse2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
            dse3: 'There are many variations of passages of Lorem Ipsum...',
            dse4: 'It uses a dictionary of over 200 Latin words...',
            dImg1: cimg5,
            dImg2: cimg6,
        },
        {
            Id: '4',
            dse1: 'Ut enim ad minim veniam, quis nostrud exercitation ullamc...',
            dse2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco...',
            dse3: 'There are many variations of passages of Lorem Ipsum...',
            dse4: 'It uses a dictionary of over 200 Latin words...',
            dImg1: cimg7,
            dImg2: cimg8,
        },
    ];

    return (
        <div className="tab-area">
            <style jsx>{`
                .tablinks {
                    margin-bottom: 20px;
                    background-color:rgb(196, 193, 193);
                    text-align: center;
                    color: rgb(0, 0, 0);
                    border-radius: 10px;
                    // border: 1px solid;
                }
                .nav-tabs {
                    border-bottom: 2px solid #000;
                    display: flex;
                    justify-content: center;
                    gap: 15px;
                    background-color: #f9f9f9;
                    padding: 10px 0;
                    border-radius: 8px;
                }
                .nav-tabs .nav-item {
                    margin-bottom: 0;
                }
                .nav-tabs .nav-link {
                    color: #333;
                    font-weight: 500;
                    padding: 10px 20px;
                    border-radius: 5px;
                    background-color: #eaeaea;
                    transition: all 0.3s ease-in-out;
                    cursor: pointer;
                    border: none;
                }
                .nav-tabs .nav-link:hover {
                    background-color: #ddd;
                    color: #000;
                }
                .nav-tabs .nav-link.active {
                    background-color: #007bff;
                    color: #fff;
                    font-weight: bold;
                }
                .img-area {
                    display: flex;
                    gap: 20px;
                    margin: 20px 0;
                }
                .img-area :global(img) {
                    border-radius: 8px;
                    object-fit: cover;
                }
                p {
                    margin: 10px 0;
                    color: #555;
                    line-height: 1.6;
                }
            `}</style>

            <div className="tablinks">
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '1' })}
                            onClick={() => toggle('1')}
                        >
                            Breakfast
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '2' })}
                            onClick={() => toggle('2')}
                        >
                            Airport Taxi
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '3' })}
                            onClick={() => toggle('3')}
                        >
                            Game Room
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: activeTab === '4' })}
                            onClick={() => toggle('4')}
                        >
                            Spa Salon
                        </NavLink>
                    </NavItem>
                </Nav>
            </div>

            <TabContent activeTab={activeTab}>
                {Ctegory.map((ctgry, index) => (
                    <TabPane tabId={ctgry.Id} key={index}>
                        <p>{ctgry.dse1}</p>
                        <p>{ctgry.dse2}</p>
                        <div className="img-area">
                            <Image src={ctgry.dImg1} alt="" width={400} height={250} />
                            <Image src={ctgry.dImg2} alt="" width={400} height={250} />
                        </div>
                        <p>{ctgry.dse3}</p>
                        <p>{ctgry.dse4}</p>
                    </TabPane>
                ))}
            </TabContent>
        </div>
    );
};

export default Categorys;
