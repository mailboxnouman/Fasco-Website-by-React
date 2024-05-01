import React, { useState } from "react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "@morgs32/react-use-gesture";
import { FaStar } from 'react-icons/fa';
import profile1 from '../../../assets/profile (1).png'
import profile2 from '../../../assets/profile (2).png'
import profile3 from '../../../assets/profile (3).png'
import './deck.css';

const cardContent = [
  { profile: profile1, review: "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.", stars: [1, 1, 1, 1, 0], name: "Suzan B.", designation: "Web Developer" },
  { profile: profile2, review: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!", stars: [1, 1, 1, 1, 0], name: "James K.", designation: "UI Designer" },
  { profile: profile3, review: "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.", stars: [1, 1, 1, 1, 1], name: "Megen W.", designation: "Fashion Artist" },
  { profile: profile1, review: "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.", stars: [1, 1, 1, 1, 0], name: "Suzan B.", designation: "Web Developer" },
  { profile: profile3, review: "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.", stars: [1, 1, 1, 1, 1], name: "Megen W.", designation: "Fashion Artist" },
  { profile: profile2, review: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!", stars: [1, 1, 1, 1, 0], name: "James K.", designation: "UI Designer" }
];

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 });
const from = () => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

const Deck = () => {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cardContent.length, i => ({ ...to(i), from: from() }));

  const bind = useGesture(({ args: [index], down, delta: [xDelta], velocity }) => {
    const trigger = velocity > 0.2;
    const dir = xDelta < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    set(i => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0;
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } };
    });
    if (!down && gone.size === cardContent.length) setTimeout(() => gone.clear() || set(i => to(i)), 600);
  });

  return (
    <div className="deck-container">
      {props.map(({ x, y, rot, scale }, i) => (
        <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
          <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }}>
            <div className="card-content">
              <div className="card-contentImg">
                <span className="imgBg">
                  <img src={cardContent[i].profile} alt="" />
                </span> 
              </div>
              <div className="card-contentTxt">
                <p className="review-comment">{cardContent[i].review}</p>
                {cardContent[i].stars.map((star, index) => <FaStar key={index} className={star ? "star filled" : "star"} />)}
                <p className="review-line">_______________________________________</p>
                <h2 className="review-name">{cardContent[i].name}</h2>
                <p className="review-designation">{cardContent[i].designation}</p>
              </div>
            </div>
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Deck;
