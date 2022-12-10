import React from 'react';

function Logo() {
  return (
    <div>
        <img src={"$process.env.PUBLIC_URL}/logo192.png"}
            width="150"
            height="150"
            alt="React Logo"
        />
    </div>
  );
};

export default Logo;