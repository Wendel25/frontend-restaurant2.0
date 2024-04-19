import Cookies from 'js-cookie';

import Iconify from 'src/components/iconify';

// ----------------------------------------------------------------------

function handleClickLogOut() {
  Cookies.remove('userId');
  Cookies.remove('userName');
  Cookies.remove('userToken');
}

const navConfig = [
  {
    title: 'home',
    path: '/',
    icon: <Iconify icon="material-symbols:home" />,
  },
  {
    title: 'produtos',
    path: '/products',
    icon: <Iconify icon="mdi:cart" />,
  },
  {
    title: 'contabilidade',
    path: '/accounting',
    icon: <Iconify icon="streamline:payment-10-solid" />,
  },
  {
    title: 'sair',
    path: '/login',
    icon: <Iconify icon="clarity:logout-solid" />,
    onClick: handleClickLogOut
  }
];

export default navConfig;
