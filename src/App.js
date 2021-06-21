
import './App.css';
import { useEffect, useRef } from 'react';

function App() {
  const background1 = useRef();
  const background2 = useRef();
  const foreground1 = useRef();
  const foreground2 = useRef();
  const redQueen_alice_sprite = useRef();
  useEffect(() => {

    const background1Movement = background1.current.animate([
      { transform: 'translate(100%,0)' },
      { transform: 'translate(-100%,0)' },

    ],
      {
        duration: 36000,
        iterations: Infinity
      }
    ),

      background2Movement = background2.current.animate([
        { transform: 'translate(100%,0)' },
        { transform: 'translate(-100%,0)' },

      ],
        {
          duration: 36000,
          iterations: Infinity
        }
      ),

     
     foreground1Movement = foreground1.current.animate([
      { transform: 'translate(100%,0)' },
      { transform: 'translate(-100%,0)' },

    ],
      {
        duration: 12000,
        iterations: Infinity
      }
    ),


     
     foreground2Movement = foreground2.current.animate([
      { transform: 'translate(100%,0)' },
      { transform: 'translate(-100%,0)' },

    ],
      {
        duration: 12000,
        iterations: Infinity
      }
    ),

     

     redQueen_alice = redQueen_alice_sprite.current.animate([
      { transform: 'translate(0,0)' },
      { transform: 'translate(0,-100%)' }],
      {
        easing: 'steps(7, end)',
        direction: "reverse",
        duration: 600,
        playbackRate: 1,
        iterations: Infinity
      });

    const sceneries = [foreground1Movement, foreground2Movement, background1Movement, background2Movement];
      
    const adjustBackgroundPlayback = function () {

      if (redQueen_alice.playbackRate > 1.2) {
        sceneries.forEach(function (anim) {
          anim.playbackRate = redQueen_alice.playbackRate / 2;
        });
      } else {
        sceneries.forEach(function (anim) {
          anim.playbackRate = 0;
        });
      }
    }
    adjustBackgroundPlayback();
    setInterval(function () {

      if (redQueen_alice.playbackRate > .4) {
        redQueen_alice.playbackRate *= .9;
      }
      adjustBackgroundPlayback();
    }, 3000);

    const goFaster = function () {

      redQueen_alice.playbackRate *= 1.1;
      adjustBackgroundPlayback();
    }

    document.addEventListener("click", goFaster);
    document.addEventListener("touchstart", goFaster);

  }, [])

  return (
    <div className="wrapper" >
      <div className="sky"></div>
      <div className="earth">
        <div  id="red-queen_and_alice">
          <img ref={redQueen_alice_sprite}  id="red-queen_and_alice_sprite" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>

      <div ref={foreground1} className="scenery" id="foreground1">
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div ref={foreground2} className="scenery" id="foreground2">
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div ref={background1} className="scenery" id="background1">
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div ref={background2} className="scenery" id="background2">
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />

        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
    </div>

  );
}

export default App;
