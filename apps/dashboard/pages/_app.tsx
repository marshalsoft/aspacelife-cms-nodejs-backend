import '../styles/globals.scss';
import ContentLayout from '../shared/layout-components/layout/content-layout';
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import Landinglayout from '@/shared/layout-components/layout/landing-layout';
import ToastProvider from './components/baseToast';
import BaseToastProvider from './components/baseToast';

const layouts:any = {

  Contentlayout: ContentLayout,
  Landinglayout: Landinglayout,
  Authenticationlayout: Authenticationlayout,

};
function MyApp({ Component, pageProps }:any) {
  
  const Layout = layouts[Component.layout] || ((pageProps: any) => <Component>
    {pageProps}
    </Component>);

  return (
    <Layout>
  <BaseToastProvider >
 <Component {...pageProps} />
 </BaseToastProvider>
    </Layout>
    
  )
}

export default MyApp;