import React, {useEffect, useState} from "react";

const Scroll = ({imgRef}) => {
    const [wHeight, setWHeight] = useState(0);
    const [clientHeight, setClientHeight] = useState(0);


    let scrollElTop = imgRef.current.offsetTop;

    useEffect(function onFirstMount() {
        function onScroll() {
            window.addEventListener('scroll', event => {
                let offset = imgRef.current.offsetTop
                let clientHeight = imgRef.current.clientHeight

                let activeWindow = offset - window.scrollY
                let scale = 1 - (((activeWindow / clientHeight) * 100) / 100)

                if (window.scrollY >= scrollElTop - wHeight - 200) {
                    imgRef.current.style.transform = `scale(${scale})`;
                }

                if (scale <= 0.5) {
                    imgRef.current.style.transform = 'scale(0.5)';
                    setClientHeight(clientHeight >= imgRef.current.clientHeight)
                }
                if (scale >= 1) {
                    imgRef.current.style.transform = 'scale(1)';
                    setClientHeight(clientHeight >= imgRef.current.clientHeight)
                }
            });
        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
        }
    }, [clientHeight]);

    return null;
}
export default Scroll;
