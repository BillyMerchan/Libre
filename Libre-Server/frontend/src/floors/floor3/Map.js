const MapDiagram = ({ onClick }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 576.792 349.25"
    >
      <path
        id="337B" className="studyRoom" onClick={() => onClick('337B')} 
        d="M428.916 22.103h-17.291v18.484H421.8l.054 7.562 7.061-.029z"
      />
      <path
        id="337A" className="studyRoom" onClick={() => onClick('337A')} 
        d="M411.593 41.294v17.022h9.45v-17.022h-9.45"
        style={{
        }}
      />
      <path
        id="337E" className="studyRoom" onClick={() => onClick('337E')} 
        d="M457.311 41.273v16.783h9.492v-16.783h-9.492"
      />
      <path
        id="337D" className="studyRoom" onClick={() => onClick('337D')} 
        d="M449.504 22.07h17.29V40.61H456.62l-.055 7.585-7.06-.029z"
      />
      <path
        id="342A" className="studyRoom" onClick={() => onClick('342A')} 
        d="M505.723 120.403v17.504h10.442v-17.504h-10.442"
      />
      <path
        id="342B" className="studyRoom" onClick={() => onClick('342B')} 
        d="M499.268 138.553v19.212h16.82v-19.212h-16.82"
      />
      <path
        id="342C" className="studyRoom" onClick={() => onClick('342C')} 
        d="M505.76 158.335v17.087h10.405v-17.087h-10.405"
      />
      <path
        id="352A" className="studyRoom" onClick={() => onClick('352A')} 
        d="M457.397 297.54v16.86h9.29v-16.86h-9.29"
      />
      <path
        id="352E" className="studyRoom" onClick={() => onClick('352E')} 
        d="M411.54 297.485v16.861h9.45v-16.861h-9.45"
      />
      <path
        id="353A" className="studyRoom" onClick={() => onClick('353A')} 
        d="M380.234 306.936v26.795h27.385v-26.795h-27.385"
      />
      <path
        id="353B" className="studyRoom" onClick={() => onClick('353B')} 
        d="M352.203 296.626v36.837h27.118v-36.837h-27.118"
      />
      <path
        id="323A" className="studyRoom" onClick={() => onClick('323A')} 
        d="M65.612 158.26v17.58h10.442v-17.58h-10.442"
      />
      <path
        id="323B" className="studyRoom" onClick={() => onClick('323B')} 
        d="M65.645 138.513v19.117h16.888v-19.117h-16.888"
      />
      <path
        id="323C" className="studyRoom" onClick={() => onClick('323C')} 
        d="M65.65 120.289h10.48v17.542H65.65Z"
      />
      <path
        id="332E" className="studyRoom" onClick={() => onClick('332E')}
        d="M160.664 41.32h9.585v16.888h-9.585z"
      />
      <path
        id="332A" className="studyRoom" onClick={() => onClick('room1')} 
        d="M114.887 41.294h9.61v16.86h-9.61z"
      />
      <path
        id="332D" className="studyRoom" onClick={() => onClick('332D')} 
        d="M170.144 22.096h-17.259l-.064 26.154 7.108-.01.016-7.602h10.2z"
      />
      <path
        id="332C" className="studyRoom" onClick={() => onClick('332C')}
        d="M133.117 22.1h18.92l-.043 26.15-18.931.015z"
      />
      <path
        id="332B" className="studyRoom" onClick={() => onClick('332B')} 
        d="M114.979 22.1h17.312l.064 26.153-7.13-.01-.016-7.601h-10.23Z"
      />
      <path
        id="stairsMain" className="stairs" onClick={() => onClick('stairsMain')} 
        d="M292.33 208.562v57.134h27.279v-57.134h-27.279"
      />
      <path
        id="stairsRight" className="stairs" onClick={() => onClick('stairsRight')} 
        d="M498.744 209.421v25.775h59.712v-25.775h-59.712"
      />

      <path
        id="stairsLeft" className="stairs" onClick={() => onClick('stairsLeft')}
        d="M23.39 209.898v26.427h59.537v-26.427h-59.537"
      />
      <path
        id="copyRoom" className="utilities" onClick={() => onClick('copyRoom')} 
        d="M210.925 151.642h19.653v26.958h-19.653z"
      />

      <path
        id="elevator" className="utilities" onClick={() => onClick('elevator')} 
        d="M211.891 118.672h16.54v19.331h-16.54z"
      />
      <path
        id="menbathroom" className="bathroom" onClick={() => onClick('menbathroom')} 
        d="M290.773 16.861h29.802v26.107l-19.443-.037-.144-13.404-1.102.025-.093 17.177-9.02.036z"
      />
      <path
        id="womenbathroom" className="bathroom" onClick={() => onClick('womenbathroom')} 
        d="M301.178 71.84h12.948v-1.037l-13.02-.14.087-11.633 6.251-.05-.014-11.546 13.53-.01.19 31.554h-19.972z"
      />
    </svg>
  );
}
export default MapDiagram
