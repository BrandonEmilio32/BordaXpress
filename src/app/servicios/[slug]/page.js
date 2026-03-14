import { supabase } from '@/lib/supabaseClient';

export async function generateStaticParams() {
  if (!supabase) return [];

  const { data: techniques } = await supabase
    .from('personalization_techniques')
    .select('slug')
    .order('name');

  return (techniques || []).map((t) => ({ slug: t.slug }));
}

export default async function ServicioPage({ params }) {
  const { slug } = params;

  let technique = null;

  if (supabase) {
    const { data } = await supabase
      .from('personalization_techniques')
      .select('*')
      .eq('slug', slug)
      .single();
    technique = data;
  }

  return (
    <main className="page">
      <h1>{technique?.name || 'Servicio de personalización'}</h1>
      <p>{technique?.description || 'Descripción pendiente para este servicio.'}</p>
    </main>
  );
}
