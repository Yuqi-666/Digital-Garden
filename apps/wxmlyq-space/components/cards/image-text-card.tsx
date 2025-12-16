import React from 'react';
import styled from 'styled-components';

interface ImageCardProps {
  imageSrc: string;
  title?: string;
  description?: string;
  angle?: number;
}

const ImageCard: React.FC<ImageCardProps> = ({
  imageSrc,
  title,
  description,
  angle = 0
}) => {
  return (
    <StyledWrapper>
      <div className="card" style={{ transform: `rotate(${angle}deg)` }}>
        <img src={imageSrc} alt={title} className="card__image" />
        {(title || description) && (
          <div className="card__content">
            {title && <p className="card__title">{title}</p>}
            {description && <p className="card__description">{description}</p>}
          </div>
        )}
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #f2f2f2;
    border-radius: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    margin: 1rem;
  }

  .card__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  .card:hover {
    transform: scale(1.05) rotate(0deg);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  .card__content {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    color: white;
    transform: translateY(100%);
    transition: transform 0.4s ease;
  }

  .card:hover .card__content {
    transform: translateY(0);
  }

  .card__title {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 4px;
  }

  .card__description {
    margin: 0;
    font-size: 12px;
    opacity: 0.9;
    line-height: 1.4;
  }
`;

export default ImageCard;
