import { supabase } from '@/lib/supabaseClient';

export async function generateStaticParams() {
  if (!supabase) return [];

  const { data: categories } = await supabase
    .from('categories')
    .select('slug')
    .order('name');

  return (categories || []).map((c) => ({ slug: c.slug }));
}

export default async function CatalogoCategoriaPage({ params }) {
  const { slug } = params;

  let category = null;

  if (supabase) {
    const { data } = await supabase
      .from('categories')
      .select('*')
      .eq('slug', slug)
      .single();
    category = data;
  }

  return (
    <main className="page">
      <h1>Catálogo: {category?.name || 'Categoría'}</h1>
      <p>Aquí se mostrará el catálogo filtrado por la categoría seleccionada.</p>
    </main>
  );
}
