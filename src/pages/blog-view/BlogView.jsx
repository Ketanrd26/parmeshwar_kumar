import React from 'react'
import './BlogView.scss'

function BlogView() {
    return (
        <>
            <div className="parent blog-view-parent">
                <div className="cont cont-blog-view">
                    <div className="image-content">
                        <div className="image bg-img-cover"></div>
                        <div className="blogname-date">
                            <p>Blog Name : Yoga Class</p>
                            <p>Date : December 4, 2024</p>

                        </div>
                    </div>

                    <div className="blog-details">
                        <h3>Blog Details</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, sequi! Recusandae vero illo autem a minima aspernatur id omnis, doloremque numquam alias, modi, laboriosam quaerat fuga iusto atque nostrum. Expedita!Debitis, sequi! Recusandae vero illo autem a minima aspernatur id omnis, doloremque numquam alias, modi, laboriosam quaerat fuga iusto atque nostrum.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogView
