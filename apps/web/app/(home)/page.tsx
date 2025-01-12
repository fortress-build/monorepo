import { createMetadata } from '@repo/seo/metadata';
import type { Metadata } from 'next';
import { AppTypes } from './components/appTypes';
import { Cases } from './components/cases';
import { CTA } from './components/cta';
import { Features } from './components/features';
import { Hero } from './components/hero';
import { Installation } from './components/installation';

const meta = {
  title: '',
  description: '',
};

export const metadata: Metadata = createMetadata(meta);

async function Home() {
  return (
    <div>
      <Hero />
      <Installation />
      <Cases />
      <AppTypes />
      <Features />
      <CTA />
    </div>
  );
}

export default Home;
