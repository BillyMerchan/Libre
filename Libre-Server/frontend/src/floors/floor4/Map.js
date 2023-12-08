
const MapDiagram4 = ({ onClick }) => {
  const roomStyles = {
    studyRoom: {
      className: "studyRoom",
      fill: 'rgb(189, 255, 189)',
    },
    stairs: {
      className: "stairs",
      fill: 'rgb(160, 238, 224)',
    },
    utility: {
      className: "utilities",
      fill: 'rgb(238, 248, 149)',
    },
    restroom: {
      className: "restroom",
      fill: 'rgb(240, 190, 220)',
    },
  };

  const roomDescriptions = {
    studyRoom: `Desk space: 1 person \nWindows: none \nWhite Board: none`,
    studyRoomv2: `Desk space: 2 people \nWindows: 1 side \nWhite Board: none`,
    studyRoomv3: `Desk space: 4 people \nWindows: 1 side \nWhite Board: none`,
    restRoom1: `Stalls: 2 \nOne of which is accessibility. \nSinks: 2 \nPaper Towel dispensor available.`
    // Add descriptions for other rooms 
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      viewBox="0 0 576.792 349.25"
      width={"100%"}
      height={"100%"}
    >

      <path
        id="Stairs, Main" {...roomStyles.stairs} onClick={() => onClick('Stairs, Main', roomStyles.stairs.fill, roomDescriptions.studyRoom)}
        d="M292.33 208.562h27.279v57.134H292.33z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="Stairs, Right" {...roomStyles.stairs} onClick={() => onClick('Stairs, Right', roomStyles.stairs.fill, roomDescriptions.studyRoom)}
        d="M498.744 209.421h59.712v25.775h-59.712z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="Stairs, Left" {...roomStyles.stairs} onClick={() => onClick('Stairs, Left', roomStyles.stairs.fill, roomDescriptions.studyRoom)}
        d="M23.39 209.898h59.537v26.427H23.39Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="Copy Room" {...roomStyles.utility} onClick={() => onClick('Copy Room', roomStyles.utility.fill, roomDescriptions.studyRoom)}
        d="M210.925 151.642h19.653V178.6h-19.653z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="Elevator" {...roomStyles.utility} onClick={() => onClick('Elevator', roomStyles.utility.fill, roomDescriptions.studyRoom)}
        d="M211.891 118.672h16.54v19.331h-16.54z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="Men's restroom" {...roomStyles.restroom} onClick={() => onClick("Men's restroom", roomStyles.restroom.fill, roomDescriptions.restRoom1)}
        d="M290.773 16.861h29.802v26.107l-19.443-.037-.144-13.404-1.102.025-.093 17.177-9.02.036z"
      />
      <path
        id="Women's restroom" {...roomStyles.restroom} onClick={() => onClick("Women's restroom", roomStyles.restroom.fill, roomDescriptions.restRoom1)}
        d="M301.178 71.84h12.948v-1.037l-13.02-.14.087-11.633 6.251-.05-.014-11.546 13.53-.01.19 31.554h-19.972z"
      />
      <path
        id="433A" {...roomStyles.studyRoom} onClick={() => onClick('433A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M209.595 33.414h19.592v12.758h-19.592z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="431" {...roomStyles.studyRoom} onClick={() => onClick('431', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M85.205 33.414h25.212v26.579H85.205Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="424B" {...roomStyles.studyRoom} onClick={() => onClick('424B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M68.733 61.806h14.552v11.062H68.733Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="424A" {...roomStyles.studyRoom} onClick={() => onClick('424A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M45.75 61.645h22.178v25.56l-12.888-.054-.054 1.611h-9.209z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="423E" {...roomStyles.studyRoom} onClick={() => onClick('423E', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M68.626 121.41H83.23v10.847H68.626Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="423D" {...roomStyles.studyRoom} onClick={() => onClick('423D', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M45.75 121.41h22.124v11.492l3.249.054-.027 5.718-25.346.027z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="423C" {...roomStyles.studyRoom} onClick={() => onClick('423C', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M45.912 139.56H76.68v18.097H45.912Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="423B" {...roomStyles.studyRoom} onClick={() => onClick('423B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="m45.804 158.838 25.284-.038-.019 5.496-2.98.02v12.135H45.804Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="458" {...roomStyles.studyRoom} onClick={() => onClick('458', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M85.057 297.915h25.614v26.366H85.057Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="457E" {...roomStyles.studyRoom} onClick={() => onClick('457E', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M114.698 297.54h11.062v14.444h-11.062z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="457D" {...roomStyles.studyRoom} onClick={() => onClick('457D', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M114.698 312.79h11.76l.108-3.008 5.53.054-.053 14.337h-17.345z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="457C" {...roomStyles.studyRoom} onClick={() => onClick('457C', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M133.278 304.198h17.935v20.083h-17.935z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="457B" {...roomStyles.studyRoom} onClick={() => onClick('457B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M152.126 309.997l6.068.054v2.63h11.867v11.492h-17.935z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />

      <path
        id="457A" {...roomStyles.studyRoom} onClick={() => onClick('457A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M158.892 297.646h11.115v14.07h-11.115z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="453E" {...roomStyles.studyRoom} onClick={() => onClick('453E', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M352.286 297.533h11.087v14.353h-11.087z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="423A" {...roomStyles.studyRoom} onClick={() => onClick('423A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M68.706 165.228h14.445v11.196H68.706Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="453D" {...roomStyles.studyRoom} onClick={() => onClick('453D', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M352.134 312.797h12.074l.076-3.038 5.544.076-.076 14.505h-17.618z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="453C" {...roomStyles.studyRoom} onClick={() => onClick('453C', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M370.512 304.368h18.225v19.82h-18.225z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="453B" {...roomStyles.studyRoom} onClick={() => onClick('453B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M389.8 309.684h5.924v3.265h11.846v11.163H389.8z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="453A" {...roomStyles.studyRoom} onClick={() => onClick('453A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M396.635 297.685h10.86v14.2h-10.86z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="451" {...roomStyles.studyRoom} onClick={() => onClick('451', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M471.056 297.989h25.668v26.35h-25.668z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="442E" {...roomStyles.studyRoom} onClick={() => onClick('442E', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M498.698 165.397h14.429v11.012h-14.429Z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="442D" {...roomStyles.studyRoom} onClick={() => onClick('442D', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M511.304 159.018h24.909v17.163h-22.175v-11.923l-2.67.046z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="442C" {...roomStyles.studyRoom} onClick={() => onClick('442C', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M505.457 139.654h30.528v18.225h-30.528z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="442B" {...roomStyles.studyRoom} onClick={() => onClick('442B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M514.19 121.048h21.87v17.77l-25.211.076v-5.62h3.341z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="442A" {...roomStyles.studyRoom} onClick={() => onClick('442A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M498.774 121.048h14.505v11.316h-14.505z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="441B" {...roomStyles.studyRoom} onClick={() => onClick('441B', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M513.962 61.815h22.023v27.11l-9.244-.027-.02-1.87h-12.759z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="441A" {...roomStyles.studyRoom} onClick={() => onClick('441A', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M499.002 62.119h14.049v10.708h-14.049z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="438" {...roomStyles.studyRoom} onClick={() => onClick('438', roomStyles.studyRoom.fill, roomDescriptions.studyRoom)}
        d="M471.056 33.414h25.668v25.743h-25.668z"
        description="Desk space: 1 person\n Windows: none \nWhite Board: none"
      />
      <path
        id="437C" {...roomStyles.studyRoom} onClick={() => onClick('437C', roomStyles.studyRoom.fill, roomDescriptions.studyRoomv2)}
        d="M450.02 33.338h17.087v19.44h-17.086z"
      />
      <path
        id="437B" {...roomStyles.studyRoom} onClick={() => onClick('437B', roomStyles.studyRoom.fill, roomDescriptions.studyRoomv2)}
        d="M429.745 33.414h19.06v19.44h-19.06Z"
      />
      <path
        id="437A" {...roomStyles.studyRoom} onClick={() => onClick('437A', roomStyles.studyRoom.fill, roomDescriptions.studyRoomv3)}
        d="M411.899 33.338h16.175v19.516H411.9z"
      />
      <path
        id="435D" {...roomStyles.studyRoom} onClick={() => onClick('435D', roomStyles.studyRoom.fill, roomDescriptions.studyRoomv2)}
        d="M322.897 33.338h25.364v12.985h-25.364z"
      />
    </svg >
  );
}

export default MapDiagram4
