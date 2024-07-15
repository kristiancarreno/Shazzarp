import React from 'react'

type Props = {
  width?: number
  height?: number
}

const AppIco = ({ width = 32, height = 32 }: Props) => (
  <svg width={`${width}`} height={`${height}`} viewBox='0 0 128 113' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M0 112.232L11.8857 76.4246C9.95556 72.7726 8.50794 69.0315 7.54286 65.2014C6.57778 61.3712 6.09524 57.452 6.09524 53.4438C6.09524 46.0507 7.69524 39.103 10.8952 32.6007C14.0952 26.0984 18.4381 20.4422 23.9238 15.6323C29.4095 10.8224 35.8603 7.01449 43.2762 4.2087C50.6921 1.4029 58.6159 0 67.0476 0C75.4794 0 83.4032 1.4029 90.8191 4.2087C98.2349 7.01449 104.686 10.8224 110.171 15.6323C115.657 20.4422 120 26.0984 123.2 32.6007C126.4 39.103 128 46.0507 128 53.4438C128 60.8368 126.4 67.7845 123.2 74.2868C120 80.7892 115.657 86.4453 110.171 91.2552C104.686 96.0652 98.2349 99.873 90.8191 102.679C83.4032 105.485 75.4794 106.888 67.0476 106.888C62.4762 106.888 58.0063 106.464 53.6381 105.618C49.2698 104.772 45.0032 103.503 40.8381 101.81L0 112.232ZM17.981 96.466L37.4857 91.3888C38.9079 91.0325 40.3556 90.8989 41.8286 90.988C43.3016 91.0771 44.6984 91.3888 46.0191 91.9233C49.2698 93.3484 52.673 94.4173 56.2286 95.1299C59.7841 95.8425 63.3905 96.1988 67.0476 96.1988C80.6603 96.1988 92.1905 92.0569 101.638 83.7731C111.086 75.4893 115.81 65.3795 115.81 53.4438C115.81 41.508 111.086 31.3982 101.638 23.1144C92.1905 14.8306 80.6603 10.6888 67.0476 10.6888C53.4349 10.6888 41.9048 14.8306 32.4571 23.1144C23.0095 31.3982 18.2857 41.508 18.2857 53.4438C18.2857 56.6504 18.6921 59.8125 19.5048 62.93C20.3175 66.0476 21.5365 69.0315 23.1619 71.8819C23.873 73.0398 24.254 74.2646 24.3048 75.5561C24.3556 76.8477 24.1778 78.117 23.7714 79.364L17.981 96.466Z'
      fill='#358841'
    />
    <path
      d='M66.7417 85C68.875 85 70.6782 84.3542 72.1512 83.0627C73.6242 81.7711 74.3607 80.1901 74.3607 78.3195C74.3607 76.449 73.6242 74.868 72.1512 73.5764C70.6782 72.2848 68.875 71.6391 66.7417 71.6391C64.6083 71.6391 62.8052 72.2848 61.3321 73.5764C59.8591 74.868 59.1226 76.449 59.1226 78.3195C59.1226 80.1901 59.8591 81.7711 61.3321 83.0627C62.8052 84.3542 64.6083 85 66.7417 85ZM61.256 64.4241L69 53.99C69 51.0506 77.2381 66.1165 78 64.4241C78.7619 62.7318 73.4444 50.4294 77 47.49C79.6413 45.1741 89.9762 46.0083 91.5 43.9151C93.0238 41.8219 81 40.3745 81 37.4351C81 32.447 86.602 27.548 82.4369 24.8758C78.2718 22.2036 73.3448 20.8675 67.656 20.8675C61.8655 20.8675 75.7575 23.8178 72.1512 26.49C68.5448 29.1622 40.4222 28.3496 39 32.0907L56.075 37.9695C56.075 37.9695 57.7258 34.6293 59.5036 32.7587C61.2813 30.8882 63.9988 29.9529 67.656 29.9529C70.9067 29.9529 73.3448 30.7323 74.9702 32.2911C76.5956 33.8499 62.7798 42.0446 62.7798 43.9151C62.7798 45.6966 76.7988 40.8866 75.5798 42.4454C74.3607 44.0042 72.8369 45.4516 71.0083 46.7877C66.5385 50.2616 47.0337 60.6386 46.0179 62.42C45.002 64.2015 61.256 59.7033 61.256 64.4241Z'
      fill='#358841'
    />
  </svg>
)

export default AppIco
