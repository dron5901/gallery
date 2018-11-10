import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const Image = styled.div`
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  position: absolute;
  transition: all 0.4s;
  opacity: ${props => (props.show ? 1 : 0)}
    ${props =>
      props.image &&
      css`
        background-image: url(${props.image});
      `};
`;

const NavBtn = styled.div`
  position: absolute;
  height: 100%;
  width: 50px;
  z-index: 1;
  color: white;
  justify-content: center;
  align-items: center;
  display: flex;
  opacity: 0;
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;
  &:hover {
    opacity: 0.4;
    background-color: #fff;
    color: #000;
  }
`;

const PrevBtn = styled(NavBtn)`
  left: 0;
`;
const NextBtn = styled(NavBtn)`
  right: 0;
`;

class Gallery extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentImageIndex: 0
    };

    this.nextImage = this.nextImage.bind(this);
    this.prevImage = this.prevImage.bind(this);
  }

  componentDidMount() {
    this.runTimer();
  }

  componentWillUnmount() {
    clearInterval(this.changeImageTimer);
  }

  runTimer() {
    if (this.changeImageTimer) clearInterval(this.changeImageTimer);

    this.changeImageTimer = setInterval(() => {
      this.nextImage();
    }, this.props.changeImageInterval || 3000);
  }

  nextImage() {
    this.setState(prevState => {
      if (prevState.currentImageIndex === this.props.images.length - 1) {
        return {
          currentImageIndex: 0
        };
      } else {
        return {
          currentImageIndex: prevState.currentImageIndex + 1
        };
      }
    });

    this.runTimer();
  }

  prevImage() {
    this.setState(prevState => {
      if (prevState.currentImageIndex === 0) {
        return {
          currentImageIndex: this.props.images.length - 1
        };
      } else {
        return {
          currentImageIndex: prevState.currentImageIndex - 1
        };
      }
    });

    this.runTimer();
  }

  render() {
    let { images } = this.props;
    let { currentImageIndex } = this.state;
    return (
      <div className="gallery-container">
        <PrevBtn onClick={this.prevImage}>&#60;</PrevBtn>
        {images.map((image, index) => {
          return (
            <Image
              key={index}
              image={image}
              show={index === currentImageIndex}
            />
          );
        })}
        <NextBtn onClick={this.nextImage}>&#62;</NextBtn>
      </div>
    );
  }
}

Gallery.propTypes = {
  images: PropTypes.array.isRequired
};

export default Gallery;
