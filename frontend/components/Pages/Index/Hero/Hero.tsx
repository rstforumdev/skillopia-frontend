import { Grid, Title, Container } from '@mantine/core';

export const Hero: React.FC = () => {
  return (
    <>
      <Container size="xl">
        <Grid>
          <Grid.Col span={5}>
            <Title order={1}>
              Get the skills you need for a $100k+ tech career in just 3 months.
            </Title>
          </Grid.Col>
          <Grid.Col span={7}>VIDEO</Grid.Col>
        </Grid>
      </Container>
    </>
  );
};
