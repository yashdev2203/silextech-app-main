import packageInfo from '../package.json';
import env from './env';
import Logo from '../public/logo.png';

const app = {
  version: packageInfo.version,
  name: 'SilexTech',
  logoUrl: { Logo },
  url: env.appUrl,
};

export default app;
