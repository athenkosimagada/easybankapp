import React from 'react';
import './Blog.css';
import images from '../../constants/images';
import Article from '../../components/Article/Article';

function Blog() {
  return (
    <div className='articles' id='blog'>
        <h1>Latest Articles</h1>
        <div className="articles_cards">
            <Article image={images.money} 
            title='Receive money in any currency with no fees' 
            arthor='By Claire Robinson' 
            paragraph='The world is getting smaller and we’re becoming more mobile. So why should you be 
            forced to only receive money in a single …'/>
            <Article image={images.restaurant} 
            title='Treat yourself without worrying about money' 
            arthor='By Wilson Hutton' 
            paragraph='Our simple budgeting feature allows you to separate out your spending and set 
            realistic limits each month. That means you …'/>
            <Article image={images.plane} 
            title='Take your Easybank card wherever you go' 
            arthor='By Wilson Hutton' 
            paragraph='e want you to enjoy your travels. This is why we don’t charge any fees on purchases 
            while you’re abroad. We’ll even show you …'/>
            <Article image={images.confetti} 
            title='Our invite-only Beta accounts are now live!' 
            arthor='By Claire Robinson' 
            paragraph='Our invite-only Beta accounts are now live!
            After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
            It’s easy to request an invite through the site ...'/>
        </div>
    </div>
  )
}

export default Blog