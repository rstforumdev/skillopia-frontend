import React, { useState } from 'react';
import { AppShell, Header } from '@mantine/core';
import { Navigation } from './Navigation';

export const Layout: React.FC = ({ children }) => {
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      fixed
      padding="md"
      header={
        <Header
          height={70}
          padding="md"
          fixed
          position={{ top: 0, left: 0 }}
          style={{ width: '100%' }}>
          <Navigation clickHandler={() => setOpened(!opened)} opened={opened} />
        </Header>
      }>
      {children}
      <div style={{ height: '2000px' }}></div>
    </AppShell>
  );
};
