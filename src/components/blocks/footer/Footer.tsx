import { FC } from "react";
import './footer.scss';

export const Footer: FC = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        © 2024 Orange4Broom
      </p>
      <a href="" className="footer__link" >
        Orange4Broom
      </a>
    </footer>
  )
};
