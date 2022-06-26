import React from "react";

interface StatIconProps {
    onClick: any;
    category: any;
    children: any;
}

const StatIcon: React.FC<StatIconProps> = ({onClick, category, children}) => {

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}
             onClick={onClick}>
            {children}
            <div style={{fontSize: 13}}>{category} 별 현황</div>
        </div>
    );
}


export default StatIcon;
