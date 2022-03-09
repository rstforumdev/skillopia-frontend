import React, { useState } from 'react';
import { Menu, Text, Button } from '@mantine/core';
import { ChevronDownIcon } from '@radix-ui/react-icons';

export const CategoriesMenu: React.FC = () => {
  const [categoriesOpened, setCategoriesOpened] = useState(false);

  return (
    <Menu
      control={
        <Button variant="light">
          Categories <ChevronDownIcon style={{ marginLeft: '0.2rem' }} />
        </Button>
      }
      opened={categoriesOpened}
      onOpen={() => setCategoriesOpened(true)}
      onClose={() => setCategoriesOpened(false)}>
      <Menu.Item>IT &amp; Networking</Menu.Item>
      <Menu.Item>Software Development</Menu.Item>
      <Menu.Item>Banking &amp; Finance</Menu.Item>
      <Menu.Item>Human Resources</Menu.Item>
      <Menu.Item>Project Management</Menu.Item>
      <Menu.Item>Sales</Menu.Item>
      <Menu.Item>Marketing</Menu.Item>
      <Menu.Item>Accounting</Menu.Item>
    </Menu>
  );
};
