import React, { useState } from 'react';
import Calendar from 'react-calendar';
import  'react-calendar/dist/Calendar.css' ;

function MyApp() {
    const [value, onChange] = useState(new Date());
    const Style = {
        marginTop: "10%",
        marginLeft: "60%",
        marginRight: 0,
        boxShadow: "2px 2px 12px black",
        width: "350px"

    }
    return (
        <div style={Style}>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
  );
}
export default MyApp;