import React from 'react';

export const metadata = {
    title: "Dashabor | Next Hero",
    description: "Next Hero",
  };
  

const DashboarLayout = ({children}) => {
    return (
        <div>
            <div>sidebar</div>
            {children}
        </div>
    );
};

export default DashboarLayout;