import { getDocs } from '@/lib/docs';
import dynamic from 'next/dynamic';


const DocsBrowser = dynamic(() => import('@/components/docs/docs-browser.client'));

export default async function DocsIndexPage() {
  const docs = await getDocs();
  return <DocsBrowser docs={docs} />;
}
