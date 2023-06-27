import React from 'react';

import { Header, Title } from '@/app/components';

export default function Page() {
  return (
    <div>
      <section>
        <Header>The Best Avocado Shop</Header>
      </section>
      <section>
        <Title bold>Avocado everyday.</Title>
        <Title bold>Keep doctor awy</Title>
      </section>
      <section>
        <Header>Recipe</Header>
      </section>
      <section>
        <Header>Start Your Plan.</Header>
      </section>
      <section>
        <Header>Connect with us</Header>
      </section>
    </div>
  );
}
