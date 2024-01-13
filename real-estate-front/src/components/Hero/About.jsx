import React from 'react'
import prishtina1 from '../../assets/images/prishtina1.jpg'
import './about.scss'

const About = () => {
    return (
        <div className='about'>
            <div className='about-wrapper'>
                <div className='about-left'>
                    <h1>- About Us</h1>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maxime sunt eaque neque tempore necessitatibus voluptas
                        cupiditate numquam eligendi, expedita saepe?</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos repellat facere
                        ullam fuga labore odio temporibus in quo sequi quaerat aliquam, inventore illum
                        iste esse ad voluptatibus similique dicta ipsum eveniet quam. Quis ut aliquid cumque
                        quod, nulla reiciendis, nisi eius vitae ipsa fuga dolorum iusto ducimus, ea saepe!
                        Esse soluta tempore dicta rem pariatur ea ipsam numquam explicabo, excepturi facilis,
                        animi eos, distinctio quo minus eligendi rerum. Ut, doloribus architecto iste eum repudiandae
                        consequuntur ad at nihil ducimus earum, harum ipsa culpa ipsam expedita necessitatibus vitae.
                        Eligendi, placeat! Omnis unde, quasi alias adipisci et minus nostrum autem ad beatae.</p>
                </div>
                <div className='about-right'>
                    <img src={prishtina1} alt="" />
                </div>
            </div>
        </div>
    )
}

export default About