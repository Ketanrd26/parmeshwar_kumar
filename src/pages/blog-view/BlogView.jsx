import React from 'react'
import './BlogView.scss'
import data from '../../Data'

function BlogView() {
    return (
        <>
            <div className="parent blog-view-parent">
                <div className="cont cont-blog-view">
                    {
                        data.map((item, index) => (
                            <>
                                <div className="image-content">
                                    <div className="image bg-img-cover" style={{ background: `url(${item.img})` }}></div>
                                    <div className="blogname-date">
                                        <p>Blog Name : {item.title}</p>
                                        <p>Date :{item.date}</p>
                                    </div>
                                </div>
                            
                                <div className="blog-details">
                                    <h3>Blog Details</h3>
                                    <p>{item.content}</p>
                                </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default BlogView
