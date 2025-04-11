import React, { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Link from 'next/link'
import Navbar from '../../components/Navbar';
import PageTitle from '../../components/pagetitle';
import BlogSidebar from '../../components/BlogSidebar';
import Scrollbar from '../../components/scrollbar';
import Image from 'next/image';
import blog3 from '/public/images/blog-details/comments-author/img-1.jpg'
import blog4 from '/public/images/blog-details/comments-author/img-2.jpg'
import blog5 from '/public/images/blog-details/comments-author/img-3.jpg'
import blog6 from '/public/images/blog-details/author.jpg'
import gl1 from '/public/images/blog/img-3.jpg'
import gl2 from '/public/images/blog/img-2.jpg'
import Footer from '../../components/footer';

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()
    const [blogContent, setBlogContent] = useState({
        content: '',
        quote: '',
        conclusion: ''
    })

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)

    useEffect(() => {
        if (BlogDetails) {
            if (BlogDetails.id === '1') {
                setBlogContent({
                    content: "Buying property in Australia can be a rewarding investment, but it requires careful planning and understanding of the local market. The Australian property market has shown resilience over the years, with steady growth in major cities like Sydney, Melbourne, and Brisbane. For international buyers, there are additional considerations including Foreign Investment Review Board (FIRB) approval and potentially higher stamp duty rates in some states. Before starting your property search, it's essential to understand your budget, preferred locations, and the type of property that suits your needs. Working with a local real estate agent who understands the market can be invaluable in finding the right property at the right price.",
                    quote: "The Australian property market continues to be attractive for both local and international investors, with strong fundamentals supporting long-term capital growth in well-selected locations.",
                    conclusion: "When buying property in Australia, ensure you conduct thorough due diligence, including property inspections, title searches, and understanding any zoning restrictions. Financing options vary, so shop around for the best mortgage rates and terms. Remember that property purchase involves additional costs such as stamp duty, legal fees, and inspection costs. With careful planning and professional advice, buying property in Australia can be a smooth process and a sound investment for your future."
                })
            } else if (BlogDetails.id === '2') {
                setBlogContent({
                    content: "Investing in Australian real estate requires strategic location selection to maximize returns. In 2025, several suburbs stand out for their growth potential, infrastructure development, and lifestyle appeal. Areas undergoing urban renewal or benefiting from new transport links often see significant property value increases. The top suburbs for investment span across different states, offering diverse options for investors with varying budgets. Factors to consider when evaluating investment potential include rental yield, vacancy rates, population growth, and planned infrastructure projects. Emerging suburbs in outer metropolitan areas often offer better value for money with strong growth prospects.",
                    quote: "The best investment suburbs combine affordability with strong growth drivers such as infrastructure development, population growth, and lifestyle amenities that attract long-term tenants.",
                    conclusion: "When considering the top 7 suburbs for investment, look beyond the current market conditions to long-term growth drivers. Areas with diverse employment opportunities, good schools, and transport connections tend to perform well over time. Consider working with a buyer's agent who specializes in investment properties to identify opportunities before they become widely known. Remember that property investment is a long-term strategy, and selecting locations with solid fundamentals will generally outperform trend-driven hotspots."
                })
            } else if (BlogDetails.id === '3') {
                setBlogContent({
                    content: "Entering the property market as a first-time buyer in Australia presents unique challenges and opportunities. Understanding the various government incentives available, such as the First Home Owner Grant and stamp duty concessions, can significantly reduce your initial costs. Before beginning your property search, it's crucial to assess your financial position, establish a realistic budget, and secure pre-approval for financing. Many first-time buyers make the mistake of overlooking additional costs such as inspection fees, legal expenses, and moving costs. Working with professionals who understand the needs of first-time buyers can help navigate the complexities of the property market.",
                    quote: "First-time buyers should focus on properties with long-term potential rather than trying to time the market perfectly. The best time to buy your first home is when you're financially ready.",
                    conclusion: "As a first-time buyer, consider starting with a property that meets your essential needs rather than waiting for the perfect home. The property ladder concept suggests that your first purchase is a stepping stone to future property goals. Take advantage of educational resources, attend home buyer seminars, and connect with other first-time buyers to share experiences. With proper preparation and realistic expectations, buying your first home in Australia can be an achievable and rewarding milestone."
                })
            }
        }
    }, [BlogDetails])

    if (!BlogDetails) return <div>Loading...</div>

    return (
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'} />
            <PageTitle pageTitle={BlogDetails?.title} pagesub={'Blog'} />
            <section className="wpo-blog-single-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className={`col col-lg-8 col-12 ${props.blRight}`}>
                            <div className="wpo-blog-content">
                                <div className="post format-standard-image">
                                    <div className="entry-media">
                                        <Image src={BlogDetails?.blogSingleImg} alt="" />
                                    </div>
                                    <div className="entry-meta">
                                        <ul>
                                            <li><i className="fi ti-user"></i> By <Link href="/">{BlogDetails?.author}</Link> </li>
                                            <li><i className="fi ti-comment-alt"></i> Comments {BlogDetails?.comment}</li>
                                            <li><i className="fi flaticon-calendar"></i> {BlogDetails?.create_at}</li>
                                        </ul>
                                    </div>
                                    <h2>{BlogDetails?.title}</h2>
                                    <p>{blogContent.content}</p>
                                    <blockquote>
                                        {blogContent.quote}
                                    </blockquote>
                                    <p>{blogContent.conclusion}</p>

                                    <div className="gallery">
                                        <div>
                                            <Image src={gl1} alt="" />
                                        </div>
                                        <div>
                                            <Image src={gl2} alt="" />
                                        </div>
                                    </div>
                                </div>

                                <div className="tag-share clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">{BlogDetails?.Thumb}</Link></li>
                                            <li><Link href="/">Real Estate</Link></li>
                                            <li><Link href="/">Australia</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="tag-share-s2 clearfix">
                                    <div className="tag">
                                        <span>Share: </span>
                                        <ul>
                                            <li><Link href="/">facebook</Link></li>
                                            <li><Link href="/">twitter</Link></li>
                                            <li><Link href="/">linkedin</Link></li>
                                            <li><Link href="/">pinterest</Link></li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="author-box">
                                    <div className="author-avatar">
                                        <Link href="/" target="_blank"><Image src={blog6} alt="" /></Link>
                                    </div>
                                    <div className="author-content">
                                        <Link href="/" className="author-name">Author: {BlogDetails?.author}</Link>
                                        <p>Real estate expert with over 10 years of experience in the Australian property market. Specializing in investment strategies, market analysis, and helping first-time buyers navigate the property landscape.</p>
                                        <div className="socials">
                                            <ul className="social-link">
                                                <li><Link href="/"><i className="ti-facebook"></i></Link></li>
                                                <li><Link href="/"><i className="ti-twitter-alt"></i></Link></li>
                                                <li><Link href="/"><i className="ti-linkedin"></i></Link></li>
                                                <li><Link href="/"><i className="ti-instagram"></i></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="more-posts">
                                    <div className="previous-post">
                                        <Link href="/">
                                            <span className="post-control-link">Previous Post</span>
                                            <span className="post-name">Australian Property Market Trends for 2025: What Buyers Need to Know</span>
                                        </Link>
                                    </div>
                                    <div className="next-post">
                                        <Link href="/">
                                            <span className="post-control-link">Next Post</span>
                                            <span className="post-name">How to Maximize Your Investment Returns in the Australian Real Estate Market</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="comments-area">
                                    <div className="comments-section">
                                        <h3 className="comments-title">Comments</h3>
                                        <ol className="comments">
                                            <li className="comment even thread-even depth-1" id="comment-1">
                                                <div id="div-comment-1">
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>John Abraham <span className="comments-date">January 12,2023
                                                                    At 9.00am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>Great article! I've been looking to invest in Australian property and this provides some valuable insights. Would love to see more specific information about regional areas too.</p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="children">
                                                    <li className="comment">
                                                        <div>
                                                            <div className="comment-theme">
                                                                <div className="comment-image"><Image src={blog4} alt="" /></div>
                                                            </div>
                                                            <div className="comment-main-area">
                                                                <div className="comment-wrapper">
                                                                    <div className="comments-meta">
                                                                        <h4>Lily Watson <span className="comments-date">January
                                                                            12,2023 At 9.00am</span></h4>
                                                                    </div>
                                                                    <div className="comment-area">
                                                                        <p>I agree, John. Regional markets are showing strong growth potential, especially with the rise of remote work. Some areas are seeing double-digit growth.</p>
                                                                        <div className="comments-reply">
                                                                            <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="comment">
                                                <div>
                                                    <div className="comment-theme">
                                                        <div className="comment-image"><Image src={blog3} alt="" /></div>
                                                    </div>
                                                    <div className="comment-main-area">
                                                        <div className="comment-wrapper">
                                                            <div className="comments-meta">
                                                                <h4>Michael Chen <span className="comments-date">January 15,2023
                                                                    At 10.30am</span></h4>
                                                            </div>
                                                            <div className="comment-area">
                                                                <p>As a first-time buyer, I found this information really helpful. The section on government incentives was particularly useful. Looking forward to more articles on this topic!</p>
                                                                <div className="comments-reply">
                                                                    <Link href="/" className="comment-reply-link"><span>Reply</span></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="comment-respond">
                                        <h3 className="comment-reply-title">Post Comments</h3>
                                        <form onSubmit={submitHandler} id="commentform" className="comment-form">
                                            <div className="form-textarea">
                                                <textarea id="comment" placeholder="Write Your Comments..."></textarea>
                                            </div>
                                            <div className="form-inputs">
                                                <input placeholder="Website" type="url" />
                                                <input placeholder="Name" type="text" />
                                                <input placeholder="Email" type="email" />
                                            </div>
                                            <div className="form-submit">
                                                <input id="submit" value="Post Comment" type="submit" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <BlogSidebar blLeft={props.blLeft} />
                    </div>
                </div>
            </section>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogSingle;
