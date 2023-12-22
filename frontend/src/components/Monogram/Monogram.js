import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="100"
      height="50"
      viewBox="0 0 200 100"
      ref={ref}
      {...props}
    >
      <defs>
        <clipPath id={clipId}>
          <path d="M 70.606 59.766 L 80.567 49.658 Q 81.934 53.028 84.327 55.884 A 28.77 28.77 0 0 0 89.22 60.532 A 26.804 26.804 0 0 0 89.576 60.791 A 26.438 26.438 0 0 0 94.647 63.667 A 24.275 24.275 0 0 0 95.508 64.014 Q 98.584 65.186 101.319 65.186 A 39.8 39.8 0 0 0 105.38 64.986 A 33.469 33.469 0 0 0 107.373 64.722 A 19.559 19.559 0 0 0 109.945 64.129 A 14.508 14.508 0 0 0 112.305 63.184 A 9.156 9.156 0 0 0 114.48 61.659 A 8.024 8.024 0 0 0 115.601 60.327 A 6.806 6.806 0 0 0 116.584 57.965 Q 116.784 57.053 116.796 56.001 A 11.9 11.9 0 0 0 116.797 55.86 A 7.576 7.576 0 0 0 116.608 54.128 A 5.766 5.766 0 0 0 115.87 52.344 Q 114.942 50.879 113.453 49.829 A 14.739 14.739 0 0 0 111.209 48.536 A 17.585 17.585 0 0 0 110.059 48.047 Q 108.155 47.315 106.177 46.802 Q 104.2 46.289 102.295 45.874 Q 100.391 45.459 98.926 45.02 A 399.271 399.271 0 0 1 94.468 43.706 A 453.594 453.594 0 0 1 92.92 43.237 Q 89.795 42.285 86.768 41.065 Q 83.741 39.844 81.031 38.257 Q 78.321 36.67 76.27 34.497 Q 74.219 32.324 72.998 29.468 A 14.882 14.882 0 0 1 71.979 25.775 A 19.703 19.703 0 0 1 71.778 22.901 A 30.727 30.727 0 0 1 72.019 18.955 A 22.423 22.423 0 0 1 72.876 15.015 A 20.062 20.062 0 0 1 74.59 11.087 A 17.08 17.08 0 0 1 75.977 9.033 A 18.82 18.82 0 0 1 80.713 4.761 A 25.839 25.839 0 0 1 86.312 2.112 A 28.732 28.732 0 0 1 86.719 1.978 A 37.586 37.586 0 0 1 92.309 0.659 A 42.519 42.519 0 0 1 93.677 0.464 Q 97.364 0 101.221 0 A 49.351 49.351 0 0 1 106.555 0.276 A 37.954 37.954 0 0 1 110.816 0.977 Q 115.137 1.953 118.799 3.76 Q 122.461 5.567 125.513 8.081 Q 128.565 10.596 131.25 13.672 L 121.289 23.779 A 22.972 22.972 0 0 0 118.171 17.609 A 21.767 21.767 0 0 0 118.042 17.432 A 25.94 25.94 0 0 0 114.517 13.498 A 23.329 23.329 0 0 0 113.428 12.573 A 21.378 21.378 0 0 0 109.482 10.056 A 19.119 19.119 0 0 0 108.106 9.448 A 16.276 16.276 0 0 0 105.204 8.591 A 13.062 13.062 0 0 0 102.735 8.35 A 42.751 42.751 0 0 0 99.114 8.497 A 33.586 33.586 0 0 0 96.534 8.814 A 19.71 19.71 0 0 0 94.132 9.354 Q 92.783 9.753 91.675 10.327 A 8.379 8.379 0 0 0 89.518 11.902 A 7.547 7.547 0 0 0 88.526 13.159 Q 87.433 14.893 87.404 17.435 A 12.219 12.219 0 0 0 87.403 17.578 A 8.89 8.89 0 0 0 87.54 19.179 Q 87.721 20.17 88.143 20.978 A 5.519 5.519 0 0 0 88.233 21.143 A 7.914 7.914 0 0 0 90.454 23.633 Q 91.846 24.658 93.604 25.318 A 36.45 36.45 0 0 0 97.242 26.465 A 67.142 67.142 0 0 0 100.953 27.319 A 46.068 46.068 0 0 1 102.704 27.704 A 35.729 35.729 0 0 1 104.297 28.125 A 1418.151 1418.151 0 0 1 107.3 28.98 A 1638.942 1638.942 0 0 1 110.45 29.883 A 67.853 67.853 0 0 1 116.797 32.056 A 47.819 47.819 0 0 1 122.754 34.912 A 22.049 22.049 0 0 1 127.701 38.711 A 20.805 20.805 0 0 1 127.735 38.745 Q 129.883 40.967 131.153 43.872 A 14.933 14.933 0 0 1 132.229 47.73 A 19.589 19.589 0 0 1 132.422 50.537 Q 132.422 55.002 131.313 58.429 A 18.783 18.783 0 0 1 131.275 58.545 A 19.859 19.859 0 0 1 129.478 62.516 A 17.009 17.009 0 0 1 128.052 64.551 A 18.898 18.898 0 0 1 123.145 68.799 A 27.421 27.421 0 0 1 117.177 71.469 A 30.33 30.33 0 0 1 116.968 71.533 Q 113.623 72.559 109.888 72.998 A 64.933 64.933 0 0 1 102.295 73.438 A 59.852 59.852 0 0 1 96.83 73.198 A 47.641 47.641 0 0 1 92.92 72.681 Q 88.623 71.924 84.839 70.288 Q 81.055 68.653 77.564 66.065 A 47.197 47.197 0 0 1 73.427 62.596 A 59.702 59.702 0 0 1 70.606 59.766 Z M 181.446 84.033 L 175.245 80.664 A 43.26 43.26 0 0 0 176.681 77.732 A 54.741 54.741 0 0 0 177.735 75.195 A 68.528 68.528 0 0 0 179.369 70.448 A 77.566 77.566 0 0 0 179.859 68.775 Q 180.811 65.381 181.568 61.768 A 115.981 115.981 0 0 0 182.837 54.614 Q 183.35 51.074 183.619 47.73 A 86.282 86.282 0 0 0 183.836 44.114 A 68.597 68.597 0 0 0 183.887 41.504 A 56.376 56.376 0 0 0 183.83 39.019 A 68.872 68.872 0 0 0 183.741 37.427 A 30.675 30.675 0 0 0 183.13 33.081 A 26.926 26.926 0 0 0 181.885 28.906 A 12.517 12.517 0 0 0 180.425 26.178 A 11.337 11.337 0 0 0 179.81 25.391 Q 178.516 23.877 176.685 22.949 A 8.382 8.382 0 0 0 174.313 22.181 A 11.416 11.416 0 0 0 172.364 22.022 A 9.254 9.254 0 0 0 169.804 22.364 A 7.932 7.932 0 0 0 168.018 23.12 Q 166.114 24.219 164.649 26.001 Q 163.184 27.783 162.134 30.078 Q 161.084 32.373 160.425 34.79 Q 159.766 37.207 159.473 39.551 Q 159.211 41.647 159.183 43.353 A 24.497 24.497 0 0 0 159.18 43.75 L 159.18 72.022 L 142.627 72.022 L 142.627 15.625 L 148.975 15.625 L 156.543 28.76 A 26.77 26.77 0 0 1 159.961 22.803 A 22.931 22.931 0 0 1 164.6 18.213 A 20.116 20.116 0 0 1 170.337 15.283 A 21.101 21.101 0 0 1 175.46 14.314 A 24.939 24.939 0 0 1 177.149 14.258 A 30.568 30.568 0 0 1 181.986 14.622 Q 184.818 15.076 187.201 16.096 A 19.213 19.213 0 0 1 187.354 16.162 A 20.113 20.113 0 0 1 193.15 19.951 A 18.868 18.868 0 0 1 194.58 21.46 A 21.678 21.678 0 0 1 198.295 27.813 A 25.677 25.677 0 0 1 198.877 29.517 A 32.913 32.913 0 0 1 200.155 36.332 A 40.066 40.066 0 0 1 200.293 39.697 A 51.988 51.988 0 0 1 199.574 48.162 A 61.369 61.369 0 0 1 198.902 51.611 A 72.803 72.803 0 0 1 195.02 63.77 Q 192.53 69.727 189.063 74.976 A 51.317 51.317 0 0 1 184.218 81.245 A 43.631 43.631 0 0 1 181.446 84.033 Z M 59.961 15.625 L 59.961 72.022 L 43.457 72.022 L 43.457 65.283 A 19.328 19.328 0 0 1 39.357 69.456 A 17.241 17.241 0 0 1 36.402 71.216 A 20.756 20.756 0 0 1 28.602 73.113 A 24.459 24.459 0 0 1 27.344 73.145 A 30.981 30.981 0 0 1 20.927 72.506 A 24.827 24.827 0 0 1 15.821 70.85 A 25.09 25.09 0 0 1 7.227 64.575 A 27.221 27.221 0 0 1 2.218 56.22 A 31.324 31.324 0 0 1 1.856 55.225 A 34.364 34.364 0 0 1 0.046 45.605 A 39.636 39.636 0 0 1 0 43.701 Q 0 37.549 1.856 32.178 A 28.127 28.127 0 0 1 5.768 24.635 A 26.041 26.041 0 0 1 7.227 22.827 A 25.09 25.09 0 0 1 15.821 16.553 A 25.67 25.67 0 0 1 23.075 14.529 A 32.608 32.608 0 0 1 27.344 14.258 A 19.706 19.706 0 0 1 33.57 15.235 A 19.801 19.801 0 0 1 38.99 17.993 A 20.135 20.135 0 0 1 43.335 22.29 A 20.632 20.632 0 0 1 46.289 27.881 L 53.614 15.625 L 59.961 15.625 Z M 43.36 43.701 A 49.251 49.251 0 0 0 43.256 40.565 A 58.011 58.011 0 0 0 43.14 39.063 A 37.317 37.317 0 0 0 42.383 34.229 Q 41.846 31.836 40.894 29.663 A 14.693 14.693 0 0 0 38.545 25.912 A 13.937 13.937 0 0 0 38.453 25.806 Q 36.963 24.121 34.864 23.145 A 10.252 10.252 0 0 0 32.129 22.329 A 13.735 13.735 0 0 0 29.981 22.168 A 13.033 13.033 0 0 0 27.609 22.374 A 9.543 9.543 0 0 0 25.147 23.169 Q 23.096 24.17 21.631 25.855 A 14.704 14.704 0 0 0 19.429 29.262 A 16.708 16.708 0 0 0 19.214 29.736 Q 18.262 31.934 17.725 34.326 A 37.391 37.391 0 0 0 16.968 39.136 A 54.132 54.132 0 0 0 16.779 42.052 A 45.06 45.06 0 0 0 16.748 43.701 A 47.674 47.674 0 0 0 16.834 46.501 A 58.063 58.063 0 0 0 16.968 48.291 A 37.317 37.317 0 0 0 17.725 53.125 Q 18.262 55.518 19.214 57.715 A 15.178 15.178 0 0 0 21.1 60.947 A 13.89 13.89 0 0 0 21.631 61.597 A 10.998 10.998 0 0 0 25.147 64.282 A 9.582 9.582 0 0 0 27.686 65.092 A 13.107 13.107 0 0 0 29.981 65.283 A 10.485 10.485 0 0 0 32.52 64.987 A 8.66 8.66 0 0 0 34.497 64.234 A 11.711 11.711 0 0 0 37.964 61.426 A 16.971 16.971 0 0 0 40.215 57.976 A 19.154 19.154 0 0 0 40.479 57.422 A 29.147 29.147 0 0 0 42.139 52.783 A 35.595 35.595 0 0 0 43.067 48.023 A 41.141 41.141 0 0 0 43.287 45.758 A 30.463 30.463 0 0 0 43.36 43.701 Z" vectorEffect="non-scaling-stroke"/>
        </clipPath>
      </defs>
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}
    </svg>
  );
});