import { supabase } from '@/lib/supabaseClient';

export async function generateStaticParams() {
  const { data: techniques } = await supabase
    .from('personalization_techniques')
    .select('slug')
    .order('name');

  return (techniques || []).map((t) => ({ slug: t.slug }));
}

export default async function ServicioPage({ params }) {
  const { slug } = params;

  const { data: technique } = await supabase
    .from('personalization_techniques')
    .select('*')
    .eq('slug', slug)
    .single();

  return (
    <main className="page">
      <h1>{technique?.name || 'Servicio de personalización'}</h1>
      <p>{technique?.description || 'Descripción pendiente para este servicio.'}</p>
    </main>
  );
}
