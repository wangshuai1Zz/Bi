import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = 'WangDog 智能Bi 2024 Created by WangShuai1Zz';
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${defaultMessage}`}
      links={[
        {
          key: 'WangDog 智能Bi',
          title: 'WangDog 智能Bi',
          blankTarget: true,
          href: ''
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/wangshuai1Zz/Bi',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
