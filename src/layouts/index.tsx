import { PageHeader } from 'antd';
import React, { FC } from 'react';
import Navigator from './Navigator'

interface Props {
  children: React.ReactNode
  title: string
  subTitle: string
}
const Layout: FC<Props> = ({ children, title, subTitle }) => {
   return (
    <>
      <Navigator/>
      <PageHeader className="jumbotron" title={title} subTitle={subTitle}/>
      <div style={{width: '80%', margin: '0 auto'}}>
        { children }
      </div>
    </>
  );
}

export default Layout;
