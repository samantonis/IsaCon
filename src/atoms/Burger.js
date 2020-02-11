import React from 'react';
import styled from 'styled-components';

const Burger = ({ className, onClick }) => (
  <div className={className}>
    <button onClick={onClick} className="nav">
      <span />
      <span />
      <span />
    </button>
  </div>
);

export default styled(Burger)`
  text-align: center;
  flex-basis: 100%;
  .nav {
    width: 30px;
    height: 20px;
    padding: 0px;
    background-color: transparent;
    border-style: none;
    outline: none;
    cursor: pointer;
  }
  .nav span {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.black};
    display: block;
    border-radius: 2px;
    transition: all 0.5s ease;
    margin-bottom: 5px;
    &:nth-child(1) {
      animation: span1_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }
    &:nth-child(2) {
      animation: span2_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }
    &:nth-child(3) {
      animation: span3_close 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    }
    ${({ open }) =>
      open &&
      `
      height: 5px;
  &:nth-child(2) {
    animation: span2 1.5s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
  }
  &:nth-child(3) {
    animation: span3 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 0.7s;
  }
  &:nth-child(1) {
    animation: span1 0.8s forwards cubic-bezier(0.8, 0.5, 0.2, 1.4);
    animation-delay: 1.1s;
  }
    `};
  }
  @keyframes span2 {
    0% {
      transform: translate(0, 0) scale(1);
    }
    20% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    40% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 0) scale(1);
    }
    50% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 18px) scale(1);
    }
    80% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, -16px) scale(1);
    }
    100% {
      width: 5px;
      border-radius: 50%;
      transform: translate(0, 100px) scale(0);
    }
  }
  @keyframes span3 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(80deg) translate(-5px, -5px);
    }
    100% {
      transform: rotate(45deg) translate(-5px, -5px);
    }
  }
  @keyframes span1 {
    0% {
      transform: translate(0, 0);
    }
    60% {
      transform: rotate(-110deg) translate(-5px, -5px);
    }
    100% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
  }
  @keyframes span1_close {
    0% {
      transform: rotate(-45deg) translate(-10px, 10px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
  @keyframes span2_close {
    0% {
      transform: translate(0, 20px) scale(0);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }
  @keyframes span3_close {
    0% {
      transform: rotate(45deg) translate(-5px, -5px);
    }
    100% {
      transform: rotate(0deg) translate(0, 0);
    }
  }
`;
