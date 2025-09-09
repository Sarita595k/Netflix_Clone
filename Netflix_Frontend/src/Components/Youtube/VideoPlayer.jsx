import styled from "styled-components";

const VideoWrapper = styled.div`
  position: relative;
  width: 80%;
  height: 100vh;
  overflow: hidden;
`;

const Iframe = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const VideoPlayer = (props) => {
    return (
        <VideoWrapper>
            <Iframe
                width="100%"
                height="100vh"
                src={`https://www.youtube.com/embed/${props.keyValue}?autoplay=1&mute=1&modestbranding=1&rel=0&showinfo=0&controls=1&showinfo=0`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></Iframe>
        </VideoWrapper>
    )
}