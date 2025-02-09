import "./footer.css";

const Logo = ({ color }) => {
  return (
    <svg
      id="Layer_2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 125.97 32.96"
      fill={color}
    >
      <defs></defs>
      <g id="_여기에_작업하세요.">
        <path
          className="cls-1"
          d="m38.61.41l-.83-.41-.41.83-10.48,21.24,21.24,10.48.83.41.41-.83,10.48-21.24L38.61.41Zm19.48,11.08l-4.59,9.28-9.63-4.75-4.7-13.86,18.92,9.33ZM37.93,2.58l4.28,12.63-8.46-4.17,4.17-8.46Zm-9.32,18.9l4.57-9.28,9.62,4.75,4.7,13.86-18.89-9.34Zm15.84-3.71l8.46,4.17-4.17,8.46-4.28-12.63Z"
        />
        <path
          className="cls-2"
          d="m37.42.41l-.83-.41-.41.83-10.49,21.24,21.24,10.48.83.41.41-.83,10.48-21.24L37.42.41Zm19.48,11.08l-4.59,9.29-9.63-4.75-4.7-13.86,18.92,9.33ZM36.75,2.58l4.28,12.63-8.46-4.17,4.17-8.46Zm-9.32,18.9l4.57-9.28,9.62,4.75,4.7,13.86-18.89-9.34Zm15.84-3.71l8.46,4.17-4.17,8.46-4.28-12.63Z"
        />
        <path
          className="cls-2"
          d="m0,14.98h2.52v15.23H0v-15.23Zm9.53,0v1.88H3.37v-1.88h6.16Zm-.64,8.37H3.37v-1.69h5.52v1.69Zm-5.52,4.98h6.16v1.88H3.37v-1.88Z"
        />
        <path
          className="cls-2"
          d="m12.92,30.22v-15.23h2.52v15.23h-2.52Zm8.49-15.23h2.52v15.23h-2.52l-5.12-9.01v-4.75l5.12,9.03v-10.5Z"
        />
        <path
          className="cls-2"
          d="m60.35,14.98h2.52l4.09,9.4v3.82h-.66l-3.43-8.47v10.48h-2.52v-15.23Zm11.55,0h2.52v15.23h-2.52v-10.48l-3.41,8.47h-.68v-3.78l4.09-9.45Z"
        />
        <path
          className="cls-2"
          d="m78.29,14.98h2.52v15.23h-2.52v-15.23Zm9.53,0v1.88h-6.16v-1.88h6.16Zm-.64,8.37h-5.52v-1.69h5.52v1.69Zm-5.52,4.98h6.16v1.88h-6.16v-1.88Z"
        />
        <path
          className="cls-2"
          d="m91.29,14.98h2.48v15.23h-2.48v-15.23Zm4.59,0c1.28,0,2.41.2,3.38.61.97.41,1.78.95,2.42,1.62.64.68,1.12,1.44,1.44,2.3.32.86.48,1.75.48,2.66,0,1.25-.13,2.33-.4,3.21-.27.89-.61,1.63-1.02,2.23-.41.6-.88,1.07-1.4,1.42-.52.34-1.02.6-1.5.78-.48.17-.92.28-1.32.33-.4.05-.7.07-.89.07h-2.44v-1.82h1.61c1.68,0,2.89-.54,3.64-1.61.74-1.07,1.12-2.63,1.12-4.67,0-.63-.08-1.26-.23-1.88-.15-.62-.44-1.18-.88-1.68-.43-.5-1.02-.91-1.77-1.22-.74-.31-1.71-.46-2.89-.46h-.6v-1.88h1.26Z"
        />
        <path className="cls-2" d="m109.68,30.22h-2.52v-15.23h2.52v15.23Z" />
        <path
          className="cls-2"
          d="m125.97,30.22h-2.56l-3.95-11.41-3.99,11.41h-2.58l5.33-15.21h2.46l5.29,15.21Zm-5.15-4.84l.6,1.67h-3.95l.58-1.67h2.77Z"
        />
      </g>
    </svg>
  );
};

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo">
          <a href="#" onClick={(e) => e.preventDefault()}>
            <Logo color={"#f5f5f5"} />
          </a>
        </div>
        <div className="copyright">
            <p>Copyrights 2025. 테스트 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
