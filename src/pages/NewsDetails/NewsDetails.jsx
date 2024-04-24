import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import { useEffect, useState } from "react";

function NewsDetails() {
    const params = useParams();
    const data = useLoaderData();
    const [showData, setShowData] = useState("Loading Data...");
    useEffect(() => {
        if (data) {
            const news = data.find((item) => item._id === params.id);
            setShowData(news);
        }
    }, []);
    const { title, details, image_url } = showData;
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className='grid grid-cols-4'>
                <div className='col-span-3 space-y-7'>
                    <img
                        className='w-full object-cover'
                        src={image_url}
                        alt={title}
                    />
                    <h1 className='text-5xl font-bold'>{title}</h1>
                    <p className='font-medium text-lg'>{details}</p>
                </div>
                <div className='col-span-1'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
}

export default NewsDetails;
