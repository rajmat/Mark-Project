import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Contact from './Contact';
import App from './App';
import NotFound from './NotFound';
import AsapRocky3 from './sub-pages/asapRocky3';

import Audio from './sub-pages/Audio';
import audio1 from './audio/audio1.mp3';
import audio2 from './audio/audio2.mp3';

import VideoPlayer from './sub-pages/VideoPlayer';
import video1 from './videos/video1.mp4';
import video2 from './videos/IMG_0048.mp4';

import PicCarousel from './sub-pages/PicCarousel';
import a from './images/a.jpg';
import kep1 from './images/kep1.jpg';
import ric from './images/ric.jpg';
import asap from './images/asap-rocky-underated-feature-image.jpg';
import agif from './images/agif.gif';
import bgif from './images/bgif.gif';
import cropped from './images/cropped.jpg';

const Routes = function () {
  return (
    <BrowserRouter >
      <Switch>
        <Route path="/" exact component={App}></Route>
        <Route path="/contact" component={Contact}></Route>
        <Route path="/A$apRocky-1" render={(props) => <VideoPlayer {...props} video={video2} />}></Route>
        <Route path="/A$apRocky-2" render={(props) => <Audio {...props} audio={audio2} />}></Route>
        <Route path="/A$apRocky-3" component={AsapRocky3}></Route>
        <Route path="/A$apRocky-4" render={(props) => <VideoPlayer {...props} video={video1} />}></Route>
        <Route path="/A$apRocky-5" render={(props) => <PicCarousel {...props} pictures={[a, kep1, ric, asap]} />}></Route>
        <Route path="/A$apRocky-6" render={(props) => <PicCarousel {...props} pictures={[agif, bgif, cropped, a]} />}></Route>
        <Route path="/A$apRocky-7" render={(props) => <Audio {...props} audio={audio1} />}></Route>
        <Route path="*" component={NotFound}></Route>
        <Route path="/*" component={Contact}></Route>
      </Switch>
    </BrowserRouter>
  )
};

export default Routes;