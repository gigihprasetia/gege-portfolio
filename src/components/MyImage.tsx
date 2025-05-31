import React from "react";

const MyImage = () => {
  return (
    <div className="relative flex justify-center items-center ">
      <img
        alt="gege"
        style={{ objectFit: "cover" }}
        className="h-72 w-72 relative z-20 shadow-md rounded-full grayscale-75 hover:grayscale-25 duration-700"
        src={"/gg.webp"}
      />
      <svg
        className="w-72 h-72 absolute z-50 animate-spinright "
        viewBox="-110 -40 420 420"
      >
        <defs>
          <path id="circle" d="M 100,10 A 160,160 0 1,1 99.9,10" fill="none" />
        </defs>

        <text fill="currentColor" fontSize="58" textAnchor="middle">
          <textPath
            href="#circle"
            startOffset="20%"
            className="font-medium text-black"
          >
            FRONT END FRONT END FRONT END FRONT END FRONT END FRONT END FRONT
            END FRONT END FRONT END FRONT END
          </textPath>
        </text>
      </svg>
      <svg
        className="w-96 h-96 absolute z-40 animate-spinleft "
        viewBox="-110 -40 420 420"
      >
        <defs>
          <path id="circle" d="M 100,10 A 160,160 0 1,1 99.9,10" fill="none" />
        </defs>

        <text fill="currentColor" fontSize="58" textAnchor="middle">
          <textPath href="#circle" startOffset="20%" className="font-medium">
            FRONT END FRONT END FRONT END FRONT END FRONT END FRONT END FRONT
            END FRONT END FRONT END FRONT END
          </textPath>
        </text>
        <text fill="currentColor" fontSize="58" textAnchor="middle">
          <textPath
            href="#circle"
            startOffset="20%"
            className="font-medium blur-[4px] animate-pulse"
          >
            FRONT END FRONT END FRONT END FRONT END FRONT END FRONT END FRONT
            END FRONT END FRONT END FRONT END
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default MyImage;
