import React, { useEffect, useState} from 'react'

const ProgressiveImage = (props) => {
    const { src , placeholderImg , height , width } = props;
    const [ imgSrc , setSrc] = useState(placeholderImg || src);

    const customClass = placeholderImg && imgSrc == placeholderImg ?'loading':'loaded';
    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setSrc(src);
        }
    }, [src])
  return (
    <img
    src={imgSrc}
    className={customClass}
    height={height}
    width={width}
    onError={({ currentTarget }) => {
      currentTarget.onerror = null;
      currentTarget.src = placeholderImg;
    }}
    />
  )
}

export default ProgressiveImage