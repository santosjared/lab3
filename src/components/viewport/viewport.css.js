import { useEffect, useState } from "react";
import {useStyles}from '../palette/Palette.css';

const ViewPort = () => {
    const css=useStyles();
    const [size, setSize] = useState({
        width: window.screen.width, height:
            window.screen.height
    });
    useEffect(() => {
        const updateWindow = () => {
            let { innerWidth, innerHeight } = window;
            setSize({ width: innerWidth, height: innerHeight });
        }
        window.addEventListener('resize', updateWindow);
           return () => {
            window.removeEventListener('resize', updateWindow);
        }
    });
    return (
        <div>
            <div className={css.first}>
                <h1 className={css.item}>
                    Your ViewPort size is:
                </h1><br />
                
                    <h1 className={css.item}>
                        {size.width} px x {size.height} px
                    </h1>
            </div>
            <hr />
        </div>
    );
}
export default ViewPort;