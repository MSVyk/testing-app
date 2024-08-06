import React, { useState, useEffect } from "react";
import "./Lightbox.css";

const imgFiles = [
  "/photo01.jpg", "/photo02.jpg", "/photo03.jpg", "/photo04.jpg",
  "/photo05.jpg", "/photo06.jpg", "/photo07.jpg", "/photo08.jpg",
  "/photo09.jpg", "/photo10.jpg", "/photo11.jpg", "/photo12.jpg",
  "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/6.jpg", "/7.jpg"
];

const imgCaptions = [
  "Sky Pond (Rocky Mountain National Park)",
  "Buffalo on the Plains (South Dakota)",
  "Garden of the Gods (Colorado Springs)",
  "Elephant Head Wild Flower (Rocky Mountain National Park)",
  "Double Rainbow (Colorado National Monument)",
  "Moose in the Wild (Grand Lake, Colorado)",
  "Camas Wild Flower (Rocky Mountain National Park)",
  "Chasm Lake (Rocky Mountain National Park)",
  "Teton Crest Trail (Grand Teton National Park)",
  "The Notch Trail (Badlands National Park)",
  "Sprague Lake (Rocky Mountain National Park)",
  "Longs Peak Trail (Rocky Mountain National Park)",
  "1", "2", "3", "4", "5", "6", "7"
];

const lightboxTitle = "My Western Vacation";
const imgCount = imgFiles.length;

export default function LightboxSlider() {
  const [currentImg, setCurrentImg] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [autoPlay, setAutoPlay] = useState(null);

  const imagesPerView = 4; // Adjust this number to show more/less images at a time

  const moveToRight = () => {
    setCurrentImg((prevImg) => (prevImg + 1) % imgCount);
  };

  const moveToLeft = () => {
    setCurrentImg((prevImg) => (prevImg === 0 ? imgCount - 1 : prevImg - 1));
  };

  const handlePlayPause = () => {
    if (playing) {
      clearInterval(autoPlay);
      setPlaying(false);
    } else {
      setAutoPlay(setInterval(moveToRight, 2000));
      setPlaying(true);
    }
  };

  useEffect(() => {
    return () => {
      if (autoPlay) clearInterval(autoPlay);
    };
  }, [autoPlay]);

  const displayedImages = imgFiles.slice(currentImg, currentImg + imagesPerView).concat(
    imgFiles.slice(0, Math.max(0, currentImg + imagesPerView - imgCount))
  );

  return (
    <div id="lightbox">
      <h1 id="lbTitle">{lightboxTitle}</h1>
      <div id="lbCounter">{currentImg + 1} / {imgCount}</div>
      <div id="lbPrev" onClick={moveToLeft}>&#9664;</div>
      <div id="lbNext" onClick={moveToRight}>&#9654;</div>

      <div id="lbImages">
        {displayedImages.map((src, index) => (
          <img
            key={index}
            src={process.env.PUBLIC_URL + src}
            alt={imgCaptions[(currentImg + index) % imgCount]}
          />
        ))}
      </div>
      <div id="lbPlay" onClick={handlePlayPause}>
        {playing ? "❚❚" : "⏯"}
      </div>
    </div>
  );
}
