import React from 'react';
import Link from 'next/link';
import {
  Burger,
  MediaQuery,
  Text,
  Autocomplete,
  Button,
  Image,
} from '@mantine/core';
import { CategoriesMenu } from './CategoriesMenu';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

interface LayoutData {
  opened: boolean;
  clickHandler: () => void;
}

export const Navigation: React.FC<LayoutData> = ({ opened, clickHandler }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        gap: '50px',
      }}>
      <div style={{ display: 'flex', gap: '50px', alignItems: 'center' }}>
        <Link href="/">
          <div>
            <Image fit="contain" width={160} src="/logo-exp.svg" />
          </div>
        </Link>

        <CategoriesMenu />
      </div>

      <div
        style={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          width: '50%',
        }}>
        <Autocomplete
          icon={<MagnifyingGlassIcon />}
          style={{ padding: '0 20px', flexGrow: 1 }}
          placeholder="Search Courses"
          data={[]}
        />

        <div style={{ display: 'flex', gap: '10px' }}>
          <Button variant="default">Login</Button>
          <Button color="red.9">Enroll Now</Button>
        </div>
      </div>

      <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
        <Burger opened={opened} onClick={clickHandler} size="sm" mr="xl" />
      </MediaQuery>
    </div>
  );
};
